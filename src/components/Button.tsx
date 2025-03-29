import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  className?: string,
  href?: string,
  onClick?: () => void,
  children: React.ReactNode,
  px?: string,
  white?: boolean,
  target?: string,  // Ajout de target
  rel?: string; }      // Ajout de rel }


const Button:React.FC<ButtonProps> = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );
  
  const renderLink = () => (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  );
  
  


  return href ? renderLink() : renderButton();
};

export default Button;
