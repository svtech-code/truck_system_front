import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";

const listDescription = [
  "Fecha acuce",
  "Tipo cobro",
  "Origen viaje",
  "Destino viaje",
  "Cliente",
];

const listdetailDescription = [
  "fecha_acuce",
  "desc_tipo_cobro",
  "desc_origen",
  "desc_destino",
  "desc_cliente",
];

const ModalLoadingOrderDetail = ({ isOpen, onOpenChange, data }) => {
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
              Detalle orden de carga
            </ModalHeader>

            <ModalBody className="flex flex-col justify-start items-start my-4">
              {/* descripción del detalle de la orden de carga */}
              <div className="flex w-full">
                <Textarea
                  isReadOnly
                  label="Descripción detalle orden de carga"
                  value={data.desc_detalle_orden_carga}
                  variant="bordered"
                />
              </div>

              {/* datos relacionados con el detalle orden carga */}
              <div className="flex justify-start items-start w-full my-4">
                <div className="w-1/3 flex flex-col gap-y-2 uppercase font-bold">
                  {listDescription.map((item, index) => (
                    <Chip
                      key={index}
                      radius="sm"
                      classNames={{
                        content: "w-44 font-semibold",
                      }}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>

                <div className="w-2/3 flex flex-col gap-y-2">
                  {listdetailDescription.map((item, index) => (
                    <Chip
                      key={index}
                      classNames={{
                        base: "bg-transparent border-b-2 rounded-none",
                      }}
                    >
                      {data[item] || "Sin información"}
                    </Chip>
                  ))}
                </div>
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

export default ModalLoadingOrderDetail;
