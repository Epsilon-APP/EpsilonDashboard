import controller from "@/epsilon/controller"

export default defineEventHandler((event) => {
  return controller().openInstance(event.context.params.template)
})
