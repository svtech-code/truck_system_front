import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import useVehicle from "./useVehicle";

const usePostVehicle = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      // const { mainVehicleData, updateVehicleData } = useVehicle();
      const {
        cod_vehiculo,
        desc_vehiculo,
        cod_tipo_vehiculo,
        cod_modelo,
        cod_estado_vehiculo,
        anio,
        fecha_vigencia_seguro,
        fecha_vigencia_revision,
        cantidad_kilos,
        patente_completa,
        cod_chofer,
        cod_acoplado,
        cod_marca, // revisar si es necesario
        idTransportista,
      } = values;
      try {
        if (cod_vehiculo === null) {
          // await apiPost({
          //   route: "vehiculos",
          //   object: {
          //     desc_vehiculo: descripcionVehiculo,
          //     cod_tipo_vehiculo: idTipoVehiculo,
          //     cod_modelo: idModelo,
          //     cod_estado_vehiculo: 1,
          //     anio: anioVehiculo,
          //     fecha_vigencia_seguro: vencimientoSeguro,
          //     fecha_vigencia_revision: vencimientoRevision,
          //     cantidad_kilos: tonelaje,
          //     patente: patente.slice(0, -2),
          //     patente_completa: patente,
          //     cod_chofer: idChoferAsignado,
          //     cod_acoplado: idPatenteAcoplado,
          //     cod_marca: idTransportista,
          //   },
          // }).then((response) => {
          //   Swal.fire({
          //     icon: "success",
          //     title: "Success",
          //     text: "Registro almacenado",
          //   }).then(() => {
          //     console.log("actualizar array de datos");
          //   });
          // });
          console.log("new");
          console.log(values);
        } else {
          // console.log(`editar id: ${idVehicle}`);
          console.log("edit");
          console.log(values);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default usePostVehicle;
