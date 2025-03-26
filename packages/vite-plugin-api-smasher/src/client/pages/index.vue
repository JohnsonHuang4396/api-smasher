<script lang="ts" setup>
import { ref } from 'vue'

const selectedTemplate = ref('')
const templates = ref([])
const outputDir = ref('')
const model = ref(false)
const api = ref(false)
async function handleGenerate() {
  // eslint-disable-next-line no-console
  console.log('handleGenerate')
}
</script>

<template>
  <Navbar>
    <h1>API Smasher</h1>
  </Navbar>
  <div class="p-12 flex flex-col gap-4 box-border">
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Template
      </label>
      <select
        v-model="selectedTemplate"
        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
        <option
          v-for="template in templates"
          :key="template"
          :value="template"
        >
          {{ template }}
        </option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Output Directory
      </label>
      <input
        v-model="outputDir"
        type="text"
        class="mt-1 block w-full pl-3 py-2 box-border text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
    </div>

    <div
      class="flex gap-10"
    >
      <label class="flex items-center space-x-1">
        <input
          v-model="model"
          type="checkbox"
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        >
        <span class="text-sm text-gray-700 dark:text-gray-300">Generate Model</span>
      </label>

      <label class="flex items-center space-x-1">
        <input
          v-model="api"
          type="checkbox"
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        >
        <span class="text-sm text-gray-700 dark:text-gray-300">Generate Api</span>
      </label>
    </div>

    <button
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="handleGenerate"
    >
      Generate
    </button>
  </div>
</template>
