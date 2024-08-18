import { useLoaderData } from "react-router-dom";
import GetError from "../components/GetError";
import Taxpayer_main from "../components/taxpayer/Taxpayer_main";
import { TaxpayerProvider } from "../contexts/TaxpayerProvider";

const Taxpayer = () => {
  const { response, error } = useLoaderData();

  return (
    <TaxpayerProvider response={response || []}>
      {!error ? <Taxpayer_main /> : <GetError getError={error?.messsage} />}
    </TaxpayerProvider>
  );
};

export default Taxpayer;
