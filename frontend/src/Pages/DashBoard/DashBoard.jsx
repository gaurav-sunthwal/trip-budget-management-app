import { Box, HStack, Heading } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Budget from "./Budget";

function DashBoard() {
  return (
    <HStack w={"100%"}>
      <Box w={"25%"}>
        <Sidebar userName={"Gaurav Sunthwal"} budget={"$5000"} />
      </Box>
      <Box w={"75%"}>
        <Budget />
      </Box>
    </HStack>
  );
}

export default DashBoard;
