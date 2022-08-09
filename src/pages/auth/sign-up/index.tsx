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
} from "@chakra-ui/react";
import React, { useState } from "react";
import SocialMedia from "../../../components/social-media";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginBanner from "../../../assets/img/Group 245.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerValidator } from "../../../utils/validators";
import { authServices } from "../../../services/auth.services";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../store/userStore";

const SignUp = () => {
  // const dispatch = useDispatch()
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidator,
    onSubmit: (values) => {
      authServices
        .register({
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          toast({
            title: "Registration Successful",
            description: res.msg,
            position: "top-right",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) => {
          setIsLoading(false);
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
          registerFormik.resetForm();
        });
    },
  });
  return (
    <Container maxW={"6xl"} paddingTop={16} paddingBottom={16}>
      <Grid templateColumns="repeat(2, 1fr)" gap={0} alignItems="start" mb={8}>
        <Stack spacing={12}>
          <Heading fontSize={"4xl"} color="gray.900">
            Create an Account
          </Heading>
          <form onSubmit={registerFormik.handleSubmit}>
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
                    value={registerFormik.values.email}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    isInvalid={!!registerFormik.errors.email && registerFormik.touched.email}
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
                {!!registerFormik.errors.email && registerFormik.touched.email ? (
                  <Text fontSize={"sm"} color={"red.600"} marginTop={1} marginLeft={4}>
                    {registerFormik.errors.email}
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
                    value={registerFormik.values.password}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    isInvalid={!!registerFormik.errors.password && registerFormik.touched.password}
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
                {!!registerFormik.errors.password && registerFormik.touched.password ? (
                  <Text fontSize={"sm"} color={"red.600"} marginTop={1} marginLeft={4}>
                    {registerFormik.errors.password}
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
                    name={"confirmPassword"}
                    value={registerFormik.values.confirmPassword}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    isInvalid={!!registerFormik.errors.confirmPassword && registerFormik.touched.confirmPassword}
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Confirm Password"
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
                    onClick={() => setShowPassword2(!showPassword2)}
                    children={<Icon role={"button"} as={!showPassword2 ? AiOutlineEyeInvisible : AiOutlineEye} />}
                  />
                </InputGroup>
                {!!registerFormik.errors.confirmPassword && registerFormik.touched.confirmPassword ? (
                  <Text fontSize={"sm"} color={"red.600"} marginTop={1} marginLeft={4}>
                    {registerFormik.errors.confirmPassword}
                  </Text>
                ) : null}
              </Box>
            </Stack>
            <Button mt={12} type="submit" isLoading={registerFormik.isSubmitting} colorScheme="teal" size={"lg"} fontSize="md" w={"max-content"}>
              Sign Up
            </Button>
          </form>

          <Text fontSize={"sm"}>
            Already have an account{" "}
            <Link to={"/auth/login"}>
              <Text color={"blue.400"} as={"span"} fontWeight="bold">
                Login
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

export default SignUp;
