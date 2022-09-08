import templates from "@/epsilon/templates"

export default defineEventHandler(async (event) => {
  const response = await templates().buildTemplate(event.context.params.template)
  
  if (!response.error)
    return response

  event.res.end()
})
