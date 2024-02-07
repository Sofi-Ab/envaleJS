const tBodyFactur = document.querySelector('#tBodyFactur');
const factureData = [
    {
        factureNum: '0002',
        laboratoireName: 'Biochimie',
        analyseDate: '10/03/2023'
    },
    {
        factureNum: '0003',
        laboratoireName: 'Enval',
        analyseDate: '11/03/2023'
    },
    {
        factureNum: '0004',
        laboratoireName: 'Biologie',
        analyseDate: '12/03/2023'
    },
    {
        factureNum: '0005',
        laboratoireName: 'Biochimie',
        analyseDate: '13/03/2023'
    },
    {
        factureNum: '0006',
        laboratoireName: 'Enval',
        analyseDate: '14/03/2023'
    },
    {
        factureNum: '0006',
        laboratoireName: 'Biologie',
        analyseDate: '14/03/2023'
    }
];

const factureDatas = (data) => {
    tBodyFactur.innerHTML = '';
    data.forEach(element => {
        tBodyFactur.innerHTML += `<tr>
            <td style="font-size: 18px;width: 49rem;text-align: center;font-weight: bold;border-right: solid 1px;">${element.factureNum}</td>
            <td style="font-size: 18px;width: 25em;padding: 0 40px 0 0;text-align: center;font-weight: bold;border-right: solid 1px;">${element.laboratoireName}</td>
            <td style="font-size: 18px;width:10em ;text-align: center;font-weight: bold;border-right: solid 1px;">${element.analyseDate}</td>
            <td style="font-size: 18px;width:30rem ;text-align: center;font-weight: bold;">voir</td>
        </tr>`;
    });
};

// input de recherche
const inputSearch = document.getElementById("search");

// Fonction de filtrage
const filterData = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    const filteredData = factureData.filter(element => {
        return (
            element.factureNum.toLowerCase().includes(searchTerm) ||
            element.laboratoireName.toLowerCase().includes(searchTerm) ||
            element.analyseDate.includes(searchTerm)
        );
        tBodyFactur.innerHTML = 'aucune données à afficher'
    });
    factureDatas(filteredData);
};

// Écouteur d'événement pour la saisie de recherche
inputSearch.addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim();
    filterData(searchTerm);
});

// Afficher toutes les données initiales au chargement de la page
factureDatas(factureData);

let triAscendant = true;  // Variable pour suivre l'état du tri
let iconeElements =document.querySelectorAll('.bi')
console.log(iconeElements);

iconeElements.forEach((icone, index) => {
    icone.addEventListener("click", () => {
        // Inverser l'ordre de tri
        triAscendant = !triAscendant;

        // Tri des données en fonction de la colonne sélectionnée
        factureData.sort((a, b) => {
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
        factureDatas(factureData);
    });
});