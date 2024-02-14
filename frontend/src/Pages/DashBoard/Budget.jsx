import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsCreditCard2Front } from "react-icons/bs";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import TransactionCard from "./TransactionCard";
import BasicUsage from "./BasicUsage";
import { FaShoppingCart } from "react-icons/fa";

function Budget() {
  const [income, setIncome] = useState(0);
  const [spending, setSpending] = useState(0);
  const [amount, setAmount] = useState(0);

  // Current Time
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const day = currentDate.getDay();
  const month = currentDate.getMonth() + 1;

  // Transactions Card Data Adding Logic

  const [title, setTitle] = useState("");
  const [cost, setCost] = useState();
  const [type, setType] = useState();

  const [transaction, setTransaction] = useState([]);

  let time = ` ${hours}:${minutes < 10 ? "0" + minutes : minutes} ${
    hours > 12 ? "PM" : "AM"
  }`;
  let dayStatus = `${
    day === day ? "Today" : day === day - 1 ? "Yesterday" : "few day ago"
  }`;
  return (
    <VStack>
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
                    <form>
                      <Input
                        autoFocus
                        mb={3}
                        placeholder="Title..."
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />

                      <Input
                        type="number"
                        placeholder="Amount"
                        value={cost}
                        onChange={(e) => {
                          setCost(e.target.value);
                        }}
                      />

                      <RadioGroup mt={3}>
                        <HStack
                          justifyContent={"space-around"}
                          value={type}
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        >
                          <Radio value="1">Income</Radio>
                          <Radio value="2">Spending</Radio>
                        </HStack>
                      </RadioGroup>
                    </form>
                  </>
                }
                btnName={"Add Transaction"}
                handalClick={() => {
                  // Type
                  type === "1"
                    ? setAmount(Number(amount) + Number(cost))
                    : setAmount(amount - cost);

                  type === "1"
                    ? setIncome(() => Number(income) + Number(cost))
                    : setSpending(() => Number(cost) + Number(spending));

                  // add this TO transaction card
                  setTransaction([
                    ...transaction,
                    { title, cost, dayStatus, time, type },
                  ]);
                }}
              />
            }
            cardThings={
              <>
                {transaction.map((item) => {
                  return (
                    <>
                      <AllTransaction
                        titleofSpending={item.title}
                        prices={item.cost}
                        dayStatus={item.dayStatus}
                        time={item.time}
                        ProOrLoss={item.type === "1" ? "+" : "-"}
                        color={item.type === "1" ? "#00b386" : "red"}
                      />
                    </>
                  );
                })}
              </>
            }
          />
        </Box>
      </HStack>
    </VStack>
  );
}

// item adding in Transaction card

function AllTransaction({
  titleofSpending,
  prices,
  dayStatus,
  time,
  ProOrLoss,
  color,
}) {
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
              <p>
                {dayStatus},{time}
              </p>
            </HStack>
          </Box>
          <Box w={"100px"}>
            <Heading size={"md"} color={color}>
              {ProOrLoss} {prices}
            </Heading>
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
      <HStack color={color} justifyContent={"space-between"}>
        {/* <p>{ops}</p> */}
        <Heading size={"md"}>
          {ops} {values}
        </Heading>
        <Button
          className="CardBtn"
          color={color}
          fontSize={"30px"}
          bg={"transparent"}
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
