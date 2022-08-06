import { Button, Container, FormLabel, Grid, GridItem, HStack, Input, Textarea, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import CustomFormInput from "../../../../components/form/form-text";
import CustomFormTextArea from "../../../../components/form/form-textArea";

const CreateProfile = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'gender',
    defaultValue: 'male',
    onChange: console.log,
  })
  return (
    <Container maxW={"6xl"} paddingTop={14} paddingBottom={14}>
      <form>
        <Grid templateColumns="repeat(2, 1fr)" rowGap={14} columnGap={5}>
          <GridItem colSpan={1}>
            <CustomFormInput  label="First Name" name="firstName" placeholder="Enter first name"/>
          </GridItem>
          <GridItem colSpan={1}>
          <CustomFormInput  label="Last Name" name="lastName" placeholder="Enter last name"/>
          </GridItem>
          <GridItem colSpan={2}>
            <CustomFormTextArea name="bio" label="About you" placeholder="Enter few sentense about you"/>
          </GridItem>
          <GridItem colSpan={2}>
              <CustomFormInput label="What's your profession" name="proffession" placeholder="E.g Project Manager"/>
          </GridItem>
          <GridItem colSpan={2}>
          </GridItem>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateProfile;
