import imgOfTruck from "../assets/truck.png";
import FormLogin from "../components/login/FormLogin";
import ImageTruck from "../components/login/ImageTruck";

import SocialNetworks from "../components/login/SocialNetworks";
import TitleSystem from "../components/login/TitleSystem";

const Login = () => {
  return (
    <main className="relative min-h-screen flex  bg-gradient-to-b from-[#124C60] to-[#324745] transition-all duration-300">
      {/* sección titulo */}
      <section className="w-[0%] md:w-[45%] transition-all duration-300">
        <TitleSystem />
      </section>

      {/* sección formulario / social */}
      <section
        className="relative min-h-screen bg-white flex flex-col w-full md:w-[55%] 
        md:rounded-l-2xl transition-all duration-300"
      >
        {/* formulario login */}
        <FormLogin />

        {/* enlace redes sociales */}
        <SocialNetworks />
      </section>

      {/* imagen del sistema, trabajar posicionamiento */}
      <ImageTruck img={imgOfTruck} />
    </main>
  );
};

export default Login;
