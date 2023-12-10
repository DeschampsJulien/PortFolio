<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>

  <!-- Fermeture du modal sur l'ensemble de la page -->
  <Transition name="modal" @click="$emit('close')">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <p>Remis à jour le <time datetime="2023-11-28">28/11/2023</time></p>
            <p>Réalisé via Virtual Studio code</p>
            <em>HTML / CSS / JavaScript</em>
            <div class="lien">
              <a href="https://github.com/DeschampsJulien/Exercice-Dynamiser.git" target="blank">Lien: https://github.com</a>
            </div>
            <div class="lien">
              <a href="../public/formulaire/index.html" target="blank"><em>Lien: Formulaire.html</em></a>
            </div> 
          </slot>
        </div>

        <!-- <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </slot>
        </div> -->

      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
/* Les styles suivants sont automatiquement appliqués aux éléments avec
 * transition="modal" lorsque leur visibilité est basculée
 * par Vue.js.
 *
 * Vous pouvez facilement jouer avec la transition modale en éditant
 * ces styles. */
.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.lien{
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
</style>