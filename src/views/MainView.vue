<template>
  <MainBanner />
  <div class="filters">
    <q-spinner v-if="categoriesLoading" color="green" size="3em" :thickness="2" />
    <MainFilter
      v-else
      :key="filter.name"
      :filter="filter"
      v-for="filter of categoriesArr"
      @click="onFilterClick(filter.name)"
    />
  </div>
  <div class="cards">
    <q-spinner v-if="productsLoading" color="green" size="3em" :thickness="2" />
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
  name: 'MainView'
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ICategory, IStore } from '../models/Store.type'
import { ProductService } from '../services/ProductService'
import StoreItem from '../components/StoreItem.vue'
import MainBanner from '../components/MainBanner.vue'
import MainFilter from '../components/MainFilter.vue'

const router = useRouter()

const productsArr = ref<IStore[]>([])
const productsLoading = ref(true)

const categoriesArr = ref<ICategory[]>([
  {
    icon: 'phone',
    color: 'deep-orange'
  },
  {
    icon: 'diamond',
    color: 'teal'
  },
  {
    icon: 'man',
    color: 'orange'
  },
  {
    icon: 'woman',
    color: 'red'
  }
])
const categoriesLoading = ref(true)

const redirectToStorePage = (id: number) => {
  router.push(`/store/${id}`)
}

const fetchProducts = async () => {
  productsLoading.value = true
  const products = await ProductService.getProducts<IStore>()

  productsArr.value = products.data
  productsLoading.value = false
}

const fetchCategories = async () => {
  const categories = await ProductService.getCategoriest()
  categoriesLoading.value = false

  categoriesArr.value = categoriesArr.value.map((i, index) => ({
    ...i,
    name: categories.data[index]
  }))
  categoriesArr.value.unshift({ icon: 'star', color: 'primary', name: 'All Products' })
}

const onFilterClick = async (name: ICategory['name']) => {
  if (name === 'All Products') {
    fetchProducts()
    return
  }

  productsLoading.value = true
  const products = await ProductService.getCategory<IStore[]>(name)

  productsArr.value = products.data
  productsLoading.value = false
}

onMounted(() => {
  fetchProducts()
  fetchCategories()
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

.filters {
  display: flex;
  justify-content: center;
}
</style>
