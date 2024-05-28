import ActionButton from "../ActionButton";

export const Vehicle_structure = () => {
  return [
    {
      name: "Patente",
      selector: (row) => row.patente,
    },
    {
      name: "Tipo vehículo",
      selector: (row) => row.desc_tipo_vehiculo,
    },
    {
      name: "Marca",
      selector: (row) => row.desc_marca,
    },
    {
      name: "Modelo",
      selector: (row) => row.modelo,
    },
    {
      name: "Capacidad (KG)",
      selector: (row) => row.cantidad_kilos,
    },
    {
      // agregar select interactivo
      name: "Estado",
      selector: (row) => row.desc_estado_vehiculo,
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => <ActionButton row={row} />,
    },
  ];
};
