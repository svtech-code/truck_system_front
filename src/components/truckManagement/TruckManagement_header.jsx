import TitleAndRoute from "../TitleAndRoute";
import Header_card from "./Header_card";

const TruckManagement_header = () => {
  return (
    <header className="flex flex-wrap iterm-center justify-between gap-3 md:gap-0 p-2 bg-white">
      <article className="flex flex-col">
        <TitleAndRoute maintainer={"Registro camión"} />
      </article>

      <article className="flex items-center justify-end gap-4 w-full md:w-auto">
        <Header_card type={"operativo"} />
        <Header_card type={"vencido"} />
      </article>
    </header>
  );
};

export default TruckManagement_header;
