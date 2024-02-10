import { Box, HStack, Heading } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Budget from "./Budget";

function DashBoard() {
  return (
    <HStack w={"100%"}>
      <Box w={"25%"}>
        <Sidebar userName={"Gaurav Sunthwal"} budget={"$5000"} />
      </Box>
      <Box>
        <Budget budget={"$600.000"} />
      </Box>
    </HStack>
  );
}

export default DashBoard;
