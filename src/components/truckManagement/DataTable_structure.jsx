export const dataTable_structure = () => {
  return [
    {
      name: "Patente",
      selector: (row) => row.patente,
    },
    {
      name: "Tipo",
      selector: (row) => row.tipo,
    },
  ];
};
