import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { logout } = useAuth();
  return (
    <>
      <h1>pagina principal</h1>
      <NavLink to={"/index"} onClick={() => logout()}>
        Cerrar Sesión
      </NavLink>
    </>
  );
};

export default Home;
