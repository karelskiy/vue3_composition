<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <MainHeader />
  <div class="layout">
    <div class="layout-inner">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  justify-content: center;
}

.layout-inner {
  max-width: 1280px;
  width: 100%;
}
</style>
