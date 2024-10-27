import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const ModalDataChofer = ({ isOpen, onOpenChange, data }) => {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="2xl"
    >
      <ModalContent className="relative p-2 bg-gray-100 max-h-full">
        {(onClose) => (
          <>
            <ModalHeader className="text-xl px-4 py-3 rounded-lg uppercase">
              Datos del chofer
            </ModalHeader>

            <ModalBody className="flex flex-row justify-start items-start my-4">
              <div className="w-1/3 flex flex-col gap-y-2 uppercase font-bold">
                <Chip
                  radius="sm"
                  classNames={{
                    content: "w-44 font-semibold",
                  }}
                >
                  Nombre del chofer
                </Chip>
                <Chip
                  radius="sm"
                  classNames={{
                    content: "w-44 font-semibold",
                  }}
                >
                  Dirección
                </Chip>
                <Chip
                  radius="sm"
                  classNames={{
                    content: "w-44 font-semibold",
                  }}
                >
                  Teléfono 1
                </Chip>
                <Chip
                  radius="sm"
                  classNames={{
                    content: "w-44 font-semibold",
                  }}
                >
                  Teléfono 2
                </Chip>
                <Chip
                  radius="sm"
                  classNames={{
                    content: "w-44 font-semibold",
                  }}
                >
                  Correo electrónico
                </Chip>
              </div>

              <div className="w-2/3 flex flex-col gap-y-2">
                <Chip
                  classNames={{
                    base: "bg-transparent border-b-2 rounded-none",
                  }}
                >
                  {data.desc_usuario || "Sin información"}
                </Chip>
                <Chip
                  classNames={{
                    base: "bg-transparent border-b-2 rounded-none",
                  }}
                >
                  {data.direccion_usuario || "Sin información"}
                </Chip>
                <Chip
                  classNames={{
                    base: "bg-transparent border-b-2 rounded-none",
                  }}
                >
                  {data.telefono1 || "Sin información"}
                </Chip>
                <Chip
                  classNames={{
                    base: "bg-transparent border-b-2 rounded-none",
                  }}
                >
                  {data.telefono2 || "Sin información"}
                </Chip>
                <Chip
                  classNames={{
                    base: "bg-transparent border-b-2 rounded-none",
                  }}
                >
                  {data.email || "Sin información"}
                </Chip>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                className="w-[8rem] text-lg"
                color="danger"
                variant="flat"
                onPress={onClose}
              >
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalDataChofer;
