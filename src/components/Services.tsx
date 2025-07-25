import Section from "./Section";
import Heading from "./Heading";
import { assets } from "../assets";
import { logoServices, logoServices2, logoServices3 } from "../tout";
// import { logoServices, logoServices2, logoServices3, logoServices4, logoServices5 } from "../tout";

import {
  
  Gradient,
  
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
   <Section id="enjeu"> 
  <div className="container">
    <Heading
      title="Les Grands Matchs d'Inès."
      text="Vainqueure de l'EuroChallenger en 2021, Championne d'Europe en 2023 avec la France et vainqueure de la Saison Régulière de l'A10 avec Rhode Island en 2023."
    />

    <div className="relative">
      {/* Bloc : Inès vs Duquesne */}
      <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
          <img
            className="w-full h-full object-cover md:object-right"
            width={800}
            alt="Match Ines vs Duquesne"
            height={730}
            src={assets.service7}
          />
          <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
        </div>
        <div className="relative z-1 max-w-[17rem] ml-auto">
          <h4 className="h4 mb-4">Inès vs Duquesne</h4>
          <ul className="body-2">
            {logoServices.map((item, index) => (
              <li key={index} className="flex items-start py-4 border-t border-n-6">
                <img width={24} height={24} src={assets.check} />
                <p className="ml-4">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
      </div>

      {/* Bloc : Inès vs Lettonie */}
      <div className="relative z-1 flex items-center h-[39rem] mb-5 mt-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
          <img
            className="w-full h-full object-cover md:object-right"
            width={800}
            alt="Match Ines vs Lettonie"
            height={730}
            src={assets.service4}
          />
          <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
        </div>
        <div className="relative z-1 max-w-[17rem] ml-auto">
          <h4 className="h4 mb-4">Inès vs Lettonie</h4>
          <ul className="body-2">
            {logoServices2.map((item, index) => (
              <li key={index} className="flex items-start py-4 border-t border-n-6">
                <img width={24} height={24} src={assets.check} />
                <p className="ml-4">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
      </div>

      {/* Bloc : Inès vs Espagne */}
      <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
          <img
            className="w-full h-full object-cover md:object-right"
            width={800}
            alt="Match Ines vs Espagne"
            height={730}
            src={assets.service1}
          />
          <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
        </div>
        <div className="relative z-1 max-w-[17rem] ml-auto">
          <h4 className="h4 mb-4">Inès vs Espagne</h4>
          <ul className="body-2">
            {logoServices3.map((item, index) => (
              <li key={index} className="flex items-start py-4 border-t border-n-6">
                <img width={24} height={24} src={assets.check} />
                <p className="ml-4">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
      </div>

      {/* Bloc : La 6e Extinction (déplacé ici) */}
      <div className="relative z-1 grid gap-5">
        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={assets.service2}
              className="h-full md:h-[160%] lg:h-[198%] xl:h-[260%] 2xl:h-[270%] w-full object-cover"
              width={630}
              height={750}
              alt="Ines championne de basketball"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
            <h4 className="h4 mb-4">Finals MVP</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              Inès termine MVP de la finale de l'EuroBasket U20 Féminin avec la France en 2023.
            </p>
          </div>
        
        </div>
      </div>

      <Gradient />
    </div>
  </div>
</Section>


  );
};

export default Services;
