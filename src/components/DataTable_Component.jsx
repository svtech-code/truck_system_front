import { useState } from "react";
import DataTable from "react-data-table-component";
import {
  providerFilter,
  providerPaginationDataTable,
  styleDataTable,
} from "../utils/providerDataTable";
import InfoDataTable from "./InfoDataTable_component";
import HeaderDataTableComponent from "./HeaderDataTable_Component";

const DataTableComponent = ({
  data,
  structureData,
  subStructureData,
  onOpen,
  downloadData,
  loaderData, // manejador del spinner de carga, solo se usa cuando se pasa como prop
}) => {
  // estados del dataTable
  const [stateData, setStateData] = useState({
    filterData: "",
    loadingData: false,
    errorData: null,
  });

  //actualizador de los estados del dataTable
  const updateStateData = (newState) => {
    setStateData((prev) => ({ ...prev, ...newState }));
  };

  return (
    <section className="relative flex flex-col p-2">
      <DataTable
        customStyles={styleDataTable}
        fixedHeader
        subHeader
        subHeaderComponent={HeaderDataTableComponent({
          filter: stateData.filterData,
          updateStateData,
          onClickAdd: onOpen,
          onClickDownload: downloadData,
          loaderData,
        })}
        columns={structureData}
        data={providerFilter({ data: data, filter: stateData.filterData })}
        highlightOnHover
        responsive
        persistTableHead
        noDataComponent={InfoDataTable()}
        pagination
        paginationComponentOptions={providerPaginationDataTable}
        progressPending={stateData.loadingData}
        expandableRows={subStructureData ? true : false}
        expandableRowsComponent={subStructureData}
      />
    </section>
  );
};

export default DataTableComponent;
