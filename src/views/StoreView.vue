<template>
  <div>
    {{ route.params.id }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'StoreView'
}
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style></style>
