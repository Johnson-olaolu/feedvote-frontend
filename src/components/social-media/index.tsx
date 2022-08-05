import { Center, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <Flex justifyContent={"center"} gap={6}>
    <Center rounded={20} bg="white" shadow={"lg"} p={4} color="gray.900">
      <Icon boxSize={6} as={BsFacebook} />
    </Center>
    <Center rounded={20} bg="white" shadow={"lg"} p={4} color="gray.900">
      <Icon boxSize={6} as={BsInstagram} />
    </Center>
    <Center rounded={20} bg="white" shadow={"lg"} p={4} color="gray.900">
      <Icon boxSize={6} as={BsTwitter} />
    </Center>
    <Center rounded={20} bg="white" shadow={"lg"} p={4} color="gray.900">
      <Icon boxSize={6} as={IoOpenOutline} />
    </Center>
  </Flex>
  )
}

export default SocialMedia