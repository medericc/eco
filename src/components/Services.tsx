import Section from "./Section";
import Heading from "./Heading";
import { assets } from "../assets";
import { logoServices, logoServices2, logoServices3, logoServices4, logoServices5 } from "../tout";
import {
  PhotoChatMessage,
  Gradient,
  
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="enjeu">
      <div className="container">
        <Heading
          title="Les enjeux des prochaines années."
          text="Les conséquences du réchauffement climatique sont déjà visibles : voici pourquoi et comment préserver la planète"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Menaces"
                height={730}
                src={assets.service7}
              />
               <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Menaces écologiques</h4>
              
              <ul className="body-2">
                {logoServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={assets.check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Conséquences"
                height={730}
                src={assets.service6}
              />
                   <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
          
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Conséquences du réchauffement</h4>
              
              <ul className="body-2">
                {logoServices4.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={assets.check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Déforestation"
                height={730}
                src={assets.service5}
              />
                   <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
          
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">La Déforestation</h4>
              
              <ul className="body-2">
                {logoServices5.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={assets.check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div> 
          
          <div className="relative z-1 grid gap-5 ">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={assets.service2}
                  className="h-full md:h-[160%] lg:h-[198%] xl:h-[260%]  2xl:h-[270%]  w-full object-cover"
                  width={630}
                  height={750}
                  alt="extinction"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">La 6e Extinction</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Événement où un grand nombre d’espèces disparaissent, celle-ci est la première causée par l&apos;homme.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

           
          </div>
          
         
          <div className="relative z-1 flex items-center h-[39rem] mb-5 mt-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Effet de Serre"
                height={730}
                src={assets.service4}
              />
                   <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
          
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Sources d’émissions de CO₂</h4>
              
              <ul className="body-2">
                {logoServices2.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={assets.check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

            

          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Réduction"
                height={730}
                src={assets.service1}
              />
                   <div className="absolute inset-0 bg-black opacity-80 md:hidden"></div>
          
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Solutions de réduction</h4>
              
              <ul className="body-2">
                {logoServices3.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={assets.check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          <Gradient />
        </div>

        
      </div> </div> </div>
    </Section>
  );
};

export default Services;
