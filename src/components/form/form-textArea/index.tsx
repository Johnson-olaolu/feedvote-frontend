import { FormLabel, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

interface ICustomFormTextArea {
  name: string;
  label: string;
  placeholder: string;
}

const CustomFormTextArea: React.FC<ICustomFormTextArea> = (props) => {
  const { name, label, placeholder } = props;
  return (
    <Stack spacing={8}>
      <FormLabel paddingX={8} paddingY={5} fontSize={"lg"} color={"gray.700"} fontWeight={"bold"} shadow={"md"} rounded={20} bg={"white"} margin={0}>
        {label}
      </FormLabel>
      <Textarea
        name={name}
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
        placeholder={placeholder}
        fontSize={"lg"}
        bg={"white"}
        variant="filled"
        h={"200px"}
        px={8}
        py={5}
        shadow={"md"}
        rounded={20}
      />
    </Stack>
  );
};

export default CustomFormTextArea;
