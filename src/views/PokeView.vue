<script setup>
  (function () {var script=document.createElement('script');script.src="//cdn.jsdelivr.net/npm/eruda";document.body.appendChild(script); script.onload = function () { eruda.init() } })();
import { useRoute } from 'vue-router'
import { useGetData } from '@/composable/getData'
import { useFavoritos } from '@/store/favoritos'

const useFav = useFavoritos()
let { agregarFavoritos, validarRepetidos } = useFav

const route = useRoute()
let { getData, data } = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>
<template>
  <div v-if="data">
    <img :src="data.sprites.front_default">
    <h1>Poke name: {{ data.name }}</h1>
    <button @click="agregarFavoritos(data)" :disabled="validarRepetidos(data.name)">Agregar a Favoritos</button>
  </div>
  
</template>