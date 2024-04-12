import imgTruck from "../assets/truck.png";

import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <main className="relative min-h-screen flex  bg-gradient-to-b from-[#124C60] to-[#324745]">
      {/* titulo del sistema */}
      <div className="w-[45%]">
        <div className="relative flex text-white font-bold text-4xl">
          <div className="flex flex-col mt-16 ml-16 p-2 tracking-wider">
            <span>System</span>
            <span>Truck Management</span>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen bg-white flex flex-col w-[55%] rounded-l-2xl">
        {/* seccion del formulario */}
        <article className="flex flex-col items-center justify-center h-[75%] bg-green-200">
          <h1>INICIO DE SESIÓN</h1>
        </article>

        {/* seccion social */}
        <article className="relative flex flex-col items-center justify-center h-[25%]">
          {/* linea divisoria */}
          <div className="relative flex items-center justify-center w-full -mt-12">
            <div className="border-b border-gray-400 w-1/4 mr-4"></div>
            <div className="text-gray-600 font-semibold text-lg">
              Puedes visitarno en
            </div>
            <div className="border-b border-gray-400 w-1/4 ml-4"></div>
          </div>

          {/* redes sociales */}
          <div className="relative pt-6 flex gap-12 z-10">
            <FaFacebookSquare
              size={50}
              className="text-blue-600 hover:text-blue-700 hover:scale-105 transition-all duration-300"
            />

            <PiInstagramLogoFill
              size={50}
              className="text-orange-600 hover:text-orange-700 hover:scale-105 transition-all duration-300"
            />
            <FaSquareXTwitter
              size={50}
              className="text-black hover:text-gray-800 hover:scale-105 transition-all duration-300"
            />
          </div>
        </article>
      </section>

      {/* imagen del camion */}
      <div className="absolute top-[14rem] left-[15rem] rounded-3xl">
        <img
          src={imgTruck}
          alt="img camión"
          className="opacity-85 hover:opacity-100 scale-125 transition-all duration-300"
        />
      </div>
    </main>
  );
};

export default Login;
