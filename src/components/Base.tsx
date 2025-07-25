import { base } from "../tout";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Base";
import ClipPath from "../assets/svg/ClipPath";

const links: { [key: string]: string } = {
  "0": "https://youtu.be/Iluz03n-Dlg?si=NuHRkp92pE2o0aAQ",
  "1": "https://www.youtube.com/watch?v=-Sigc4EQdr0",
  "2": "https://www.youtube.com/watch?v=IF-r4UMcdYc",
  // "3": "https://www.youtube.com/watch?v=kaeObGnMvEc",
  // "4": "https://www.youtube.com/watch?v=UHvqF-hT03o",
  // "5": "https://www.youtube.com/watch?v=808k5GVQMvE",
  // "6": "https://www.youtube.com/watch?v=vmJgfUReFUE",
  // "7": "https://www.youtube.com/watch?v=T7QTbgBEGA0",
};

const Base = () => {
  return (
    <Section id="concept">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Les Achievements d'Inès"
        />

<div className="flex flex-wrap gap-10 mb-10 justify-center">
          {base.map((item) => (
            <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full sm:w-[47%] md:w-[47%] xl:w-[30%]"
 style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <a href={links[item.id]} target="_blank" rel="noopener noreferrer">
    <Arrow />
  </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#base)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Base;
