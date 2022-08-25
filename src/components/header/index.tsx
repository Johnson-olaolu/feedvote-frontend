import { Box, Button, Container, Flex, Icon, IconButton, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import Logo from "../../assets/img/Group 175.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  return (
    <Box shadow="base" bg={"white"} pos={"relative"} zIndex={5}>
      <Container maxW={"7xl"}>
        <Flex height={16} alignItems="center" justifyContent={"space-between"}>
          <Flex gap={32} alignItems={"center"}>
            <Link to={"/"}>
              <Image src={Logo} maxH={10} />
            </Link>

            {user && (
              <Button onClick={() => navigate("/dashboard/feed/create")} colorScheme="teal" size={"lg"} fontSize="md">
                Create a feed
              </Button>
            )}
          </Flex>
          <Flex gap={32} alignItems={"center"}>
            <Flex gap={2}>
              <Input placeholder="Search Profile" fontSize={"sm"} w={"xs"} size={"lg"} />
              <IconButton aria-label="Search Feeds" colorScheme="teal" size={"lg"} icon={<Icon boxSize={6} as={RiSearch2Line} />} />
            </Flex>
            {!user ? (
              <Link to={"/auth/login"}>
                <Text fontWeight={"medium"} color={"gray.600"}>
                  Sign In
                </Text>
              </Link>
            ) : (
              <Link to={"/dashboard/profile"}>
                <Text fontWeight={"medium"} color={"gray.600"}>
                  Profile
                </Text>
              </Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
