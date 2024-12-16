import { Button, Chip, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
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
    // cod_contribuyente,
    transportista,
  } = data;

  const [open, setOpen] = useState(false);

  return (
    <div className="border-gray-300 border-2 p-1 mt-1 mb-2 rounded-2xl overflow-hidden flex flex-col gap-y-1">
      <ModalBaseTable
        title={"Georeferencias"}
        size={"2xl"}
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        table={() => Taxpayer_georeferencesTable({ dataTaxpayerTable: data })}
      />

      <table className="w-full text-[.8rem] bg-gray-300 rounded-lg">
        <tbody>
          <tr>
            <td className="flex items-center gap-2 p-3 font-semibold pl-2 uppercase">
              Descripción:
              <span className="font-normal normal-case">{desc_contribuyente}</span>
            </td>
            <td className="text-right pr-4 p-1">
              <Chip
                radius="md"
                color={`${transportista ? "success" : "danger"}`}
                variant="dot"
                className="uppercase"
                classNames={{
                  base: `${transportista ? "border-green-400" : "border-red-400"}`
                }}
              >
                {transportista ? "Es transportista" : "No es transportista"}
              </Chip>
            </td>
          </tr>
        </tbody>
      </table>

      <Table
        aria-label="sub tabla datos de contribuyentes"
        selectionMode="single"
        classNames={{
          wrapper: "bg-gray-300 p-2",
          th: "font-bold text-[.8rem] bg-gray-100",
        }}
      >
        <TableHeader>
          <TableColumn className="uppercase grow">Dirección</TableColumn>
          <TableColumn className="uppercase w-64">Email</TableColumn>
          <TableColumn className="uppercase w-36">Teléfono 1</TableColumn>
          <TableColumn className="uppercase w-36">Teléfono 2</TableColumn>
          <TableColumn className="uppercase w-48">Georeferencias</TableColumn>
        </TableHeader>

        <TableBody emptyContent={"Sin datos asignados"}>
          <TableRow key="1">
            <TableCell className="grow">{direccion_contribuyente}</TableCell>
            <TableCell className="w-64">{email}</TableCell>
            <TableCell className="w-36">{telefono1_contribuyente}</TableCell>
            <TableCell className="w-36">{telefono2_contribuyente}</TableCell>
            <TableCell className="w-48 flex justify-start items-center gap-1">
              <Button
                isIconOnly
                color="warning"
                size="sm"
                aria-label="lista de georeferencias asociadas"
                onPress={() => setOpen(true)}
              >
                <BsInfoLg
                  size={20}
                  className="group-hover:scale-125 transition-all duration-300 will-change-transform"
                />
              </Button>
              <span className="font-semibold">Georeferencias</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Taxpayer_subStructure;
