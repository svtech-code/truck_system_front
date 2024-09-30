import { Button } from "@nextui-org/react";
import { useCallback, useState } from "react";
import ModalBaseTable from "../../templates/ModalBaseTable";
import Taxpayer_georeferencesTable from "./Taxpayer_georeferencesTable";

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

      <div className="border p-2 mt-1 mb-2 bg-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="text-left bg-gray-50">
            <tr>
              <th className="w-[45%] p-2 rounded-l-lg">Dirección</th>
              <th className="w-[20%]">E-mail</th>
              <th className="w-[10%]">Teléfono 1</th>
              <th className="w-[10%]">Teléfono 2</th>
              <th className="w-[15%] rounded-r-lg">Vículos</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-300 transition-all duration-300">
              <td className="p-3 rounded-l-lg">{direccion_contribuyente}</td>
              <td>{email}</td>
              <td>{telefono1_contribuyente}</td>
              <td>{telefono2_contribuyente}</td>
              <td className="rounded-r-lg">
                <Button
                  color="warning"
                  variant="ghost"
                  onPress={() => setOpen(true)}
                >
                  Georeferencias
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-300 transition-all duration-300">
              <td colSpan={4} className="py-3 rounded-l-lg">
                <span className="bg-gray-50 font-bold rounded-lg py-3 px-2 mr-2">
                  Descripción del contribuyente:
                </span>
                {desc_contribuyente}
              </td>
              <td className="rounded-r-lg">
                <span
                  className={`p-2 rounded-lg border-2 ${
                    transportista
                      ? "border-green-400 text-green-400"
                      : "border-red-400 text-red-400"
                  }`}
                >
                  {transportista ? "Es transportista" : "No es transportista"}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Taxpayer_subStructure;
