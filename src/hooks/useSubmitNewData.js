import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import apiGet from "../api/apiGet";

const useSubmitNewData = ({setData}) => { 
    const onSubmit = (onClose) => async ({newData}, {setSubmitting}) => {
        try {
            await apiPost({
                route: "tipo_vehiculos",
                object: {desc_tipo_vehiculo: newData}
            })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Registro almacenado"
                }).then(() => 
                    // actualizar datos de la tabla
                    apiGet({route: "tipo_vehiculos"}).then((response) => setData(response?.data))
                );

                // cerrar modal
                onClose();
            });
            

        } catch (error) {
            console.log(error);

        } finally {
            setSubmitting(false);
        }
    }

    return {onSubmit};
 };

 export default useSubmitNewData;