import ActionButton from "../ActionButton";

export const UserType_structure = () => {
  return [
    {
      name: "Tipo de usuario",
      selector: (row) => row.desc_tipo_usuario,
      grow: 1,
    },
    {
      name: "Acciones",
      center: true,
      width: "200px",
      cell: (row) => <ActionButton row={row} />,
    },
  ];
};
