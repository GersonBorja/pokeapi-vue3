import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)

  const increment = () => counter.value++

  const double = computed(() => counter.value *2)

  return {
    counter,
    increment,
    double
  }
})