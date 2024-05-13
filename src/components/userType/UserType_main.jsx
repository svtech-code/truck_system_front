import DataTableComponent from "../DataTable_Component";
import HeaderComponent from "../Header_Component";
import { UserType_structure } from "./UserType_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { FaUserTag } from "react-icons/fa";
import { useState } from "react";

const UserType_main = ({ userType_data }) => {
  const [data, setData] = useState(userType_data);

  const eventClickNewData = () => alert("nuevo elemento");
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      <HeaderComponent maintainer={"Tipos de usuarios"}>
        <HeaderCardComponent
          title={"Tipos de usuarios"}
          icon={<FaUserTag size={35} />}
          count={data.length}
        />
      </HeaderComponent>

      <DataTableComponent
        data={data}
        structureData={UserType_structure()}
        newData={eventClickNewData}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default UserType_main;
