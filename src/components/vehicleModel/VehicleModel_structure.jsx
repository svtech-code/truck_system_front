import ActionButton from "../ActionButton";
import Select_Component from "../Select_Component";

const VehicleModel_structure = ({
  data,
  onOpen,
  route,
  propertyId,
  propertyName,
}) => {
  return [
    {
      name: "Modelo vehículo",
      selector: (row) => row.desc_modelo,
      width: "300px",
    },
    {
      name: "Marca vehículo",
      selector: (row) => row.desc_marca,
      width: "300px",
      cell: (row) => (
        <Select_Component
          codPrimary={row.cod_modelo}
          rowData={row.desc_modelo}
          listData={data}
          codData={"cod_marca"}
          descData={"desc_marca"}
        />
      ),
    },
    {
      name: "Acciones",
      center: true,
      //   width: "200px",
      //   right: true,
      //   center: true,
      style: {
        "justify-content": "flex-end",
      },
      cell: (row) => (
        <ActionButton
          data={data}
          row={row}
          onOpen={onOpen}
          route={route}
          propertyId={propertyId}
          propertyName={propertyName}
          updateStateComponent={""}
          dataKey={"data"}
        />
      ),
    },
  ];
};

export default VehicleModel_structure;
