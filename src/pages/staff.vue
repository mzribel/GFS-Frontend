<template>
  <div id="content">
    <header>
      <NavBar></NavBar>
    </header>
    <main class="pt-nav-h font-josefin">
      <BigTitle style="padding: 70px 0" title="Staff" surtitle="Pour faire tourner la GFS, il faut" subtitle="Beaucoup trop <span>de monde</span>" />
      <template v-if="data.staff">
        <section class="content-section gfs-bg">


        <div v-for="(v, k, i) in data.staff" class="staff-group">


          <h2 class="title-h2 inverted">
            <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
            <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
            <Icon class="icon" name="material-symbols:arrow-forward-ios-rounded" />
            {{ k }}
          </h2>
          <div v-if="v" class="staff-ctn" :class="i == 0 ? 'col-3' : 'col-4'">
            <template v-for="player in v">
              <PlayerCard :player="player" :role="player.role" :is_inverted="true"></PlayerCard>
            </template>
          </div>


        </div>

        </section>
      </template>

    </main>
    <PartnersBand></PartnersBand>
    <Footer></Footer>
  </div>
</template>
<script setup>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import PartnersBand from "~/components/PartnersBand.vue";
import data from "~/assets/json/data.json"

useHead({
  title: "Staff"
})

</script>