import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const placeList = ref([])
  const areaName = ref('')
  const adcode = ref('')
  const path = ref('')

  const saveMark = computed(() => placeList.value.some(place => place.adcode === adcode.value))
  const correctPath = computed(() => /^\d+$/.test(path.value.slice(1)))

  const setAreaName = name => (areaName.value = name)
  const setAdcode = code => (adcode.value = code)
  const setPath = p => (path.value = p)
  const resetAreaName = () => (areaName.value = '')
  const resetAdcode = () => (adcode.value = '')
  const savePlace = () => {
    if (saveMark.value) return
    if (!areaName.value || !adcode.value) return
    placeList.value.push({ id: Date.now(), areaName: areaName.value, adcode: adcode.value })
  }
  const removePlace = index => placeList.value.splice(index, 1)

  return {
    placeList,
    areaName,
    adcode,
    saveMark,
    correctPath,
    setAreaName,
    setAdcode,
    setPath,
    resetAreaName,
    resetAdcode,
    savePlace,
    removePlace,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeatherStore, import.meta.hot))
}
