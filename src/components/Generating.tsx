import { assets } from "../assets";

interface GeneratingProps {
  className?: string;
}

const Generating: React.FC<GeneratingProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-6 h-6 mr-4" src={assets.loading} alt="Loading" />
       <span className="text-sm">Inès Debroise Fan</span>
    </div>
  );
};

export default Generating;
