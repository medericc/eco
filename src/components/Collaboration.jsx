import { brainwaveSymbol } from "../assets";
import { collabApps } from "../constants";
import Heading from "./Heading";

import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses id="schema">
        <Heading title="Les Concepts en Schéma" className="text-center" />

    <div className="container flex justify-center">
      <div className="max-w-[25rem] flex justify-center">
        {/* Conteneur principal centré */}
        <div className="relative flex w-[22rem] aspect-square border border-n-6 rounded-full scale-75 md:scale-100">
          {/* Cercle intérieur */}
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img src={brainwaveSymbol} width={48} height={48} alt="vie" />
              </div>
            </div>
          </div>

          {/* Icônes autour */}
          <ul className="absolute inset-0 flex justify-center items-center">
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute left-1/2 top-0 h-1/2 -translate-x-1/2 origin-bottom rotate-${index * 45}`}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                >
                  <img
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                    alt={app.title}
                    src={app.icon}
                  />
                </div>
              </li>
            ))}
          </ul>

          <LeftCurve />
          <RightCurve />
        </div>
      </div>
    </div>
  </Section>
  );
};

export default Collaboration;
