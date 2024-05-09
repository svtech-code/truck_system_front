import DataTable from "react-data-table-component";
import { dataTable_structure } from "./DataTable_structure";
import InfoDataTable from "../InfoDataTable_component";
import {
  providerFilter,
  providerPaginationDataTable,
  styleDataTable,
} from "../../utils/providerDataTable";
import { useState } from "react";
import SubDataTable_structure from "./SubDataTable_structure";
import DataTable_header from "./DataTable_header";

const TruckDataTable = () => {
  // estado para las variables del mantenedor de gestión de camiones
  const [stateTruck, setStateTruck] = useState({
    filterTruck: "", // propiedad para manejar el filtro de la tabla
    loadingTruck: false, // propiedad para manejar la carga de datos
    errorTruck: null, // propiedad para manejar los errores
  });

  const updateStateTruck = (newState) => {
    setStateTruck((prev) => ({ ...prev, ...newState }));
  };

  // constante de prueba, eliminar
  const data = [
    {
      patente: "zy-3423",
      tipoVehiculo: "Camión",
      marcaVehiculo: "Ford cargo",
      modeloVehiculo: "track-2323",
      capacidadkg: "5.000",
      estadoVehiculo: "Operativo",
      descripcionVehiculo: "Camión con batea incorporada",
      anioVehiculo: 2008,
      vencimientoSeguro: "2025-12-05",
      vencimientoRevision: "2025-07-05",
      patenteAcoplado: "n/a",
      choferAsignado: "Claudio Aravena",
    },
    {
      patente: "zydf-23",
      tipoVehiculo: "Tracto camión",
      marcaVehiculo: "Mak",
      modeloVehiculo: "2343-afsd",
      capacidadkg: "15.000",
      estadoVehiculo: "Operativo",
      descripcionVehiculo: "Camión que usa batea acoplada",
      anioVehiculo: 2008,
      vencimientoSeguro: "2025-02-20",
      vencimientoRevision: "2025-08-05",
      patenteAcoplado: "ffjg-23",
      choferAsignado: "Luis Troncoso",
    },
    {
      patente: "zy-4423",
      tipoVehiculo: "Camión",
      marcaVehiculo: "Ford cargo",
      modeloVehiculo: "Frees 23",
      capacidadkg: "10000",
      estadoVehiculo: "Operativo",
      descripcionVehiculo: "Camión con batea incorporada",
      anioVehiculo: 2008,
      vencimientoSeguro: "2025-04-24",
      vencimientoRevision: "2025-03-05",
      patenteAcoplado: "n/a",
      choferAsignado: "Nelson Navarro",
    },
  ];

  return (
    // <section className="relative flex flex-col flex-1 p-2">
    <section className="relative flex flex-col p-2">
      <DataTable
        customStyles={styleDataTable}
        fixedHeader
        subHeader
        subHeaderComponent={DataTable_header({
          filterTruck: stateTruck.filterTruck,
          updateStateTruck,
        })}
        columns={dataTable_structure()}
        data={providerFilter({ data: data, filter: stateTruck.filterTruck })}
        highlightOnHover
        responsive
        persistTableHead
        noDataComponent={InfoDataTable()}
        pagination
        paginationComponentOptions={providerPaginationDataTable}
        expandableRows
        expandableRowsComponent={SubDataTable_structure}
        progressPending={stateTruck.loadingTruck}
      />
    </section>
  );
};

export default TruckDataTable;
