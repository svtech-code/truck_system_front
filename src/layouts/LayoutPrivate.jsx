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
    <div className="relative flex flex-col gap-1 h-screen p-1">
      <header className="w-full relative flex-shrink-0">
        <NavBar />
      </header>
      <main className="flex flex-grow flex-col rounded-xl overflow-y-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default LayoutPrivate;
