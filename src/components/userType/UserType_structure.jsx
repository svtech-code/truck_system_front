import ActionButton from "../ActionButton";

export const UserType_structure = () => {
  return [
    {
      name: "Tipo de usuario",
      selector: (row) => row.userType,
      grow: 1,
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
