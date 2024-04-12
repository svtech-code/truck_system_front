import Swal from "sweetalert2";

const useAuthentication = ({ login }) => {
  const onsubmit = async (
    { email, password },
    { setSubmitting, setErrors }
  ) => {
    try {
    } catch (error) {
      // manejo de errores con contraseña y password
      // condicional para error de email
      // condicional para error de password

      // error de conexión
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Sin conexión con el servidor !!",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return { onsubmit };
};

export default useAuthentication;
