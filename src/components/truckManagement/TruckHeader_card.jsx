import { Button } from "@nextui-org/react";
import { GiTruck } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";

const objectComponentHeaderCard = {
  operativo: {
    title: "Camiones operativos",
    shadowColor: "shadow-green-200",
    icon: <GiTruck size={35} />,
    bgHover: "hover:bg-green-200",
  },
  vencido: {
    title: "Documentos vencidos",
    shadowColor: "shadow-red-200",
    icon: <HiClipboardDocumentList size={35} />,
    bgHover: "hover:bg-red-200",
  },
};

const TruckHeader_card = ({ type }) => {
  const componentButtonHeaderCard = objectComponentHeaderCard[type] || {};

  return (
    <Button
      className={`flex flex-col p-2 h-[5rem] w-full sm:w-1/2 md:w-[15rem] 
        shadow-md ${componentButtonHeaderCard.shadowColor} hover:shadow-gray-400
        ${componentButtonHeaderCard.colorBorder} ${componentButtonHeaderCard.bgHover}
        rounded-lg bg-transparent gap-0 group`}
    >
      <div
        className="flex justify-center items-center gap-10 w-full text-primary-color group-hover:text-gray-600 
            group-hover:scale-110 transition-all duration-300"
      >
        {componentButtonHeaderCard.icon}
        <p className="text-xl">34</p>
      </div>
      <p
        className="w-full sm:text-lg text-primary-color group-hover:text-gray-600
          group-hover:scale-110 transition-all duration-300 text-sm"
      >
        {componentButtonHeaderCard.title}
      </p>
    </Button>
  );
};

export default TruckHeader_card;
