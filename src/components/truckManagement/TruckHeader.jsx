import TitleAndRoute from "../TitleAndRoute";
import TruckHeader_card from "./TruckHeader_card";

const TruckHeader = () => {
  return (
    <header className="flex flex-wrap iterm-center justify-between gap-3 md:gap-0 p-2 bg-white">
      <article className="flex flex-col">
        <TitleAndRoute maintainer={"Registro camión"} />
      </article>

      <article className="flex items-center justify-end gap-4 w-full md:w-auto">
        <TruckHeader_card type={"operativo"} />
        <TruckHeader_card type={"vencido"} />
      </article>
    </header>
  );
};

export default TruckHeader;
