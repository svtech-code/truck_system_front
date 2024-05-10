import ActionButton from "../ActionButton";

export const VehicleType_structure = () => {
  return [
    {
      name: "Tipo de vehìculo",
      selector: (row) => row.vehicleType,
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => (
        <ActionButton row={row} />
      ),
    },
  ];
};
