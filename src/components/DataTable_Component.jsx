import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  providerFilter,
  providerPaginationDataTable,
  styleDataTable,
} from "../utils/providerDataTable";
import InfoDataTable from "./InfoDataTable_component";
import HeaderDataTableComponent from "./HeaderDataTable_Component";

const DataTableComponent = ({
  data, //necesario
  structureData, // necesario
  subStructureData, // opcional
  onOpen, // opcional
  downloadData, // opcional
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

  // función especifica para trabajar con el scroll de la tabla ==>
  const [scrollHeight, setScrollHeight] = useState("");

  useEffect(() => {
    // Función para actualizar el valor de scrollHeight basado en la altura de la ventana
    const updateScrollHeight = () => {
      if (window.innerHeight < 860) {
        setScrollHeight("490px");
      } else {
        setScrollHeight("");
      }
    };

    // Escuchar los cambios de tamaño de la ventana
    window.addEventListener("resize", updateScrollHeight);

    // Llamar a la función en el montaje inicial
    updateScrollHeight();

    // Limpiar el evento de redimensionamiento cuando el componente se desmonta
    return () => window.removeEventListener("resize", updateScrollHeight);
  }, []);
  // =============================================================>

  return (
    <section className="relative flex flex-col p-2">
      <DataTable
        customStyles={styleDataTable}
        fixedHeader
        fixedHeaderScrollHeight={scrollHeight}
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
