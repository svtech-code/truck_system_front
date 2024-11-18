import { FaCar } from "react-icons/fa";
import useVehicleType from "../../hooks/useVehicleType";
import HeaderComponent from "../Header_Component";
import DataTableComponent from "../DataTable_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { useCallback, useState } from "react";
import VehicleType_structure from "./VehicleType_structure";
import ModalBaseForm from "../../templates/ModalBaseForm";
import initialValues_vehicleType from "../../utils/initialValues/vehicleTypeValues";
import vehicleTypeValidation from "../../validations/vehicleTypeValidation";
import VehicleType_form from "./VehicleType_form";
import useSubmitVehicleType from "../../hooks/submit/useSubmitVehicleType";

const varString = {
  title: "Tipos de vehículos",
  titleModal: "Tipo de Vehículo",
  route: "tipo_vehiculos",
  propertyId: "cod_tipo_vehiculo",
  propertyName: "desc_tipo_vehiculo",
  cards: [
    {
      titleCard: "Tipos de vehículos",
      iconCard: <FaCar size={35} />,
      countCard: "numberVehicleType",
    },
  ],
};

const VehicleType_main = () => {
  const { data, numberVehicleType, updateVehicleTypeData } = useVehicleType();
  const counterCard = { numberVehicleType };

  // actualizador de los estados del componente
  const updateStateComponent = useCallback((newState) => {
    setStateComponent((prev) => ({ ...prev, ...newState }));
  }, []);

  const [open, setOpen] = useState(false);

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      <HeaderComponent maintainer={varString.title}>
        {varString.cards.map((card, index) => (
          <HeaderCardComponent
            key={index}
            title={card.titleCard}
            icon={card.iconCard}
            count={counterCard[card.countCard]}
          />
        ))}
      </HeaderComponent>

      <ModalBaseForm
        propertyId={varString.propertyId}
        stateComponent={useVehicleType()}
        updateStateComponent={updateVehicleTypeData}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        useSubmit_generic={useSubmitVehicleType({
          data,
          updateStateComponent: updateVehicleTypeData,
        })}
        initialValues_generic={initialValues_vehicleType}
        validationSchema_generic={vehicleTypeValidation}
        Form_generic={(props) => <VehicleType_form {...props} />}
      />

      <DataTableComponent
        data={data}
        onOpen={() => setOpen(true)}
        structureData={VehicleType_structure({
          onOpen: () => setOpen(true),
          route: varString.route,
          propertyId: varString.propertyId,
          propertyName: varString.propertyName,
        })}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default VehicleType_main;
