import { Button } from "@nextui-org/react";

const LoadingOrder_structure = () => {
  return [
    {
      name: "Orden carga",
      selector: (row) => row.numeroOrden,
    },
    {
      name: "Vehiculo",
      selector: (row) => row.tipoVehiculo,
    },
    {
      name: "Chofer",
      selector: (row) => row.chofer,
    },
    {
      name: "Estado",
      selector: (row) => row.estado,
    },
    {
      name: "acciones",
      center: true,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Button color="primary">Editar</Button>
          <Button color="danger">Eliminar</Button>
        </div>
      ),
    },
  ];
};

export default LoadingOrder_structure;
