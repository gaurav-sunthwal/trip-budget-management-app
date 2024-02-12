import {
  Box,
  Button,
  ButtonGroup,
  Card,
  FormControl,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
function TransactionCard({ cardName, cardHight, manuBtn }) {
  return (
    <div>
      <Card
        h={cardHight}
        p={5}
        m={3}
        color={"#D1D1D1"}
        bg={"#282828"}
        borderRadius={"20px"}
      >
        <HStack justifyContent={"space-between"}>
          <Heading size={"md"}>{cardName}</Heading>
          {manuBtn}
        </HStack>
      </Card>
    </div>
  );
}

function BasicUsage({ button, mainBody, btnName, title, handalClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box cursor={"pointer"} onClick={onOpen}>
        <BsThreeDots />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{mainBody}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handalClick}>
              {btnName}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TransactionCard;
