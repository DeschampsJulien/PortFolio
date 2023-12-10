<script setup>

/* Déclaration du Router */
import { RouterView } from 'vue-router'

/* Déclaration des components utiliser dans le Template */ 
import BarreNavigation from './components/BarreNavigation.vue'
import LiensReseauxSociaux from './components/LiensReseauxSociaux.vue'

</script>

<template>

  <!-- Lien d'ancrage  -->
  <header id="hautDePage">
    <div class="logo">
      <img src="@/assets/logos/portfolio.png" alt="Logo Portfolio">
    </div>    
    <BarreNavigation />
  </header>

  <main>
    <RouterView />
    <div class="top-page">

      <!-- Déclaration d'ancrage -->
      <a href="#hautDePage">
        <img class="top-page-logo" src="@/assets/logos/up-page.png" alt="Vue logo">
      </a>
    </div>
  </main>
      
  <footer>
    <p>Portfolio remis à jour le <time datetime="2023-09-28">09/12/2023</time></p>
    <LiensReseauxSociaux />
    <em>Copyright 2023</em> 
  </footer> 
</template> 

<style scoped>
header {
  border-bottom: 2px solid black;
  background-color: white;
  margin-bottom: 30px; 
}
main{
  margin: 5%; 
}
footer{
  border-top: 2px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  display: flex;
  justify-content: center;
}
.top-page{
  display: flex;
  justify-content: flex-end;
  margin: 40px 0px 0px 0px;
}
.top-page-logo{
  border-radius: 50%;
  border: 2px solid black;
}
</style>
