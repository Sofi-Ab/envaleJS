// tableau des donnees 
let commandeTbody = document.querySelector('#commandetable');
console.log(commandeTbody);
const commandeData = [
    {
        commandeNum: '0001',
        laboratoireName: 'Enval',
        analyseDate: '09/03/2023',
        statu: 'En cours'
    },
    {
        commandeNum: '0002',
        laboratoireName: 'Enval',
        analyseDate: '03/03/2023',
        statu: 'En cours'
    },
    {
        commandeNum: '0004',
        laboratoireName: 'codeloccol',
        analyseDate: '12/03/2023',
        statu: 'En cours'
    },
    {
        commandeNum: '0002',
        laboratoireName: 'ANSI',
        analyseDate: '10/03/2023',
        statu: 'En cours'
    },
    {
        commandeNum: '0002',
        laboratoireName: 'ADU',
        analyseDate: '11/03/2023',
        statu: ' En cours'
    },
    {
        commandeNum: '0002',
        laboratoireName: 'CIPMEN',
        analyseDate: '11/03/2023',
        statu: ' En cours'
    },
    {
        commandeNum: '0002',
        laboratoireName: 'ANSI',
        analyseDate: '11/03/2023',
        statu: ' terminer'
    },

    {
        commandeNum: '0002',
        laboratoireName: 'ADU',
        analyseDate: '13/03/2023',
        statu: 'terminer'
    },
    {
        commandeNum: '0002',
        laboratoireName: 'ADU',
        analyseDate: '15/03/2023',
        statu: 'terminer'
    },
    
];
const afficherCommandes = (data) => {
    commandeTbody.innerHTML = '';

    data.forEach(el => {
        commandeTbody.innerHTML += `
            <tr>
                <td class="text-center" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809);">${el.commandeNum}</td>
                <td class="text-center" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809);">${el.laboratoireName}</td>
                <td class="text-center" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809);">${el.analyseDate}</td>
                <td class="text-center" style="border-right: solid 1px; border-color:rgba(187, 186, 186, 0.809); color: red;">${el.statu}</td>
                <td class="text-center"><button class="btn w-50 fw-bolder btn_com" style="background-color:#1c849dde; color:white;">Voir</button></td>
            </tr>`;
    });
};

// Appel de la fonction pour afficher les données
afficherCommandes(commandeData);

const inputSearchcommande = document.getElementById("search");
console.log(inputSearchcommande);

// Fonction de filtrage
const filterDataCommande = (searchTermCom) => {
    searchTermCom = searchTermCom.toLowerCase();
    const filteredData = commandeData.filter(element => {
        return (
            element.commandeNum.toLowerCase().includes(searchTermCom) ||
            element.laboratoireName.toLowerCase().includes(searchTermCom) ||
            element.analyseDate.includes(searchTermCom)
        );
    });
    afficherCommandes(filteredData);
};

// Écouteur d'événement pour la saisie de recherche
inputSearchcommande.addEventListener('input', (event) => {
    const searchTermCom = event.target.value.trim();
    filterDataCommande(searchTermCom);
});

// Afficher toutes les données initiales au chargement de la page
afficherCommandes(commandeData);

// Ajout d'icônes de tri pour chaque colonne
const iconeElements = document.querySelectorAll(".bi");
 // Inverser l'ordre de tri
 let triAscendant = true;
console.log(iconeElements);

iconeElements.forEach((icone, index) => {
    icone.addEventListener("click", () => {
        triAscendant = !triAscendant;
        // Tri des données en fonction de la colonne sélectionnée
        commandeData.sort((a, b) => {
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
        afficherCommandes(commandeData);
    });
});
