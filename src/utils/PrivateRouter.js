import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const PrivateRouter = ({ children }) => {
  const { authentication } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, [authentication]);

  return children;
};

export default PrivateRouter;
