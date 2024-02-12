import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsCreditCard2Front } from "react-icons/bs";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import TransactionCard from "./TransactionCard";
import BasicUsage from "./BasicUsage";
import { FaShoppingCart } from "react-icons/fa";
function Budget() {
  const [amount, setAmount] = useState(100);
  const [income, setIncome] = useState(100);
  const [spending, setSpending] = useState(100);
  return (
    <VStack justifyContent={"center"}>
      <HStack w={"100%"}>
        <Box p={2}>
          <Box m={3}>
            <TotalBudgetCard budget={amount} />
          </Box>
          <HStack m={3} justifyContent={"center"}>
            <IncomeSpendingCard
              title={"Income"}
              btnIcon={<GiReceiveMoney />}
              ops={"+"}
              color={"#00b386"}
              values={income}
              setValue={setIncome}
              onClick={() => {
                setAmount(Number(amount) + Number(income));
              }}
            />
            <IncomeSpendingCard
              title={"Spending"}
              btnIcon={<GiPayMoney />}
              ops={"-"}
              color={"#eb5b3c"}
              values={spending}
              setValue={setSpending}
              onClick={() => {
                setAmount(amount - spending);
              }}
            />
          </HStack>
          <Box>
            <TransactionCard
              cardName={"Add Friends"}
              cardHight={"320px"}
              manuBtn={
                <BasicUsage
                  mainBody={
                    <>
                      <Input autoFocus type="namec" placeholder="Name" />
                    </>
                  }
                  btnName={"Add Friends"}
                />
              }
            />
          </Box>
        </Box>
        <Box w={"100%"}>
          <TransactionCard
            cardName={"Transaction"}
            cardHight={"90vh"}
            manuBtn={
              <BasicUsage
                mainBody={
                  <>
                    <Input autoFocus mb={3} placeholder="Money Spend for..." />

                    <Input type="number" placeholder="Amount" />
                  </>
                }
                btnName={"Add Transaction"}
              />
            }
            cardThings={
              <>
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
                <AllTransaction titleofSpending={"Shopping"} prices={"$30"} />
              </>
            }
          />
        </Box>
      </HStack>
    </VStack>
  );
}

function AllTransaction({ titleofSpending, prices }) {
  return (
    <>
      <Box w={"100%"} color={"white"}>
        <HStack justifyContent={"space-between"} p={2}>
          <Box
            fontSize={"28px"}
            bg={"#383838"}
            p={3}
            borderTopLeftRadius={15}
            borderBottomLeftRadius={15}
          >
            <FaShoppingCart />
          </Box>
          <Box>
            <Heading size={"md"}>{titleofSpending}</Heading>
            <HStack>
              <p>Yesterday, 2:00 PM</p>
            </HStack>
          </Box>
          <Box>
            <Heading size={"md"}>{prices}</Heading>
          </Box>
        </HStack>
      </Box>
    </>
  );
}

// Income And Soeanding Card

function IncomeSpendingCard({
  title,
  btnIcon,
  ops,
  color,
  onClick,
  values,
  setValue,
}) {
  return (
    <Card
      bg={"#282828"}
      color={"white"}
      p={"20px"}
      borderRadius={"20px"}
      w={"250px"}
    >
      <Heading mb={2} size={"xs"} color={color}>
        {title}
      </Heading>
      <HStack color={color}>
        <p>{ops}</p>
        <Input
          type="number"
          border={"none"}
          placeholder="$20"
          onFocus={"none"}
          value={values}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          className="CardBtn"
          color={color}
          fontSize={"30px"}
          bg={"transparent"}
          onClick={onClick}
        >
          {btnIcon}
        </Button>
      </HStack>
    </Card>
  );
}

// Total Amount Card

function TotalBudgetCard({ budget }) {
  return (
    <>
      <Card
        bg={"orange"}
        color={"white"}
        p={"20px"}
        borderRadius={"20px"}
        w={"500px"}
        h={"auto"}
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
