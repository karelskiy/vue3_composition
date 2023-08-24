<script lang="ts">
export default {
  name: 'MainHeader'
}
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TelcoLogo from './icons/TelcoLogo.vue'
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/">
          <TelcoLogo />
        </RouterLink>
      </div>
      <div class="navigation">
        <RouterLink class="link" to="/articles">Articles</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
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