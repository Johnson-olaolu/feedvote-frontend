import { Box, useTimeout, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authServices } from "../../../services/auth.services";

const ConfirmRegistration = () => {
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToast();
  useEffect(() => {
    const { confirmationToken, userId } = params;
    if (confirmationToken && userId) {
      authServices
        .confirmRegistration({ userId: userId as string, confirmationToken: confirmationToken as string })
        .then((res) => {
          toast({
            title: "Confirmation Successful",
            description: res.msg,
            position: "top-right",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/auth/login");
        })
        .catch((err) => {
          toast({
            title: "Confirmaation Unsuccessfull.",
            description: err?.data?.msg,
            position: "top-right",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          navigate("/auth/register");
        });
    }
  }, [params]);
  return <Box>Confirming Registration</Box>;
};

export default ConfirmRegistration;
