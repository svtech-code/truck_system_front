import { Button } from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import { useCallback, useState } from "react";
import useSubmitDetailLoadingOrder from "../../hooks/submit/useSubmitDetailLoadingOrder";
import DetailLoadingOrder_form from "../detailLoadingOrder/DetailLoadingOrder_form";
import detailLoadingOrderValidation from "../../validations/detailLoadingOrderValidation";
import initialValues_DetailLoadingOrder from "../../utils/initialValues/detailLoadingOrderValue";
import ModalBaseForm from "../../templates/ModalBaseForm";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import { desc } from "framer-motion/client";

const varString = {
  titleModal: "Detalle de orden de carga",
  route: "detalle_orden_carga",
  propertyId: "cod_detalle_orden_carga",
  propertyName: "desc_detalle_orden_carga",
};

const LoadingOrder_subStructure = ({ data }) => {
  const {
    desc_transportista,
    desc_vehiculo,
    desc_acoplado,
    detalles_orden_carga,
  } = data;

  const { dataTaxpayers, georeferences, updateLoadingOrder } = useLoadingOrder();
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [stateDetail, setStateDetail] = useState({
    data: detalles_orden_carga,
  });

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
    <div className="border p-2 mt-1 mb-2 rounded-lg overflow-hidden flex flex-col gap-y-4">
      {/* modal generico */}
      <ModalBaseForm
        propertyId={varString.propertyId}
        stateComponent={stateDetail}
        updateStateComponent={updateStateDetail}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={isOpenModalDetail}
        onOpenChange={() => setIsOpenModalDetail(false)}
        useSubmit_generic={useSubmitDetailLoadingOrder({
          data: detalles_orden_carga,
          updateLoadingOrder: updateLoadingOrder,
          dataTaxpayers: dataTaxpayers,
          georeferences: georeferences,
        })}
        initialValues_generic={initialValues_DetailLoadingOrder}
        validationSchema_generic={detailLoadingOrderValidation}
        Form_generic={(props) => <DetailLoadingOrder_form {...props} />}
      />

      {/* tabla con encabezado detalle de la orde de carga */}
      <table className="w-full text-[.8rem]">
        <tbody>
          <tr>
            <td className="w-32 font-semibold">Transportista:</td>
            <td>{desc_transportista}</td>
          </tr>

          <tr>
            <td className="w-32 font-semibold">Vehículo:</td>
            <td>{desc_vehiculo}</td>
          </tr>

          <tr>
            <td className="w-32 font-semibold">Acoplado:</td>
            <td>{desc_acoplado}</td>
          </tr>
        </tbody>
      </table>

      {/* tabla con los viajes de la orden de carga */}
      <div className="w-full bg-gray-100 rounded-lg p-2">
        <table className="w-full text-[.8rem]">
          <thead className="text-left bg-gray-300">
            <tr>
              <th scope="col" className="rounded-l-lg p-2">
                Contribuyente
              </th>
              <th scope="col" className="p-2">
                Detalle viaje
              </th>
              <th scope="col" className="p-2">
                Origen viaje
              </th>
              <th scope="col" className="p-2">
                Destino viaje
              </th>
              <th scope="col" className="rounded-r-lg p-2">
                Fecha acuse
              </th>
            </tr>
          </thead>
          <tbody>
            {detalles_orden_carga.map(
              (
                {
                  cod_detalle_orden_carga,
                  desc_cliente,
                  desc_origen,
                  desc_destino,
                  fecha_acuse,
                  desc_detalle_orden_carga,
                },
                index
              ) => (
                <tr className="hover:bg-gray-200" key={index}>
                  <td className="px-2 py-1 rounded-l-md">{desc_cliente}</td>
                  <td className="px-2 py-1">
                    <div className="flex gap-2 justify-start items-center">
                      <Button
                        isIconOnly
                        size="sm"
                        color="primary"
                        onPress={() =>
                          handleEditDetail({
                            codDetail: cod_detalle_orden_carga,
                            descDetail: desc_detalle_orden_carga,
                          })
                        }
                      >
                        <FaEdit
                          size={20}
                          className="group-hover:scale-110 transition-all duration-300 will-change-transform"
                        />
                      </Button>
                      {desc_detalle_orden_carga}
                    </div>
                  </td>
                  <td className="px-2 py-1">{desc_origen}</td>
                  <td className="px-2 py-1">{desc_destino}</td>
                  <td className="px-2 py-1 rounded-r-md">{fecha_acuse}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingOrder_subStructure;
