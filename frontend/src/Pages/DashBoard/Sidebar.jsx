import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { TfiHelpAlt } from "react-icons/tfi";
import { CiWallet } from "react-icons/ci";
function Sidebar({ userName, budget }) {
  return (
    <VStack h={"100vh"} bg={"#373737"} justifyContent={"center"}>
      <Box>
        <Box p={3} textAlign={"start"} color={"white"} mb={"30px"}>
          <Heading size={"lg"} color={"gray"}>
            Welcome back,
          </Heading>
          <Heading>{userName} !</Heading>
        </Box>
        <Box p={3} textAlign={"start"}>
          <Heading color={"orange"}>{budget}</Heading>
          <Heading size={"sm"} color="#808080">
            Trip Budget
          </Heading>
        </Box>
        <Box mt={"40px"} mb={"40px"}>
          <Menu iconName={<FaHome />} title={"Dashboard"} />
          <Menu iconName={<CgNotes />} title={"Transaction"} />
          <Menu iconName={<CiWallet />} title={"Wallet"} />
          <Menu iconName={<IoSettings />} title={"Settings"} />
        </Box>
        <Box mt={"40px"} mb={"40px"}>
          <Menu iconName={<FaUserAlt />} title={"Account"} />
          <Menu iconName={<IoIosLogOut />} title={"Log Out"} />
        </Box>
        <Box mt={"40px"} mb={"40px"}>
          <Menu iconName={<TfiHelpAlt />} title={"Help & Information"} />
        </Box>
      </Box>
    </VStack>
  );
}

function Menu({ iconName, title }) {
  return (
    <>
      <Box mt={3} p={2} className="Manu" color={"white"}>
        <HStack>
          <Heading fontSize={"20px"} color="gray">
            {iconName}
          </Heading>
          <Heading size={"md"}>{title}</Heading>
        </HStack>
      </Box>
    </>
  );
}

export default Sidebar;
