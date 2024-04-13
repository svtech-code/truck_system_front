import Swal from "sweetalert2";

// valores de prueba
const USER_ROOT = "admin@gmail.com";
const PASS_ROOT = "@Dmin2024";

const useAuthentication = ({ login }) => {
  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors }
  ) => {
    try {
      // Eliminar condicionales ================================================>
      if (email !== USER_ROOT) {
        setErrors({
          email: "El Email ingresado, no tiene cuenta de usuario !",
        });
        return;
      }

      if (password !== PASS_ROOT) {
        setErrors({ password: "La contraseña ingresada es incorrecta !" });
        return;
      }
      // =====================================================================>

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Cuenta validada con éxito",
        timer: 1500,
      }).then(() => {
        login("1", "token", USER_ROOT, "admin");
      });
    } catch (error) {
      // manejo de errores proporcionados por el backend
      // recibir los errores que aparecen en la condicional

      // Manejo de error de conexión
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Sin conexión con el servidor !",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return { onSubmit };
};

export default useAuthentication;
