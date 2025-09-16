import { companyLogos } from "../tout";

const CompanyLogos: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Les différents clubs de la carrière d'Inès
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={`logo-${index}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
