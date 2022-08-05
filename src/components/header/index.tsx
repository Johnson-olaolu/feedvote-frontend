import { Box, Button, Container, Flex, Icon, IconButton, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import Logo from "../../assets/img/Group 175.png";

const Header = () => {
  return (
    <Box shadow="base" bg={"white"} pos={"relative"} zIndex={5}>
      <Container maxW={"6xl"}>
        <Flex height={16} alignItems="center" justifyContent={"space-between"}>
          <Flex gap={32} alignItems={"center"}>
            <Image src={Logo} maxH={10} />
            <Button colorScheme="teal" size={"lg"} fontSize="md">
              Create Profile
            </Button>
          </Flex>
          <Flex gap={32} alignItems={"center"}>
            <Flex gap={2}>
              <Input placeholder="Search Profile" fontSize={"sm"} w={"xs"} size={"lg"} />
              <IconButton aria-label="Search Feeds" colorScheme="teal" size={"lg"}  icon={<Icon boxSize={6} as={RiSearch2Line} />} />
            </Flex>
            <Link to={"/auth/login"}>
              <Text fontWeight={"medium"} color={"gray.600"}>
                Sign In
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
