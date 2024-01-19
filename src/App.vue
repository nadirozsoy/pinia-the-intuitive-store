<script setup lang="ts">
import { onMounted } from 'vue'
import { useCardsStore } from './stores/cards'

const cardsStore = useCardsStore()

function loadData() {
  cardsStore.setCards()
}
onMounted(() => {
  loadData()
})
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
