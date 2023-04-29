import axios from 'axios'
import { ref } from 'vue'

let data = ref(null)
export const useGetData = () => {
  const getData = async (url) => {
    try {
      let res = await axios.get(url)
      data.value = res.data
    } catch(error) {
      console.log(error)
    }
  }
  return {
    getData,
    data
  }
}