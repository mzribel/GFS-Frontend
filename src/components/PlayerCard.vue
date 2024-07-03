<template>
  <div class="player-card" :class="is_inverted? 'inverted' : ''">
    <div class="player-card-header">
      <div class="player-name">
        <template v-if="player.name"><span>{{ player.name }}</span> A.K.A.</template>
      </div>
      <div class="player-tag">
        <span class="text-primary-color">{{ player.username }}</span>
        <img :src="`https://flagsapi.com/${player.region}/flat/32.png`">
      </div>
      <div class="player-role">{{ role }}</div>
    </div>
    <div class="player-card-img">
      <div class="decoration top"></div>
      <div class="player-pfp">
        <img v-if="player.img" :src="`../img/players/${player.img}`" alt="">
        <img v-else src="~/assets/img/players/placeholder.png">
        <div class="player-characters">
          <div class="main">
            <template v-if="player.characters && player.characters.main">
              <img :src="`../img/characters/${player.characters.main.name}_${player.characters.main.skin}.png`" alt="">
            </template>
          </div>
          <div class="secondaries">
            <template v-if="player.characters && player.characters.secondaries">
              <img v-for="char in player.characters.secondaries" :src="`../img/characters/${char.name}_${char.skin}.png`" alt="">
            </template>
          </div>


        </div>
      </div>
      <div class="decoration bottom">
      </div>
    </div>
    <div v-if="player.socials" class="player-card-footer">
      <template v-for="(v, k) in player.socials">
        <a :href="`${v}`" target="_blank"><img :src="`../img/socials/${k}_icon.svg`" alt=""></a>

      </template>


    </div>
  </div>
</template>

<script setup>
defineProps({
  player: {
    type: Object,
    required: true
  },
  role: {
    type: String,
    default: "Player"
  },
  is_inverted: {
    type: Boolean,
    default: false
  }
})

</script>