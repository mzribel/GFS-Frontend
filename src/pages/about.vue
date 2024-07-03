<template>
  <div id="content">
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <BigTitle style="padding: 70px 0" title="A Propos" surtitle="La belle histoire de la" subtitle="Gensokyo Fantastic <span>Souls</span>"/>
      <section class="about gfs-bg">
        <div class="story-ctn">
          <div class="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam asperiores esse illo laboriosam, quidem ratione? Deleniti, ducimus exercitationem iure neque quis quisquam sed sunt. Alias blanditiis fuga rerum soluta!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, atque blanditiis doloremque ea illo incidunt itaque nesciunt obcaecati placeat praesentium provident qui rem reprehenderit sapiente soluta sunt! Atque, porro.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, atque aut corporis dicta earum eius necessitatibus odit omnis optio, perferendis quasi reiciendis veritatis! Delectus dolore doloremque sapiente tempore vitae!</p>
          </div>
            <div class="img">
            <img src="../assets/img/1.png" alt=""></div>
        </div>
      </section>
      <section class="about">
        <div class="story-ctn">
          <div class="img">
            <img src="../assets/img/3.png" alt=""></div>
          <div class="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam asperiores esse illo laboriosam, quidem ratione? Deleniti, ducimus exercitationem iure neque quis quisquam sed sunt. Alias blanditiis fuga rerum soluta!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, atque blanditiis doloremque ea illo incidunt itaque nesciunt obcaecati placeat praesentium provident qui rem reprehenderit sapiente soluta sunt! Atque, porro.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, atque aut corporis dicta earum eius necessitatibus odit omnis optio, perferendis quasi reiciendis veritatis! Delectus dolore doloremque sapiente tempore vitae!</p>
          </div>
        </div>
      </section>
      <section class="about gfs-bg">
        <div class="story-ctn flex end">
          <div class="thanks">Du fond du coeur, <span>merci</span> à tous ♥️<br><span>· · · · ·</span></div>

          <div class="img">
            <img src="../assets/img/4.png" alt=""></div>
          <div class="sign">Gensokyo Fantastic Souls - GFS Esport</div>
        </div>
      </section>

    </main>
    <PartnersBand></PartnersBand>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import PartnersBand from "~/components/PartnersBand.vue";

useHead({
  title: "A propos"
})
</script>