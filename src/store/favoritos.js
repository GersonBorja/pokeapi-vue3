import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavoritos = defineStore('favorito', () => {
  const favoritos = ref([])
  if(localStorage.getItem('favoritos')) favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  
  const agregarFavoritos = (poke) => {
    favoritos.value.push(poke)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }
  const eliminarFavoritos = (id) => {
    favoritos.value = favoritos.value.filter(item => item.id !== id)
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }
  
  const validarRepetidos = (poke) => favoritos.value.find((item) => item.name == poke)
  
  return {
    favoritos,
    agregarFavoritos,
    validarRepetidos,
    eliminarFavoritos
  }
})