<template>
  <div class="card">
    <div
      class="card-bg"
      :style="{
        backgroundImage: `url(${product.image})`
      }"
    />
    <div class="card-icon">
      <img class="card-icon-logo" :src="product.image" />
      <div class="card-percent">{{ product.rating.rate }}%</div>
    </div>
    <div class="card-title-container">
      <div class="card-title">{{ product.title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StoreItem'
}
</script>

<script setup lang="ts">
import { defineProps } from 'vue'
import { IStore } from '../models/Store.type'
defineProps<{
  product: IStore
}>()
</script>

<style scoped lang="scss">
.card {
  width: 266px;
  cursor: pointer;
  height: 266px;
  margin: 8px;
  margin-top: 15px;
  border-radius: 8px;
}

.card-bg {
  height: 192px;
  background: #eaeaea;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.card-icon {
  height: 0px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
}

.card-icon-logo {
  width: 64px;
  border: 1px solid #ffffff;
  filter: blur(0px);
  height: 64px;
  transform: translate(0, -50%);
  background: #eaeaea;
  object-fit: cover;
  transition: filter 0.5s linear;
  border-radius: 33px;
}

.card-percent {
  color: #ffffff;
  width: 60px;
  height: 24px;
  display: flex;
  transform: translate(0, -50%);
  background: #33cc55;
  align-items: center;
  font-weight: 600;
  border-radius: 12px;
  justify-content: center;
}

.card-title-container {
  height: 80px;
  background: #fafafa;
  box-sizing: border-box;
  padding-top: 44px;
  padding-left: 16px;
}

.card-title {
  color: #000000;
  font-size: 16px;
  font-style: normal;
  font-family: Inter;
  font-weight: 500;
  line-height: 125%;
}
</style>
