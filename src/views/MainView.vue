<template>
  <MainBanner />
  <div class="filters">
    <q-spinner-dots v-if="categoriesLoading" color="green" size="40px" />
    <MainFilter
      v-else
      :key="filter.name"
      :filter="filter"
      v-for="filter of categoriesArr"
      @click="onFilterClick(filter.name)"
    />
  </div>
  <div class="cards">
    <q-infinite-scroll @load="infiniteFetch" :offset="250" :disable="!!searchValue">
      <div class="cards-container">
        <StoreItem
          v-for="product of searchValue ? filteredBySearchProducts : productsArr"
          :key="product.id"
          :product="product"
        />
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="green" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainView'
}
</script>

<script setup lang="ts">
import { onDeactivated, onMounted, ref } from 'vue'

import { type ICategory, type IStore } from '../models/Store.type'
import { ProductService } from '../services/ProductService'
import StoreItem from '../components/StoreItem.vue'
import MainBanner from '../components/MainBanner.vue'
import MainFilter from '../components/MainFilter.vue'
import Emitter, { EmitterEvents } from '../utils/eventEmitter'

const productsArr = ref<IStore[]>([])
const productsLoading = ref(true)
const page = ref(1)
const limit = 10
const selectedValue = ref('All Products')

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

const filteredBySearchProducts = ref<IStore[]>([])

const searchValue = ref('')

const fetchDataForFiltration = async () => {
  if (selectedValue.value === 'All Products') {
    await fetchProducts()
  } else {
    await fetchByCategory(selectedValue.value)
  }
}

const infiniteFetch = async (index: number, done: () => void) => {
  await fetchDataForFiltration()
  done()
}

const fetchProducts = async () => {
  productsLoading.value = true
  const products = await ProductService.getProducts<IStore>({
    page: page.value,
    limit
  })

  page.value++

  productsArr.value.push(...products.data)
  productsLoading.value = false
}

const fetchByCategory = async (name: string) => {
  productsLoading.value = true
  const products = await ProductService.getCategory<IStore[]>(name, { page: page.value, limit })

  page.value++

  productsArr.value.push(...products.data)
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
  selectedValue.value = name!

  page.value = 1
  productsArr.value = []

  fetchDataForFiltration()
}

const searchProducts = (value: string) => {
  // Plain search logic
  filteredBySearchProducts.value = productsArr.value.filter((i) =>
    i.title.toLowerCase().includes(value.toLowerCase())
  )
}

onMounted(() => {
  fetchCategories()

  Emitter.on(EmitterEvents.SEARCH_STORE, (value: unknown) => {
    if (typeof value !== 'string') return
    searchValue.value = value
    searchProducts(value)
  })
})

onDeactivated(() => {
  Emitter.off(EmitterEvents.SEARCH_STORE)
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
