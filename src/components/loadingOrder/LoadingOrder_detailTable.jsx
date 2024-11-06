import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const LoadingOrder_detailTable = ({ dataDetail }) => {
  // estado para abrir el modal
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);

  // ver como trabajar con nuevo subModal o si es posible utilizar el mismo
  // crear un nuevo data inicial
  // trabajarlo con formik
  // crear nuevas validaciones
  // trabajar el submit o función de agregar a detalle

  console.log(dataDetail.length);

  return (
    <div>
      <div className="pb-4 relative flex justify-start items-center">
        <Button
          color="primary"
          startContent={<IoMdAdd size={25} />}
          onPress={() => console.log("hola")}
        >
          Agregar Detalle
        </Button>
      </div>

      <Table aria-label="tabla detalle orden de carga" selectionMode="single">
        <TableHeader>
          <TableColumn>Descripción</TableColumn>
          <TableColumn>Origen</TableColumn>
          <TableColumn>Destino</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Sin datos asignados"}>
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
        </TableBody>
      </Table>
    </div>
  );
};

export default LoadingOrder_detailTable;
