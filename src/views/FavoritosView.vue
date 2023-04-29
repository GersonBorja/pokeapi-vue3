<script setup>
(function () {var script=document.createElement('script');script.src="//cdn.jsdelivr.net/npm/eruda";document.body.appendChild(script); script.onload = function () { eruda.init() } })();
import { storeToRefs } from 'pinia'
import { useFavoritos } from '@/store/favoritos'
const useFav = useFavoritos()
let { eliminarFavoritos } = useFavoritos()
let { favoritos } = storeToRefs(useFav)
</script>
<template>
 <h1>Favoritos</h1> 
 <ul>
   <li v-for="item in favoritos">{{ item.name }}
   <button class="btn btn-danger mx-4" @click="eliminarFavoritos(item.id)">Borrar</button>
   <router-link class="btn btn-primary" :to="`pokemons/${item.name}`">Mas detalles</router-link>
   </li>
 </ul>
</template>