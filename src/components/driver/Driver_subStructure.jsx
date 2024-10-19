import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const Driver_subStructure = ({ data }) => {
  const { email, telefono1, telefono2, username } = data;

  return (
    <Table
      aria-label="sub tabla datos de choferes"
      className="p-2"
      selectionMode="single"
      classNames={{
        wrapper: "bg-gray-300",
        th: "font-bold text-[.8rem]",
      }}
    >
      <TableHeader>
        <TableColumn className="w-[40%]">Correo electrónico</TableColumn>
        <TableColumn className="w-[20%]">Teléfono 1</TableColumn>
        <TableColumn className="w-[20%]">Teléfono 2</TableColumn>
        <TableColumn className="w-[20%]">Nombre usuario</TableColumn>
      </TableHeader>

      <TableBody emptyContent={"Sin datos asignados"}>
        <TableRow key={"1"}>
          <TableCell>{email}</TableCell>
          <TableCell>{telefono1}</TableCell>
          <TableCell>{telefono2}</TableCell>
          <TableCell>{username}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Driver_subStructure;
