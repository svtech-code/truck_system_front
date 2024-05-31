import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import useVehicle from "../../hooks/useVehicle";
import Select_Component from "../Select_Component";

const Vehicle_subStructure = ({ data }) => {
  const { mainAcopladoData } = useVehicle();

  const dataVehiculo = {
    descricion: data.desc_vehiculo,
    anio: data.anio,
    vencimientoSeguro: data.fecha_vigencia_segur,
    vencimientoRevicion: data.fecha_vigencia_revision,
    choferAsignado: null,
    vehiculoAcoplado: null,
  };

  return (
    <Table
      aria-label="data-vehicle"
      className="p-2"
      selectionMode="single"
      classNames={{
        wrapper: "bg-gray-300",
        th: "font-bold text-[.8rem]",
      }}
    >
      <TableHeader>
        <TableColumn>Descripción vehículo</TableColumn>
        <TableColumn>Año vehículo</TableColumn>
        <TableColumn>Vencimiento seguro</TableColumn>
        <TableColumn>Vencimiento Revisión</TableColumn>
        <TableColumn>Asociación</TableColumn>
        <TableColumn>Pte. Acoplado</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"Sin datos asignados"}>
        <TableRow key="1">
          <TableCell>{data.desc_vehiculo}</TableCell>
          <TableCell>{data.anio}</TableCell>
          <TableCell>{data.fecha_vigencia_segur}</TableCell>
          <TableCell>{data.fecha_vigencia_revision}</TableCell>
          <TableCell>Transportes Bullileo</TableCell>
          <TableCell>
            {data.desc_tipo_vehiculo !== "ACOPLADO" ? (
              <Select_Component object={mainAcopladoData} />
            ) : (
              <span className="bg-gray-400 px-4 py-2 rounded-md">
                NO DISPONIBLE
              </span>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Vehicle_subStructure;
