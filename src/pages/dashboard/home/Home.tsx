import { Avatar, Box, Button, Center, Container, Grid, GridItem, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Home = () => {
  const {user} = useSelector( (state : RootState) => state.user)
  return (
    <Container maxW={"7xl"} paddingTop={14} paddingBottom={14}>
      <Stack>
        <Center gap={2}>
          <Avatar />
          <Text>{user?.email}</Text>
        </Center>
        <Grid templateColumns={"repeat(4, 1fr)"} > 
          <GridItem>
            <VStack w={"256px"} shadow={"2xl"} rounded={30} maxW={"max-content"}>
              <Image  h={"223px"} w={"full"} fit={"cover"} rounded={30} src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"/>
              <Box p={4} textAlign={"center"}>
                <Text mb={6}>Creating asset for moniepoint and gloed</Text>
                <Button size={"sm"} colorScheme={"red"}>Delete</Button>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Home;
