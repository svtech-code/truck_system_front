import { MdDelete, MdEditSquare, MdSimCardDownload } from "react-icons/md";

export const dataTable_structure = () => {
  return [
    {
      name: "Patente",
      selector: (row) => row.patente,
    },
    {
      name: "Tipo Vehículo",
      selector: (row) => row.tipoVehiculo,
    },
    {
      name: "Marca",
      selector: (row) => row.marcaVehiculo,
    },
    {
      name: "Modelo",
      selector: (row) => row.modeloVehiculo,
    },
    {
      name: "Capacidad (KG)",
      selector: (row) => row.capacidadkg,
    },
    {
      name: "Estado",
      selector: (row) => row.estadoVehiculo,
    },
    {
      name: "Acción",
      center: true,
      cell: (row) => (
        <div className="flex gap-3">
          <div className="text-green-500 hover:scale-110 transition-all duration-300">
            <MdSimCardDownload size={28} />
          </div>
          <div className="text-blue-500 hover:scale-110 transition-all duration-300">
            <MdEditSquare size={28} />
          </div>
          <div className="text-red-500 hover:scale-110 transition-all duration-300">
            <MdDelete size={28} />
          </div>
        </div>
      ),
    },
  ];
};
