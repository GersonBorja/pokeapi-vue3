<script setup>

import { RouterLink } from 'vue-router'
import { useGetData } from '@/composable/getData'
import { useCounterStore } from '@/store/counter'

let useCounter = useCounterStore()
let { getData, data } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon/')
//const getData = async() => {
//  try {
//    let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
//    pokemons.value = data.results
//  }catch(error){
//    console.log(error)
//  }
//}
//getData()

</script>
<template>
  <div class="container">
    <h1>Pokemons</h1>
    <ul class="list-group mb-4" v-if="data">
      <li v-for="pokemon in data.results" class="list-group-item">
        <router-link :to="`pokemons/${pokemon.name}`" class="link-primary">{{ pokemon.name }}</router-link>
      </li>
    </ul>
    <button :disabled="!data.previous" @click="getData(data.next)" class="btn btn-success me-4">Anterior</button>
    <button :disabled="!data.next" @click="getData(data.next)" class="btn btn-primary">Siguiente</button>
  </div>
</template>
<style scoped>
  * {
    text-decoration: none;
  }
</style>