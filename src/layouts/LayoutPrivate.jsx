import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/Footer";

const LayoutPrivate = () => {
  const { authentication } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication) return navigate("/index");
  }, [authentication]);

  return (
    <main className="relative flex flex-col gap-1 w-screen min-h-screen p-1 overflow-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LayoutPrivate;
