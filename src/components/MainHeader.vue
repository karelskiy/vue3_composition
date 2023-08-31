<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/">
          <TelcoLogo />
        </RouterLink>
      </div>

      <SearchInput />

      <div class="navigation">
        <q-btn push color="white" text-color="green" label="Cart" @click="isOpen = true">
          <q-badge color="orange" floating>{{ store.productsCount }}</q-badge>
        </q-btn>
      </div>
    </div>
  </div>
  <CardModal :isOpen="isOpen" @onVisible="(value) => (isOpen = value)" />
</template>

<script lang="ts">
export default {
  name: 'MainHeader'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CardModal from './CardModal.vue'

import TelcoLogo from './icons/TelcoLogo.vue'
import SearchInput from './SearchInput.vue'
import { useCartStore } from '../stores/cart'

const isOpen = ref(false)

const store = useCartStore()
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  border-bottom: 1px solid #eaeaea;
  padding: 0 72px;
}

.header-container {
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.link {
  padding: 4px 10px;
  color: black;
  text-decoration: none;
  font-size: 16px;
}

.logo {
  cursor: pointer;
}
</style>
