const SubDataTable_structure = ({ data }) => {
  const renderDataRow = (label, value) => {
    return (
      <tr key={label}>
        <th className="bg-gray-200 px-4 text-left">{label}</th>
        <td className="px-4">{value}</td>
      </tr>
    );
  };

  return (
    <div className="border rounded-md border-gray-300 overflow-hidden w-1/3">
      <table className="w-full">
        {renderDataRow("Descripción vehículo", data.descripcionVehiculo)}
        {renderDataRow("Año vehículo", data.anioVehiculo)}
        {renderDataRow("Vencimiento seguro", data.vencimientoSeguro)}
        {renderDataRow("Vencimiento Revisión", data.vencimientoSeguro)}
        {renderDataRow("Patente acoplado", data.patenteAcoplado)}
        {renderDataRow("Chofer asignado", data.choferAsignado)}
      </table>
    </div>
  );
};

export default SubDataTable_structure;
