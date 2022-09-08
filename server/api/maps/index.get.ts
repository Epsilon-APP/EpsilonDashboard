import templates from "@/epsilon/templates"

export default defineEventHandler(async (event) => {
  const response = await templates().getMaps()
  
  if (!response.error)
    return response

  event.res.end()
})
