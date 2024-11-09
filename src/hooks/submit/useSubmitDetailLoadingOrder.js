import { desc } from "framer-motion/client";
import useLoadingOrder from "../useLoadingOrder";

const useSubmitDetailLoadingOrder = ({
  data,
  setFieldValue,
  stateValues,
  dataTaxpayers,
  georeferences,
}) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      const { cod_detalle_orden_carga, ...otherValues } = values;

      // trabajar obtención de las descripciones
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
          console.log("editar");
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
