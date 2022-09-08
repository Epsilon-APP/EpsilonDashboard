export default () => {
  const templates = `http://${useRuntimeConfig().epsilonTemplateHost}`

  function getTemplates(): any {
    return $fetch('/templates', { baseURL: templates })
  }

  function getParents(): any {
    return $fetch('/parents', { baseURL: templates })
  }

  function getMaps(): any {
    return $fetch('/maps', { baseURL: templates })
  }

  function createTemplate(template): any {
    return $fetch('/templates/create', { 
      baseURL: templates,
      method: 'POST',
      body: template
    })
  } 

  function deleteTemplate(template): any {
    return $fetch(`/templates/${template}/delete`, { 
      baseURL: templates,
      method: 'DELETE'
    })
  } 

  function updateTemplate(template): any {
    return $fetch(`/templates/${template.name}/update`, { 
      baseURL: templates,
      method: 'PUT',
      body: template
    })
  }

  function buildTemplate(template): any {
    return $fetch(`/templates/${template}/build`, { 
      baseURL: templates,
      method: 'POST'
    })
  }

  function deleteParent(parent): any {
    return $fetch(`/parents/${parent}/delete`, { 
      baseURL: templates,
      method: 'DELETE'
    })
  } 

  function deleteMap(map): any {
    return $fetch(`/maps/${map}/delete`, { 
      baseURL: templates,
      method: 'DELETE'
    })
  }

  return {
    getTemplates,
    getParents,
    getMaps,
    createTemplate,
    deleteTemplate,
    updateTemplate,
    buildTemplate,
    deleteParent,
    deleteMap
  }
}