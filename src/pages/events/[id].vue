<template>
  <div id="content">
    <header>
      <NavBar></NavBar>
    </header>
    <main class="pt-nav-h font-josefin">
      <BigTitle title="Events" :subtitle="addSpan(event.name)" :surtitle="`${event.series} - ${event.date}`" />
      <section class="event-meta-section">
        <div class="event-meta-ctn">
          <div class="event-meta" v-if="event.player_count">
            <Icon name="ph:game-controller-duotone" class="meta-icon"></Icon>
            <span>{{ event.player_count }} joueurs</span>
          </div>
          <div class="event-meta" v-if="event.date_str">
            <Icon name="material-symbols:calendar-month" class="meta-icon"></Icon>
            <span>{{ event.date_str }}</span>
          </div>
          <div class="event-meta" v-if="event.place">
            <Icon name="material-symbols:location-on-outline" class="meta-icon"></Icon>
            <span>{{ event.place }}</span>
          </div>
          <div class="event-meta bracket" v-if="event.startgg">
            <Icon name="material-symbols:swords-outline" class="meta-icon"></Icon>
            <span><a :href="event.startgg">Voir le bracket</a></span>
          </div>
        </div>
      </section>

      <template v-if="event.is_registering">
        <section class="gfs-bg event-results gfs-bg" style="padding-bottom: 100px">
          <h2 class="title-h2 inverted">
            <span>···</span>
            <span class="main">START.GG</span>
            <span>···</span>
          </h2>
          <div style="width:100%; max-width: 800px"><iframe src="https://www.start.gg/tournament/registration-test-1/register/embed" frameborder="0" height="600" width="100%"></iframe></div>

        </section>
      </template>
      <template v-else>
        <section class="gfs-bg event-results" v-if="event.top_8">
          <h2 class="title-h2">
            <span>···</span>
            <span class="main">Résultats | Top 8</span>
            <span>···</span>
          </h2>

          <div class="results-ctn">
            <div v-for="(player, i) in event.top_8" class="results-mid">
              <div class="results-item" :class="i > 2 ? 'short' : ''">
                <div class="position"><span>{{ player.position }}</span></div>
                <div class="player">
                  <div class="player-team" v-if="player.teams && player.teams.length != 0">
                    <template v-for="team in player.teams">
                      <span v-if="team == 'GFS'" style="color: orange"> {{ team }}</span>
                      <template v-else>{{ team }}</template> |
                    </template>
                  </div>
                  <div class="player-name">{{ player.username}}</div>
                </div>
              </div>
              <div class="ratio">
                <div class="numbers"><span>{{ player.win_count }}</span><span>{{ player.loss_count }}</span></div>
                <div class="bars">
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="event-details-vods-wrapper" v-if="event.vods">
          <div class="event-details-vods">

            <h2 class="title-h2">
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              VODs des matchs
            </h2>
            <div class="event-details-vods-content">
              <div class="event-details-vods-content-left">
                <iframe :src="event.vods[0]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div class="event-details-vods-content-right">
                <template v-for="(vod, i) in event.vods">
                  <iframe  v-if="i != 0" :index="i" :src="vod" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </template>
              </div>
            </div>
            <div class="event-details-button">
              <a class="button" target="_blank" :href="event.vods_playlist"><span>Voir toutes les vidéos</span></a>
            </div>
          </div>
        </section>
        <section class="event-details-photos-wrapper gfs-bg" v-if="event.photos">
          <div class="event-details-photos">
            <h2 class="title-h2">
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
              Galerie photo
            </h2>
            <div class="event-details-photos-content">
              <template v-for="(photo, i) in event.photos">
                <img :src="'/img/events/' + photo" alt="photo" />
              </template>
            </div>
            <div class="event-details-button">
              <a class="button" target="_blank" :href="event.drive"><span>Voir toutes les photos</span></a>
            </div>
          </div>
        </section>

      </template>

    </main>
    <PartnersBand></PartnersBand>
    <Footer></Footer>
  </div>
</template>


<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import PartnersBand from "~/components/PartnersBand.vue";
import {replaceEmptyImage} from "~/composables/eventUtils.ts";
import { ref } from "vue";
import data from "~/assets/json/data.json";



const route = useRoute()
const event = ref(data.events[route.params.id]);

useHead({
  title: event.value.name
})

const addSpan = (text: string) => {
  let temp = text.split(" ");
  temp[temp.length - 2] = "<span>" + temp[temp.length - 2] + "</span>";
  return temp.join(" ");
}


</script>