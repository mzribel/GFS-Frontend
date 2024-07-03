<template>
  <div class="navbar-ctn">
    <nav class="navbar-wrapper">
      <div class="nav-left">
        <div class="nav-left-links">
          <NuxtLink to="/about"><span class="link-underline">A Propos</span></NuxtLink>
          <div to="/teams" class="dropdown-container">
            Equipes
            <Icon name="material-symbols:keyboard-arrow-up" class="icon"></Icon>
            <div class="dropdown">
              <NuxtLink to="/teams/ssbu"><span class="link-underline inverted">Smash Bros. Ultimate</span></NuxtLink>
              <NuxtLink to="/staff"><span class="link-underline inverted">Staff</span></NuxtLink>
            </div>
          </div>
          <NuxtLink to="/events"><span class="link-underline">Events</span></NuxtLink>
        </div>
      </div>
      <div class="nav-left-logo"><NuxtLink to="/"><img src="~/assets/img/icons/gfs/gfs_small.png" alt=""></NuxtLink></div>
      <div id="nav-right" class="nav-right">
        <a href="https://discord.gg/BeGUDdrr"><img src="~/assets/img/icons/socials/discord_icon.svg" alt=""></a>
        <a href="https://twitter.com/GFS_Esport"><img src="~/assets/img/icons/socials/twitter_icon.svg" alt=""></a>
        <a href=""><img src="~/assets/img/icons/socials/tiktok_icon.svg" alt=""></a>
        <a href="https://www.instagram.com/gfs_esport_/"><img src="~/assets/img/icons/socials/instagram_icon.svg" alt=""></a>
        <a href="https://www.twitch.tv/gfs_esport"><img src="~/assets/img/icons/socials/twitch_icon.svg" alt=""></a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>
