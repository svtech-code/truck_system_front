import useAuth from "../hooks/useAuth";

const ErrorHandler = ({ error }) => {
  // variable función global para cerrar sesión
  const { logout } = useAuth();

  const status = error?.response?.status;
  let errorText = "";

  if (status === 403) {
    errorText = "Advertencia: Privilegios insuficientes !";
  } else if (status === 401) {
    errorText = "";
  }
};

export default ErrorHandler;
