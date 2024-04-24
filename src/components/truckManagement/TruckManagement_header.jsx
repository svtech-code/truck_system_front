import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { FaTruck } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

const TruckManagement_header = () => {
  return (
    <header className="relative flex h-auto justify-center items-center py-2">
      <section className="w-full flex flex-wrap justify-between items-center gap-4">
        <article>
          <h2 className="text-[2rem] font-bold text-primary-color">
            Gestión de vehículos
          </h2>
        </article>

        <article className="flex sm:flex-row flex-col gap-3 sm:gap-4 md:w-auto w-full">
          <Card
            className="w-full sm:w-1/2 md:w-[13.5rem] hover:bg-green-100 transition-all duration-300 
              text-primary-color hover:text-green-800 hover:scale-105 border border-green-400"
            shadow="sm"
          >
            <CardBody>
              <p className="text-xl">Camiones operativos</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="flex w-full justify-around items-center">
                <FaTruck size={30} />
                <p className="text-2xl">34</p>
              </div>
            </CardFooter>
          </Card>

          <Card
            className="w-full sm:w-1/2 md:w-[13.5rem] hover:bg-red-100 transition-all duration-300 
              text-primary-color hover:text-red-800 hover:scale-105 border border-red-400"
            shadow="sm"
          >
            <CardBody>
              <p className="text-xl">Revisiones vencidas</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="flex w-full justify-around items-center">
                <IoCalendar size={30} />
                <p className="text-2xl">34</p>
              </div>
            </CardFooter>
          </Card>
        </article>
      </section>
    </header>
  );
};

export default TruckManagement_header;
