import { useLoaderData } from "react-router-dom";
import UserType_main from "../components/userType/UserType_main";
import { useEffect } from "react";

const UserType = () => {
  const { response } = useLoaderData();

  return <UserType_main userType_data={response} />;
};

export default UserType;
