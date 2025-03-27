<script lang="ts" setup>
import { fetchSwaggerTemplates } from '../api/swagger'

const { data: templates } = useQuery({
  queryKey: ['templates'],
  queryFn: fetchSwaggerTemplates,
  refetchOnWindowFocus: false
})

const options = computed(() => {
  return templates.value?.map(template => ({
    label: template.name,
    value: template.path
  }))
})

const [selectedTemplate] = defineModel<string | null>({ required: true })
</script>

<template>
  <n-select
    v-model:value="selectedTemplate"
    :options="options"
    :reset-menu-on-options-change="false"
    placeholder="Select a template"
    filterable
    clearable
  />
</template>
