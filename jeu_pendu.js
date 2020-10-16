/*
 *jeu_pendu.js
 */
var masqueString = "";
var masque = ['-', '-', '-', '-', '-', '-'];
var imageName = 0;

/*
 * 
 * @returns {undefined}
 */
function init() {
    // INIT INPUT
    // objet.methode()
    document.getElementById("secret").innerHTML = "";
    var objetSaisie = document.getElementById("saisie");
    // objet.attribut
    objetSaisie.value = "";
    // Quand l'utilisateur clique sur le bouton "valider"
    // On sollicite la fonction valider
    //document.getElementById("btnRate").onclick = changeImage;
    document.getElementById("btnValider").onclick = pendu;
    // INIT message
    document.getElementById("lblMessage").innerHTML = "";
//    // Pour le changement d'image par clic de l'image
//    document.getElementById("imagePendu").onclick = changeImage;

} /// init

/*
 * 
 * @returns {undefined}
 */
function changeImage() {
    // récupération de l'élément img
    var image = document.getElementById("imagePendu");
    // récupération de l'attribut
    //var attribut = image.src;
    var attribut = image.getAttribute("src");
    imageName++;
    attribut = imageName + ".jpg";

    // modification de l'attribut
    image.setAttribute("src", attribut);

} //Changement d'image

/*
 * 
 */
function pendu() {
    var saisie = document.getElementById("saisie").value;
    var deviner = "secret";
    var lettreTrouve = ['-', '-', '-', '-', '-', '-'];
    switch (saisie) {
        case 's':
            lettreTrouvee = masque[0] = saisie;
            break;
        case 'e':
            lettreTrouvee = masque[1] = saisie;
            lettreTrouvee = masque[4] = saisie;
            break;
        case 'c':
            lettreTrouvee = masque[2] = saisie;
            break;
        case 'r':
            lettreTrouvee = masque[3] = saisie;
            break;
        case 't':
            lettreTrouvee = masque[5] = saisie;
            break;
    }

    masqueString = masque.toString();

    if (deviner.indexOf(saisie) < 0) {
        changeImage();
    }
    document.getElementById("secret").innerHTML = masqueString;
    document.getElementById("saisie").value = "";

}


// Au démarrage on sollicite la fonction init
window.onload = init;
