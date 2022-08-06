import { Box, Button, Container, Grid, Heading, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SocialMedia from "../../../components/social-media";
import { IoMailOutline } from "react-icons/io5";
import {HiOutlineKey} from "react-icons/hi"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import LoginBanner from "../../../assets/img/Group 245.png"
const Login = () => {
    const [showPassword1, setShowPassword1] = useState(false)
  return (
    <Container maxW={"6xl"} paddingTop={14} paddingBottom={14}>
      <Grid templateColumns="repeat(2, 1fr)" gap={0} alignItems="start" mb={8}>
        <Stack spacing={12}>
          <Heading fontSize={"4xl"} color="gray.900">
            Login
          </Heading>
          <Stack maxW={"md"} spacing={10}>
            <InputGroup>
              <InputLeftElement h={16} px={8} pointerEvents="none" color="gray.600" fontSize="1.2em" children={<Icon as={IoMailOutline} />} />
              <Input _placeholder={{
                color : "gray.700",
                fontWeight : "300"
              }} 
              _hover = {{
                shadow : "lg"
              }}
              _focusVisible = {{
                shadow : "lg"
              }}
              type={"email"}
              placeholder="Enter your email here" fontSize={"lg"} bg={"white"} variant="filled" h={16} pl={16} shadow={"md"} rounded={20} />
              {/* <InputRightElement children={<CheckIcon color="green.500" />} /> */}
            </InputGroup>
            <InputGroup>
              <InputLeftElement h={16} px={8} pointerEvents="none" color="gray.600" fontSize="20px" children={<Icon as={HiOutlineKey} />} />
              <Input _placeholder={{
                color : "gray.700",
                fontWeight : "300"
              }} 
              _hover = {{
                shadow : "lg"
              }}
              _focusVisible = {{
                shadow : "lg"
              }}
              type={showPassword1 ? "text" : "password"}
              placeholder="Enter Password" fontSize={"lg"} bg={"white"} variant="filled" h={16} pl={16} shadow={"md"} rounded={20} />
              <InputRightElement h={16} px={8} color="gray.600" fontSize="20px" onClick={() => setShowPassword1(!showPassword1)}  children={<Icon role={"button"} as= { !showPassword1 ? AiOutlineEyeInvisible : AiOutlineEye}/> } />
            </InputGroup>
          </Stack>
          <Button colorScheme="teal" size={"lg"} fontSize="md" w={"max-content"}>
            Login
          </Button>
        </Stack>
        <Box>
             <Image src={LoginBanner} height="500px" marginLeft={"auto"} />
            </Box>
      </Grid>
      <SocialMedia />
    </Container>
  );
};

export default Login;
