import { FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";

interface ICustomFormInput {
  name: string;
  label: string;
  placeholder : string;
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur : (e : React.FocusEvent<HTMLInputElement> ) => void
  error? : string
}

const CustomFormInput: React.FC<ICustomFormInput> = (props) => {
  const { name, label, placeholder } = props;
  return (
    <Stack spacing={8}>
      <FormLabel paddingX={8} paddingY={5} fontSize={"lg"} color={"gray.700"} fontWeight={"bold"} shadow={"md"} rounded={20} bg={"white"} margin={0}>
        {label}
      </FormLabel>
      <Input
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
        h={16}
        px={8}
        shadow={"md"}
        rounded={20}
      />
    </Stack>
  );
};

export default CustomFormInput;
