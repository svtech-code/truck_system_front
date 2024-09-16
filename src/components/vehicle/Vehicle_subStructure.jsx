import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import useVehicle from "../../hooks/useVehicle";

const Vehicle_subStructure = ({ data }) => {
  const { mainAcopladoData } = useVehicle();

  const {
    cod_vehiculo,
    desc_vehiculo,
    desc_transportista,
    anio,
    fecha_vigencia_seguro,
    fecha_vigencia_revision,
    cod_acoplado,
  } = data;

  // obtención de la patente en base al cod_acoplado
  const patenteAcoplado =
    mainAcopladoData.find((item) => item.cod_vehiculo === cod_acoplado) || [];

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
        <TableColumn>Transportista</TableColumn>
        <TableColumn>Pte. Acoplado</TableColumn>
      </TableHeader>

      <TableBody emptyContent={"Sin datos asignados"}>
        <TableRow key="1">
          <TableCell>{desc_vehiculo}</TableCell>
          <TableCell>{anio}</TableCell>
          <TableCell>{fecha_vigencia_seguro}</TableCell>
          <TableCell>{fecha_vigencia_revision}</TableCell>
          <TableCell>{desc_transportista}</TableCell>
          <TableCell>{patenteAcoplado.patente ?? "Sin acoplado"}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Vehicle_subStructure;
