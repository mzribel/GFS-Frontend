<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <div class="ssbu-mural-wrapper">
        <img src="~/assets/img/backgrounds/mural.png" class="ssbu-mural" alt="">
        <!--      <img src="~/assets/img/cover.jpg" class="object-cover object-center w-full h-full" alt="">-->
      </div>
      <BigTitle title="Ultimate" subtitle="Super Smash Bros. <span>Ultimate</span>" surtitle="Notre équipe" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias assumenda culpa dignissimos distinctio, eligendi enim explicabo hic ipsum iure minima, officiis praesentium quaerat quam quia rem tenetur ut! Consequuntur corporis, cupiditate debitis dolorem esse facere ipsa itaque molestiae mollitia natus nisi non odio, optio, pariatur rem repudiandae voluptate voluptatem."/>
      <section class="players-section">
        <div class="bg"></div>

        <div v-if="data.players" class="players-ctn">
          <template v-for="player in data.players">
            <PlayerCard :has_name="false" :player="player"></PlayerCard>
          </template>

        </div>
      </section>


    </main>
    <PartnersBand></PartnersBand>
    <Footer>
    </Footer>
  </div>
</template>
<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import PartnersBand from "~/components/PartnersBand.vue";
import PlayerCard from "~/components/PlayerCard.vue";
import data from '~/assets/json/data.json';

useHead({
  title: "Equipe SSBU"
})
</script>

<style>

</style>