import { Box, Button, Center, Container, Flex, Grid, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Banner from "../../assets/img/Group 174.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import SocialMedia from "../../components/social-media";

const LandingPage = () => {
  return (
    <Container maxW={"6xl"} paddingTop={20} paddingBottom={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={0} alignItems="center" mb={8}>
        <Stack spacing={8}>
          <Heading fontSize={"58px"} color="gray.900">
            Create Profile, Get Review & Feedbacks
          </Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            Create your profile page and add a bio, share link to clients and get a review on how they feel about working with you.
          </Text>
          <Button colorScheme="teal" size={"lg"} fontSize="md" w={"max-content"}>
            Create page & get reviews
          </Button>
        </Stack>
        <Box>
          <Image src={Banner} height="500px" marginLeft={"auto"} />
        </Box>
      </Grid>
      <SocialMedia/>
    </Container>
  );
};

export default LandingPage;
