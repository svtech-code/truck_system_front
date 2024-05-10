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
        <div className="flex gap-4">
          <p>btn editar</p>
          <p>btn eliminar</p>
        </div>
      ),
    },
  ];
};
