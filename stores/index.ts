import { defineStore } from 'pinia'

export const useEpsilonStore = defineStore('epsilonStore', () => {
  const notifications = ref([])

  const instances = ref(["TEST", "OMG"])
  const templates = ref([])
  const parents = ref([])
  const maps = ref([])

  function pushNotification(success, notification) {
    const notificationsRef = notifications.value
    const index = notificationsRef.push({success: success, message: notification}) - 1

    setTimeout(() => notificationsRef.splice(index, 1), 5000)
  }

  function setInstances(items) {
    instances.value = items
  }

  function setTemplates(items) {
    templates.value = items
  }

  function setParents(items) {
    parents.value = items
  }

  function setMaps(items) {
    maps.value = items
  }

  return {
    notifications,

    instances,
    templates,
    parents,
    maps,

    pushNotification,

    setInstances,
    setTemplates,
    setParents,
    setMaps
  }
})
