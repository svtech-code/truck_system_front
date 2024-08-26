import { useLoaderData } from "react-router-dom";
import { GeoreferenceProvider } from "../contexts/GeoreferenceProvider";
import Georeference_main from "../components/georeference/Georeference_main";
import GetError from "../components/GetError";

const Georeference = () => {
  const { response, error } = useLoaderData();

  return (
    <GeoreferenceProvider response={response || []}>
      {!error ? <Georeference_main /> : <GetError GetError={error?.message} />}
    </GeoreferenceProvider>
  );
};

export default Georeference;
