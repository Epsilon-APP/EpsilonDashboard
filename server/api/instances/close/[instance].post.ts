import controller from "@/epsilon/controller"

export default defineEventHandler((event) => {
  return controller().closeInstance(event.context.params.instance)
})
