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
import initialValues_DetailLoadingOrder from "../../utils/initialValues/detailLoadingOrderValue";
import detailLoadingOrderValidation from "../../validations/detailLoadingOrderValidation";
import DetailLoadingOrder_form from "./DetailLoadingOrder_form";
import useSubmitDetailLoadingOrder from "../../hooks/submit/useSubmitDetailLoadingOrder";
import SubModalBase from "../../templates/SubModalBase";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import ModalLoadingOrderDetail from "../../templates/ModalLoadingOrderDetail";
import { swalWithBootstrapButtons, Toast } from "../../utils/styleComponents";
import apiDelete from "../../api/apiDelete";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import { updateArray } from "../../utils/methodUpdateArray";

const varString = {
  titleModal: "Detalle de orden de carga",
  route: "detalle_orden_carga",
  propertyId: "cod_detalle_orden_carga",
  propertyName: "desc_detalle_orden_carga",
};

const DetailLoadingOrder_main = ({
  dataDetail,
  setFieldValue,
  values,
  dataTaxpayers,
  georeferences,
}) => {
  const { data, updateLoadingOrder } = useLoadingOrder();

  // estado para abrir el modal
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [detailToShow, setDetailToShow] = useState(null);
  const [isOpenModalLoadingOrderDetail, setIsOpenModalLoadingOrderDetail] =
    useState(false);

  // funcion para mostrar datos del detalle de la orden de carga
  const handleShowDetail = (indexToShow) => {
    const detail = dataDetail[indexToShow];
    setDetailToShow(detail);
    setIsOpenModalLoadingOrderDetail(true);
  };

  // funcion para eliminar un detalle
  const handleDeleteDetail = (indexToRemove) => {
    const updatedDetails = dataDetail.filter(
      (_, index) => index !== indexToRemove
    );

    if (!values.cod_orden_carga) {
      setFieldValue("detalles_orden_carga", updatedDetails); // Actualiza el campo en el formulario
      return;
    }

    const payload = {
      ...values,
      detalles_orden_carga: updatedDetails,
    };

    // colocar popup que indique que esto hará que se elimine de la orden de carga

    swalWithBootstrapButtons
      .fire({
        title: "Confirmar eliminación",
        text: "El detalle se eliminará de manera permanente, ¿desea continuar?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          apiDelete({
            route: `detalle_orden_carga/${dataDetail[indexToRemove].cod_detalle_orden_carga}`,
          }).then(() => {
            Toast.fire({
              icon: "success",
              title: "Se ha eliminado el detalle !!",
            });
          });

          // actualización del contexto de loadingOrders
          updateLoadingOrder({
            data: updateArray({
              arrayData: data,
              idData: values.cod_orden_carga,
              idField: "cod_orden_carga",
              updateFields: payload,
            }),
          });
          setFieldValue("detalles_orden_carga", updatedDetails);

          // console.log(values);
          // console.log(payload);
        }
      });
  };

  return (
    <div>
      {/* contenedor del boton para agregar nuevo detalle */}
      <div className="pb-4 relative flex justify-start items-center">
        <Button
          color="primary"
          startContent={<IoMdAdd size={25} />}
          onPress={() => setIsOpenModalDetail(true)}
        >
          Agregar Detalle
        </Button>
      </div>

      {/* subModal generico */}
      <SubModalBase
        propertyId={varString.propertyId}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={isOpenModalDetail}
        onOpenChange={() => setIsOpenModalDetail(false)}
        useSubmit_generic={useSubmitDetailLoadingOrder({
          data: dataDetail,
          setFieldValue: setFieldValue,
          stateValues: values,
          dataTaxpayers: dataTaxpayers,
          georeferences: georeferences,
        })}
        initialValues_generic={initialValues_DetailLoadingOrder}
        validationSchema_generic={detailLoadingOrderValidation}
        Form_generic={(props) => <DetailLoadingOrder_form {...props} />}
      />

      {/* modal para mostrar la información del detalle */}
      <ModalLoadingOrderDetail
        isOpen={isOpenModalLoadingOrderDetail}
        data={detailToShow}
        onOpenChange={() => setIsOpenModalLoadingOrderDetail(false)}
      />

      {/* tabla de detalles de orden de carga */}
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
                  {/* agregar los botones */}
                  {/* cada uno con su funcionalidad diferente */}
                  <TableCell>
                    <div className="flex gap-x-2 items-center justify-center">
                      <Button
                        isIconOnly
                        color="primary"
                        size="md"
                        onPress={() => handleShowDetail(index)}
                      >
                        <HiMiniInformationCircle size={20} />
                      </Button>

                      <Button
                        isIconOnly
                        color="danger"
                        size="md"
                        onPress={() => handleDeleteDetail(index)}
                      >
                        <MdDeleteForever size={20} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DetailLoadingOrder_main;
