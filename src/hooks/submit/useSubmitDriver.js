import Swal from "sweetalert2";
import apiPost from "../../api/apiPost";
import { updateArray } from "../../utils/methodUpdateArray";
import apiPut from "../../api/apiPut";

const useSubmitDriver = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      const { cod_usuario, ...otherValues } = values;

      // para normalizar o transformar los datos según se requiera
      const payload = {
        ...otherValues,
        desc_usuario:
          otherValues.nombres_usuario +
          " " +
          otherValues.apellido_paterno +
          " " +
          otherValues.apellido_materno,
      };

      // creación manual
      // {
      //   "run_usuario": "33333333-3",
      //   "nombres_usuario": "JULIAN",
      //   "apellido_paterno": "ALEGRIA",
      //   "apellido_materno": "MEDEL",
      //   "direccion_usuario": "LINARES, MAULE",
      //   "telefono1": "98798787",
      //   "telefono2": "",
      //   "email": "medel@gmail.com",
      //   "username": "MEDE_32",
      //   "contrasena": "987SKJDLF987@",
      //   "desc_usuario": "JULIAN ALEGRIA MEDEL",
      //   "cod_tipo_usuario": 4
      // }

      try {
        if (cod_usuario === null) {
          // console.log("insert: ", payload);
          await apiPost({
            route: "usuarios",
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro almacenado",
            }).then(() => {
              // actualización del contexto de chofer
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: response?.data?.cod_usuario,
                  idField: "cod_usuario",
                  updateFields: response?.data,
                }),
              });
            });
          });
        } else {
          await apiPut({
            route: `usuarios/${cod_usuario.toString()}`,
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              // actualización del contexto
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: cod_usuario,
                  idField: "cod_usuario",
                  updateFields: response?.data,
                }),
              });
            });
          });
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

export default useSubmitDriver;
