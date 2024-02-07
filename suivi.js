let suiviTbody = document.querySelector('#tbodysuivi');
let suivisearch = document.querySelector('#search');
console.log(suivisearch);
// suivi data
const suiviData = [
  
    {
        lot: 'TE202303001',
        date: '10/03/2023',
        etat: 'Non Reçu',
        rapport: ' disponible'
    },
    {
        lot: 'E20230223',
        date: '11/03/2023',
        etat: 'Reçu',
        rapport: ' disponible'
    },
    {
        lot: 'TE20230190',
        date: '12/03/2023',
        etat: 'Non Reçu',
        rapport: ' disponible'
    },
    {
        lot: 'Carbonate',
        date: '13/03/2023',
        etat: 'Non Reçu',
        rapport: ' disponible'
    },
    {
        lot: 'Conductivité electrique',
        date: '15/03/2023',
        etat: 'Reçu',
        rapport: ' disponible'
    },

    {
        lot: 'pH/Temperature',
        date: '17/03/2023',
        etat: 'Reçu',
        rapport: 'Non disponible'
    },
    {
        lot: 'Couleur Brut',
        date: '14/03/2023',
        etat: 'Reçu',
        rapport: 'Non disponible'
    },
    {
        lot: 'Cyanure libre',
        date: '19/03/2023',
        etat: 'Non Reçu',
        rapport: 'Non disponible'
    },
    {
        lot: 'TE202303001',
        date: '15/03/2023',
        etat: 'Reçu',
        rapport: 'Non disponible'
    },
    {
        lot: 'TE202303001',
        date: '20/03/2023',
        etat: 'Non Reçu',
        rapport: 'Non disponible'
    },
    {
        lot: 'Couleur Brute',
        date: '21/03/2023',
        etat: 'Reçu',
        rapport: 'Non disponible'
    }, 
];



const afficherSuivi = (data) => {
    suiviTbody.innerHTML = '';

    data.forEach(el => {
        suiviTbody.innerHTML += `
            <tr style="text-align: center;">
                <td class="dispaly" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809);  ">${el.lot}</td>
                <td class="text-center" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809);">${el.date}</td>
                <td class="text-center" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809);">${el.etat}</td>
                <td class="text-center" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809);">${el.rapport}</td>
                <td style="text-align: center;"><a href="suiviDetail.html"><button class="btn_com" style="background-color: #17A2B1; color: aliceblue;">Voir</button></a></td>
            </tr>`;
    });
};

// Appel de la fonction pour afficher les données
afficherSuivi(suiviData);

const suiviInput = document.getElementById("suivisearch");
console.log(suiviInput);

// Fonction de filtrage
const suiviDatafilter = (searchTermsuivi) => {
    searchTermsuivi = searchTermsuivi.toLowerCase();
    const filteredData = suiviData.filter(el => {
        return (
            el.lot.toLowerCase().includes(searchTermsuivi) ||
            el.date.toLowerCase().includes(searchTermsuivi) ||
            el.etat.toLowerCase().includes(searchTermsuivi) ||
            el.rapport.toLowerCase().includes(searchTermsuivi)
        );
    });
    afficherSuivi(filteredData);
};

// Écouteur d'événement pour la saisie de recherche
suivisearch.addEventListener('input', (event) => {
    const Termsuivi = event.target.value.trim();
    suiviDatafilter(Termsuivi);
});

const iconeElements = document.querySelectorAll(".bi");
console.log(iconeElements);

let triAscendant = true;

iconeElements.forEach((icone, index) => {
    icone.addEventListener("click", () => {
        // Inverser l'ordre de tri
        triAscendant = !triAscendant;

        // Tri des données en fonction de la colonne sélectionnée
        suiviData.sort((a, b) => {
            const valueA = a[Object.keys(a)[index]].toLowerCase();
            const valueB = b[Object.keys(b)[index]].toLowerCase();

            if (valueA > valueB) {
                return triAscendant ? 1 : -1;  // Ordre croissant ou décroissant
            }
            if (valueA < valueB) {
                return triAscendant ? -1 : 1;  // Ordre croissant ou décroissant
            }
            return 0;
        });

        // Réafficher les données triées
        afficherSuivi(suiviData);
    });
});