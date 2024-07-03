<template>
  <div class="big-title-wrapper" :class="homepage ? 'homepage' : ''">
    <div class="big-title-title">
      <div class="back-title outlined-txt">{{  title }}</div>
      <span class="surtitle" v-if="surtitle">{{ surtitle }}</span>
      <h1 class="subtitle" v-if="subtitle" v-html="subtitle"></h1>
    </div>
    <div class="description" v-if="description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  homepage: {
    type: Boolean,
    default: false
  },
  surtitle: String,
  subtitle: String,
  description: String
})
</script>