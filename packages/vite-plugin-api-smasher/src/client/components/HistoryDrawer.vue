<script lang="ts" setup>
import type { HistoryItem } from '../types'
import { NButton, NTag } from 'naive-ui'
import { generateApi } from '../api/swagger'
import { useHistory } from '../logic/history'

const message = useMessage()

const [show, setShow] = useToggle(false)

const { history, insertHistory } = useHistory()

async function regenerate(row: HistoryItem) {
  const isSucceed = await generateApi({
    outputDir: row.outputDir,
    selectedPaths: row.selectedApi,
    generateConfig: {
      api: { enable: row.api, outputDir: row.apiOutputDir },
      model: { enable: row.model, outputDir: row.modelOutputDir }
    }
  })
  if (isSucceed) {
    message.success('Regenerate Success')
    insertHistory(row)
  }
}

const debouncedRegenerate = useDebounceFn(regenerate, 1000)

const columns = [
  {
    title: 'Selected API',
    key: 'selectedApi',
    render(row: HistoryItem) {
      return row.selectedApi.map((api) => {
        return h(NTag, { type: 'info' }, [api])
      })
    }
  },
  {
    title: 'Selected Template',
    key: 'selectedTemplate'
  },
  {
    title: 'Is Generate API',
    key: 'api',
    render(row: HistoryItem) {
      return h(NTag, { type: row.api ? 'success' : 'error' }, [row.api ? 'Yes' : 'No'])
    }
  },
  {
    title: 'Is Generate Model',
    key: 'model',
    render(row: HistoryItem) {
      return h(NTag, { type: row.model ? 'success' : 'error' }, [row.model ? 'Yes' : 'No'])
    }
  },
  {
    title: 'Output Dir',
    key: 'outputDir'
  },
  {
    title: 'API Output Dir',
    key: 'apiOutputDir'
  },
  {
    title: 'Model Output Dir',
    key: 'modelOutputDir'
  },
  {
    title: 'Created At',
    key: 'createdAt'
  },
  {
    title: 'Action',
    key: 'action',
    render(row: HistoryItem) {
      return h(
        NButton,
        {
          onClick: async () => {
            await debouncedRegenerate(row)
          }
        },
        'Regenerate'
      )
    }
  }
]

function onShow() {
  setShow(true)
}

defineExpose({
  onShow
})
</script>

<template>
  <n-drawer v-model:show="show" placement="right" width="60%">
    <n-drawer-content title="Generate History" closable>
      <n-data-table
        :columns="columns"
        :data="history"
        :paging="false"
      />
    </n-drawer-content>
  </n-drawer>
</template>
