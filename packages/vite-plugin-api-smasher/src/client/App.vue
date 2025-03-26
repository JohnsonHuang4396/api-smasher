<template>
  <main grid="~ rows-[min-content_1fr]" size="h-screen w-screen">
    <Suspense>
      <RouterView />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </main>
</template>
