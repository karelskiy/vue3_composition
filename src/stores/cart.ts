import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// TODO: need to remove and export
type Store = {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number; count: number }
  title: string
}

type ProductWithCount = {
  count: number
} & Store

type Cart<T extends { id: number }> = {
  [key in T['id']]: ProductWithCount
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart<Store>>({})

  const addToCart = (value: Store) => {
    if (value.id in cart.value) {
      cart.value[value.id].count++
    } else {
      cart.value[value.id] = { ...value, count: 1 }
    }
  }

  const removeFromCart = (id: Store['id']) => {
    if (cart.value[id].count === 1) {
      delete cart.value[id]
      return
    }
    cart.value[id].count--
  }

  const clearCart = () => {
    cart.value = {}
  }

  const cartProducts = computed(() => Object.values(cart.value))

  const productsCount = computed(() =>
    Object.values(cart.value).reduce((acc, res) => acc + res.count, 0)
  )

  const totalPrice = computed(() =>
    Object.values(cart.value).reduce((acc, res) => +(acc + res.price * res.count).toFixed(2), 0)
  )

  return { cart, productsCount, totalPrice, cartProducts, addToCart, removeFromCart, clearCart }
})
