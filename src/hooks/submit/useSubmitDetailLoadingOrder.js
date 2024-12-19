import Swal from "sweetalert2";
import apiPut from "../../api/apiPut";
import useLoadingOrder from "../useLoadingOrder";

const useSubmitDetailLoadingOrder = ({
  dataDetail,
  setFieldValue = () => { },
  stateValues = {},
  codStateValue,
  useData = {
    data: []
  },
  dataTaxpayers,
  georeferences,
  updateLoadingOrder,
}) => {
  const onSubmit =
    (onClose) =>
      async (values, { setSubmitting }) => {
        const { cod_detalle_orden_carga, ...otherValues } = values;
        const { data } = useData;

        // obtener las descripciones al crear un detalle
        const getDescription = ({
          cod,
          codProperty,
          arrayData,
          textDescription,
        }) => {
          const item = arrayData.find(
            (item) => item[codProperty].toString() === cod.toString()
          );
          return item ? item[textDescription] : "";
        };

        // ver si es neecsario agregar las descriptiones para el update de un detalle
        const payload = {
          ...otherValues,
          desc_cliente: getDescription({
            cod: values.cod_cliente || data.cod_cliente,
            codProperty: "cod_contribuyente",
            arrayData: dataTaxpayers,
            textDescription: "desc_contribuyente",
          }),
          desc_origen: getDescription({
            cod: values.cod_origen,
            codProperty: "cod_georeferencia",
            arrayData: georeferences,
            textDescription: "desc_georeferencia",
          }),
          desc_destino: getDescription({
            cod: values.cod_destino,
            codProperty: "cod_georeferencia",
            arrayData: georeferences,
            textDescription: "desc_georeferencia",
          }),
        };

        try {
          if (cod_detalle_orden_carga === null) {
            const currentDetails = stateValues.detalles_orden_carga || [];
            setFieldValue("detalles_orden_carga", [...currentDetails, payload]);

          } else {
            await apiPut({
              route: `detalle_orden_carga/${cod_detalle_orden_carga}`,
              object: payload,
            }).then((response) => {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Registro actualizado",
              }).then(() => {
                // const updatedDetail = response.data; // respuesta de la actualización -> puede ser el pyload tambien

                // const updatedDetail = data.map(
                //   (detail) =>
                //     detail.cod_detalle_orden_carga === cod_detalle_orden_carga
                //       ? { ...detail, ...payload }
                //       : detail
                // );
                //


                // filtro para obtener primero la order de carga
                const updatedDetail = data.filter(
                  detail => detail.cod_orden_carga === codStateValue
                ) || [];

                // actualizar el el detalle de la orden de carga
                const updatedDetailLoadingOrder = updatedDetail.map(
                  detail => detail.cod_detalle_orden_carga === cod_detalle_orden_carga
                    ? { ...detail, ...payload }
                    : detail
                )

                // // Encontrar el índice del detalle que se va a actualizar
                // const updatedDetails = data.detalles_orden_carga.map(
                //   (detail) =>
                //     detail.cod_detalle_orden_carga === cod_detalle_orden_carga
                //       ? { ...detail, ...updatedDetail }
                //       : detail
                // );



                // // Actualizar el contexto usando updateLoadingOrder
                // updateLoadingOrder({
                //   ...stateValues,
                //   detalles_orden_carga: updatedDetails,
                // });
              });
            });
          }

          // cerrar el modal
          onClose();
        } catch (error) {
          console.log(error);
        }
      };

  return { onSubmit };
};

export default useSubmitDetailLoadingOrder;
