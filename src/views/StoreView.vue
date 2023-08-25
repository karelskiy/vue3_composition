<template>
  <div class="container">
    <q-spinner v-if="!product" color="green" size="3em" :thickness="2" />
    <div v-else class="inner-container">
      <div
        class="banner"
        :style="{
          backgroundImage: `url(${product.image})`
        }"
      ></div>
      <div class="logo-container">
        <img :src="product.image" />
      </div>
      <div class="content-container">
        <div class="left-container">
          <div class="title">
            {{ product.title }}
          </div>
          <div class="title-description">
            {{ product.description }}
          </div>
          <div class="gifts-container">
            <GiftItem :key="gift" v-for="gift of 2" :product="product" />
          </div>
        </div>
        <div class="right-container"></div>
      </div>
      {{ route.params.id }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: { GiftItem },
  name: 'StoreView'
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import { IStore } from '../models/Store.type'
import GiftItem from '../components/GiftItem.vue'

const route = useRoute()
const {
  params: { id }
} = route

const product = ref<IStore>(null)

onMounted(async () => {
  const res = await axios.get<IStore>(`https://fakestoreapi.com/products/${id}`)
  product.value = res.data
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.banner {
  width: 100%;
  height: 256px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.inner-container {
  width: 100%;
}

.logo-container {
  width: 1280px;
  height: 0px;
  display: flex;
  box-sizing: border-box;
  padding: 0 72px;
  justify-content: space-between;

  img {
    width: 160px;
    border: 4px solid #ffffff;
    height: 160px;
    transform: translate(0, -50%);
    border-radius: 100px;
  }
}

.content-container {
  width: 1280px;
  height: 652px;
  display: flex;
  box-sizing: border-box;
  padding-bottom: 72px;
  padding: 0 72px;

  .left-container {
    width: 688px;
    padding-top: 112px;

    .title {
      font-size: 24px;
      font-style: normal;
      font-family: Inter;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0.02em;
    }

    .title-description {
      font-size: 16px;
      font-style: normal;
      margin-top: 16px;
      font-family: Inter;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.01em;
    }

    .gifts-container {
      width: 688px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;
      overflow-y: scroll;
      align-content: space-between;
      justify-content: space-between;
    }
  }

  .right-container {
    margin-top: 32px;
    margin-left: 112px;
  }
}
</style>
