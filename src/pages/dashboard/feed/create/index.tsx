import { Box, Button, Container, Grid, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import CustomFormFileSubmit from "../../../../components/form/form-fileSubmit";
import CustomFormInput from "../../../../components/form/form-text";
import CustomFormTextArea from "../../../../components/form/form-textArea";

const CreateFeed = () => {
  return (
    <Container maxW={"6xl"} paddingTop={14} paddingBottom={14}>
      <Stack spacing={8}>
        <Heading fontSize={"3xl"} textAlign="center">
          Create A Vote
        </Heading>
        <form>
          <Stack spacing={14}>
            <CustomFormInput name="title" label="Vote Title" placeholder="Enter vote title" onChange={() => ""} onBlur={() => {}} />
            <CustomFormTextArea name="title" label="Vote Description" placeholder="Enter vote description" />
            <CustomFormFileSubmit name="title" label="Add Image" placeholder="Enter vote title" onChange={() => ""} onBlur={() => {}} />
            <Button type="submit" mt={12} colorScheme="teal" size={"lg"} fontSize="md" w={"full"}>
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default CreateFeed;
