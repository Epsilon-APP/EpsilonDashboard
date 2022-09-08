import controller from "@/epsilon/controller"

export default defineEventHandler(async (event) => {
  const response = await controller().getInstances()
  
  if (!response.error)
    return response

  event.res.end()
})
