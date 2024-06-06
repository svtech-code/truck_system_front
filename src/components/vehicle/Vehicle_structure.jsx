import ActionButton from "../ActionButton";
import Vehicle_selectChofer from "./Vehicle_selectChofer";
import Vehicle_selectEstado from "./Vehicle_selectEstado";

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
      hide: "md",
    },
    {
      name: "Modelo",
      selector: (row) => row.desc_modelo,
      hide: "md",
    },
    {
      name: "Capacidad (KG)",
      selector: (row) => row.cantidad_kilos,
    },
    {
      // agregar select interactivo
      name: "Estado",
      selector: (row) => row.desc_estado_vehiculo,
      cell: (row) => <Vehicle_selectEstado />,
      minWidth: "13rem",
    },
    {
      name: "Chofer",
      cell: () => <Vehicle_selectChofer />,
      hide: "md",
      minWidth: "15rem",
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => <ActionButton row={row} />,
    },
  ];
};
