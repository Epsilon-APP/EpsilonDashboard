import templates from "@/epsilon/templates"

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const response = await templates().updateTemplate(body)
  
  if (!response.error)
    return response

  event.res.end()
})
