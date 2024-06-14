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
import VehicleModel_form from "../vehicleModel/VehicleModel_form";
import usePostModel from "../../hooks/usePostModel";
import initialValues_model from "../../utils/initialValues/modelValues";
import modelValidation from "../../validations/modelValidation";
import SubModalBase from "../../templates/SubModalBase";

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

  // carga de los datos principales
  useEffect(() => {
    const getDataVehicle = async () => {
      // const estados = await getData({ endPoint: "estado_vehiculos" });
      // updateVehicleData({ stateVehicle: estados?.response });
      const [state, model, type, driver] = await Promise.all([
        getData({ endPoint: "estado_vehiculos" }),
        getData({ endPoint: "modelos" }),
        getData({ endPoint: "tipo_vehiculos" }),
        getData({ endPoint: "choferes" }),
      ]);

      updateVehicleData({
        stateVehicle: state?.response,
        modelVehicle: model?.response,
        typeVehicle: type?.response,
        drivers: driver?.response,
      });
    };

    getDataVehicle();
  }, []);

  // estados para el manejo del modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const {
  //   isOpen: isOneOpen,
  //   onOpen: onOneOpen,
  //   onOpenChange: onOneOpenChange,
  // } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onOpenChange: onSecondOpenChange,
  } = useDisclosure();

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
        Form_generic={(props) => (
          <Vehicle_form {...props} onOpen={onSecondOpen} />
        )}
      />

      {/* modal secundario */}
      {/* <SubModalBase
        propertyId={"desc_modelo"}
        title={"Modelo de Vehículo"}
        size={"xl"}
        isSecondOpen={isSecondOpen}
        onSecondOpenChange={onSecondOpenChange}
        useSubmit_generic={usePostModel({ subAdd: true, updateVehicleData })}
        initialValues_generic={initialValues_model}
        validationSchema_generic={modelValidation}
        Form_generic={(props) => <VehicleModel_form {...props} />}
      /> */}
      {/* <ModalBase
        propertyId={"desc_modelo"}
        stateComponent={{ data: "", edit: false, idEdit: null }}
        title={"Modelo de Vehículo"}
        size={"xl"}
        isOpen={isSecondOpen}
        onOpenChange={onSecondOpenChange}
        useSubmit_generic={usePostModel({ subAdd: true, updateVehicleData })}
        initialValues_generic={initialValues_model}
        validationSchema_generic={modelValidation}
        Form_generic={(props) => <VehicleModel_form {...props} />}
        subModal={true} // para manejar la falta de updateStateComponent
      /> */}

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={onOpen}
        structureData={Vehicle_structure({
          onOpen, // función para abrir el modal
          route: varString.route, // ruta para trabajar peticiones axios
          propertyId: varString.propertyId, // propiedad del id
          propertyName: varString.propertyName, // propiedad de la descripción
        })}
        subStructureData={Vehicle_subStructure} // datos para la subEstructura
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Vehicle_main;
