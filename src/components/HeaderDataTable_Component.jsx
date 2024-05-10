import { Button } from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";
import { MdClear, MdDownload, MdOpenInNew } from "react-icons/md";

const HeaderDataTableComponent = ({ filter, updateStateData, onClickAdd, onClickDownload }) => {
  return (
    <header className="relative w-full flex gap-3 items-center justify-center sm:justify-between flex-wrap">
      {/* btn para agregar un nuevo registro */}
      <Button
        color="primary"
        variant="ghost"
        startContent={<MdOpenInNew size={25} />}
        onClick={onClickAdd}
      >
        Nuevo registro
      </Button>

      <div className="flex gap-3 items-center justify-center flex-wrap">
        {/* btn para descargar informe */}
        <Button
          color="success"
          startContent={<MdDownload size={25} />}
          variant="ghost"
          onClick={onClickDownload}
        >
          Descargar
        </Button>

        {/* filtro de busqueda */}
        <div className="relative flex items-center gap-2">
          <span className="absolute left-2 text-gray-400">
            <IoSearchSharp size={25} />
          </span>

          <input
            type="text"
            placeholder="Buscar ...."
            value={filter}
            onChange={(event) =>
              updateStateData({ filterData: event.target.value })
            }
            className="border outline-none border-gray-300 focus:shadow focus:shadow-gray-400 rounded-md py-2 pl-10"
          />

          <span
            onClick={() => updateStateData({ filterData: "" })}
            className={`absolute right-2 text-gray-400 cursor-pointer rounded-full p-1 shadow-sm 
              shadow-gray-200 hover:scale-105 hover:bg-gray-100 transition-all duration-300
              ${filter ? "opacity-100 scale-100" : "opacity-0 scale-125"}`}
          >
            <MdClear size={25} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderDataTableComponent;
