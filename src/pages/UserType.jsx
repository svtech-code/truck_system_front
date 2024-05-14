import { useLoaderData } from "react-router-dom";
import UserType_main from "../components/userType/UserType_main";
import GetError from "../components/GetError";

const UserType = () => {
  const { response, error } = useLoaderData();

  return (
    <>
      {!error ? (
        <UserType_main userType_data={response || []} />
      ) : (
        <GetError getError={error?.message} />
      )}
    </>
  );
};

export default UserType;
