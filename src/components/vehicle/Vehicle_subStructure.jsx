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
    <div className="border-gray-300 border-2 p-1 mt-1 mb-2 rounded-2xl overflow-hidden flex flex-col gap-y-4">
      <Table
        aria-label="data-vehicle"
        selectionMode="single"
        color="primary"
        classNames={{
          wrapper: "bg-gray-300 p-2",
          th: "font-bold text-[.8rem] bg-gray-100",
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
    </div>
  );
};

export default Vehicle_subStructure;
