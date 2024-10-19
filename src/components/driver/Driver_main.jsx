import { FaAddressCard } from "react-icons/fa";
import useDriver from "../../hooks/useDriver";
import { useState } from "react";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import DataTableComponent from "../DataTable_Component";
import Driver_structure from "./Driver_structure";
import Driver_subStructure from "./Driver_subStructure";
import ModalBaseForm from "../../templates/ModalBaseForm";
import initialValues_driver from "../../utils/initialValues/driverValue";
import driverValidation from "../../validations/driverValidation";
import Driver_form from "./Driver_form";
import useSubmitDriver from "../../hooks/submit/useSubmitDriver";

const varString = {
  title: "Choferes",
  titleModal: "Chofer",
  route: "usuarios",
  propertyId: "cod_usuario",
  propertyName: "desc_usuario",
  cards: [
    {
      titleCard: "Lista de Choferes",
      iconCard: <FaAddressCard size={35} />,
      countCard: "numberDrivers",
    },
  ],
};

const Driver_main = () => {
  const { data, numberDrivers, updateDriverData } = useDriver();
  const counterCard = { numberDrivers };

  // estados para el manejo del modal
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

      {/* modal generico */}
      <ModalBaseForm
        propertyId={varString.propertyId}
        stateComponent={useDriver()}
        updateStateComponent={updateDriverData}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        useSubmit_generic={useSubmitDriver({
          data,
          updateStateComponent: updateDriverData,
        })}
        initialValues_generic={initialValues_driver}
        validationSchema_generic={driverValidation}
        Form_generic={(props) => <Driver_form {...props} />}
      />

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={() => setOpen(true)}
        structureData={Driver_structure({
          onOpen: () => setOpen(true),
          route: varString.route,
          propertyId: varString.propertyId,
          propertyName: varString.propertyName,
        })}
        subStructureData={Driver_subStructure}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Driver_main;
