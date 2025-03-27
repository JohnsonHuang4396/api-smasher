<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { isDark } from './logic'

const providerTheme = computed(() => isDark.value ? darkTheme : null)
</script>

<template>
  <n-config-provider :theme="providerTheme">
    <n-message-provider>
      <main grid="~ rows-[min-content_1fr]" size="h-screen w-screen">
        <Suspense>
          <RouterView />
          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </main>
    </n-message-provider>
  </n-config-provider>
</template>
