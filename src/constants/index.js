import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitIcon7,
  benefitIcon8,
  benefitImage2,
  chromecast,
  disc02,
 
  discordBlack,
  facebook,

  file02,

  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,

  plusSquare,
 
  recording01,
  recording03,

  searchMd,

  sliders04,
 
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Début",
    url: "#debut",
  },
  {
    id: "1",
    title: "Concepts",
    url: "#concept",
  },
  {
    id: "2",
    title: "Schéma",
    url: "#schema",
  },
  {
    id: "3",
    title: "Enjeux",
    url: "#enjeu",
  },
  {
    id: "4",
    title: "Footer",
    url: "#footer",
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "La déforestation",
  "La pollution",
  "Le changement climatique",
  "La surexploitation",
  "La perte de biodiversité",
];

export const brainwaveServices2 = [
  "Transports",
  "Industries",
  "Bâtiments",
  "Agriculture et élevage",
  "Production d’énergie",
];

export const brainwaveServices3 = [
  "Transition énergétique",
  "Transports durables",
  "Agroforesterie",
  "Efficacité énergétique",
  "Techniques de capture du CO₂",
];

export const brainwaveServices4 = [
  "Montée des eaux à Kiribati",
  "Acidification des océans",
  "Pollution et santé",
  "Perte de biodiversité",
  "Incendies de forêts",
];
export const brainwaveServices5 = [
  "La forêt est 9 % de la Terre",
  "La forêt est un outil de stockage du CO₂",
  "1 personne sur 8 a directement besoin des forêts",
  "L'agriculture est sa cause principale",
  "En 30 ans on a perdu une quantité équivalente à la Libye",
];
export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];






export const collabApps = [
  {
    id: "0",
    title: "Écosystème",
    icon: benefitIcon8,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Radiatif",
    icon: benefitIcon7,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Biodiversité",
    icon: benefitIcon6,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Corridor",
    icon: benefitIcon5,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Biomes",
    icon: benefitIcon4,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Écologie",
    icon: benefitIcon3,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Interactions",
    icon: benefitIcon2,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Gulf Stream",
    icon: benefitIcon1,
    width: 38,
    height: 32,
  },
];



export const benefits = [
  {
    id: "0",
    title: "L'Écologie",
    text: "Étude des interactions entre les organismes vivants et leur environnement, avec le milieu physique ou avec d'autres êtres vivants.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "L'Écosystème",
    text: "Ensemble d’interactions entre les organismes et leur environnement physique, ils forment la biosphère, l’ensemble des zones où la vie est possible sur Terre.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon8,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Les Biomes",
    text: "Grandes zones climatiques regroupant des écosystèmes similaires, qui sont influencés par des facteurs abiotiques et biotiques.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Interactions Biologiques",
    text: "Dans un écosystème, un organisme peut en manger un autre, deux espèces peuvent tirer profit de leur relation ou lutter pour une ressource limitée, vivre au dépens d'un autre ou encore profiter d'une autre espèce sans lui nuire.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "La Biodiversité",
    text: "Essentielle à la stabilité des écosystèmes, plus un écosystème est diversifié, plus il résiste aux perturbations grâce aux interactions biologiques.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Les Corridors Écologiques",
    text: "Passages permettant aux espèces de se déplacer entre des habitats fragmentés qui empêche les espèces de migrer et réduit la diversité génétique et augmente le risque d’extinction.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "Le Forçage Radiatif",
    text: "La différence entre l’énergie solaire absorbée par la Terre et celle renvoyée dans l’espace. Si ce forçage est positif, la Terre se réchauffe car il y a plus d’énergie retenue.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon7,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Le Gulf Stream",
    text: "Courant chaud transportant la chaleur vers l’Europe, il ralentit à cause du réchauffement et donc peut provoquer des hivers plus froids en Europe et des étés plus chauds.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },

  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
