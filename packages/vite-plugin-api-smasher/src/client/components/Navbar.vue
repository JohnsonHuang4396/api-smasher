<script setup lang="ts">
import { refreshSwaggerDocs } from '../api/swagger'
import { toggleDark } from '../logic'

const historyDrawerRef = useTemplateRef('historyDrawerRef')

const { refetch, isRefetching } = useQuery({
  queryKey: ['swagger'],
  queryFn: refreshSwaggerDocs,
  refetchOnWindowFocus: false,
  enabled: false
})

const debouncedRefetch = useDebounceFn(refetch, 1000)

function onShow() {
  historyDrawerRef.value?.onShow()
}
</script>

<template>
  <nav h-54px flex="~ none gap-2" border="b main" pl-4 pr-4 font-light children:my-auto>
    <slot />
    <div mx1 h-full w-0 border="r main" />
    <a
      text-lg icon-btn
      href="https://github.com/JohnsonHuang4396/api-smasher"
      target="_blank"
    >
      <div i-carbon-logo-github />
    </a>

    <n-tooltip>
      <template #trigger>
        <n-button @click="debouncedRefetch()" :loading="isRefetching">
          <span i-humbleicons-refresh />
        </n-button>
      </template>
      <span>
        Refresh
      </span>
    </n-tooltip>

    <n-tooltip>
      <template #trigger>
        <n-button @click="onShow()">
          <span i-material-symbols-history />
        </n-button>
      </template>
      <span>
        History Records
      </span>
    </n-tooltip>

    <n-button @click="toggleDark()">
      <span i-carbon-sun dark:i-carbon-moon />
    </n-button>
  </nav>
  <HistoryDrawer ref="historyDrawerRef" />
</template>
