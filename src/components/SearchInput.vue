<template>
  <q-input class="search" rounded outlined v-model="inputValue" label="Search products">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script lang="ts">
export default {
  name: 'SearchInput'
}
</script>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import debounce from 'lodash.debounce'

import Emitter, { EmitterEvents } from '../utils/eventEmitter'

const inputValue = ref('')

watch(
  inputValue,
  debounce(() => {
    Emitter.emit(EmitterEvents.SEARCH_STORE, inputValue.value)
  }, 300)
)
</script>

<style lang="scss">
.search {
  .q-field__control {
    height: 50px;
    width: 388px;
    color: #33cc55;
  }

  .q-field__native {
    font-size: 18px;
  }

  .q-field__label {
    color: initial;
  }
}
</style>
