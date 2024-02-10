import { Box, HStack, Heading } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

function DashBoard() {
  return (
    <HStack w={"100%"}>
      <Box w={"25%"}>
        <Sidebar userName={"Gaurav Sunthwal"} budget={"$5000"} />
      </Box>
      <Heading>DashBoard</Heading>
    </HStack>
  );
}

export default DashBoard;
