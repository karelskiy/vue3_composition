<template>
  <q-dialog
    class="container"
    :model-value="isOpen"
    @update:model-value="emit('onVisible', !isOpen)"
  >
    <q-card>
      <q-card-section class="row items-center">
        <div class="text-h6">Shopping Cart</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <div v-if="store.cartProducts.length" class="products-container">
          <div v-for="product of store.cartProducts" :key="product.id" class="product-container">
            <div class="left-container">
              <div class="image-container">
                <img :src="product.image" />
              </div>
              <div class="content-container">
                <div class="title">{{ product.title }}</div>
                <div>Quantity: {{ product.count }}</div>
                <div>Price: ${{ product.price }}</div>
              </div>
            </div>
            <div class="actions-container">
              <q-btn flat label="Remove" color="red" @click="handleRemoveProduct(product.id)" />
              <q-btn flat label="Add" color="green" @click="handleAddProduct(product)" />
            </div>
          </div>
        </div>
        <div v-else>Cart is empty</div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="row items-center">
        <div>Price: {{ store.totalPrice }}</div>
        <q-space />
        <q-btn flat label="Submit" color="primary" @click="handleClear" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
export default {
  name: 'CardModal'
}
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

import { useCartStore } from '../stores/cart'
import { type IStore } from '../models/Store.type'
import { NotifyType, useNotify } from '../hooks/useNotify'

defineProps<{
  isOpen: boolean
}>()

const store = useCartStore()
const notify = useNotify()
const emit = defineEmits(['onVisible'])

const handleRemoveProduct = (id: IStore['id']) => {
  store.removeFromCart(id)
  notify(NotifyType.positive, 'Success!')
}

const handleAddProduct = (product: IStore) => {
  store.addToCart(product)
  notify(NotifyType.positive, 'Success!')
}

const handleClear = () => {
  store.clearCart()
  notify(NotifyType.positive, 'Success!')
}
</script>

<style lang="scss">
.container {
  width: 100%;
  .q-dialog__inner > div {
    width: 100%;
  }

  .content-container {
    font-size: 16px;

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 300px;
    }
  }

  .products-container {
    display: flex;
    flex-direction: column;
  }

  .product-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  .left-container {
    display: flex;
  }

  .image-container > img {
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
}
</style>
