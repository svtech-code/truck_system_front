import { FaUserTie } from "react-icons/fa";
import useTaxpayer from "../../hooks/useTaxpayer";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";

const varString = {
  title: "Contribuyentes",
  titleModal: "Contribuyente",
  route: "contribuyente",
  propertyId: "",
  popertyName: "",
  cards: [
    {
      titleCard: "Mis contribuyentes",
      iconCard: <FaUserTie size={35} />,
      countCard: "numberTaxpayers",
    },
  ],
};

const Taxpayer_main = ({ taxpayer_data }) => {
  const { data, numberTaxpayers } = useTaxpayer();
  const counterCard = { numberTaxpayers };

  // console.log(data);

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
    </>
  );
};

export default Taxpayer_main;
