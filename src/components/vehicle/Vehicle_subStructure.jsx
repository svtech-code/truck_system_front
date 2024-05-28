import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const Vehicle_subStructure = ({ data }) => {
  // componente para las filas
  const renderDataRow = (label, value) => (
    <tr key={label}>
      <th className="bg-gray-200 px-4 text-left">{label}</th>
      <td className="px-4">{value}</td>
    </tr>
  );

  const dataVehicel = {
    descricion: data.desc_vehiculo,
    anio: data.anio,
    vencimientoSeguro: data.fecha_vigencia_segur,
    vencimientoRevicion: data.fecha_vigencia_revision,
    choferAsignado: null,
    vehiculoAcoplado: null,
  };

  return (
    // <div className="border rounded-md border-gray-300 overflow-hidden w-1/3">
    //   <table className="w-full">
    //     <tbody>
    //       {renderDataRow("Descripción vehículo", data.desc_vehiculo)}
    //       {renderDataRow("Año vehículo", data.anio)}
    //       {renderDataRow("Vencimiento seguro", data.fecha_vigencia_segur)}
    //       {renderDataRow("Vencimiento Revisión", data.fecha_vigencia_revision)}
    //       {/* {renderDataRow("Patente acoplado", data.patenteAcoplado)}
    //     {renderDataRow("Chofer asignado", data.choferAsignado)} */}
    //     </tbody>
    //   </table>
    // </div>
    <Table
      aria-label="data-vehicle"
      className="p-2"
      // selectionMode="single"
      selectionMode="single"
      // className=" rounded-sm"
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
        <TableColumn>Chofer Asignado</TableColumn>
        <TableColumn>Pte. Acoplado</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"Sin datos asignados"}>
        <TableRow key="1">
          <TableCell>{data.desc_vehiculo}</TableCell>
          <TableCell>{data.anio}</TableCell>
          <TableCell>{data.fecha_vigencia_segur}</TableCell>
          <TableCell>{data.fecha_vigencia_revision}</TableCell>
          {/* agregar select */}
          <TableCell>Luis Troncos</TableCell>
          {/* agregar select con tipo de vehiculo / ver si es necesario */}
          <TableCell>FJJF26</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Vehicle_subStructure;
