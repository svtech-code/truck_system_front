import DataTableComponent from "../DataTable_Component";
import HeaderComponent from "../Header_Component";
import { UserType_structure } from "./UserType_structure";
import HeaderCardComponent from "../HeaderCard_Component";
import { FaUserTag } from "react-icons/fa";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalNewData from "../../templates/ModalNewData";

const UserType_main = ({ userType_data }) => {
  // estado para almacenar la información del mantenedor
  const [data, setData] = useState(userType_data);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* cabecera del mantenedor */}
      <HeaderComponent maintainer={"Tipos de usuarios"}>
        {/* tarjeta del mantenedor */}
        <HeaderCardComponent
          title={"Tipos de usuarios"}
          icon={<FaUserTag size={35} />}
          count={data.length}
        />
      </HeaderComponent>

      {/* modal del mantenedor */}
      <ModalNewData
        setData={setData}
        title={"Tipo de usuario"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        route={"tipo_usuarios"}
        propertyName={"desc_tipo_usuario"}
      />

      {/* tabla de datos del mantenedor */}
      <DataTableComponent
        data={data}
        structureData={UserType_structure()}
        newData={onOpen}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default UserType_main;
