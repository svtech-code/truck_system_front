import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCallback, useState } from "react";
import ModalBaseTable from "../../templates/ModalBaseTable";
import Taxpayer_georeferencesTable from "./Taxpayer_georeferencesTable";

const Taxpayer_subStructure = ({ data }) => {
  const {
    desc_contribuyente,
    // estado_contribuyente,
    email,
    telefono1_contribuyente,
    telefono2_contribuyente,
    cod_contribuyente,
  } = data;

  const [open, setOpen] = useState(false);
  const handleModalClose = useCallback(() => setOpen(false), []);

  // const listStateTaxpayer = [
  //   {
  //     cod_state_taxpayer: 1,
  //     desc_state_taxpayer: "ACTIVO",
  //   },
  //   {
  //     cod_state_taxpayer: 2,
  //     desc_state_taxpayer: "INACTIVO",
  //   },
  //   {
  //     cod_state_taxpayer: 3,
  //     desc_state_taxpayer: "BLOQUEADO",
  //   },
  // ];

  // descripción del estado según el id del estado
  // const desc_state_taxpayer = listStateTaxpayer.find(
  //   (state) => state.cod_state_taxpayer === estado_contribuyente
  // )?.desc_state_taxpayer;

  return (
    <>
      <ModalBaseTable
        title={"Lista de georeferencias"}
        size={"2xl"}
        isOpen={open}
        onOpenChange={() => handleModalClose()}
        table={() => Taxpayer_georeferencesTable({ dataTaxpayerTable: data })}
      />

      <Table
        aria-label="data-taxpayer"
        className="p-2"
        selectionMode="single"
        classNames={{
          wrapper: "bg-gray-300",
          th: "font-bold text-[.8rem]",
        }}
      >
        <TableHeader>
          <TableColumn className="w-[40%]">
            Descripción contribuyente
          </TableColumn>
          <TableColumn className="w-[10%]">Telefono 1</TableColumn>
          <TableColumn className="w-[10%]">Telefono 2</TableColumn>
          <TableColumn className="w-[25%]">E-mail</TableColumn>
          <TableColumn className="w-[15%]">Georeferencias</TableColumn>
        </TableHeader>

        <TableBody emptyContent={"Sin datos asignados"}>
          <TableRow key="1">
            <TableCell>{desc_contribuyente}</TableCell>
            <TableCell>{telefono1_contribuyente}</TableCell>
            <TableCell>{telefono2_contribuyente}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>
              <Button
                color="warning"
                variant="ghost"
                onPress={() => setOpen(true)}
              >
                Lista de georeferencias
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Taxpayer_subStructure;
