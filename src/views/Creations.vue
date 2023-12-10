<script setup>
// Déclaration des Modals utilisés dans le template 
import Curriculum from '../modal/ModalCurriculum.vue' 
import Cahier from '../modal/ModalCahierDesCharges.vue'
import Formulaire from '../modal/ModalFormulaire.vue'
import Memo from '../modal/ModalMemo.vue'

import { ref } from 'vue'

const showCurriculum = ref(false)
const showCahier = ref(false)
const showFormulaire = ref(false)
const showMemo = ref(false)
</script>

<template>

    <h1 class="text-shadow">Découverte de mes créations</h1>

    <section>
        <article>
            <h2>Curriculum</h2>
            <button id="logo-curriculum" @click="showCurriculum = true"></button>
            <p>Remis à jour le <time datetime="2023-11-28">28/11/2023</time></p>
        </article>
        <Teleport to="body" disabled="isMobile"> 
            <!-- utilisez le composant modal, passez l'accessoire -->
            <Curriculum :show="showCurriculum" @close="showCurriculum = false">
                <template #header>
                    <h3>Curriculum Julien Deschamps</h3>
                </template>
            </Curriculum>
        </Teleport>

        <article>
            <h2>Cahier des charges</h2>
            <button id="logo-cahier" @click="showCahier = true"></button>
            <p>Remis à jour le <time datetime="2023-11-28">28/11/2023</time></p>
        </article>
        <Teleport to="body" disabled="isMobile">
        <!-- utilisez le composant modal, passez l'accessoire -->
            <Cahier :show="showCahier" @close="showCahier = false">
                <template #header>
                    <h3>Cahier des charges</h3>
                </template>
            </Cahier>
        </Teleport>   
    </section>

    <section>
        <article>
            <h2>Formulaire</h2>
            <button id="logo-formulaire" @click="showFormulaire = true"></button>
            <p>Remis à jour le <time datetime="2023-11-28">28/11/2023</time></p>
        </article>
        <Teleport to="body" disabled="isMobile">
        <!-- utilisez le composant modal, passez l'accessoire -->
            <Formulaire :show="showFormulaire" @close="showFormulaire = false">
                <template #header>
                    <h3>Formulaire Dynamique</h3>
                </template>
            </Formulaire>
        </Teleport>

        <article>
            <h2>Memo HTML/CSS</h2>
            <button id="logo-memo" @click="showMemo = true"></button>
            <p>Remis à jour le <time datetime="2023-11-28">28/11/2023</time></p>
        </article>
        <Teleport to="body" disabled="isMobile">
        <!-- utilisez le composant modal, passez l'accessoire -->
            <Memo :show="showMemo" @close="showMemo = false">
                <template #header>
                    <h3>Memo HTML/CSS</h3>
                </template>
            </Memo>
        </Teleport>   
    </section> 
    
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400&display=échanger');


section{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
}
article{
    width: 280px;
    height: 300px;
    /* border: 2px solid black; */
    border: 8px solid white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
h1 {
    font-size: xxx-large;
    text-align: center;
    margin-bottom: 50px;
    font-family: "Raleway", sans-serif;
}
h2 {
    font-family: "Raleway", sans-serif; 
}
h3 {
    font-family: "Lato", sans-serif;
}
p {
    font-family: "Lato", sans-serif;
}
.text-shadow{
    text-shadow: 5px 5px 5px gray;
}
#logo-curriculum{
    height: 100px;
    width: 100px;
    background-image: url(../assets/logos/curriculum.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5%;  
}
#logo-cahier{
    height: 100px;
    width: 100px;
    background-image: url(../assets/logos/cahier-des-charges.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5%;  
}
#logo-formulaire{
    height: 100px;
    width: 100px;
    background-image: url(../assets/logos/formulaire.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5%;
}
#logo-memo{
    height: 100px;
    width: 100px;
    background-image: url(../assets/logos/memo.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5%;
}
button:hover{
    box-shadow: 10px 10px 5px 1px grey; 
    transition: box-shadow 0.5s;
}
#logo-memo:hover{
    box-shadow: 10px 10px 5px 1px black; 
    transition: box-shadow 0.5s;
}
</style>