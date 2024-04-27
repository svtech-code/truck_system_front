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
    <div className="relative flex flex-col gap-1 min-h-screen p-1">
      <NavBar />
      <main className="flex flex-grow flex-col rounded-xl overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPrivate;
