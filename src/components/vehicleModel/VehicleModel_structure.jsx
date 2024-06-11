import ActionButton from "../ActionButton";
import Select_Component from "../Select_Component";

const VehicleModel_structure = ({
  data,
  onOpen,
  route,
  propertyId,
  propertyName,
  updateStateComponent,
}) => {
  return [
    {
      name: "Modelo vehículo",
      selector: (row) => row.desc_modelo,
      width: "250px",
    },
    {
      name: "Marca vehículo",
      selector: (row) => row.desc_marca,
      width: "300px",
    },
    {
      name: "Acciones",
      center: true,
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
          updateStateComponent={updateStateComponent}
          dataKey={"data"}
        />
      ),
    },
  ];
};

export default VehicleModel_structure;
