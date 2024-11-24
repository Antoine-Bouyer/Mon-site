class Guerrier { // Définition de la classe Guerrier
    constructor(nom, pointDeVie, pointAttaque, pointPrecision) {
        this.nom = nom; // Nom du guerrier
        this.pointDeVie = pointDeVie; // Points de vie du guerrier
        this.pointAttaque = pointAttaque; // Poinnts d'attaque infligés
        this.pointPrecision = pointPrecision; // Précision
    }

    attaquer(cible) { // Différentes étapes pour attaquer l'autre guerrier
        const proba = Math.random(); // Générer une probabilité entre 0 et 1
        if (proba <= this.pointPrecision) { //Si la probabilité est inférieure ou égale à la précision, l'attaque réussit
            console.log(`${this.nom} a réussi son attaque sur ${cible.nom} !`);
            cible.pointDeVie -= this.pointAttaque; // Réduire les points de vie de la cible en fonction des points d'attaque
            if (cible.pointDeVie <= 0) { // Vérifier si la cible est vaincue
                console.log(`${cible.nom} est vaincu !`);
            }
        } else {// Si la probabilité est supérieure à la précision, l'attaque échoue
            console.log(`${this.nom} a raté son attaque sur ${cible.nom}.`);
        }
        console.log(`${cible.nom} a maintenant ${cible.pointDeVie} points de vie.`);// Afficher les points de vie restants de la cible
    }
}

// Création des guerriers
const guerrier_1 = new Guerrier('Gladiateur', 50, 10, 0.5);
const guerrier_2 = new Guerrier('Lion', 50, 10, 0.5);

// Début du combat
console.log("Début du combat !");

// Boucle pour continuer le combat tant que les deux guerriers sont en vie
while (guerrier_1.pointDeVie > 0 && guerrier_2.pointDeVie > 0) {
    guerrier_1.attaquer(guerrier_2);// Gladiateur attaque Lion
    if (guerrier_2.pointDeVie > 0) {// Si Lion est encore en vie, il attaque Gladiateur
        guerrier_2.attaquer(guerrier_1);
    }
}

// Fin du combat
if (guerrier_1.pointDeVie > 0) {
    console.log(`${guerrier_1.nom} a gagné avec ${guerrier_1.pointDeVie} points de vie restants !`);
} else {
    console.log(`${guerrier_2.nom} a gagné avec ${guerrier_2.pointDeVie} points de vie restants !`);
}
