import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const LayoutPublic = () => {
  const { authentication } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication) return navigate("/home");
  }, [authentication]);

  return (
    <main className="relative w-full h-full">
      <Outlet />
    </main>
  );
};

export default LayoutPublic;
