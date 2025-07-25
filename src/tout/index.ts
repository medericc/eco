import { assets } from "../assets";
  
  interface NavigationItem {
    id: string;
    title: string;
    url: string;
    onlyMobile?: boolean;
  }
  
  export const navigation: NavigationItem[] = [
    { id: "0", title: "Biography", url: "#debut" },
    { id: "1", title: "Achievements", url: "#concept" },
    { id: "2", title: "Compétitions", url: "#schema" },
    { id: "3", title: "Great Game", url: "#enjeu" },
    { id: "4", title: "Footer", url: "#footer" },
  ];
  
  export const styleIcons: string[] = [assets.homeSmile, assets.file02, assets.searchMd, assets.plusSquare];
  export const notificationImages: string[] = [assets.notification4, assets.notification3, assets.notification2];
  export const companyLogos: string[] = [assets.yourlogo4, assets.yourlogo2, assets.yourlogo5, assets.yourlogo, assets.yourlogo3];
  
  export const logoServices: string[] = [
    "19 Points",
    "5 Rebonds",
    "5 Assists",
    "1 Steal",
    "40 % à 3 Points",
  ];
  
  export const logoServices2: string[] = [
    "18 Points",
    "6 Rebonds",
    "7 Assists",
    "3 Steals",
    "25 d'Évaluation",
  ];
  
  export const logoServices3: string[] = [
 "11 Points",
    "5 Rebonds",
    "3 Assists",
    "2 Steals",
    "50 % à 3 Points",
  ];
  
  // export const logoServices4: string[] = [
  //   "Montée des eaux à Kiribati",
  //   "Acidification des océans",
  //   "Pollution et santé",
  //   "Perte de biodiversité",
  //   "Incendies de forêts",
  // ];
  
  // export const logoServices5: string[] = [
  //   "La forêt est 9 % de la Terre",
  //   "La forêt est un outil de stockage du CO₂",
  //   "1 personne sur 8 a directement besoin des forêts",
  //   "L'agriculture est sa cause principale",
  //   "En 30 ans on a perdu une quantité équivalente à la Libye",
  // ];
  
  interface schemaApp {
    id: string;
    title: string;
    icon: string;
    width: number;
    height: number;
  }
  
  export const schemaApps: schemaApp[] = [
    { id: "0", title: "Rhode Island 3", icon: assets.baseIcon8, width: 26, height: 36 },
    { id: "1", title: "Rhode Island 2", icon: assets.baseIcon7, width: 34, height: 36 },
    { id: "2", title: "Rhode Island 1", icon: assets.baseIcon6, width: 36, height: 28 },
    { id: "3", title: "Charnay", icon: assets.baseIcon5, width: 34, height: 35 },
    { id: "4", title: "Pole Espoir", icon: assets.baseIcon4, width: 34, height: 34 },
    { id: "5", title: "Euro U20", icon: assets.baseIcon3, width: 34, height: 34 },
    { id: "6", title: "Euro U18", icon: assets.baseIcon2, width: 26, height: 34 },
    { id: "7", title: "Euro U16", icon: assets.baseIcon1, width: 38, height: 32 },
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
    { id: "0", title: "Records de Pts+Ast", text: "Carla et Inès sont le duo français ayant réalisé le plus de points et de passes décisives en finale d’une grande compétition avec l’équipe de France.", backgroundUrl: "/card-1.svg", iconUrl: assets.baseIcon3, imageUrl: assets.baseImage2 },
    { id: "1", title: "Catégories Majeures", text: "Inès est la joueuse française qui a récolté le plus de points, de passes décisives et de rebonds lors d'une finale d’Eurobasket U20 féminin.", backgroundUrl: "/card-2.svg", iconUrl: assets.baseIcon8, imageUrl: assets.baseImage2, light: true },
    { id: "2", title: "Capitaine", text: "La meilleure joueuse de la finale de l’EuroBasket U20 féminin 2023 occupe le rôle de capitaine de Rhode Island dès sa saison junior.", backgroundUrl: "/card-3.svg", iconUrl: assets.baseIcon4, imageUrl: assets.baseImage2 },
    // { id: "3", title: "Interactions Biologiques", text: "Dans un écosystème, un organisme peut en manger un autre, deux espèces peuvent tirer profit de leur relation ou lutter pour une ressource limitée, vivre au dépens d'un autre ou encore profiter d'une autre espèce sans lui nuire.", backgroundUrl: "/card-4.svg", iconUrl: assets.baseIcon2, imageUrl: assets.baseImage2, light: true },
    // { id: "4", title: "La Biodiversité", text: "Essentielle à la stabilité des écosystèmes, plus un écosystème est diversifié, plus il résiste aux perturbations grâce aux interactions biologiques.", backgroundUrl: "/card-5.svg", iconUrl: assets.baseIcon6, imageUrl: assets.baseImage2 },
    // { id: "5", title: "Les Corridors Écologiques", text: "Passages permettant aux espèces de se déplacer entre des habitats fragmentés qui empêche les espèces de migrer et réduit la diversité génétique et augmente le risque d’extinction.", backgroundUrl: "/card-6.svg", iconUrl: assets.baseIcon5, imageUrl: assets.baseImage2 },
    // { id: "6", title: "Le Forçage Radiatif", text: "La différence entre l’énergie solaire absorbée par la Terre et celle renvoyée dans l’espace. Si ce forçage est positif, la Terre se réchauffe car il y a plus d’énergie retenue.", backgroundUrl: "/card-6.svg", iconUrl: assets.baseIcon7, imageUrl: assets.baseImage2 },
    // { id: "7", title: "Le Gulf Stream", text: "Courant chaud transportant la chaleur vers l’Europe, il ralentit à cause du réchauffement et donc peut provoquer des hivers plus froids en Europe et des étés plus chauds.", backgroundUrl: "/card-6.svg", iconUrl: assets.baseIcon1, imageUrl: assets.baseImage2 },
  ];
  
  interface SocialItem {
    id: string;
    title: string;
    iconUrl: string;
    url: string;
  }
  
  export const socials: SocialItem[] = [
    { id: "0", title: "Tiktok", iconUrl: assets.discordBlack, url: "https://www.tiktok.com/@ines_debroise_fan" },
    { id: "1", title: "Twitter", iconUrl: assets.twitter, url: "https://x.com/fan_inesd" },
    { id: "2", title: "Instagram", iconUrl: assets.instagram, url: "https://www.instagram.com/ines_debroise_fan/" },
    { id: "3", title: "Facebook", iconUrl: assets.facebook, url: "#" },
  ];
  