
// Récupérer les éléments du DOM
const btnModifier = document.getElementById('btn_modifier');
const fileModifier = document.getElementById('file_modifier');
const btnSupprimer = document.getElementById('btn_suprimer');
const imgAvatar = document.getElementById('img_avatar');
const textarea1 = document.querySelector('#textarea-nom')
const textarea2 = document.querySelector('#textarea-mail')
const textarea3 = document.querySelector('#textarea-biblio')
const bouttonEnvoyer = document.querySelector('#envoyer')
const avatarSet = document.getElementsByClassName('avatar')
const editeCompt = document.getElementById('btn_modifier_pwd')
const btnDeletPwd = document.getElementById('btn_suprimer_compte')
console.log(btnDeletPwd);

// Récupérer le modal
const modal = document.getElementById("myModal");

// Récupérer le bouton pour ouvrir le modal


// Récupérer l'élément de fermeture du modal
const spanClose = document.getElementsByClassName("close")[0];




// Vérifier s'il existe déjà un avatar dans le localStorage
const avatarPath = localStorage.getItem('avatarPath');
if (avatarPath) {
    imgAvatar.src = avatarPath;
}

// Ajouter un écouteur d'événement pour le bouton "Modifier"
btnModifier.addEventListener('click', function() {
    fileModifier.click();
});

// Ajouter un écouteur d'événement pour le changement de fichier
fileModifier.addEventListener('change', function(event) {
    const newAvatarFile = event.target.files[0];
    if (newAvatarFile) {
        const reader = new FileReader();
        reader.onload = function() {
            imgAvatar.src = reader.result;
            avatarSet[0].children[0].src= reader.result;
            localStorage.setItem('avatarPath', reader.result);
        };
        reader.readAsDataURL(newAvatarFile);
    }
});

// Ajouter un écouteur d'événement pour le bouton "Supprimer"
btnSupprimer.addEventListener('click', function() {
    console.log(imgAvatar);
    avatarSet[0].children[0].src= 'Logo/avatar.jpg';
    imgAvatar.src = 'Logo/avatar.jpg'; // Remplacer l'avatar par l'image par défaut
    localStorage.removeItem('avatarPath'); // Supprimer l'avatar du localStorage
});

// formularaire de recherche
// Ajouter un écouteur d'événement pour le bouton "Envoyer"
bouttonEnvoyer.addEventListener('click', function() {
    // Récupérer les valeurs des textarea
    const nom = textarea1.value;
    const mail = textarea2.value;
    const biblio = textarea3.value;

    // Vérifier si les valeurs ne sont pas vides avant de les stocker
    if (nom && mail && biblio) {
        // Stocker les valeurs dans le localStorage
        localStorage.setItem('nom', nom);
        localStorage.setItem('mail', mail);
        localStorage.setItem('biblio', biblio);
        modal.style.display = "block";
    } else {
        // Afficher un message d'erreur si les valeurs sont vides
        alert('Veuillez remplir tous les champs.');
        modal.style.display = "none";
    }
});
// modale
// Quand l'utilisateur clique sur <span> (x), fermer le modal
spanClose.onclick = function() {
  modal.style.display = "none";
}

// Quand l'utilisateur clique en dehors du modal, le fermer
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modification du mot de pass

// Obtention du bouton pour ouvrir le modal
var btnModifierMotDePasse = document.getElementById("btnModifierMotDePasse");

// Obtention de l'élément modal
let modal2 = document.getElementById("modal2");

// Obtention du bouton pour fermer le modal
var spanCloseCompt = document.getElementsByClassName("modal-close")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrir le modal
editeCompt.onclick = function() {

    modal2.style.display = "block";
}

// Lorsque l'utilisateur clique sur le bouton de fermeture (×), fermer le modal
spanCloseCompt.onclick = function() {
    modal2.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors du modal, fermer le modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}

/// Supprimer le mot de passe du localStorage
btnDeletPwd.addEventListener('click', function() {
    localStorage.removeItem("user1");
    alert("Le compte a été supprimé avec succès.");
    // Rediriger vers une autre page ou effectuer d'autres actions si nécessaire
});

// Soumission du formulaire pour modifier le mot de passe
document.getElementById("formModifierMotDePasse").onsubmit = function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Récupération des nouveaux mots de passe
    var nouveauMotDePasse = document.getElementById("nouveauMotDePasse").value;
    var confirmationMotDePasse = document.getElementById("confirmationMotDePasse").value;

    // Vérification si les mots de passe sont identiques
    if (nouveauMotDePasse === confirmationMotDePasse) {
        // Mettre à jour les informations d'utilisateur dans le stockage local
        var utilisateur = JSON.parse(localStorage.getItem("user1")); 
        utilisateur.pwd = nouveauMotDePasse;
        localStorage.setItem("user1", JSON.stringify( utilisateur.pwd )); 

        // Fermer le modal
        modal2.style.display = "none"
        alert("Le mot de passe a été mis à jour avec succès !");
    } else {
        // Afficher un message d'erreur si les mots de passe ne correspondent pas
        alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
    }
}
