import { Button } from "@nextui-org/react";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SocialNetworks = () => {
  return (
    <article className="relative flex flex-col items-center justify-center h-[25%] bg-green-200">
      {/* linea divisoria */}
      <div className="relative flex items-center justify-center w-full -mt-12">
        <div className="border-b border-gray-400 w-1/4 mr-4"></div>
        <div className="text-gray-600 font-semibold text-lg">
          Puedes visitarno en
        </div>
        <div className="border-b border-gray-400 w-1/4 ml-4"></div>
      </div>

      {/* iconos redes sociales */}
      <div className="relative pt-6 flex gap-12 z-10">
        <Button isIconOnly className="bg-blue-600 hover:scale-110">
          <FaFacebookF size={35} className="text-white p-1" />
        </Button>

        <Button
          isIconOnly
          className="
            bg-gradient-to-tr from-rose-600 hover:from-violet-600 
            to-violet-600 hover:to-rose-600 hover:scale-110"
        >
          <FaInstagram size={35} className="text-white p-1" />
        </Button>

        <Button isIconOnly className="bg-black hover:scale-110">
          <FaXTwitter size={35} className="text-white p-1" />
        </Button>
      </div>
    </article>
  );
};

export default SocialNetworks;
