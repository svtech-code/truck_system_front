import ActionButton from "../ActionButton"

export const LoadingOrderGuide_structure = [
  {
    name: "Nº Guia",
    selector: (row) => row.numero_guia,
  },
  {
    name: "Fecha guia",
    selector: (row) => row.fecha_guia,
  },
  {
    name: "Cliente",
    selector: (row) => row.cliente,
  },
  {
    name: "Descripción",
    selector: (row) => row.descripcion,
  },
  {
    name: "Cantidad",
    selector: (row) => row.cantidad,
  },
];
