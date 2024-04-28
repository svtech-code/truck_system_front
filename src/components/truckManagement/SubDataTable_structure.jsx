const SubDataTable_structure = ({ data }) => {
  return (
    <div className="border rounded-md border-gray-300 overflow-hidden w-1/2">
      <table className="w-full">
        <tr>
          <th className="bg-gray-200 px-4 text-left">Descripción vehículo</th>
          <td className="px-4">{data.descripcionVehiculo}</td>
        </tr>
        <tr>
          <th className="bg-gray-200 px-4 text-left">Año vehículo</th>
          <td className="px-4">{data.anioVehiculo}</td>
        </tr>
        <tr>
          <th className="bg-gray-200 px-4 text-left">Vencimiento seguro</th>
          <td className="px-4">{data.vencimientoSeguro}</td>
        </tr>
        <tr>
          <th className="bg-gray-200 px-4 text-left">Vencimiento Revisión</th>
          <td className="px-4">{data.vencimientoRevision}</td>
        </tr>
        <tr>
          <th className="bg-gray-200 px-4 text-left">Patente acoplado</th>
          <td className="px-4">{data.patenteAcoplado}</td>
        </tr>
        <tr>
          <th className="bg-gray-200 px-4 text-left ml-2">Chofer asignado</th>
          <td className="px-4">{data.choferAsignado}</td>
        </tr>
      </table>
    </div>

    // <div className="flex flex-col gap-2 px-16 text-sm mb-6">
    //   <span className="text-[1rem] font-bold block -mb-2 mt-2 ml-2">
    //     Datos estudiante:
    //   </span>
    //   <div className="border rounded-md border-gray-300 overflow-hidden">
    //     <table className=" w-full">
    //       <thead className="bg-gray-200 text-left">
    //         <tr>
    //           <th className="py-1 px-2">Fecha Nacimiento</th>
    //           <th className="py-1 px-2">Sexo</th>
    //           <th className="py-1 px-2">Fecha Matricula</th>
    //           <th className="py-1 px-2">Fecha Alta</th>
    //           <th className="py-1 px-2">Fecha Retiro</th>
    //         </tr>
    //       </thead>

    //       <tbody className="text-left">
    //         <tr>
    //           <td className="py-1 px-2">
    //             {data.fecha_nacimiento ?? "SIN REGISTRO"}
    //           </td>
    //           <td className="py-1 px-2">{data.sexo ?? "SIN REGISTRO"}</td>
    //           <td className="py-1 px-2 tracking-wide">
    //             {data.fecha_matricula}
    //           </td>
    //           <td className="py-1 px-2 tracking-wide">
    //             {data.fecha_alta ?? "SIN REGISTRO"}
    //           </td>
    //           <td className="py-1 px-2 text-red-400 tracking-wide">
    //             {data.fecha_retiro ?? "SIN REGISTRO"}
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>

    //   <span className="text-[1rem] font-bold flex -mb-2 mt-4 ml-2">
    //     Datos apoderados:
    //   </span>
    //   <div className="border rounded-md border-gray-300 overflow-hidden">
    //     <table className="w-full">
    //       <thead className="bg-gray-200 text-left">
    //         <tr>
    //           <th className="py-1 px-2">Tipo apoderado (a)</th>
    //           <th className="py-1 px-2">Rut</th>
    //           <th className="py-1 px-2">Nombres</th>
    //           <th className="py-1 px-2">Teléfono</th>
    //         </tr>
    //       </thead>

    //       <tbody className="text-left">
    //         <tr className="border border-gray-300">
    //           <td className="py-1 px-2">Titular</td>
    //           <td className="py-1 px-2">
    //             {data.rut_titular ?? "SIN REGISTRO"}
    //           </td>
    //           <td className="py-1 px-2">
    //             {data.apoderado_titular ?? "SIN REGISTRO"}
    //           </td>
    //           <td className="py-1 px-2">
    //             {data.telefono_titular ?? "SIN REGISTRO"}
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="py-1 px-2">Suplente</td>
    //           <td className="py-1 px-2">
    //             {data.rut_suplente ?? "SIN REGISTRO"}
    //           </td>
    //           <td className="py-1 px-2">
    //             {data.apoderado_suplente ?? "SIN REGISTRO"}
    //           </td>
    //           <td className="py-1 px-2">
    //             {data.telefono_suplente ?? "SIN REGISTRO"}
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default SubDataTable_structure;
