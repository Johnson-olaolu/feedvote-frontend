import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SocialMedia from "../../../components/social-media";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginBanner from "../../../assets/img/Group 245.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidator } from "../../../utils/validators";
import { authServices } from "../../../services/auth.services";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../store/userStore";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const [showPassword1, setShowPassword1] = useState(false);
  const loginFormik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidator,
    onSubmit: (values) => {
      authServices
        .login(values)
        .then((res) => {
          dispatch(userLogin(res.user));
          localStorage.setItem("accessToken", res.accessToken as string);
          // toast({
          //   title: "Registration Successful",
          //   description: "User Logged in Successfully",
          //   position: "top-right",
          //   status: "success",
          //   duration: 9000,
          //   isClosable: true,
          // });
          navigate("/dashboard/home");
        })
        .catch((err) => {
          toast({
            title: "Registration Unsuccessfull.",
            description: err?.data?.msg,
            position: "top-right",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => {
          loginFormik.resetForm();
        });
    },
  });
  return (
    <Container maxW={"6xl"} paddingTop={14} paddingBottom={14}>
      <Grid templateColumns="repeat(2, 1fr)" gap={0} alignItems="start" mb={8}>
        <Stack spacing={12}>
          <Heading fontSize={"4xl"} color="gray.900">
            Login
          </Heading>
          <form onSubmit={loginFormik.handleSubmit}>
            <Stack maxW={"md"} spacing={10}>
              <Box>
                <InputGroup>
                  <InputLeftElement h={16} px={8} pointerEvents="none" color="gray.600" fontSize="1.2em" children={<Icon as={IoMailOutline} />} />
                  <Input
                    _placeholder={{
                      color: "gray.700",
                      fontWeight: "300",
                    }}
                    _hover={{
                      shadow: "lg",
                    }}
                    _focusVisible={{
                      shadow: "lg",
                    }}
                    name={"email"}
                    value={loginFormik.values.email}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    isInvalid={!!loginFormik.errors.email && loginFormik.touched.email}
                    type={"email"}
                    placeholder="Enter your email here"
                    fontSize={"lg"}
                    bg={"white"}
                    variant="filled"
                    h={16}
                    pl={16}
                    shadow={"md"}
                    rounded={20}
                  />
                </InputGroup>
                {!!loginFormik.errors.email && loginFormik.touched.email ? (
                  <Text fontSize={"sm"} color={"red.600"} marginTop={1} marginLeft={4}>
                    {loginFormik.errors.email}
                  </Text>
                ) : null}
              </Box>
              <Box>
                <InputGroup>
                  <InputLeftElement h={16} px={8} pointerEvents="none" color="gray.600" fontSize="20px" children={<Icon as={HiOutlineKey} />} />
                  <Input
                    _placeholder={{
                      color: "gray.700",
                      fontWeight: "300",
                    }}
                    _hover={{
                      shadow: "lg",
                    }}
                    _focusVisible={{
                      shadow: "lg",
                    }}
                    type={showPassword1 ? "text" : "password"}
                    name={"password"}
                    value={loginFormik.values.password}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    isInvalid={!!loginFormik.errors.password && loginFormik.touched.password}
                    placeholder="Enter Password"
                    fontSize={"lg"}
                    bg={"white"}
                    variant="filled"
                    h={16}
                    pl={16}
                    shadow={"md"}
                    rounded={20}
                  />
                  <InputRightElement
                    h={16}
                    px={8}
                    color="gray.600"
                    fontSize="20px"
                    onClick={() => setShowPassword1(!showPassword1)}
                    children={<Icon role={"button"} as={!showPassword1 ? AiOutlineEyeInvisible : AiOutlineEye} />}
                  />
                </InputGroup>
                {!!loginFormik.errors.password && loginFormik.touched.password ? (
                  <Text fontSize={"sm"} color={"red.600"} marginTop={1} marginLeft={4}>
                    {loginFormik.errors.password}
                  </Text>
                ) : null}
              </Box>
            </Stack>
            <Button type="submit" mt={12} colorScheme="teal" size={"lg"} fontSize="md" w={"max-content"}>
              Login
            </Button>
          </form>

          <Text fontSize={"sm"}>
            Don't have an account{" "}
            <Link to={"/auth/sign-up"}>
              <Text color={"blue.400"} as={"span"} fontWeight="bold">
                Sign Up
              </Text>{" "}
            </Link>
          </Text>
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
