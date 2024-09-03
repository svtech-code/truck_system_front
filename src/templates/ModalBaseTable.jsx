import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const ModalBaseTable = ({ title, size, isOpen, onOpenChange, table }) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      isDismissable={false}
      backdrop="blur"
      size={size}
      scrollBehavior="inside"
    >
      <ModalContent className="relative mx-h-full">
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl px-8 py-3">{title}</ModalHeader>

            <ModalBody>{table()}</ModalBody>

            <ModalFooter>
              <Button
                className="w-[8rem] text-lg"
                color="danger"
                variant="flat"
                onPress={onClose}
              >
                Volver
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalBaseTable;
