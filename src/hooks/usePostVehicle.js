import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import useVehicle from "./useVehicle";
import { updateArray } from "../utils/methodUpdateArray";
import apiPut from "../api/apiPut";

const usePostVehicle = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      // const {
      //   cod_vehiculo,
      //   desc_vehiculo,             --> listo / listo
      //   cod_tipo_vehiculo,         --> desc_tipo_vehiculo listo
      //   cod_modelo,                --> desc_modelo listo
      //   cod_estado_vehiculo,       --> listo
      //   anio,                      --> listo
      //   fecha_vigencia_seguro,     --> listo
      //   fecha_vigencia_revision,   --> listo
      //   cantidad_kilos,            --> listo
      //   patente_completa,          --> listo
      //   cod_chofer,                --> desc_chofer listo
      //   cod_acoplado,              --> listo
      //   cod_marca,                 --> listo
      //   idTransportista,           --> listo
      // } = values;
      const { cod_vehiculo, ...otherFields } = values;

      const payload = {
        ...otherFields,
        desc_vehiculo: otherFields?.desc_vehiculo.toUpperCase(),
        cod_tipo_vehiculo: otherFields?.desc_tipo_vehiculo,
        cod_modelo: otherFields?.desc_modelo,
        cod_chofer: otherFields?.desc_chofer,
        patente: otherFields?.patente_completa.slice(0, -2),
        // cod_marca: 1,
        idTransportista: 1, // valor momentaneamente fijo
        cod_acoplado:
          otherFields?.cod_acoplado === "" ? null : otherFields?.cod_acoplado,
      };

      try {
        if (cod_vehiculo === null) {
          await apiPost({
            route: "vehiculos",
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro almacenado",
            }).then(() => {
              // actualización del array de datos
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: response?.data?.cod_vehiculo,
                  idField: "cod_vehiculo",
                  updateFields: response?.data,
                }),
              });
            });
          });
          // console.log(otherFields);
          // console.log(payload);
        } else {
          await apiPut({
            route: `vehiculos/${cod_vehiculo.toString()}`,
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              // actualización del array
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: cod_vehiculo,
                  idField: "cod_vehiculo",
                  updateFields: response?.data,
                }),
              });
            });
          });

          // console.log(otherFields);
          // console.log(payload);
        }

        // cerrar modal
        onClose();
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default usePostVehicle;
