import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

const LayoutPrivate = () => {
  const { authentication } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication) return navigate("/index");
  }, [authentication]);

  return (
    <main className="relative w-full h-full">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default LayoutPrivate;
