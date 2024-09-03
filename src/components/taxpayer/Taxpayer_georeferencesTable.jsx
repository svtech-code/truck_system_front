import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { TiDelete } from "react-icons/ti";

const Taxpayer_georeferencesTable = () => {
  return (
    <Table aria-label="data-taxpayer">
      <TableHeader>
        <TableColumn>Dirección</TableColumn>
        <TableColumn>Comuna</TableColumn>
        <TableColumn>Latitud</TableColumn>
        <TableColumn>Longitud</TableColumn>
        <TableColumn>Desvincular</TableColumn>
      </TableHeader>

      <TableBody emptyContent={"Sin datos asignados"}>
        <TableRow key="1">
          <TableCell>linares maule</TableCell>
          <TableCell>linares</TableCell>
          <TableCell>19.23</TableCell>
          <TableCell>43.33</TableCell>
          <TableCell className="flex justify-center items-center">
            <Button
              isIconOnly
              color="danger"
              aria-label="desbincular-georeferencia"
            >
              <TiDelete size={25} color="white" />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Santa Sara, yerbas buenas</TableCell>
          <TableCell>linares</TableCell>
          <TableCell>19.23</TableCell>
          <TableCell>43.33</TableCell>
          <TableCell className="flex justify-center items-center">
            <Button
              isIconOnly
              color="danger"
              aria-label="desbincular-georeferencia"
            >
              <TiDelete size={25} color="white" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Taxpayer_georeferencesTable;
