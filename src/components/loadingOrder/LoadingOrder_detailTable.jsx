import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const LoadingOrder_detailTable = ({ dataDetail }) => {
  return (
    <div>
      <div className="pb-4 relative flex justify-between items-center">
        {/* agregar boton para nuevo elemento */}
      </div>

      <Table aria-label="tabla detalle orden de carga" selectionMode="single">
        <TableHeader>
          <TableColumn>Descripción</TableColumn>
          <TableColumn>Origen</TableColumn>
          <TableColumn>Destino</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Sin datos asignados"}>{[]}</TableBody>

        {/* <TableBody emptyContent={"Sin datos asignados"}>
          {dataDetail.length > 0 &&
            dataDetail.map(
              (
                { desc_detalle_orden_carga, desc_origen, desc_destino },
                index
              ) => (
                <TableRow key={index}>
                  <TableCell>{desc_detalle_orden_carga}</TableCell>
                  <TableCell>{desc_origen}</TableCell>
                  <TableCell>{desc_destino}</TableCell>
                  <TableCell>botones</TableCell>
                </TableRow>
              )
            )}
        </TableBody> */}
      </Table>
    </div>
  );
};

export default LoadingOrder_detailTable;
