export const VehicleType_structure = () => {
  return [
    {
      name: "Tipo de vehìculo",
      selector: (row) => row.vehicleType,
    },
    {
      name: "Descripción tipo vehículo",
      selector: (row) => row.vehicleDescription,
    },
  ];
};
