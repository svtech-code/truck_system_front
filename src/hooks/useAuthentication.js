import Swal from "sweetalert2";
import axios from "../api/axios";

// const USER_ROOT = "rmercado";
// const PASS_ROOT = "Rmercad@2024";

const useAuthentication = ({ login }) => {
  const onSubmit = async (
    { username, password },
    { setSubmitting, setErrors }
  ) => {
    // authentication with fastApi
    try {
      // petición post
      const response = await axios.post(
        "/token",
        { username: username, password: password },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      // revisión de la resuesta
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
          login(privilege, token, username, userName);
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
    // ==================================>

    // // authentication with static data
    // try {
    //   if (username !== USER_ROOT) {
    //     setErrors({
    //       username: "El username ingresado es incorrecto !",
    //     });
    //     return;
    //   }

    //   if (password !== PASS_ROOT) {
    //     setErrors({ password: "La contraseña ingresada es incorrecta !" });
    //     return;
    //   }

    //   Swal.fire({
    //     icon: "success",
    //     title: "Success",
    //     text: "Cuenta validada con éxito",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   }).then(() => {
    //     login("1", "token", USER_ROOT, "admin");
    //   });
    // } catch (error) {
    //   // Manejo de error de conexión
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     text: "Sin conexión con el servisor !",
    //   });
    // } finally {
    //   setSubmitting(false);
    // }
    // // ==================================>
  };
  return { onSubmit };
};

export default useAuthentication;
