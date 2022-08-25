import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SocialMedia from '../../../components/social-media'

const DashboardLayout = () => {
  return (
    <Flex minH={"100vh"} direction="column" pb={14}>
    <Box flexGrow={1}>
      <Outlet/>
    </Box>
    <SocialMedia/>
  </Flex>
  )
}

export default DashboardLayout