import api from './api'
import { Item, ItemCreate, ItemUpdate } from '../types/item'

export const itemService = {
  // 모든 아이템 조회
  getItems: async (): Promise<Item[]> => {
    const response = await api.get<Item[]>('/items')
    return response.data
  },

  // 특정 아이템 조회
  getItem: async (id: number): Promise<Item> => {
    const response = await api.get<Item>(`/items/${id}`)
    return response.data
  },

  // 아이템 생성
  createItem: async (item: ItemCreate): Promise<Item> => {
    const response = await api.post<Item>('/items', item)
    return response.data
  },

  // 아이템 수정
  updateItem: async (id: number, item: ItemUpdate): Promise<Item> => {
    const response = await api.put<Item>(`/items/${id}`, item)
    return response.data
  },

  // 아이템 삭제
  deleteItem: async (id: number): Promise<void> => {
    await api.delete(`/items/${id}`)
  },
}
