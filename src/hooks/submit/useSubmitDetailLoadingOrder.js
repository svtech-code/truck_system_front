import Swal from "sweetalert2";
import apiPut from "../../api/apiPut";
import { updateArray } from "../../utils/methodUpdateArray";

const useSubmitDetailLoadingOrder = ({
  dataContext = {
    data: {},
    dataTaxpayers: [],
    georeferences: [],
    updateLoadingOrder: () => { },
  }, // función use del contexto de orden de carga
  setFieldValue = () => { }, // actualizador de formik
  stateValues = {},
  dataLoadingOrder = {}, // data de la orden de carga
}) => {
  const onSubmit =
    (onClose) =>
      async (values, { setSubmitting }) => {
        const { cod_detalle_orden_carga, ...otherValues } = values;
        const { data, dataTaxpayers, georeferences, updateLoadingOrder } = dataContext;

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

        const payload = {
          ...otherValues,
          cod_detalle_orden_carga: cod_detalle_orden_carga,
          desc_cliente: getDescription({
            cod: values.cod_cliente,
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

                // nueva propuesta de función
                const updateDetailLoadingOrderWhitNewData = (loadingOrder, newDetail) => {
                  // aseguramos que el payload sea identico a la estructura del detalle
                  const structureBase = loadingOrder.detalles_orden_carga[0] || {};
                  const filterDetail = Object.keys(structureBase).reduce((detail, key) => {
                    detail[key] = newDetail.hasOwnProperty(key) ? newDetail[key] : null; // aseguramos valores nulos si no existen 
                    return detail;
                  }, {})

                  return {
                    ...loadingOrder,
                    detalles_orden_carga: loadingOrder.detalles_orden_carga.map(
                      detail => detail.cod_detalle_orden_carga === newDetail.cod_detalle_orden_carga
                        ? filterDetail // reemplazamos el detalle que coincide
                        : detail // mantener los otros detalles iguales
                    )
                  }
                }

                const newDataLoadingOrder = updateDetailLoadingOrderWhitNewData(dataLoadingOrder, payload);

                updateLoadingOrder({
                  data: updateArray({
                    arrayData: data,
                    idData: dataLoadingOrder?.cod_orden_carga,
                    idField: "cod_orden_carga",
                    updateFields: newDataLoadingOrder
                  })
                });
              });
            });
          }

          onClose();
        } catch (error) {
          console.log(error);
        }
      };

  return { onSubmit };
};

export default useSubmitDetailLoadingOrder;
