export interface IStore {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number; count: number }
  title: string
}

export interface ICategory {
  icon: string
  color: string
  name?: string
}
