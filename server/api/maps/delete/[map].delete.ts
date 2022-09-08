import templates from "@/epsilon/templates"

export default defineEventHandler((event) => {
  return templates().deleteMap(event.context.params.map)
})
