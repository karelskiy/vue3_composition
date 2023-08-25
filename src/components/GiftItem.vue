<template>
  <div class="gift">
    <div>
      <div class="title">FREE GIFT with any $10+ order</div>
      <div class="description">{{ product.title }}: Get a FREE GIFT with any $10+ order</div>
    </div>
    <div class="footer-block">
      <div class="percent">{{ product.rating.rate }}%</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GiftItem'
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
.gift {
  width: 336px;
  height: 200px;
  display: flex;
  padding: 16px;
  background: #fafafa;
  box-sizing: border-box;
  margin-top: 10px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;

  .title {
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Inter;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.01em;
  }

  .description {
    color: #6a6a6a;
    font-size: 14px;
    font-style: normal;
    word-break: break-word;
    font-family: Inter;
    font-weight: 500;
    line-height: 125%;
    letter-spacing: 0.01em;
  }

  .footer-block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .percent {
      color: #33cc55;
      display: flex;
      font-size: 20px;
      font-style: normal;
      font-family: Source Sans Pro, sans-serif;
      font-weight: 600;
      line-height: 120%;
      align-content: center;
      letter-spacing: 0.02em;
    }
  }
}
</style>