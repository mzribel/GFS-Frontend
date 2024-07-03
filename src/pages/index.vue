<template>
  <div id="content">
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <div class="homepage_hero">
       <div class="hero_image">

         <div class="img-shade"></div>
         <BigTitle title="GFS Esport" homepage subtitle="Gensokyo Fantastic <span>Souls</span>"/>
         <div class="hero_stats">
           <p class="hero_stats-title">Depuis février 2024, la GFS c'est</p>
           <swiper
               class="swiper"
               :modules="modules"
               :slides-per-view="1"
               :space-between="50"
               :loop="true"
               :autoplay="{ delay: 3000, disableOnInteraction: false }"
           >
             <swiper-slide class="" v-for="stat in stats">
               <Icon class="icon" :name="stat.icon" />
               {{ stat.text }}
             </swiper-slide>
           </swiper>
           <Icon class="arrow-scroll" name="material-symbols:arrow-cool-down-rounded"></Icon>
         </div>

       </div>
      </div>

    </main>
    <PartnersBand></PartnersBand>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import PartnersBand from "~/components/PartnersBand.vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from "swiper/vue";
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import {onMounted, ref} from 'vue';
const modules = ref([Navigation, Scrollbar, A11y, Autoplay])
import data from '~/assets/json/data.json'
import {definePageMeta} from "#imports";

useHead({
  title: ""
})

const getTotal = (key: string) => {
  return data.events.reduce((acc, event) => acc + event[key], 0)
}

const getAveragePlayers = () => {
  return getTotal('player_count') / data.events.length
}

const stats = ref([
    {
      icon: "material-symbols:flag-outline",
      text: `${data.events.length} editions`
    },
    {
      icon: "fluent:people-community-24-regular",
      text: `${getTotal('player_count')} inscrits au total`
    },
    {
      icon: "material-symbols:stadia-controller-sharp",
      text: `${getAveragePlayers()} joueurs en moyenne`
    },
    {
      icon: "fluent:food-pizza-24-regular",
      text: `${getTotal('pizza_count')} pizzas mangees`
    }
  ])



</script>