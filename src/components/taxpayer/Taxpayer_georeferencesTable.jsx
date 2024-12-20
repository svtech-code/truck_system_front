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
  Tooltip,
} from "@nextui-org/react";
import { TiDelete } from "react-icons/ti";
import useTaxpayer from "../../hooks/useTaxpayer";
import { FaCircleCheck } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useMemo, useState } from "react";
import apiPost from "../../api/apiPost";
import apiDelete from "../../api/apiDelete";
import { MdOpenInNew } from "react-icons/md";
import ModalNewGeoreferenceInTaxpayer from "../../templates/ModalNewGeoreferenceInTaxpayer";
import TaxpayerGeoreference_form from "./TaxpayerGeoreference_form";

const Taxpayer_georeferencesTable = ({
  dataTaxpayerTable = {},
  listGeoreferences,
  setListGeoreferences,
}) => {
  const { data, georeference, updateTaxpayerData } = useTaxpayer();

  // estado del modal para creación de nueva georeferencia
  const [isOpenModalNewGeoreference, setIsOpenModalNewGeoreference] = useState(false);
  const { cod_contribuyente, georeferencias = [] } = dataTaxpayerTable || {};
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  // Nuevo estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrado de los datos basado en el término de búsqueda
  const filteredGeoreferences = useMemo(() => {
    return georeference.filter(
      (item) =>
        item.direccion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc_comuna.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [georeference, searchTerm]);

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
        }).then((response) => {
          // obtener la georeferencia a vincular
          const georeferenceVincule = georeference.filter(
            (item) => item.cod_georeferencia === cod_georeferencia
          );

          const payload = {
            cod_comuna: georeferenceVincule[0].cod_comuna,
            cod_georeferencia: georeferenceVincule[0].cod_georeferencia,
            cod_georeferencia_contribuyente: response?.data?.cod_georeferencia_contribuyente,
            desc_georeferencia: georeferenceVincule[0].desc_georeferencia,
            direccion: georeferenceVincule[0].direccion,
            latitud: georeferenceVincule[0].latitud,
            longitud: georeferenceVincule[0].longitud,
          }

          // obtener nuevo contexto actualizado
          const updatedTaxpayer = data.map((taxpayer) => {
            if (taxpayer.cod_contribuyente === cod_contribuyente) {
              return {
                ...taxpayer,
                georeferencias: [
                  ...taxpayer.georeferencias,
                  payload,
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

    // obtener id de la referencia que debo eliminar para desvincular una georeferencia de un contribuyente
    const georeferenciasArray = dataTaxpayerTable.georeferencias.filter(
      (geo) => geo.cod_georeferencia === cod_georeferencia
    )[0].cod_georeferencia_contribuyente;


    // array actualizado de georeferencias, luego de desvincular una
    const newArrayGeoreferences = dataTaxpayerTable.georeferencias.filter(
      (geo) => geo.cod_georeferencia !== cod_georeferencia
    );

    // obtención del array actualizado luego de la desvinculación de la georeferencia
    const updateData = data.map((contribuyente) => {
      if (contribuyente.cod_contribuyente === cod_contribuyente) {
        return {
          ...contribuyente,
          georeferencias: newArrayGeoreferences,
        };
      }

      return contribuyente;
    });

    try {
      await apiDelete({
        route: "georeferencia_contribuyente",
        param: georeferenciasArray,
      }).then(() => {
        // actualización del contexto del contribuyente
        updateTaxpayerData({ data: updateData });
      });
    } catch (error) {
      console.log(error);
    }
  };

  // función para renderizar botón, según el estado de vinculaión
  const renderButton = ({ cod_georeferencia }) => {
    if (setListGeoreferences) {
      if (listGeoreferences.has(cod_georeferencia)) {
        return (
          <Tooltip
            showArrow={true}
            content="Precione para desvincular"
            color="success"
            placement="left"
            classNames={{
              content: "text-white",
            }}
          >
            <Button
              isIconOnly
              color="success"
              aria-label="vinculado"
              onClick={() => handleUnlinkGeoreference(cod_georeferencia)}
            >
              <FaCircleCheck size={18} color="white" />
            </Button>
          </Tooltip>
        );
      } else {
        return (
          <Tooltip
            showArrow={true}
            content="Presione para vincular"
            color="danger"
            placement="left"
            classNames={{
              content: "text-white",
            }}
          >
            <Button
              isIconOnly
              color="danger"
              aria-label="desvinculado"
              onClick={() => handleLinkGeoreference(cod_georeferencia)}
            >
              <TiDelete size={25} color="white" />
            </Button>
          </Tooltip>
        );
      }
    } else {
      if (georeferenceCodes.has(cod_georeferencia)) {
        return (
          <Tooltip
            showArrow={true}
            content="Precione para desvincular"
            color="success"
            placement="left"
            classNames={{
              content: "text-white",
            }}
          >
            <Button
              isIconOnly
              color="success"
              aria-label="vinculado"
              onClick={() => handleUnlinkGeoreference(cod_georeferencia)}
            >
              <FaCircleCheck size={18} color="white" />
            </Button>
          </Tooltip>
        );
      } else {
        return (
          <Tooltip
            showArrow={true}
            content="Presione para vincular"
            color="danger"
            placement="left"
            classNames={{
              content: "text-white",
            }}
          >
            <Button
              isIconOnly
              color="danger"
              aria-label="desvinculado"
              onClick={() => handleLinkGeoreference(cod_georeferencia)}
            >
              <TiDelete size={25} color="white" />
            </Button>
          </Tooltip>
        );
      }
    }
  };

  return (
    <>
      <div className="py-5 relative flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search..."
          labelPlacement="outside"
          className="w-2/5"
          startContent={<IoSearch />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* habrir modal para creación de georeferencia */}
        <Button
          color="primary"
          variant="ghost"
          startContent={<MdOpenInNew size={25} />}
          onPress={() => setIsOpenModalNewGeoreference(true)}
        >
          Nuevo registro
        </Button>
      </div>

      <ModalNewGeoreferenceInTaxpayer
        isOpen={isOpenModalNewGeoreference}
        onOpenChange={() => setIsOpenModalNewGeoreference(false)}
        Form_generic={(props) => <TaxpayerGeoreference_form {...props} />}
      />

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
          <TableColumn>Acción</TableColumn>
        </TableHeader>

        <TableBody emptyContent={"Sin datos asignados"}>
          {filteredGeoreferences
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map(
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
    </>
  );
};

export default Taxpayer_georeferencesTable;
