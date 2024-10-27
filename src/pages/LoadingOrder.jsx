import { useLoaderData } from "react-router-dom";
import GetError from "../components/GetError";
import LoadingOrder_main from "../components/loadingOrder/LoadingOrder_main";
import { LoadingOrderProvider } from "../contexts/LoadingOrderProvider";

const LoadingOrder = () => {
  const { response, error } = useLoaderData();

  return (
    <LoadingOrderProvider response={response || []}>
      {!error ? <LoadingOrder_main /> : <GetError getError={error?.message} />}
    </LoadingOrderProvider>
  );
};

export default LoadingOrder;
