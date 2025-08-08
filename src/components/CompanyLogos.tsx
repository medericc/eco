import { companyLogos } from "../tout";

interface CompanyLogosProps {
  className?: string;
}

const CompanyLogos: React.FC<CompanyLogosProps> = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Les différents clubs de la carrière d'Inès
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => {
          const logoSrc = typeof logo === "string" ? logo : String(logo);
          const isTooBig =
            logoSrc.includes("environnements.png") || logoSrc.includes("yourlogo4") ||
            logoSrc.includes("eco.png")     || logoSrc.includes("other.png");

          return (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={index}
            >
              <img
                src={logoSrc}
                width={isTooBig ? 99 : 134}
                height={isTooBig ? 21 : 28}
                className=""
                alt={`logo-${index}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyLogos;
