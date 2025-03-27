<script lang="ts" setup>
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface'
import { fetchSwaggerDocs } from '../api/swagger'

const [selectedApi] = defineModel<string[] | null>({ required: true, default: [] })

const { data: swagger } = useQuery({
  queryKey: ['swagger'],
  queryFn: fetchSwaggerDocs,
  refetchOnWindowFocus: false
})

const options = computed(() => {
  return swagger.value?.map((api) => {
    const result: SelectMixedOption = {
      type: 'group',
      label: api.remote,
      key: api.remote,
      children: Object.entries(api.paths)?.map(([path, definition]) => {
        const [method, detail] = Object.entries(definition)[0]
        return {
          label: `${method.toUpperCase()}-${path}${detail.summary ? ` (${detail.summary})` : ''}`,
          value: path
        }
      }) ?? []
    }
    return result
  })
})
</script>

<template>
  <n-select
    v-model:value="selectedApi"
    :options="options"
    :reset-menu-on-options-change="false"
    placeholder="Place Select API"
    filterable
    multiple
    clearable
  />
</template>
