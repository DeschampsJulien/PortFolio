// // CREATION ET MODIFICATION D'ATTRIBUTS BUTTON
// // let button = document.querySelector ("button");
// // button.setAttribute ("onclick", "clicButton()");
// // button.setAttribute ("type", "button");

// function clicButton () {
    
//     // VERIFICATION DE LA VALIDITE DES FORMULAIRES
//     let inputFirstName = document.getElementById("first-name");
//     let inputLastName = document.getElementById("last-name");
//     let inputComment = document.getElementById("message");
    
//     // SI !
//     if (inputFirstName.value == ('')){
//         document.getElementById("error-message").removeAttribute("style");
//     }
//     // ET SI !
//     else if (inputLastName.value == ('')){
//         document.getElementById("error-message").removeAttribute("style");
//     }
//     // ET SI !
//     else if (inputComment.value == ('')){
//         document.getElementById("error-message").removeAttribute("style");
//     }
//     // ALORS !
//     else {

//         // SUPPRIMER LE TEXTE D'ERREUR, SI BESOIN !
//         document.getElementById("error-message").setAttribute('style', 'display: none');

//         // CREATION ZONE DE TEXTE
//         let newDiv = document.createElement("div");
//         newDiv.setAttribute("class", "flex space-x-4 text-sm text-gray-500");
//         document.getElementById("comment-list").appendChild(newDiv);

//         let newDivName = document.createElement("div");
//         newDivName.setAttribute("class", "flex-1 py-10 border-t border-gray-200");
//         newDiv.appendChild(newDivName);

//         let newTextName = document.createElement("h3");
//         newTextName.setAttribute("class", "font-medium text-gray-900");
//         newDivName.appendChild(newTextName);

//         let newDivComment = document.createElement("div");
//         newDivComment.setAttribute("class", "prose prose-sm mt-4 max-w-none text-gray-500");
//         newDivName.appendChild(newDivComment);

//         let newTextComment = document.createElement("p");
//         newDivComment.appendChild(newTextComment);

//         // RECUPERER ET DEPLACER LA VALEUR DU PRENOM
//         let inputFirstName = document.getElementById("first-name");
//         let newTextFirstName = document.createTextNode(inputFirstName.value);
//         newTextName.appendChild(newTextFirstName);

//         // CREER UN ESPACE ENTRE LE PRENOM ET LE NOM
//         let newEspace = document.createTextNode(" ");
//         newTextName.appendChild(newEspace);
        
//         // RECUPERER ET DEPLACER LA VALEUR DU NOM
//         let inputLastName = document.getElementById("last-name");
//         let newTextLastName = document.createTextNode(inputLastName.value);
//         newTextName.appendChild(newTextLastName);
        
//         // RECUPERER ET DEPLACER LA VALEUR COMMENTAIRE
//         let inputComment = document.getElementById("message");
//         let newParagraphComment = document.createTextNode(inputComment.value);
//         newDivComment.appendChild(newParagraphComment);

//         // EFFACER LES VALEURS BALISE INPUT
//         document.getElementById("first-name").value = ('');
//         document.getElementById("last-name").value = ('');
//         document.getElementById("message").value = ('');
//     }    
// }
// export {clicButton};