<script setup>  
  import DocumentationIcon from '../assets/icons/IconDocumentation.vue'
  import ToolingIcon from '../assets/icons/IconTooling.vue'
  import EcosystemIcon from '../assets/icons/IconEcosystem.vue'
  import CommunityIcon from '../assets/icons/IconCommunity.vue'
  import SupportIcon from '../assets/icons/IconSupport.vue'

  function clicButton () {
    // VERIFICATION DE LA VALIDITE DES FORMULAIRES
    let inputName = document.getElementById("name");
    let inputMail = document.getElementById("mail");
    let inputMessage = document.getElementById("message");

    // SI !
    if (inputName.value == ('')){
        document.getElementById("error-message").setAttribute('style', 'display: block');
    }
    // ET SI !
    else if (inputMail.value == ('')){
        document.getElementById("error-message").setAttribute('style', 'display: block');
    }
    // ET SI !
    else if (inputMessage.value == ('')){
        document.getElementById("error-message").setAttribute('style', 'display: block');
    }
    // ALORS !
    else {
    document.getElementById("waits").setAttribute('style', 'display: flex');
    // SUPPRIMER LE TEXTE D'ERREUR, SI BESOIN !
    document.getElementById("error-message").setAttribute('style', 'display: none');
    // EFFACER LES VALEURS BALISE INPUT
    document.getElementById("name").value = ('');
    document.getElementById("mail").value = ('');
    document.getElementById("message").value = ('');
  }
}    
</script>

<template>
  <h1 class="text-shadow">Contact</h1>

  <!-- Message d'erreur "Tous les champs sont requis" -->
  <p id="error-message" style="display: none;">Tous les champs sont requis</p> 
  
  
  <!-- Début zone Formulaire -->
  <form action="/ma-page-de-traitement" method="post">
    <ul>
      <li>
        <label for="name">Nom&nbsp;:</label>
        <input type="text" id="name" name="user_name">
      </li>
      <li>
        <label for="mail">E-mail&nbsp;:</label>
        <input type="email" id="mail" name="user_mail">
      </li>
      <li>
        <label for="message">Message&nbsp;:</label>
        <textarea id="message" name="user_message"></textarea>
      </li>
    </ul>
    <!-- Fin zone Formulaire -->

    <div class="button">

      <!-- Ci-dessous "bouton" pour envoyer le formulaire via la balise "from" -->
      <!-- <button type="submit">Envoyer le message</button> -->
      <button v-on:click="clicButton" type="button">Envoyer le message</button>
    </div>
  </form>
  <!-- Fin zone Formulaire -->

  <!-- Début zone d'animation attent d'envoi -->
  <div  id="waits" class="loader" style="display: none;">
    <div class="loader-element"><DocumentationIcon /></div>
    <div class="loader-element"><ToolingIcon /></div>
    <div class="loader-element"><EcosystemIcon /></div>
    <div class="loader-element"><CommunityIcon /></div>
    <div class="loader-element"><SupportIcon /></div>
  </div>
  <!-- Fin zone d'animation attent d'envoi -->

</template>
  
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400&display=échanger');

h1 { 
    font-size: xxx-large;
    text-align: center;
    margin-bottom: 50px;
    font-family: "Raleway", sans-serif; 
}
.text-shadow{
    text-shadow: 5px 5px 5px gray;
}

/* Message d'erreur "Tous les champs sont requis" */
p {
  color: red;
  text-align: center;
  font-family: "Lato", sans-serif; 
}

/* Début zone Formulaire */
form {
  /* On centre le formulaire */
  margin: 0 auto;
  width: 400px;
  /* Le contour du formulaire */
  padding: 1em;
  border: 8px solid white;
  border-radius: 1em;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
form li + li {
  margin-top: 1em;
}
label {
  /* Taille et alignement uniformes */
  display: inline-block;
  width: 90px;
  text-align: right;
}
input,
textarea {
  /* On s'assure que les champs texte ont la même police
    Par défaut, les zones de texte ont une police à chasse
    fixe. */
  font: 1em sans-serif;

  /* Taille uniforme pour des champs */
  width: 300px;
  box-sizing: border-box;

  /* On utilise la même bordure que pour le formulaire */
  border: 1px solid #999;
}
input:focus,
textarea:focus {
  /* On rajoute une mise en avant pour les éléments avec
    le focus. */
  border-color: #000;
}
textarea {
  /* On aligne les textes sur plusieurs lignes avec leur
    libellé. */
  vertical-align: top;

  /* On fournit un peut d'espace pour saisir du texte. */
  height: 5em;

  /* On permet de redimensionner verticalement. */
  resize: vertical;
}
.button {
  /* On aligne les boutons avec les champs texte. */
  padding-left: 90px; /* La même taille que les libellés */
  margin-top: 20px;
}
button {
  /* Une marge supplémentaire représentant approximativement
    le même espace qu'entre les libellés et les champs. */
  margin-left: 2.5em;
  padding: 5px;
  border-radius: 5px;
}
/* Fin zone Formulaire */

/* Début zone d'animation attent d'envoi */
.loader {
  width: 20%;
  margin-left: 50%;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.loader-element {
    color: white;
}
.loader-element:nth-child(1) {
  animation: preloader .6s ease-in-out alternate infinite;
}
.loader-element:nth-child(2) {
  animation: preloader .6s ease-in-out alternate .2s infinite;
}
.loader-element:nth-child(3) {
  animation: preloader .6s ease-in-out alternate .4s infinite;
}
.loader-element:nth-child(4) {
  animation: preloader .6s ease-in-out alternate .6s infinite;
}
.loader-element:nth-child(5) {
  animation: preloader .6s ease-in-out alternate .8s infinite;
}
@keyframes preloader {
  100% { transform: scale(2); }
}
/* Fin zone d'animation attent d'envoi */
</style>


