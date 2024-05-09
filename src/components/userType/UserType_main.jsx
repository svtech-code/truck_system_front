import { FaUserTag } from "react-icons/fa";
import { userType_data } from "../../utils/datatable_data";
import DataTableComponent from "../DataTable_Component";
import HeaderComponent from "../Header_Component";
import { UserType_structure } from "./UserType_structure";

const UserType_main = () => {
  return (
    <>
      <HeaderComponent
        maintainer={"Tipos de usuarios"}
        iconCard={<FaUserTag size={35} />}
      />
      <DataTableComponent
        data={userType_data}
        structureData={UserType_structure()}
      />
    </>
  );
};

export default UserType_main;
