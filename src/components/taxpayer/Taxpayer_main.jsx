import { FaUserTie } from "react-icons/fa";
import useTaxpayer from "../../hooks/useTaxpayer";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import DataTableComponent from "../DataTable_Component";
import { Taxpayer_structure } from "./Taxpayer_structure";
import { useEffect, useState } from "react";
import Taxpayer_subStructure from "./Taxpayer_subStructure";
import ModalBaseForm from "../../templates/ModalBaseForm";
import initialValues_taxpayer from "../../utils/initialValues/taxpayerValues";
import taxpayerValidation from "../../validations/TaxpayerValidation";
import Taxpayer_form from "./Taxpayer_form";
import useSubmitTaxpayer from "../../hooks/submit/useSubmitTaxpayer";
import { getData } from "../../api/apiGet";

const varString = {
  title: "Contribuyentes",
  titleModal: "Contribuyente",
  route: "contribuyentes",
  propertyId: "cod_contribuyente",
  propertyName: "desc_contribuyente",
  cards: [
    {
      titleCard: "Mis contribuyentes",
      iconCard: <FaUserTie size={35} />,
      countCard: "numberTaxpayers",
    },
  ],
};

const Taxpayer_main = () => {
  const { data, numberTaxpayers, updateTaxpayerData } = useTaxpayer();
  const counterCard = { numberTaxpayers };

  useEffect(() => {
    const getDataTaxpayer = async () => {
      const [communes, georeferences] = await Promise.all([
        getData({ endPoint: "comunas" }),
        getData({ endPoint: "georeferencias" }),
      ]);

      updateTaxpayerData({
        commune: communes?.response,
        georeference: georeferences?.response,
      });
    };

    getDataTaxpayer();
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
        stateComponent={useTaxpayer()}
        updateStateComponent={updateTaxpayerData}
        title={varString.titleModal}
        size={"2xl"}
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        useSubmit_generic={useSubmitTaxpayer({
          data,
          updateStateComponent: updateTaxpayerData,
        })}
        initialValues_generic={initialValues_taxpayer}
        validationSchema_generic={taxpayerValidation}
        Form_generic={(props) => <Taxpayer_form {...props} />}
      />

      {/* tabla del mantenedor */}
      <DataTableComponent
        data={data}
        onOpen={() => setOpen(true)}
        structureData={Taxpayer_structure({
          onOpen: () => setOpen(true),
          route: varString.route,
          propertyId: varString.propertyId,
          propertyName: varString.propertyName,
        })}
        subStructureData={Taxpayer_subStructure}
        downloadData={eventClickDownloadData}
      />
    </>
  );
};

export default Taxpayer_main;
