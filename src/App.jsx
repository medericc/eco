import ButtonGradient from "./assets/svg/ButtonGradient";
import Base from "./components/Base";
import Schema from "./components/Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Style from "./components/style";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Style />
        <Base />
        <Schema />
        <Services />
     
        
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
