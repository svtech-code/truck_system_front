import { Button } from "@nextui-org/react";
import useLoadingOrder from "../../hooks/useLoadingOrder";
import ActionButton from "../ActionButton";
import { getData } from "../../api/apiGet";
import { BsInfoLg } from "react-icons/bs";

export const LoadingOrder_structure = ({
  onOpen,
  route,
  propertyId,
  propertyName,
  setOpenModalChofer,
}) => {
  const { data, updateLoadingOrder } = useLoadingOrder();

  // función fetching de datos del chofer
  const getDataChofer = async ({ idChofer }) => {
    const getInfo = await getData({ endPoint: `choferes/${idChofer}` });
    const response = await getInfo.response[0];
    updateLoadingOrder({ dataChofer: response });
    setOpenModalChofer(true);
  };

  return [
    {
      name: "Nº Orden",
      selector: (row) => row.num_orden_carga,
      maxWidth: "6rem",
      center: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.fecha_orden_carga,
      maxWidth: "10rem",
    },
    {
      name: "Chofer",
      grow: 2,
      minWidth: "24rem",
      cell: (row) => (
        <div className="flex items-center justify-start gap-2 group">
          <Button
            isIconOnly
            size="sm"
            color="primary"
            aria-label="Datos chofer"
            onPress={() => getDataChofer({ idChofer: row.cod_chofer })}
          >
            <BsInfoLg
              size={20}
              className="group-hover:scale-125 transition-all duration-300 will-change-transform"
            />
          </Button>
          <span>{row.desc_chofer}</span>
        </div>
      ),
    },
    {
      name: "Detalle 1er viaje",
      grow: 1,
      selector: (row) =>
        row?.detalles_orden_carga[0]?.desc_detalle_orden_carga || "Sin datos",
    },
    {
      name: "Acciones",
      center: true,
      with: "200px",
      cell: (row) => (
        <ActionButton
          data={data}
          row={row}
          onOpen={onOpen}
          route={route}
          propertyId={propertyId}
          propertyName={propertyName}
          updateStateComponent={updateLoadingOrder}
          dataKey={"data"}
        />
      ),
    },
  ];
};
