import templates from "@/epsilon/templates"

export default defineEventHandler((event) => {
  return templates().deleteParent(event.context.params.parent)
})
