import { Button } from "@nextui-org/react";
import { useState } from "react";
import ModalBaseTable from "../../templates/ModalBaseTable";
import Taxpayer_georeferencesTable from "./Taxpayer_georeferencesTable";
import { BsInfoLg } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { FiCheck } from "react-icons/fi";

const Taxpayer_subStructure = ({ data }) => {
  const {
    direccion_contribuyente,
    email,
    telefono1_contribuyente,
    telefono2_contribuyente,
    desc_contribuyente,
    cod_contribuyente,
    transportista,
  } = data;

  const [open, setOpen] = useState(false);

  return (
    <>
      <ModalBaseTable
        title={"Georeferencias"}
        size={"2xl"}
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        table={() => Taxpayer_georeferencesTable({ dataTaxpayerTable: data })}
      />

      <div className="border p-2 mt-1 mb-2 rounded-lg overflow-hidden flex flex-col gap-y-4">
        {/* tabla con encabezado redundante */}
        <table className="w-full text-[.8rem]">
          <tbody>
            <tr>
              <td className="w-24 font-semibold">Descripción:</td>
              <td className="grow">{desc_contribuyente}</td>
              <td className="w-48">
                <div className="flex justify-start items-center gap-2 group">
                  <Button
                    isIconOnly
                    isDisabled
                    size="sm"
                    color={transportista ? "success" : "danger"}
                    aria-label="Confirmación es transportista"
                  >
                    {transportista ? (
                      <FiCheck
                        size={20}
                        className="group-hover:scale-125 transition-all duration-300 will-change-transform"
                      />
                    ) : (
                      <MdClear
                        size={20}
                        className="group-hover:scale-125 transition-all duration-300 will-change-transform"
                      />
                    )}
                  </Button>
                  <span className="font-semibold">
                    {transportista ? "Es transportista" : "No es transportista"}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* tabla con los datos descriptivos del contribuyente */}
        <div className="w-full bg-gray-100 rounded-lg p-2">
          <table className="w-full text-[.8rem]">
            <thead className="text-left bg-gray-300">
              <tr>
                <th scope="col" className="p-2 rounded-l-lg grow">
                  Dirección
                </th>
                <th scope="col" className="p-2 w-64">
                  Email
                </th>
                <th scope="col" className="p-2 w-36">
                  Teléfono 1
                </th>
                <th scope="col" className="p-2 w-36">
                  Teléfono 2
                </th>
                <th scope="col" className="p-2 rounded-r-lg w-48">
                  Georeferencias
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-1 rounded-l-md">
                  {direccion_contribuyente}
                </td>
                <td className="px-2 py-1">{email}</td>
                <td className="px-2 py-1">{telefono1_contribuyente}</td>
                <td className="px-2 py-1">{telefono2_contribuyente}</td>
                <td className="px-2 py-1">
                  <div className="flex justify-start items-center gap-2 group">
                    <Button
                      isIconOnly
                      color="warning"
                      size="sm"
                      aria-label="Lista de georeferencias asociadas"
                      onPress={() => setOpen(true)}
                    >
                      <BsInfoLg
                        size={20}
                        className="group-hover:scale-125 transition-all duration-300 will-change-transform"
                      />
                    </Button>
                    <span className="font-semibold">Georeferencias</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Taxpayer_subStructure;
