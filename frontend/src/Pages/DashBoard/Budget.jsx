import { Box, Button, Card, HStack, Heading, Input } from "@chakra-ui/react";
import { BsCreditCard2Front } from "react-icons/bs";
function Budget({ budget }) {
  return (
    <Box p={2}>
      <Box m={3}>
        <TotalBudgetCard budget={budget} />
      </Box>
      <HStack m={3} justifyContent={"center"}>
        <IncomeSpendingCard title={"Income"} />
        <IncomeSpendingCard title={"Income"} />
      </HStack>
    </Box>
  );
}

function IncomeSpendingCard({ title , btnIcon }) {
  return (
    <Card bg={"#282828"} color={"white"} p={2}>
      <Heading>{title}</Heading>
      <HStack>
        <Input
          type="number"
          border={"none"}
          placeholder="$20"
          onFocus={"none"}
        />
        <Button bg={"transparent"}>{btnIcon}</Button>
      </HStack>
    </Card>
  );
}

function TotalBudgetCard({ budget }) {
  return (
    <>
      <Card
        bg={"orange"}
        color={"white"}
        p={"20px"}
        borderRadius={"20px"}
        w={"450px"}
        h={"250px"}
      >
        <Box>
          <HStack p={3} justifyContent={"space-between"}>
            <Heading fontSize={"18px"}>Available Balance</Heading>
            <Heading fontSize={"18px"}>
              <BsCreditCard2Front />
            </Heading>
          </HStack>
        </Box>
        <Box mt={3} mb={3}>
          <Heading size={"4xl"}>{budget}</Heading>
        </Box>
        <Box>
          <HStack justifyContent={"space-between"}>
            <Box p={3}>
              <Heading fontSize={"23px"}>Card Number</Heading>
              <Heading fontSize={"14px"} color={"wheat"}>
                123-456-7890
              </Heading>
            </Box>
            <Box>
              <Heading fontSize={"23px"}>Credit Card</Heading>
              <Heading fontSize={"14px"} color={"wheat"}>
                GAURAV BANK
              </Heading>
            </Box>
          </HStack>
        </Box>
      </Card>
    </>
  );
}

export default Budget;
