<script setup lang="ts">
import { useCardsStore } from '@/stores/cards'
import { computed } from 'vue'

const cardsStore = useCardsStore()

const cards = computed(() => cardsStore.getCards)
</script>

<template>
  <div>
    <ul class="px-4 grid lg:grid-cols-2 xl:grid-cols-3 gap-20 place-items-center min-h-dvh sm:p-20">
      <li
        v-for="card in cards"
        :key="card.id"
        class="max-w-sm rounded-xl overflow-hidden shadow-lg"
      >
        <img class="w-full" :src="card.imgUrl" :alt="card.imgUrl" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ card.title }}</div>
          <p class="text-gray-700 text-base">
            {{ card.description }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            v-for="tag in card.tags"
            :key="tag.id"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ tag.name }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>
