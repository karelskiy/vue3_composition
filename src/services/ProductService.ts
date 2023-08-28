import axios from 'axios'

export class ProductService {
  static async getProducts<T>(
    params: Record<string, unknown> /* AxiosRequestConfig['params'] */ = {}
  ) {
    return axios.get<T[]>('https://fakestoreapi.com/products/', {
      params
    })
  }

  static async getCategoriest() {
    return axios.get<string[]>('https://fakestoreapi.com/products/categories')
  }

  static async getCategory<T>(name: string /* ICategory['name'] */) {
    return axios.get<T>(`https://fakestoreapi.com/products/category/${name}`)
  }
}
