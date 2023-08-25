<template>
  <div class="cards">
    <q-spinner v-if="!productsArr.length" color="green" size="3em" :thickness="2" />
    <div v-else class="cards-container">
      <StoreItem
        v-for="product of productsArr"
        :key="product.id"
        :product="product"
        @click="redirectToStorePage(product.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: { StoreItem },
  name: 'MainView'
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import { IStore } from '../models/Store.type'
import StoreItem from '../components/StoreItem.vue'

const router = useRouter()

const productsArr = ref<IStore[]>([])

const redirectToStorePage = (id: number) => {
  router.push(`/store/${id}`)
}

onMounted(async () => {
  const products = await axios.get<IStore[]>('https://fakestoreapi.com/products?limit=10')
  productsArr.value = products.data
})
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  justify-content: center;
}

.cards-container {
  width: 1280px;
  height: 100%;
  display: flex;
  padding: 0px 72px 0px;
  position: relative;
  flex-wrap: wrap;
}
</style>
