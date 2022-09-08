<template>
  <div>
    <NavBar>
      <NavProfile name="Panel" rank="Administrateur"></NavProfile>
      <NavCategorie name="Infrastructure">
        <NavItem path="/instances" icon="Server">Gestion des serveurs</NavItem>
        <NavItem path="/templates" icon="File">Paramètre des templates</NavItem>
      </NavCategorie>
      <NavCategorie name="Architecture">
        <NavItem path="/maps" icon="Map">Liste des maps</NavItem>
      </NavCategorie>
      <NavCategorie name="Services externes">
        <NavItem path="explorer" icon="Folder" extern>Explorateur</NavItem>
        <NavItem path="monitoring" icon="Activity" extern>Monitoring</NavItem>
      </NavCategorie>
    </Navbar>

    <div class="z-10 absolute top-5 right-5">
      <Alert v-for="notification in notifications" :success="notification.success">
        {{ notification.message }}
      </Alert>
    </div>

    <div class="md:ml-64">
      <NavTopbar></NavTopbar>
      <Content>
        <NuxtPage/>
      </Content>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useEpsilonStore()

await update()

async function update() {
 const exec = async () => {
    await updateInstances()
    await updateTemplates()
    await updateParents()
    await updateMaps()
 }

 await exec()

 setInterval(exec, 3000)
}

async function updateInstances() {
  const instances = await $fetch("/api/instances")
  store.setInstances(instances)
}

async function updateTemplates() {
  const templates = await $fetch("/api/templates")
  store.setTemplates(templates)
}

async function updateParents() {
  const parents = await $fetch("/api/parents")
  store.setParents(parents)
}

async function updateMaps() {
  const maps = await $fetch("/api/maps")
  store.setMaps(maps)
}

const notifications = computed(() => {
  return store.notifications
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

html {
  font-family: 'Roboto', sans-serif;
  @apply bg-gray-100;
}

body {
  @apply bg-gray-100;
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

</style>
