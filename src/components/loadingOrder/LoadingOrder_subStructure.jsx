import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import { useCallback, useState } from "react";
import useSubmitDetailLoadingOrder from "../../hooks/submit/useSubmitDetailLoadingOrder";
import DetailLoadingOrder_form from "../detailLoadingOrder/DetailLoadingOrder_form";
import detailLoadingOrderValidation from "../../validations/detailLoadingOrderValidation";
import initialValues_DetailLoadingOrder from "../../utils/initialValues/detailLoadingOrderValue";
import ModalBaseForm from "../../templates/ModalBaseForm";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import ModalBaseFull from "../../templates/ModalBaseFull";

const varString = {
  titleModal: "Detalle de orden de carga",
  route: "detalle_orden_carga",
  propertyId: "cod_detalle_orden_carga",
  propertyName: "desc_detalle_orden_carga",
};

const LoadingOrder_subStructure = ({ data }) => {
  const {
    desc_transportista,
    patente,
    desc_marca,
    desc_modelo,
    desc_acoplado,
    detalles_orden_carga,
    num_orden_carga,
  } = data;

  const carLoadingOrder = `(${patente}) / ${desc_marca} ${desc_modelo}`;
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [isOpenModalFull, setIsOpenModalFull] = useState(false);
  const [stateDetail, setStateDetail] = useState({ data: detalles_orden_carga });

  const updateStateDetail = useCallback((newData) => {
    setStateDetail((prevState) => ({ ...prevState, ...newData }));
  }, []);

  const handleEditDetail = ({ codDetail, descDetail }) => {
    updateStateDetail({
      edit: true,
      descriptionEdit: descDetail,
      idEdit: codDetail,
    });

    setIsOpenModalDetail(true);
  };

  return (
    <div className="border-gray-300 border-2 p-1 mt-1 mb-2 rounded-2xl overflow-hidden flex flex-col gap-y-1">
      <ModalBaseForm
        propertyId={varString.propertyId}
        stateComponent={stateDetail}
        updateStateComponent={updateStateDetail}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={isOpenModalDetail}
        onOpenChange={() => setIsOpenModalDetail(false)}
        useSubmit_generic={useSubmitDetailLoadingOrder({
          dataContext: useLoadingOrder(),
          dataDetail: detalles_orden_carga, // detalles de la orden de carga
          dataLoadingOrder: data,
        })}
        initialValues_generic={initialValues_DetailLoadingOrder}
        validationSchema_generic={detailLoadingOrderValidation}
        Form_generic={(props) => <DetailLoadingOrder_form {...props} />}
      />

      <ModalBaseFull
        isOpen={isOpenModalFull}
        onOpenChange={() => setIsOpenModalFull(false)}
        numberLoadingOrder={num_orden_carga}
      />


      <table className="w-full text-[.8rem] bg-gray-300 rounded-lg">
        <tbody>
          <tr>
            <td className="w-36 font-semibold pl-4 pt-2 uppercase">Transportista:</td>
            <td className="pt-2">{desc_transportista}</td>
          </tr>

          <tr>
            <td className="w-36 font-semibold pl-4 uppercase">Vehículo:</td>
            <td>{carLoadingOrder}</td>
          </tr>

          <tr>
            <td className="w-36 font-semibold pl-4 pb-2 uppercase">Acoplado:</td>
            <td className="pb-2">{desc_acoplado}</td>
          </tr>
        </tbody>
      </table>

      <Table
        aria-label="sub tabla datos detalle orden carga"
        selectionMode="single"
        classNames={{
          wrapper: "bg-gray-300 p-2",
          th: "font-bold text-[.8rem] bg-gray-100",
          td: "text-[.8rem]",
        }}
      >
        <TableHeader>
          <TableColumn className="uppercase grow">Contribuyente</TableColumn>
          <TableColumn className="uppercase">Detalle viaje</TableColumn>
          <TableColumn className="uppercase">Origen viaje</TableColumn>
          <TableColumn className="uppercase">Destino viaje</TableColumn>
          <TableColumn className="uppercase w-32">Fecha acuse</TableColumn>
          <TableColumn className="uppercase w-32 text-center">Acciones</TableColumn>
        </TableHeader>

        <TableBody emptyContent={"Sin datos asignados"}>
          {
            detalles_orden_carga.map(({
              cod_detalle_orden_carga,
              desc_cliente,
              desc_origen,
              desc_destino,
              fecha_acuse,
              desc_detalle_orden_carga,
            }, index) => (
              <TableRow key={index}>
                <TableCell className="grow">{desc_cliente}</TableCell>
                <TableCell>{desc_detalle_orden_carga}</TableCell>
                <TableCell>{desc_origen}</TableCell>
                <TableCell>{desc_destino}</TableCell>
                <TableCell className="w-32">{fecha_acuse}</TableCell>
                <TableCell className="flex items-center gap-2 justify-center w-32">
                  <Button
                    isIconOnly
                    size="sm"
                    color="primary"
                    aria-label="Boton para abrir modal para editar un detalle de orden de carga"
                    className="hover:scale-105 transition-all duration-300 will-change-transform"
                    onPress={() =>
                      handleEditDetail({
                        codDetail: cod_detalle_orden_carga,
                        descDetail: desc_detalle_orden_carga,
                      })
                    }
                  >
                    <FaEdit size={20} />
                  </Button>

                  <Button
                    isIconOnly
                    size="sm"
                    color="warning"
                    aria-label="Botton para abrir modal que hace de mantenedor"
                    className="hover:scale-105 transition-all duration-300 will-change-transform"
                    onPress={() => setIsOpenModalFull(true)}
                  >
                    <HiMiniClipboardDocumentList size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default LoadingOrder_subStructure;
