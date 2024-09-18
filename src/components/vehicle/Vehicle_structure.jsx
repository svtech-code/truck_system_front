import apiPut from "../../api/apiPut";
import useVehicle from "../../hooks/useVehicle";
import ActionButton from "../ActionButton";
import SelectComponent from "../SelectComponent";
import Vehicle_SelectComponent from "./Vehicle_SelectComponent";

const formatPatente = (patente) => {
  return patente.replace(/(.{4})(.{2})/, "$1-$2");
};

export const Vehicle_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  const {
    data,
    stateVehicle,
    typeVehicle,
    modelVehicle,
    loadDataState,
    updateVehicleData,
  } = useVehicle();

  // función para actualizar el estado de un vehiculo en función del cambio o modificación del select estado
  const generateUpdatePayload = (newValue, row, typeVehicle, modelVehicle) => {
    const payload = {
      ...row,
      cod_tipo_vehiculo: typeVehicle.find(
        (item) => item.desc_tipo_vehiculo === row.desc_tipo_vehiculo
      ).cod_tipo_vehiculo,
      cod_modelo: modelVehicle.find(
        (item) => item.desc_modelo === row.desc_modelo
      ).cod_modelo,
      cod_marca: modelVehicle.find(
        (item) => item.desc_modelo === row.desc_modelo
      ).cod_marca,
      cod_estado_vehiculo: newValue,
    };

    return payload;
  };

  return [
    {
      name: "Patente",
      selector: (row) => formatPatente(row.patente),
      width: "6rem",
    },
    {
      name: "Tipo vehículo",
      selector: (row) => row.desc_tipo_vehiculo,
    },
    {
      name: "Marca",
      selector: (row) => row.desc_marca,
      hide: "md",
    },
    {
      name: "Modelo",
      selector: (row) => row.desc_modelo,
      hide: "md",
    },
    {
      name: "Toneladas",
      selector: (row) => row.cantidad_kilos,
      center: true,
    },
    {
      name: "Estado",
      minWidth: "13rem",
      cell: (row) => (
        <SelectComponent
          arrayDataForSelect={stateVehicle}
          nameCodDataInArray={"cod_estado_vehiculo"}
          nameDescDataInArray={"desc_estado_vehiculo"}
          nameCodDataInContext={"cod_estado_vehiculo"}
          loadForDesc={row.desc_estado_vehiculo}
          codPrimaryDataContext={row.cod_vehiculo}
          nameCodPrimaryDataContext={"cod_estado_vehiculo"}
          arrayContextData={data}
          nameDataContext={"data"}
          updateContextData={updateVehicleData}
          arrayRowDataTable={row}
          routeUpdate={"vehiculos"}
          onUpdateData={(newValue) =>
            generateUpdatePayload(newValue, row, typeVehicle, modelVehicle)
          }
        />
      ),
    },
    {
      name: "Chofer",
      selector: (row) => row.desc_chofer,
      hide: "md",
      minWidth: "20rem",
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => (
        <ActionButton
          data={data}
          row={row}
          onOpen={onOpen}
          route={route}
          propertyId={propertyId}
          propertyName={propertyName}
          updateStateComponent={updateVehicleData}
          dataKey={"data"}
          loaderData={loadDataState}
        />
      ),
    },
  ];
};
