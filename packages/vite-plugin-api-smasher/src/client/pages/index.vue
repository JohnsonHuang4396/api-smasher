<script lang="ts" setup>
import type { FormRules } from 'naive-ui'
import type { GenerateConfig } from '../types'
import { generateApi } from '../api/swagger'
import { useHistory } from '../logic/history'

const message = useMessage()

const { insertHistory } = useHistory()

const formRef = useTemplateRef('formRef')

const form = ref<GenerateConfig>({
  selectedApi: [],
  selectedTemplate: null,
  outputDir: './src/api',
  model: true,
  api: true,
  apiOutputDir: './Api.ts',
  modelOutputDir: './Model.ts'
})

const rules: FormRules = {
  selectedApi: [
    { required: true, type: 'array', message: 'Place Select Api', trigger: 'change' }
  ],
  selectedTemplate: [
    { required: true, type: 'string', message: 'Place Select Template', trigger: 'change' }
  ],
  outputDir: [
    { required: true, type: 'string', message: 'Place Input Output Directory', trigger: 'change' }
  ],
  apiOutputDir: [
    { required: true, type: 'string', message: 'Place Input Api Output Directory', trigger: 'change' }
  ],
  modelOutputDir: [
    { required: true, type: 'string', message: 'Place Input Model Output Directory', trigger: 'change' }
  ]
}

const { mutate, isPending } = useMutation({
  mutationFn: handleGenerate
})

async function handleGenerate() {
  try {
    await formRef.value?.validate()
  }
  catch {
    return
  }

  const isSucceed = await generateApi({
    outputDir: form.value.outputDir,
    selectedPaths: form.value.selectedApi,
    generateConfig: {
      api: { enable: form.value.api, outputDir: form.value.apiOutputDir },
      model: { enable: form.value.model, outputDir: form.value.modelOutputDir }
    }
  })
  if (isSucceed) {
    message.success('Generate Success')
    insertHistory(form.value)
  }
}
</script>

<template>
  <Navbar>
    <h1 select-none>
      API Smasher
    </h1>
  </Navbar>
  <div p-12 flex flex-col gap-4 box-border>
    <n-form ref="formRef" :model="form" :rules="rules">
      <n-form-item label="API" path="selectedApi">
        <SearchApi v-model="form.selectedApi" />
      </n-form-item>
      <n-form-item label="Template" path="selectedTemplate">
        <SearchTemplate v-model="form.selectedTemplate" />
      </n-form-item>
      <n-form-item label="Output Directory" path="outputDir">
        <n-input v-model:value="form.outputDir" placeholder="Default dir is ./src/api" />
      </n-form-item>
      <n-form-item label="Api File Directory (Default: [outputDir]/Api.ts)" path="apiOutputDir">
        <n-input v-model:value="form.apiOutputDir" placeholder="Default dir is [outputDir]/Api.ts" />
      </n-form-item>
      <n-form-item label="Model File Directory (Default: [outputDir]/Model.ts)" path="modelOutputDir">
        <n-input v-model:value="form.modelOutputDir" placeholder="Default dir is [outputDir]/Model.ts" />
      </n-form-item>
      <div flex gap-4>
        <n-form-item label="Model" label-placement="left">
          <n-switch v-model:value="form.model" :checked-value="true" :unchecked-value="false" />
        </n-form-item>
        <n-form-item label="API" label-placement="left">
          <n-switch v-model:value="form.api" :checked-value="true" :unchecked-value="false" />
        </n-form-item>
      </div>
    </n-form>

    <n-button
      :loading="isPending"
      @click="mutate()"
    >
      Generate
    </n-button>
  </div>
</template>
