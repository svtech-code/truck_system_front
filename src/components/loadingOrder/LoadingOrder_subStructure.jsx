import { Select, SelectItem } from "@nextui-org/react";

const LoadingOrder_subStructure = ({ data }) => {
  // componente para las filas
  const renderDataRow = (label, value) => (
    <tr key={label}>
      <th className="bg-gray-200 px-4 text-left">{label}</th>
      <td className="px-4">{value}</td>
    </tr>
  );

  return (
    // <div className="border rounded-md border-gray-300 overflow-hidden w-1/3">
    //   <table className="w-full">
    //     {data.detalleOrder.map((item, index) => (
    //       <tbody key={index}>
    //         {renderDataRow("Cliente", item.cliente)}
    //         {renderDataRow("Origen", item.origen)}
    //       </tbody>
    //     ))}
    //   </table>
    // </div>

    <div className="flex flex-col gap-2 text-sm mb-6">
      <span className="text-[1rem] font-bold block -mb-2 mt-2 ml-2">
        Detalle de la orden de carga:
      </span>
      <div className="border rounded-md border-gray-300 overflow-hidden">
        <table className=" w-full">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="py-1 px-2">Cliente</th>
              <th className="py-1 px-2">Origen</th>
              <th className="py-1 px-2">Destino</th>
              <th className="py-1 px-2">Estado</th>
            </tr>
          </thead>

          <tbody className="text-left">
            {data.detalleOrder.map((item, index) => (
              <tr key={index}>
                <td className="py-1 px-2">{item.cliente}</td>
                <td className="py-1 px-2">{item.origen}</td>
                <td className="py-1 px-2">{item.destino}</td>
                <td className="py-1 px-2">
                  <Select
                    variant="flat"
                    aria-label="estado"
                    size="sm"
                    className="max-w-[10rem]"
                  >
                    <SelectItem key="pendiente" value="pendiente">
                      Pendiente
                    </SelectItem>
                    <SelectItem key="iniciado" value="iniciado">
                      Iniciado
                    </SelectItem>
                    <SelectItem key="terminado" value="terminado">
                      Terminado
                    </SelectItem>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingOrder_subStructure;
