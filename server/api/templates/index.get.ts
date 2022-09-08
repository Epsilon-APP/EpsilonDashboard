import templates from "@/epsilon/templates"

export default defineEventHandler(async (event) => {
  const response = await templates().getTemplates()
  
  if (!response.error)
    return response

  event.res.end()
})
