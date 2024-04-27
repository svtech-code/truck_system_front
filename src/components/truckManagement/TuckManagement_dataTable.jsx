import DataTable from "react-data-table-component";
import { dataTable_structure } from "./DataTable_structure";

const TruckManagement_dataTable = () => {
  const data = [
    {
      patente: "zy-3423",
      tipo: "Camión",
    },
    {
      patente: "zydf-23",
      tipo: "tracto camion",
    },
    {
      patente: "zy-4423",
      tipo: "camion ford cargo",
    },
  ];

  const test = "prueba";

  return (
    <section className="relative flex flex-1 p-2">
      <DataTable columns={dataTable_structure()} data={data} responsive />
    </section>
  );
};

export default TruckManagement_dataTable;
