// Texte à afficher
const heroTitleText = "Bonjour, c'est moi, Achraf";
const heroDescText = "Je suis un développeur professionnel, diplômé du Cégep de Rosemont";

// Cibler les éléments HTML
const heroTitleElement = document.getElementById("heroTitle");
const heroDescElement = document.getElementById("heroDesc");

// Fonction pour animer le texte (effet machine à écrire)
function typeWriter(element, text, speed, callback) {
    let index = 0;

    function write() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(write, speed); // Appel récursif pour chaque lettre
        } else if (callback) {
            callback(); // Passer à l'étape suivante une fois le texte terminé
        }
    }

    write();
}

// Fonction pour réinitialiser le texte et redémarrer
function startAnimation() {
    // Réinitialiser le contenu
    heroTitleElement.textContent = "";
    heroDescElement.textContent = "";

    // Lancer l'animation de manière séquentielle
    typeWriter(heroTitleElement, heroTitleText, 100, () => {
        typeWriter(heroDescElement, heroDescText, 50, () => {
            // Ajouter un délai avant de recommencer
            setTimeout(startAnimation, 1000); // 1 seconde de pause avant de redémarrer
        });
    });
}

// Démarrer l'animation pour la première fois
startAnimation();
