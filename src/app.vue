<template>
  <NuxtPage />
</template>

<script setup>
import {onMounted} from "vue";
import {initFlowbite} from "flowbite";
const route = useRoute();

useHead({
  // or as a function
  titleTemplate: (page) => {
    return page
      ? `${page} - GFS Esports`
      : 'GFS Esports'
  }
})

onMounted(() => {
  initFlowbite()
})
</script>