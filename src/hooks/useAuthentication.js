import Swal from "sweetalert2";
import axios from "../api/axios";

const useAuthentication = ({ login }) => {
  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors }
  ) => {
    try {
      const response = await axios.post(
        "/token",
        { username: email, password: password },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      if (response?.status === 200) {
        const privilege = response?.data?.cod_tipo_usuario.toString();
        const token = response?.data?.access_token;
        const userName = response?.data?.desc_usuario;

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Cuenta validada con éxito",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          login(privilege, token, email, userName);
        });
      }
    } catch (error) {
      // manejo del error de autorización
      if (error?.response?.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Acceso denegado",
          text: "Cuenta de usuario incorrecta ...!",
        });
        return;
      }

      // Manejo de error de conexión
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Sin conexión con el servisor !",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return { onSubmit };
};

export default useAuthentication;
