import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

function BasicUsage({ title, mainBody, handalClick, btnName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <>
        <Box cursor={"pointer"} onClick={onOpen}>
          <BsThreeDots />
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{btnName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{mainBody}</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" variant="ghost" onClick={() => { handalClick(); onClose(); }}>
                {btnName}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default BasicUsage;
