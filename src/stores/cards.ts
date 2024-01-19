import services from '@/services'
import { defineStore } from 'pinia'
import type { ICard, ICardsState } from '@/types'

export const useCardsStore = defineStore('cards', {
  state: (): ICardsState => ({
    cards: []
  }),
  getters: {
    getCards(): ICard[] {
      return this.cards
    }
  },
  actions: {
    async setCards(): Promise<ICard[]> {
      const { data } = await services.cards.getCards()
      this.cards = data
      return data
    }
  }
})
