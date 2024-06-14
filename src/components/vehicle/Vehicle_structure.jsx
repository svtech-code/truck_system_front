import useVehicle from "../../hooks/useVehicle";
import ActionButton from "../ActionButton";
import Select_Component from "../Select_Component";

const formatPatente = (patente) => {
  return patente.replace(/(.{4})(.{2})/, "$1-$2");
};

export const Vehicle_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  const { data, stateVehicle, driveList, updateVehicleData } = useVehicle();
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
      selector: (row) => row.desc_estado_vehiculo,
      minWidth: "13rem",
      cell: (row) => (
        <Select_Component
          codPrimary={row.cod_vehiculo}
          rowData={row.desc_estado_vehiculo}
          listData={stateVehicle}
          codData={"cod_estado_vehiculo"}
          descData={"desc_estado_vehiculo"}
          row={row}
          // updateVehicleData={updateVehicleData}
        />
      ),
    },
    {
      name: "Chofer",
      selector: (row) => row.desc_chofer,
      hide: "md",
      minWidth: "20rem",
      // cell: (row) => (
      //   <Select_Component
      //     codPrimary={row.cod_vehiculo}
      //     rowData={row.desc_chofer}
      //     listData={driveList}
      //     codData={"cod_usuario"}
      //     descData={"desc_usuario"}
      //     // updateVehicleData={updateVehicleData}
      //   />
      // ),
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
        />
      ),
    },
  ];
};
