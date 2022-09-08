import templates from "@/epsilon/templates"

export default defineEventHandler((event) => {
  return templates().deleteTemplate(event.context.params.template)
})
