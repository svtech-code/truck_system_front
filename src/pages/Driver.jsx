import { useLoaderData } from "react-router-dom";
import { DriverProvider } from "../contexts/DriverProvider";
import GetError from "../components/GetError";
import Driver_main from "../components/driver/Driver_main";

const Driver = () => {
  const { response, error } = useLoaderData();

  return (
    <DriverProvider response={response || []}>
      {!error ? <Driver_main /> : <GetError getError={error?.message} />}
    </DriverProvider>
  );
};

export default Driver;
