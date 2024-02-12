import { Card, HStack, Heading } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
function TransactionCard({ cardName }) {
  return (
    <div>
      <Card
        h={"90vh"}
        p={5}
        m={3}
        color={"#D1D1D1"}
        bg={"#282828"}
        borderRadius={"20px"}
      >
        <HStack justifyContent={"space-between"}>
          <Heading size={"md"}>{cardName}</Heading>
          <BsThreeDots />
        </HStack>
      </Card>
    </div>
  );
}

export default TransactionCard;
