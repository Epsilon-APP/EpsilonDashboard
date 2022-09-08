<template>
  <div class="navbar-scroll fixed hidden flex-grow w-64 h-screen bg-gray-800 md:flex flex-col z-10 float-left overflow-scroll overflow-x-hidden">
    <div class="flex items-center justify-center mt-10">
      <span class="font-bold text-gray-50 text-3xl tracking-widest">EPSILON</span>
    </div>
    <nav class="mt-8">
      <slot></slot>
    </nav>
  </div>
</template>

<style scoped>
.navbar-scroll {
  scrollbar-width: thin;
}
</style>