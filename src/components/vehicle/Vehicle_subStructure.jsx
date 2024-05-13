const Vehicle_subStructure = ({ data }) => {
  // componente para las filas
  const renderDataRow = (label, value) => (
    <tr key={label}>
      <th className="bg-gray-200 px-4 text-left">{label}</th>
      <td className="px-4">{value}</td>
    </tr>
  );

  return (
    <div className="border rounded-md border-gray-300 overflow-hidden w-1/3">
      <table className="w-full">
        <tbody>
          {renderDataRow("Descripción vehículo", data.desc_vehiculo)}
          {renderDataRow("Año vehículo", data.anio)}
          {renderDataRow("Vencimiento seguro", data.fecha_vigencia_segur)}
          {renderDataRow("Vencimiento Revisión", data.fecha_vigencia_revision)}
          {/* {renderDataRow("Patente acoplado", data.patenteAcoplado)}
        {renderDataRow("Chofer asignado", data.choferAsignado)} */}
        </tbody>
      </table>
    </div>
  );
};

export default Vehicle_subStructure;
