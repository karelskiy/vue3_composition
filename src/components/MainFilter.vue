<template>
  <q-chip clickable :color="filter.color" text-color="white" :icon="filter.icon" size="xl">
    {{ filter.name }}
  </q-chip>
</template>

<script lang='ts'>
export default {
  name: 'MainFilter'
}
</script>

<script setup lang='ts'>
import { defineProps } from 'vue'
import { ICategory } from '../models/Store.type'

defineProps<{
  filter: ICategory
}>()
</script>

<style scoped>
</style>