import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import useVehicle from "../../hooks/useVehicle";
import { Vehicle_structure } from "./Vehicle_structure";
import Vehicle_subStructure from "./Vehicle_subStructure";
import HeaderCardComponent from "../HeaderCard_Component";
import { GiTruck } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Vehicle_main = () => {
  const { mainVehicleData, numberOperationalVehicles, numberExpiredDocument } =
    useVehicle();

  const eventClickNewData = () => alert("nuevo elemento");
  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      <HeaderComponent maintainer={"Registro de vehículos"}>
        <HeaderCardComponent
          title={"Camiones operativos"}
          icon={<GiTruck size={35} />}
          count={numberOperationalVehicles}
        />
        <HeaderCardComponent
          title={"Documentos vencidos"}
          icon={<HiClipboardDocumentList size={35} />}
          count={numberExpiredDocument}
        />
      </HeaderComponent>

      <DataTableComponent
        data={mainVehicleData}
        structureData={Vehicle_structure()}
        subStructureData={Vehicle_subStructure}
        newData={eventClickNewData}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Vehicle_main;
