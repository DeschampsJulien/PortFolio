<script setup>

</script>

<template>

    <h1 class="text-shadow">Julien Deschamps</h1>
    <p class="text-shadow">Formation développeur Web et Web Mobile</p>
    <p class="text-shadow">La meilleure façon de prévenir l'avenir est de le créer!</p>

    <div class="flex-row">

        <!-- Début zone Présentation -->
        <section class="presentation">
            <h2 class="presentation-titre">Mon histoire</h2>
            <p class="presentation-texte">
                A la recherche, depuis quelques temps, d'une nouvelle activité professionnelle, les métiers du Web ont suscité ma curiosité.
                Ainsi, poussé par cette envie d'en savoir plus sur cette technologie si présente dans notre quotidien, me voilà parti pour trouver des réponses.  
                De nombreux langages informatiques, jargon technique et outils de développement entourent ce métier, il n'est pas si facile de s'y retrouver !  
                Une découverte dans un cadre professionnel me semble essentiel avant toute chose.
                La chance, une opportunité, un codeur passionné par le développement Web m'a initié au premier langage, semaine après semaine je me suis pris aux
                jeux de la création! Pour aujourd'hui vous présenter mon Portfolio.     
            </p>
        </section>
        <!-- Fin zone Présentation -->
        
        <div class="flex-column">

            <!-- Début zone Projet PortFolio -->
            <section class="projet">
                <h2 class="text-shadow">Projet PortFolio</h2>
                <a href="../public/projet_portfolio.pdf" target="_blank"><img class="projet-img" src="../assets/images/logo_pdf.jpg" alt="Logo PDF"></a>
            </section>
            <!-- Fin zone Projet PortFolio -->
            
            <!-- Début zone Diaporama -->
            <div class="diaporama">
                <div class="slider-container">
                    <div class="menu">
                        <label for="slide-dot-1"></label>
                        <label for="slide-dot-2"></label>
                        <label for="slide-dot-3"></label>
                    </div>

                    <input class="slide-input" id="slide-dot-1" type="radio" name="slides" checked>
                    <img class="slide-img" src="https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide1.jpg" alt="Photo paysage">

                    <input class="slide-input" id="slide-dot-2" type="radio" name="slides">
                    <img class="slide-img" src="https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg" alt="Photo paysage">

                    <input class="slide-input" id="slide-dot-3" type="radio" name="slides">
                    <img class="slide-img" src="https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg" alt="Photo paysage">
                </div>
            </div> 
            <!-- Fin zone Diaporama -->

        </div>   
    </div>
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
h2 {
    color: white;
    font-size: xxx-large; 
    font-family: "Raleway", sans-serif; 
}
p {
    font-size: xx-large;
    text-align: center;
    font-family: "Lato", sans-serif;
}
.text-shadow {
    text-shadow: 5px 5px 5px gray;
}
.presentation-titre {
    color: black;
    font-size: xx-large;
    margin: 50px; 
    font-family: "Raleway", sans-serif; 
     
}
.presentation-texte {
    color: black;
    font-size: x-large;
    margin:20px;
    text-indent: 50px;
    text-align: justify;
    font-family: "Lato", sans-serif;
}
.flex-row {
    width: 100%;
    display: flex;
    margin-top: 80px;
} 
.flex-column {
    width: 60%;
    display: flex;
    flex-direction: column;
}

/* Début zone Présentation */
.presentation {
    background-color: white; 
    border-radius: 50px;
    width: 35%;
    margin-right: 5%;
    padding-bottom: 10px;      
}
/* Fin zone Présentation */

/* Début zone Projet PortFolio  */
.projet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 50px;
    height: 43%;
    border: 8px solid white; 
}
.projet-img {
    width: 170px;
    height: 100px;
    border: 1px solid black;
    border-radius: 5px;
    -webkit-animation: heartbeat 3s infinite;
	        animation: heartbeat 3s infinite;
}
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
/* Fin zone Projet PortFolio */

/* Début zone Diaporama */
.diaporama {
    background-color: white;
    border-radius: 50px;
    height: 50%;
    margin-top: 7%;
    border: 8px solid white;   
}
img {
    max-width: 100%;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
}
.slider-container {
    max-width: 800px;
    position: relative;
    margin: auto;
    height: 350px;
    overflow: hidden;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
}
.menu {
    position: absolute;
    left: 0;
    z-index: 11;
    width: 100%;
    bottom: 0;
    text-align: center;
}
.menu label {
    cursor: pointer;
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50px;
    margin: 0 0.2em 1em;
}
.menu label:hover,.menu label:focus {
    background: #1c87c9;
}
.slide-input{
    opacity: 0;
}
.slide-img {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 10;
    transition: left 0s 0.75s;
}
[id^="slide"]:checked + .slide-img {
    left: 0;
    z-index: 100;
    transition: left 0.65s ease-out;
}
/* Fin zone Diaporama */
</style>