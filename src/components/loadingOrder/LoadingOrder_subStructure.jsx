const LoadingOrder_subStructure = ({ data }) => {
  const {
    desc_transportista,
    desc_vehiculo,
    desc_acoplado,
    detalles_orden_carga,
  } = data;

  return (
    <div className="border p-2 mt-1 mb-2 rounded-lg overflow-hidden flex flex-col gap-y-4">
      {/* tabla con encabezado detalle de la orde de carga */}
      <table className="w-full text-[.8rem]">
        <tbody>
          <tr>
            <td className="w-32 font-semibold">Transportista:</td>
            <td>{desc_transportista}</td>
          </tr>

          <tr>
            <td className="w-32 font-semibold">Vehículo:</td>
            <td>{desc_vehiculo}</td>
          </tr>

          <tr>
            <td className="w-32 font-semibold">Acoplado:</td>
            <td>{desc_acoplado}</td>
          </tr>
        </tbody>
      </table>

      {/* tabla con los viajes de la orden de carga */}
      <div className="w-full bg-gray-100 rounded-lg p-2">
        <table className="w-full text-[.8rem]">
          <thead className="text-left bg-gray-300">
            <tr>
              <th scope="col" className="rounded-l-lg p-2">
                Contribuyente
              </th>
              <th scope="col" className="p-2">
                Detalle viaje
              </th>
              <th scope="col" className="p-2">
                Origen viaje
              </th>
              <th scope="col" className="p-2">
                Destino viaje
              </th>
              <th scope="col" className="rounded-r-lg p-2">
                Fecha acuse
              </th>
            </tr>
          </thead>
          <tbody>
            {detalles_orden_carga.map(
              (
                {
                  desc_contribuyente,
                  desc_origen,
                  desc_destino,
                  fecha_acuse,
                  desc_detalle_orden_carga,
                },
                index
              ) => (
                <tr className="hover:bg-gray-200" key={index}>
                  <td className="px-2 py-1 rounded-l-md">
                    {desc_contribuyente}
                  </td>
                  <td className="px-2 py-1">{desc_detalle_orden_carga}</td>
                  <td className="px-2 py-1">{desc_origen}</td>
                  <td className="px-2 py-1">{desc_destino}</td>
                  <td className="px-2 py-1 rounded-r-md">{fecha_acuse}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingOrder_subStructure;
