import { useCallback, useState } from "react";
import HeaderComponent from "../Header_Component";
import HeaderCardComponent from "../HeaderCard_Component";
import { FaUserTag } from "react-icons/fa";
import DataTableComponent from "../DataTable_Component";
import LoadingOrder_structure from "./LoadingOrder_structure";
import LoadingOrder_subStructure from "./LoadingOrder_subStructure";

const LoadingOrder_main = () => {
  const orderCarga = [
    {
      numeroOrden: 1212,
      patente: "FJJF26",
      tipoVehiculo: "tracto camion",
      chofer: "Luis Troncoso",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Iniciado",
      detalleOrder: [
        {
          cliente: "bitumix",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
        {
          cliente: "transportes loncomilla",
          origen: "linares",
          destino: "longavi",
          estado: "finalizada",
          gasto: {
            conbustible: 15000,
            peajes: 2000,
            viaticos: 10000,
          },
        },
      ],
    },
    {
      numeroOrden: 1212,
      patente: "FJJF26",
      tipoVehiculo: "tracto camion",
      chofer: "Luis Troncoso",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Iniciado",
      detalleOrder: [
        {
          cliente: "bitumix",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
        {
          cliente: "transportes loncomilla",
          origen: "linares",
          destino: "longavi",
          estado: "finalizada",
          gasto: {
            conbustible: 15000,
            peajes: 2000,
            viaticos: 10000,
          },
        },
      ],
    },
    {
      numeroOrden: 1212,
      patente: "FJJF26",
      tipoVehiculo: "tracto camion",
      chofer: "Luis Troncoso",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Iniciado",
      detalleOrder: [
        {
          cliente: "bitumix",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
        {
          cliente: "transportes loncomilla",
          origen: "linares",
          destino: "longavi",
          estado: "finalizada",
          gasto: {
            conbustible: 15000,
            peajes: 2000,
            viaticos: 10000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
    {
      numeroOrden: 1213,
      patente: "FDYG45",
      tipoVehiculo: "camion",
      chofer: "Julio Vallejos",
      kmInicial: 150200,
      odometroInicial: 1200,
      kmFinal: 150500,
      odometroFinal: 1250,
      estado: "Finalizado",
      detalleOrder: [
        {
          cliente: "Mobil",
          origen: "linares",
          destino: "talca",
          estado: "finalizada",
          gasto: {
            conbustible: 20000,
            peajes: 16000,
            viaticos: 12000,
          },
        },
      ],
    },
  ];

  // estados generales del componente (hacer contexto si es necesario)
  const [stateComponent, setStateComponent] = useState({
    data: orderCarga,
    error: null,
  });

  // actualizador de los estados del componente
  const updateStateComponent = useCallback((newState) => {
    setStateComponent((prev) => ({ ...prev, ...newState }));
  }, []);

  return (
    <>
      <HeaderComponent maintainer={"Ordenes de carga"}>
        {/* tarjetas del mantenedor */}
        <HeaderCardComponent
          title={"Camiones disponibles"}
          icon={<FaUserTag size={35} />}
          count={10}
        />
        <HeaderCardComponent
          title={"Ordenes en curso"}
          icon={<FaUserTag size={35} />}
          count={2}
        />
        <HeaderCardComponent
          title={"Ordenes Efectuadas"}
          icon={<FaUserTag size={35} />}
          count={23}
        />
      </HeaderComponent>

      <section className="flex mt-6 gap-2">
        {/* tabla de datos */}
        <article className="grow">
          <DataTableComponent
            data={stateComponent.data}
            structureData={LoadingOrder_structure()}
            subStructureData={LoadingOrder_subStructure}
          />
        </article>

        {/* informacion complementaria */}
        <aside className="flex flex-col w-[15rem] gap-4">
          {/* detalles del vehiculo */}
          <article className="p-4 border-gray-200 rounded-lg border">
            <header className="text-2xl mb-2">Detalles vehículo</header>
            <table className="w-full">
              <tbody className="flex flex-col gap-1">
                <tr className="flex justify-between">
                  <th>tipo:</th>
                  <td>tractocamión</td>
                </tr>
                <tr className="flex justify-between">
                  <th>Patente: </th>
                  <td>FGYD-45</td>
                </tr>
              </tbody>
            </table>
          </article>

          {/* articulo de gastos */}
          <article className="p-4 border-gray-200 rounded-lg border">
            <header className="text-2xl mb-2">Gastos</header>
            <table className="w-full">
              <tbody className="flex flex-col gap-1">
                <tr className="flex justify-between">
                  <th>Combustible:</th>
                  <td>$ 20.000.-</td>
                </tr>
                <tr className="flex justify-between">
                  <th>Peajes:</th>
                  <td>$ 16.000.-</td>
                </tr>
                <tr className="flex justify-between">
                  <th>Viáticos:</th>
                  <td>$ 12.000.-</td>
                </tr>
              </tbody>
              <tfoot className="bg-gray-200 border-t-3 border-gray-600">
                <tr className="flex justify-between">
                  <th>Total gastos: </th>
                  <td>$ 48.000.-</td>
                </tr>
              </tfoot>
            </table>
          </article>

          {/* detalles del recorrido */}
          <article className="p-4 border-gray-200 rounded-lg border">
            <header className="text-2xl mb-2 flex flex-col">
              Detalle Viaje
            </header>
            <div className="flex flex-col gap-4">
              <table className="w-full">
                <tbody className="flex flex-col gap-1">
                  <tr className="flex justify-between">
                    <th>Km Inicial:</th>
                    <td>150.200</td>
                  </tr>
                  <tr className="flex justify-between">
                    <th>Km Final:</th>
                    <td>150.500</td>
                  </tr>
                </tbody>
                <tfoot className="bg-gray-200 border-t-3 border-gray-600">
                  <tr className="flex justify-between">
                    <th>Km recorridos</th>
                    <td>300</td>
                  </tr>
                </tfoot>
              </table>

              <table className="w-full">
                <tbody className="flex flex-col gap-1">
                  <tr className="flex justify-between">
                    <th>Odómetro Inicio:</th>
                    <td>12.000</td>
                  </tr>
                  <tr className="flex justify-between">
                    <th>Odómetro Final:</th>
                    <td>12.500</td>
                  </tr>
                </tbody>
                <tfoot className="bg-gray-200 border-t-3 border-gray-600">
                  <tr className="flex justify-between">
                    <th>Horas de motos</th>
                    <td>50</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </article>
        </aside>
      </section>
    </>
  );
};

export default LoadingOrder_main;
