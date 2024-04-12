const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const FormLogin = () => {
  const { login } = useAuth();

  return (
    <article className="flex flex-col items-center justify-center h-[75%]">
      <h1>INICIO DE SESIÓN</h1>
    </article>
  );
};

export default FormLogin;
