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
        <RouterLink class="link" to="/articles">Articles</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainHeader'
}
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import TelcoLogo from './icons/TelcoLogo.vue'
import SearchInput from './SearchInput.vue'
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
