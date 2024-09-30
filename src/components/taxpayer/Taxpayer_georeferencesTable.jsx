import {
  Button,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { TiDelete } from "react-icons/ti";
import useTaxpayer from "../../hooks/useTaxpayer";
import { FaCircleCheck } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useMemo, useState } from "react";
import apiPost from "../../api/apiPost";

const Taxpayer_georeferencesTable = ({
  dataTaxpayerTable = {},
  listGeoreferences,
  setListGeoreferences,
}) => {
  const { georeference, updateTaxpayerData, data } = useTaxpayer();
  const { cod_contribuyente, georeferencias = [] } = dataTaxpayerTable || {};
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return georeference?.length
      ? Math.ceil(georeference?.length / rowsPerPage)
      : 0;
  }, [georeference?.length, rowsPerPage]);

  // Extrae los códigos de georeferencia del data
  const georeferenceCodes = new Set(
    georeferencias?.map((item) => item.cod_georeferencia) || []
  );

  // Función para vincular una georeferencia
  const handleLinkGeoreference = async (cod_georeferencia) => {
    // actualización de los datos
    if (setListGeoreferences) {
      setListGeoreferences((prevCod) => {
        // si existe el cod, se devuelve el array sin agregarlo
        if (prevCod.has(cod_georeferencia)) {
          return prevCod;
        }

        // si no existe el cod, se devuelve el array con el cod agregado
        return new Set([...prevCod, cod_georeferencia]);
      });
    } else {
      try {
        await apiPost({
          route: "georeferencia_contribuyente",
          object: { cod_contribuyente, cod_georeferencia },
        }).then(() => {
          // obtener la georeferencia a vincular
          const georeferenceVincule = georeference.filter(
            (item) => item.cod_georeferencia === cod_georeferencia
          );

          // obtener nuevo contexto actualizado
          const updatedTaxpayer = data.map((taxpayer) => {
            if (taxpayer.cod_contribuyente === cod_contribuyente) {
              return {
                ...taxpayer,
                georeferencias: [
                  ...taxpayer.georeferencias,
                  georeferenceVincule[0],
                ],
              };
            }
            return taxpayer;
          });

          // actualización del contexto
          updateTaxpayerData({ data: updatedTaxpayer });
        });
      } catch (error) {
        // ver si agrego un mensaje de error en pop up
        console.log(error);
      }
    }
  };

  // Función para desvincular una georeferencia
  const handleUnlinkGeoreference = async (cod_georeferencia) => {
    // // Filtrar la georeferencia a desvincular
    // const updateGeoreferences = georeference.filter(
    //   (item) => item.cod_georeferencia !== cod_georeferencia
    // );

    // if (setFieldValue) {
    //   setFieldValue("georeferencias", updateGeoreferences);
    // } else {
    //   // actualización delete del vinculo de la georeferencia
    // }

    // console.log(updateGeoreferences);

    console.log("desvincular georeferencia cod: " + cod_georeferencia);
  };

  const renderButton = ({ cod_georeferencia }) => {
    if (setListGeoreferences) {
      if (listGeoreferences.has(cod_georeferencia)) {
        return (
          <Button
            isIconOnly
            color="success"
            aria-label="vinculado"
            onClick={() => handleUnlinkGeoreference(cod_georeferencia)}
          >
            <FaCircleCheck size={18} color="white" />
          </Button>
        );
      } else {
        return (
          <Button
            isIconOnly
            color="danger"
            aria-label="desvinculado"
            onClick={() => handleLinkGeoreference(cod_georeferencia)}
          >
            <TiDelete size={25} color="white" />
          </Button>
        );
      }
    } else {
      if (georeferenceCodes.has(cod_georeferencia)) {
        return (
          <Button
            isIconOnly
            color="success"
            aria-label="vinculado"
            onClick={() => handleUnlinkGeoreference(cod_georeferencia)}
          >
            <FaCircleCheck size={18} color="white" />
          </Button>
        );
      } else {
        return (
          <Button
            isIconOnly
            color="danger"
            aria-label="desvinculado"
            onClick={() => handleLinkGeoreference(cod_georeferencia)}
          >
            <TiDelete size={25} color="white" />
          </Button>
        );
      }
    }
  };

  return (
    <div>
      <div className="py-5 relative flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search..."
          labelPlacement="outside"
          className="w-2/5"
          startContent={<IoSearch />}
        />

        {/* habrir modal para creación de georeferencia */}
        {/* <Button color="primary">prueba</Button> */}
      </div>

      <Table
        aria-label="data-taxpayer"
        selectionMode="single"
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn>Dirección</TableColumn>
          <TableColumn>Comuna</TableColumn>
          <TableColumn>Latitud</TableColumn>
          <TableColumn>Longitud</TableColumn>
          <TableColumn>Desvincular</TableColumn>
        </TableHeader>

        <TableBody emptyContent={"Sin datos asignados"}>
          {georeference.map(
            ({
              cod_georeferencia,
              direccion,
              desc_comuna,
              latitud,
              longitud,
            }) => (
              <TableRow key={cod_georeferencia}>
                <TableCell>{direccion}</TableCell>
                <TableCell>{desc_comuna}</TableCell>
                <TableCell>{latitud}</TableCell>
                <TableCell>{longitud}</TableCell>
                <TableCell className="flex justify-center items-center">
                  {renderButton({ cod_georeferencia })}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Taxpayer_georeferencesTable;
