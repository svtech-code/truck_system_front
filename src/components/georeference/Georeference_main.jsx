import { SiOpenstreetmap } from "react-icons/si";
import useGeoreference from "../../hooks/useGeoreference";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { useEffect, useState } from "react";
import DataTableComponent from "../DataTable_Component";
import { Georeference_structure } from "./Georeference_structure";
import Georeference_subStructure from "./Georeference_subStructure";
import { getData } from "../../api/apiGet";
import ModalBaseForm from "../../templates/ModalBaseForm";
import initialValues_georeference from "../../utils/initialValues/georeferenceValue";
import Georeference_form from "./Georeference_form";
import georeferenceValidation from "../../validations/georeferenceValidation";
import useSubmitGeoreference from "../../hooks/submit/useSubmitGeoreference";

const varString = {
  title: "Georeferencias",
  titleModal: "Georeferencia",
  route: "georeferencias",
  propertyId: "cod_georeferencia",
  propertyName: "",
  cards: [
    {
      titleCard: "Mis georeferencias",
      iconCard: <SiOpenstreetmap size={35} />,
      countCard: "numberGeoreference",
    },
  ],
};

const Georeference_main = () => {
  const { data, numberGeoreference, updateGeoreferenceData } =
    useGeoreference();
  const counterCard = { numberGeoreference };

  useEffect(() => {
    const getDataGeoreference = async () => {
      const communes = await getData({ endPoint: "comunas" });

      updateGeoreferenceData({
        commune: communes?.response,
      });
    };

    getDataGeoreference();
  }, []);

  // estados para el manejo del modal
  const [open, setOpen] = useState(false);

  const eventClickDownloadData = () => alert("Descargar informacion");

  return (
    <>
      {/* header del mantenedor */}
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
        stateComponent={useGeoreference()}
        updateStateComponent={updateGeoreferenceData}
        title={varString.titleModal}
        size={"xl"}
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        useSubmit_generic={useSubmitGeoreference({
          data,
          updateStateComponent: updateGeoreferenceData,
        })}
        initialValues_generic={initialValues_georeference}
        validationSchema_generic={georeferenceValidation}
        Form_generic={(props) => <Georeference_form {...props} />}
      />

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={() => setOpen(true)}
        structureData={Georeference_structure({
          onOpen: () => setOpen(true),
          route: varString.route,
          propertyId: varString.propertyId,
          propertyName: varString.propertyName,
        })}
        subStructureData={Georeference_subStructure}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Georeference_main;
