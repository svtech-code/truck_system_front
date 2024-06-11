import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import apiPut from "../api/apiPut";

// funciton to add new data or update data
const updateArray = ({ arrayData, idData, desc_modelo, desc_marca }) => {
  // verificación de la existencia del id
  const exists = arrayData.some((item) => item.cod_modelo === Number(idData));

  // si existe el id, se actualizan los datos
  if (exists) {
    return arrayData.map((item) => {
      if (item.cod_modelo === idData) {
        return {
          ...item,
          desc_modelo: desc_modelo,
          desc_marca: desc_marca,
        };
      }
      return item;
    });
  }

  // si no existe el id, se agrega el nuevo dato
  const newItem = {
    cod_modelo: idData,
    desc_modelo: desc_modelo,
    desc_marca: desc_marca,
  };

  return [...arrayData, newItem];
};

const usePostModel = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      try {
        const { cod_modelo, desc_modelo, desc_marca } = values;

        if (cod_modelo === null) {
          await apiPost({
            route: "modelos",
            object: {
              desc_modelo: desc_modelo.toUpperCase(),
              cod_marca: desc_marca,
            },
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "success",
              text: "Registro almacenado",
            }).then(() => {
              console.log("actualizar array de datos");
            });
          });
        } else {
          await apiPut({
            route: `modelos/${cod_modelo.toString()}`,
            object: {
              desc_modelo: desc_modelo.toUpperCase(),
              cod_marca: desc_marca,
            },
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              // actualizar datos de la tabla
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: cod_modelo,
                  desc_modelo: response?.data?.desc_modelo,
                  desc_marca: response?.data?.desc_marca,
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

export default usePostModel;
