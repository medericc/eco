import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-6 h-6 mr-4" src={loading} alt="Loading" />
       <span className="text-sm">Dieu a tant aimé le monde</span>
    </div>
  );
};

export default Generating;
