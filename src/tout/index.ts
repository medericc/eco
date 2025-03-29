import { assets } from "../assets";
  
  interface NavigationItem {
    id: string;
    title: string;
    url: string;
    onlyMobile?: boolean;
  }
  
  export const navigation: NavigationItem[] = [
    { id: "0", title: "Début", url: "#debut" },
    { id: "1", title: "Concepts", url: "#concept" },
    { id: "2", title: "Schéma", url: "#schema" },
    { id: "3", title: "Enjeux", url: "#enjeu" },
    { id: "4", title: "Footer", url: "#footer" },
  ];
  
  export const styleIcons: string[] = [assets.homeSmile, assets.file02, assets.searchMd, assets.plusSquare];
  export const notificationImages: string[] = [assets.notification4, assets.notification3, assets.notification2];
  export const companyLogos: string[] = [assets.yourlogo4, assets.yourlogo2, assets.yourlogo5, assets.yourlogo, assets.yourlogo3];
  
  export const logoServices: string[] = [
    "La déforestation",
    "La pollution",
    "Le changement climatique",
    "La surexploitation",
    "La perte de biodiversité",
  ];
  
  export const logoServices2: string[] = [
    "Transports",
    "Industries",
    "Bâtiments",
    "Agriculture et élevage",
    "Production d’énergie",
  ];
  
  export const logoServices3: string[] = [
    "Transition énergétique",
    "Transports durables",
    "Agroforesterie",
    "Efficacité énergétique",
    "Techniques de capture du CO₂",
  ];
  
  export const logoServices4: string[] = [
    "Montée des eaux à Kiribati",
    "Acidification des océans",
    "Pollution et santé",
    "Perte de biodiversité",
    "Incendies de forêts",
  ];
  
  export const logoServices5: string[] = [
    "La forêt est 9 % de la Terre",
    "La forêt est un outil de stockage du CO₂",
    "1 personne sur 8 a directement besoin des forêts",
    "L'agriculture est sa cause principale",
    "En 30 ans on a perdu une quantité équivalente à la Libye",
  ];
  
  interface schemaApp {
    id: string;
    title: string;
    icon: string;
    width: number;
    height: number;
  }
  
  export const schemaApps: schemaApp[] = [
    { id: "0", title: "Écosystème", icon: assets.baseIcon8, width: 26, height: 36 },
    { id: "1", title: "Radiatif", icon: assets.baseIcon7, width: 34, height: 36 },
    { id: "2", title: "Biodiversité", icon: assets.baseIcon6, width: 36, height: 28 },
    { id: "3", title: "Corridor", icon: assets.baseIcon5, width: 34, height: 35 },
    { id: "4", title: "Biomes", icon: assets.baseIcon4, width: 34, height: 34 },
    { id: "5", title: "Écologie", icon: assets.baseIcon3, width: 34, height: 34 },
    { id: "6", title: "Interactions", icon: assets.baseIcon2, width: 26, height: 34 },
    { id: "7", title: "Gulf Stream", icon: assets.baseIcon1, width: 38, height: 32 },
  ];
  
  interface BaseItem {
    id: string;
    title: string;
    text: string;
    backgroundUrl: string;
    iconUrl: string;
    imageUrl: string;
    light?: boolean;
  }
  
  export const base: BaseItem[] = [
    { id: "0", title: "L'Écologie", 
      text: "Étude des interactions entre les organismes vivants et leur environnement, avec le milieu physique ou avec d'autres êtres vivants.",
     backgroundUrl: "./src/assets/base/card-1.svg", iconUrl: assets.baseIcon3, imageUrl: assets.baseImage2 },
    { id: "1", title: "L'Écosystème",
      text: "Grandes zones climatiques regroupant des écosystèmes similaires, qui sont influencés par des facteurs abiotiques et biotiques.",
      backgroundUrl: "./src/assets/base/card-2.svg", iconUrl: assets.baseIcon8, imageUrl: assets.baseImage2, light: true },
    { id: "2", title: "Les Biomes", 
      text: "Grandes zones climatiques regroupant des écosystèmes similaires, qui sont influencés par des facteurs abiotiques et biotiques.",
      backgroundUrl: "./src/assets/base/card-3.svg", iconUrl: assets.baseIcon4, imageUrl: assets.baseImage2 },
    { id: "3", title: "Interactions Biologiques", 
      text: "Dans un écosystème, un organisme peut en manger un autre, deux espèces peuvent tirer profit de leur relation ou lutter pour une ressource limitée, vivre au dépens d'un autre ou encore profiter d'une autre espèce sans lui nuire.",
     backgroundUrl: "./src/assets/base/card-4.svg", iconUrl: assets.baseIcon2, imageUrl: assets.baseImage2, light: true },
    { id: "4", title: "La Biodiversité", 
      text: "Essentielle à la stabilité des écosystèmes, plus un écosystème est diversifié, plus il résiste aux perturbations grâce aux interactions biologiques.",
   backgroundUrl: "./src/assets/base/card-5.svg", iconUrl: assets.baseIcon6, imageUrl: assets.baseImage2 },
    { id: "5", title: "Les Corridors Écologiques",
      text: "Passages permettant aux espèces de se déplacer entre des habitats fragmentés qui empêche les espèces de migrer et réduit la diversité génétique et augmente le risque d’extinction.",
      backgroundUrl: "./src/assets/base/card-6.svg", iconUrl: assets.baseIcon5, imageUrl: assets.baseImage2 },
    { id: "6", title: "Le Forçage Radiatif",
      text: "La différence entre l’énergie solaire absorbée par la Terre et celle renvoyée dans l’espace. Si ce forçage est positif, la Terre se réchauffe car il y a plus d’énergie retenue.",
    backgroundUrl: "./src/assets/base/card-6.svg", iconUrl: assets.baseIcon7, imageUrl: assets.baseImage2 },
    { id: "7", title: "Le Gulf Stream", 
      text: "Courant chaud transportant la chaleur vers l’Europe, il ralentit à cause du réchauffement et donc peut provoquer des hivers plus froids en Europe et des étés plus chauds.",
   backgroundUrl: "./src/assets/base/card-6.svg", iconUrl: assets.baseIcon1, imageUrl: assets.baseImage2 },
  ];
  
  interface SocialItem {
    id: string;
    title: string;
    iconUrl: string;
    url: string;
  }
  
  export const socials: SocialItem[] = [
    { id: "0", title: "Discord", iconUrl: assets.discordBlack, url: "#" },
    { id: "1", title: "Twitter", iconUrl: assets.twitter, url: "#" },
    { id: "2", title: "Instagram", iconUrl: assets.instagram, url: "#" },
    { id: "3", title: "Facebook", iconUrl: assets.facebook, url: "#" },
  ];
  