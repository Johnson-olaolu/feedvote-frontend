import { Button, FormLabel, Icon, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

interface ICustomFileSubmit {
  name: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const CustomFormFileSubmit: React.FC<ICustomFileSubmit> = (props) => {
  const { name, label, placeholder } = props;
  return (
    <Stack spacing={8}>
      <FormLabel  paddingX={8} paddingY={5} fontSize={"lg"} color={"gray.700"} fontWeight={"bold"} shadow={"md"} rounded={20} bg={"gray.100"} margin={0}>
        {label}
      </FormLabel>
      <Button
        _hover={{
          shadow: "lg",
        }}
        _focusVisible={{
          shadow: "lg",
        }}
        fontSize={"lg"}
        bg={"white"}
        variant="filled"
        h={16}
        px={8}
        shadow={"md"}
        rounded={20}
      >
        <Icon as={AiOutlinePaperClip} />
        <Text>Attach an image</Text>
      </Button>
    </Stack>
  );
};

export default CustomFormFileSubmit;
