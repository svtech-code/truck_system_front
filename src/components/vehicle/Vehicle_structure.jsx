import useVehicle from "../../hooks/useVehicle";
import ActionButton from "../ActionButton";
import Select_Component from "../Select_Component";

export const Vehicle_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  const { mainVehicleData, stateVehicle, driveList, updateVehicleData } =
    useVehicle();
  return [
    {
      name: "Patente",
      selector: (row) => row.patente,
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
      selector: (row) => row.desc_estado_vehiculo,
      cell: (row) => (
        <Select_Component
          codPrimary={row.cod_vehiculo}
          rowData={row.desc_estado_vehiculo}
          listData={stateVehicle}
          codData={"cod_estado_vehiculo"}
          descData={"desc_estado_vehiculo"}
          // updateVehicleData={updateVehicleData}
        />
      ),
      minWidth: "13rem",
    },
    {
      name: "Chofer",
      selector: (row) => row.desc_chofer,
      cell: (row) => (
        <Select_Component
          codPrimary={row.cod_vehiculo}
          rowData={row.desc_chofer}
          listData={driveList}
          codData={"cod_usuario"}
          descData={"desc_usuario"}
          // updateVehicleData={updateVehicleData}
        />
      ),
      hide: "md",
      minWidth: "20rem",
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => (
        <ActionButton
          data={mainVehicleData}
          row={row}
          onOpen={onOpen}
          route={route}
          propertyId={propertyId}
          propertyName={propertyName}
          updateStateComponent={updateVehicleData}
          dataKey={"mainVehicleData"}
        />
      ),
    },
  ];
};
