export default () => {
  const controller = `http://${useRuntimeConfig().epsilonControllerHost}`

  function getInstances(): any {
    return $fetch('/instance/get_all', { baseURL: controller, parseResponse: JSON.parse })
      .then(res => res['instances'])
      .catch(err => [])
  }
  
  function openInstance(template): any {
    return $fetch('/instance/create/' + template, { method: 'POST', baseURL: controller, body: {} })
  }

  function closeInstance(name): any {
    return $fetch('/instance/close/' + name, { method: 'POST', baseURL: controller })
  }

  return {
    getInstances,
    openInstance,
    closeInstance
  }
}