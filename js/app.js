document.addEventListener("DOMContentLoaded", () => {
    // Identifier le container existant
    const container = document.getElementById("articles-container") || document.getElementById("article-container");
    if (!container) return; // stop si aucun container trouvé

    // JSON commun des articles
    const data = {
        "articles": [
            {
                "id": 1,
                "titre": "Télescope spatial James Webb",
                "auteur": "NASA / ESA / ASC",
                "categorie": "Astronomie",
                "date": "2021-12-25",
                "resume": "Le James Webb Space Telescope (JWST) est un télescope spatial développé par la NASA avec ses partenaires internationaux, conçu pour succéder à Hubble.",
                "image": "https://www.numerama.com/wp-content/uploads/2021/09/telescope-james-webb-nasa-vue-artiste.jpg",
                "sections": [
                    { "titre": "Données générales", "contenu": "Organisation : NASA, ESA, ASC\nDate de lancement : 25 décembre 2021\nDurée prévue : 10 ans\nLieu : Ariane 5 depuis Kourou, Guyane française" },
                    { "titre": "Objectifs scientifiques", "contenu": "Observer les premières étoiles et galaxies, comprendre la formation des planètes et analyser les atmosphères d’exoplanètes." },
                    { "titre": "Caractéristiques techniques", "contenu": "Miroir primaire : 6,5 m de diamètre\nMasse : 6 200 kg\nDurée de mission prévue : 10 ans" }
                ],
                "timeline": [
                    { "date": "1996", "evenement": "Début du projet" },
                    { "date": "2002", "evenement": "Nom officiel 'James Webb Telescope'" },
                    { "date": "2011", "evenement": "Révisions scientifiques et budgétaires" },
                    { "date": "2021", "evenement": "Lancement depuis la Guyane française" }
                ],
                "hommage": { "nom": "James E. Webb", "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c3/James_E._Webb%2C_official_NASA_photo%2C_1966.jpg", "texte": "Le télescope rend hommage à James E. Webb, administrateur de la NASA entre 1961 et 1968." }
            },
            {
                "id": 2,
                "titre": "Tour Eiffel",
                "auteur": "Gustave Eiffel",
                "categorie": "Architecture",
                "date": "1889-03-31",
                "resume": "La tour Eiffel est une tour de fer puddlé de 330 mètres située à Paris, construite à l'occasion de l’Exposition universelle de 1889.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
                "sections": [
                    { "titre": "Données générales", "contenu": "Lieu : Paris, Champ-de-Mars\nHauteur : 330 m\nPoids : 10 100 tonnes\nArchitecte : Gustave Eiffel" },
                    { "titre": "Objectifs initiaux", "contenu": "La tour a été construite pour démontrer le savoir-faire français en ingénierie à l’occasion de l’Exposition universelle de 1889." },
                    { "titre": "Caractéristiques techniques", "contenu": "18 038 pièces métalliques assemblées par 2,5 millions de rivets." }
                ],
                "timeline": [
                    { "date": "1887", "evenement": "Début des travaux" },
                    { "date": "1889", "evenement": "Inauguration pour l’Exposition universelle" },
                    { "date": "1909", "evenement": "Sauvetage grâce à son utilité en radiotélégraphie" },
                    { "date": "2022", "evenement": "Réhaussement à 330 m avec une nouvelle antenne" }
                ],
                "hommage": { "nom": "Gustave Eiffel", "photo": "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hVftompAxw2uVl1wzmKnYVajOm4IUrDlug&sg", "texte": "Ingénieur français, créateur de la tour qui porte son nom." }
            },
            {
                "id": 3,
                "titre": "Mona Lisa",
                "auteur": "Léonard de Vinci",
                "date": "1503",
                "categorie": "Art",
                "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
                "resume": "La Joconde (ou Mona Lisa) est un portrait peint par Léonard de Vinci entre 1503 et 1506, considéré comme l’un des tableaux les plus célèbres au monde.",
                "sections": [
                    {
                        "titre": "Données générales",
                        "contenu": "Peintre : Léonard de Vinci\nPériode : Renaissance\nTechnique : Huile sur bois de peuplier\nLieu d’exposition : Musée du Louvre, Paris"
                    },
                    {
                        "titre": "Caractéristiques",
                        "contenu": "Dimensions : 77 × 53 cm\nStyle : Renaissance italienne\nParticularité : sourire énigmatique"
                    },
                    {
                        "titre": "Histoire",
                        "contenu": "Commandée à Florence, emportée en France par Léonard de Vinci, elle fut acquise par François Ier et est exposée au Louvre depuis le XVIIIe siècle."
                    }
                ],
                "timeline": [
                    { "date": "1503", "evenement": "Début de la réalisation à Florence" },
                    { "date": "1519", "evenement": "Arrivée en France avec Léonard de Vinci" },
                    { "date": "1797", "evenement": "Exposée au Louvre" },
                    { "date": "1911", "evenement": "Vol du tableau, retrouvé en 1913" }
                ],
                "hommage": {
                    "nom": "Léonard de Vinci",
                    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0vgRbxL-AxxfSKRppv7GFklHssaYAKHINg&s",
                    "texte": "Peintre, inventeur et scientifique de la Renaissance italienne, auteur de la Joconde."
                }
            }
        ]
    };

const isIndex = !!document.getElementById("articles-container");
  const isArticle = !!document.getElementById("article-container");

  if (isIndex) {
    data.articles.forEach(article => {
      const card = document.createElement("div");
      card.className =
        "bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col mb-4";

      card.innerHTML = `
        <a href="article.html?id=${article.id}" target="_blank">
          <img src="${article.image}" alt="${article.titre}" class="h-40 w-full object-contain rounded-md mb-4">
          <h3 class="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">${article.titre}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">${article.resume}</p>
        </a>
      `;
      container.appendChild(card);
    });
  }

if (isArticle) {
    const params = new URLSearchParams(window.location.search);
    const articleId = parseInt(params.get("id"), 10);
    const article = data.articles.find(a => a.id === articleId);

    if (!article) {
        container.innerHTML = `<p class="text-red-500 dark:text-red-400 font-bold">Article non trouvé.</p>`;
        return;
    }

    let sectionsHTML = "";
    article.sections.forEach(section => {
        if (section.titre === "Données générales") {
            let rows = "";
            section.contenu.split("\n").forEach(line => {
                const [key, value] = line.split(" : ");
                rows += `
                    <tr class="border-b border-gray-300 dark:border-gray-600">
                        <td class="font-semibold py-1 px-2 text-gray-800 dark:text-gray-200">${key}</td>
                        <td class="py-1 px-2 text-gray-700 dark:text-gray-300">${value}</td>
                    </tr>
                `;
            });

            sectionsHTML += `
                <div class="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 mt-4">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">${section.titre}</h3>
                    <table class="table-auto mt-2 w-full">
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            `;
        } else {
            sectionsHTML += `
                <h3 class="text-xl font-semibold mt-6 text-gray-900 dark:text-gray-100">${section.titre}</h3>
                <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line mt-2">${section.contenu}</p>
            `;
        }
    });

    let timelineHTML = '<div class="border-l-2 border-gray-300 dark:border-gray-600 pl-4 mt-4">';
    article.timeline.forEach(item => {
        timelineHTML += `
            <div class="mb-2">
                <span class="font-semibold text-gray-800 dark:text-gray-200">${item.date}</span> :
                <span class="text-gray-700 dark:text-gray-300">${item.evenement}</span>
            </div>
        `;
    });
    timelineHTML += "</div>";

    container.innerHTML = `
        <a href="index.html" class="text-blue-500 dark:text-blue-400 hover:underline mb-4 inline-block">← Retour aux articles</a>
        <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">${article.titre}</h1>
        <img src="${article.image}" alt="${article.titre}" class="w-full h-64 object-contain rounded mb-4">
        <p class="text-gray-700 dark:text-gray-300 mb-4">${article.resume}</p>
        ${sectionsHTML}
        <h3 class="text-xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Timeline</h3>
        ${timelineHTML}
        <h3 class="text-xl font-semibold mt-6 text-gray-900 dark:text-gray-100">Hommage</h3>
        <div class="flex flex-row gap-6">
            <img src="${article.hommage.photo}" alt="${article.hommage.nom}" class="w-48 h-48 object-contain rounded mt-2">
            <div class="flex flex-col gap-6">
                <h3 class="text-gray-900 dark:text-gray-100">${article.hommage.nom}</h3>
                <p class="text-gray-700 dark:text-gray-300 mt-2">${article.hommage.texte}</p>
            </div>
        </div>
    `;
}

}
);