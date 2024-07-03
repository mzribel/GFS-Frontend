<template>
  <div id="content">
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <div class="ssbu-mural-wrapper">
        <img src="~/assets/img/backgrounds/test.jpg" class="ssbu-mural" alt="">
        <!--      <img src="~/assets/img/cover.jpg" class="object-cover object-center w-full h-full" alt="">-->
      </div>
      <BigTitle style="padding: 70px 0" title="Events" surtitle="Toutes les informations sur les" subtitle="Evénements <span>GFS</span>" />

      <section class="events gfs-bg" style="min-height: 500px">
        <div class="events-ctn" v-if="parsed_events">
          <div class="event-group" v-for="group in parsed_events">
            <h2 class="title-h2 inverted">
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              {{ group.month_str }} 2024
            </h2>

            <div v-if="group" class="event-group-ctn">
                <div class="event-item" v-for="event in group.events">
                  <div class="left" :class="event.is_registering ? 'inverted':''">{{ event.parsed_date.getDate() }}</div>
                  <div class="middle">
                    <div class="series">{{ event.series }}</div>
                    <NuxtLink :to="`/events/${event.id}`"><div class="name">{{ event.name }}</div></NuxtLink>
                  </div>
                  <div class="right">
                    <a v-if="event.is_registering" target="_blank" :href="event.startgg"><div  class="registering-btn">S'INSCRIRE</div></a>
                    <div class="icon-ctn" v-else>
                      <div v-if="event.result_img" class="icon txt"><a :href="event.drive"><Icon name="material-symbols:image-outline"/></a></div>
                      <div v-if="event.vods_playlist" class="icon img"><a :href="event.vods_playlist"><img src="~/assets/img/icons/socials/youtube_icon.svg" alt=""></a></div>
                      <div v-if="event.startgg" class="icon img startgg"><a :href="event.startgg"><img src="~/assets/img/icons/socials/startgg_icon.svg" alt=""></a></div>

                      <a target="_blank" :href="event.best_of"><div v-if="event.best_of" class="best-of-btn">BEST OF</div></a>


                  </div>
                </div>

              </div>
            </div>

          </div>

          <br>
        </div>
      </section>
      <section class="graphs gfs-bg">
        <div class="separation"></div>
        <h2 class="title-h2 inverted">
          <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
          <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
          <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
          Visuels - Tops 8
        </h2>

        <div class="events-page">
          <swiper
            class="swiper-events"
            :modules="modules"
            :slides-per-view="1"
            :loop="true"
            navigation
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
          >
            <swiper-slide class="swiper-events-slide" v-for="(event, i) in data.events">
              <img :src="`/rankings/${replaceEmptyImage(event.result_img)}`" />
              <nuxt-link :to="'/events/' + i" class="event-bands">
                <h3>{{ event.name }}</h3>
                <p>{{ event.series }} - {{ event.date }}</p>
              </nuxt-link>
            </swiper-slide>
          </swiper>
        </div>
      </section>



    </main>
    <PartnersBand></PartnersBand>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import data from '~/assets/json/data.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from "~/components/Footer.vue";
import PartnersBand from "~/components/PartnersBand.vue";
import {replaceEmptyImage} from "~/composables/eventUtils.ts";
const modules = ref([Navigation, Scrollbar, A11y, Autoplay])
useHead({
  title: "Events"
})

let event = {};

let event_span = ref({
  "start_month": 2,
  "end_month": 6
})

let months = ref(["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"])
let parsed_events = [];


function parseEvents(events) {
  events.forEach(event => {
    event["parsed_date"] = stringToDate(event.date)
    if (!event["parsed_date"]) {
      events.remove(event);
    }
  })
  let test = events.sort(function (a, b) {
    return a.parsed_date - b.parsed_date;
  })

  if (!events) {
    return {};
  }

  for (let i = event_span.value.start_month; i <= event_span.value.end_month; i++) {
    let temp = events.filter(event => event.parsed_date.getMonth() === i - 1).reverse()
    parsed_events.push({
      "month_str": months.value[i - 1],
      "month": i,
      "events": temp
    })
  }
  parsed_events.reverse()
}

parseEvents(data.events)
console.log(parsed_events)
</script>