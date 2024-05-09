import { Button } from "@nextui-org/react";

const HeaderCardComponent = ({ title, icon }) => {
  return (
    <Button
      className={`flex flex-col p-2 h-[5rem] w-full sm:w-1/2 md:w-[15rem] 
        shadow-md  shadow-blue-200 hover:shadow-gray-400
        hover:bg-blue-200 rounded-lg bg-transparent gap-0 group`}
    >
      <div
        className="flex justify-center items-center gap-10 w-full text-primary-color group-hover:text-gray-600 
            group-hover:scale-110 transition-all duration-300"
      >
        {icon}
        <p className="text-xl">34</p>
      </div>
      <p
        className="w-full sm:text-lg text-primary-color group-hover:text-gray-600
          group-hover:scale-110 transition-all duration-300 text-sm"
      >
        {title}
      </p>
    </Button>
  );
};

export default HeaderCardComponent;
