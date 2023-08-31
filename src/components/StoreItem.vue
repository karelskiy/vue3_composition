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
      <div class="card-title">
        <div>{{ product.title }}</div>
        <div class="card-content">
          <div class="card-price">$ {{ product.price }}</div>
          <q-btn color="green" label="Buy" @click="handleBuyClick(product)" />
        </div>
      </div>
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

import { type IStore } from '../models/Store.type'
import { NotifyType, useNotify } from '../hooks/useNotify'
import { useCartStore } from '../stores/cart'
defineProps<{
  product: IStore
}>()

const store = useCartStore()
const notify = useNotify()

const handleBuyClick = (value: IStore) => {
  store.addToCart(value)
  notify(NotifyType.positive, 'Success!')
}
</script>

<style scoped lang="scss">
.card {
  width: 266px;
  cursor: pointer;
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
  background: #fafafa;
  box-sizing: border-box;
  padding: 16px;
  padding-top: 44px;
}

.card-title {
  color: #000000;
  font-size: 16px;
  font-style: normal;
  font-family: Inter;
  font-weight: 500;
  line-height: 125%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}
</style>
