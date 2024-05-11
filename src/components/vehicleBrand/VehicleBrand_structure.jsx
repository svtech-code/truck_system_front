import ActionButton from "../ActionButton";

export const VehicleBrand_structure = () => {
  return [
    {
      name: "Marcas de vehículos",
      selector: (row) => row.desc_marca,
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => <ActionButton row={row} />,
    },
  ];
};
