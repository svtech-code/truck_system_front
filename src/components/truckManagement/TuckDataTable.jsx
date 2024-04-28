import DataTable from "react-data-table-component";
import { dataTable_structure } from "./DataTable_structure";
import InfoDataTable from "../InfoDataTable";
import { providerPaginationDataTable } from "../../utils/providerDataTable";
import { useState } from "react";

const TruckDataTable = () => {
  // estado para las variables del mantenedor de gestión de camiones
  const [stateTruck, setStateTruck] = useState({
    filterTruck: "", // propiedad para manejar el filtro de la tabla
    loadingTruck: false, // propiedad para manejar la carga de datos
    errorTruck: null, // propiedad para manejar los errores
  });

  // constante de prueba, eliminar
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

  return (
    <section className="relative flex flex-col flex-1 p-2">
      <DataTable
        fixedHeader
        // subHeader
        columns={dataTable_structure()}
        data={data}
        highlightOnHover
        responsive
        persistTableHead
        noDataComponent={InfoDataTable()}
        pagination
        paginationComponentOptions={providerPaginationDataTable}
        expandableRows
        // expandableRowsComponent={}
        progressPending={stateTruck.loadingTruck}
      />
    </section>
  );
};

export default TruckDataTable;
