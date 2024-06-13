import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import useVehicle from "../../hooks/useVehicle";
import { Vehicle_structure } from "./Vehicle_structure";
import Vehicle_subStructure from "./Vehicle_subStructure";
import HeaderCardComponent from "../HeaderCard_Component";
import { GiMechanicGarage, GiTruck } from "react-icons/gi";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useDisclosure } from "@nextui-org/react";
import ModalBase from "../../templates/ModalBase";
import initialValues_vehicle from "../../utils/initialValues/vehicleValues";
import vehicleValidation from "../../validations/vehicleValidation";
import Vehicle_form from "./Vehicle_form";
import usePostVehicle from "../../hooks/usePostVehicle";
import { useEffect } from "react";
import { getData } from "../../api/apiGet";

const Vehicle_main = () => {
  const {
    data,
    numberOperationalVehicles,
    numberMaintanceVehicle,
    numberExpiredDocument,
    updateVehicleData,
  } = useVehicle();

  // constante con los string utilizados como parámetros
  const varString = {
    title: "Registro de vehículos",
    titleModal: "Registro de vehículo",
    route: "vehiculos",
    propertyId: "cod_vehiculo",
    propertyName: "desc_modelo", // agregar array con propertis name
    cards: [
      {
        titleCard: "Operativos",
        iconCard: <GiTruck size={35} />,
        countCard: numberOperationalVehicles,
      },
      {
        titleCard: "Mantenimiento",
        iconCard: <GiMechanicGarage size={35} />,
        countCard: numberMaintanceVehicle,
      },
      {
        titleCard: "Vencimiento",
        iconCard: <HiClipboardDocumentList size={35} />,
        countCard: numberExpiredDocument,
      },
    ],
  };

  // carga de datos estados y choferes
  useEffect(() => {
    const getDataVehicle = async () => {
      const [estados, choferes] = await Promise.all([
        getData({ endPoint: "estado_vehiculos" }),
        getData({ endPoint: "choferes" }),
      ]);

      updateVehicleData({
        stateVehicle: estados?.response,
        driveList: choferes?.response,
      });
    };

    getDataVehicle();
  }, []);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* header del mantenedor */}
      <HeaderComponent maintainer={varString.title}>
        {/* tarjeta del mantenedor */}
        {varString.cards.map((card, index) => (
          <HeaderCardComponent
            key={index}
            title={card.titleCard}
            icon={card.iconCard}
            count={card.countCard}
          />
        ))}
      </HeaderComponent>

      {/* modal generico */}
      <ModalBase
        propertyId={varString.propertyId}
        stateComponent={useVehicle()}
        updateStateComponent={updateVehicleData}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        useSubmit_generic={usePostVehicle({
          data: data,
          updateStateComponent: updateVehicleData,
        })}
        initialValues_generic={initialValues_vehicle}
        validationSchema_generic={vehicleValidation}
        Form_generic={(props) => <Vehicle_form {...props} />}
      />

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={onOpen}
        structureData={Vehicle_structure({
          // data: mainVehicleData, // array con los datos del mantenedor
          onOpen, // función para abrir el modal
          route: varString.route, // ruta para trabajar peticiones axios
          propertyId: varString.propertyId, // propiedad del id
          propertyName: varString.propertyName, // propiedad de la descripción
          // updateStateComponent: updateVehicleData,
        })}
        subStructureData={Vehicle_subStructure} // datos para la subEstructura
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Vehicle_main;
