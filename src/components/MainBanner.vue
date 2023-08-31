<template>
  <q-carousel
    class="carousel"
    animated
    swipeable
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide
      class="slide"
      v-for="slide of data"
      :key="slide.name"
      :name="slide.name"
      :img-src="slide.src"
    />
  </q-carousel>
</template>

<script lang="ts">
export default {
  name: 'MainBanner'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

const data = [
  {
    name: 1,
    src: 'https://dzhw0dewjr7dm.cloudfront.net/31409219-4c9f-4e67-b7e8-e46f15ddb718-english2.jpg'
  },
  {
    name: 2,
    src: 'https://dzhw0dewjr7dm.cloudfront.net/cb20f866-088a-42f7-b617-f5a57300595d-english3.jpg'
  },
  {
    name: 3,
    src: 'https://dzhw0dewjr7dm.cloudfront.net/fc269423-a966-47b9-839b-a4aa4381f668-english1.jpg'
  },
  {
    name: 4,
    src: 'https://dzhw0dewjr7dm.cloudfront.net/bff45612-b3f2-408d-bfb9-399c9e5170dc-english4.jpg'
  }
]

const slide = ref(1)
const autoplay = ref(true)
</script>

<style scoped>
.carousel {
  margin-top: 40px;
}

.slide {
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0;
}
</style>
