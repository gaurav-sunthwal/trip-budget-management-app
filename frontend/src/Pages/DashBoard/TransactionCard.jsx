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
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
function TransactionCard({ cardName, cardHight, manuBtn, cardThings }) {
  return (
    <Box>
      <Card
        h={cardHight}
        // w={"100%"}
        p={5}
        m={3}
        color={"#D1D1D1"}
        bg={"#282828"}
        borderRadius={"20px"}
        overflow={"auto"}
      >
        <HStack
          zIndex={3}
          justifyContent={"space-between"}
          //   w={"30%"}
          h={"39px"}
          //   position={"fixed"}
          //   p={2}
          bg={"#282828"}
          style={{
            filter: blur("534534px"),
          }}
        >
          <Heading size={"md"}>{cardName}</Heading>
          {manuBtn}
        </HStack>
        <VStack mt={5} p={2}>
          {cardThings}
        </VStack>
      </Card>
    </Box>
  );
}

export default TransactionCard;
