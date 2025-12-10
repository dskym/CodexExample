export interface Item {
  id: number
  name: string
  description?: string
  price: number
}

export interface ItemCreate {
  name: string
  description?: string
  price: number
}

export interface ItemUpdate {
  name?: string
  description?: string
  price?: number
}
