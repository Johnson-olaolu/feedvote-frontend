import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'

const Layout = () => {
  return (
    <Stack minH={"100vh"} spacing={0}>
        <Header/>
        <Box flexGrow={1} bg={"gray.50"}>
            <Outlet/>
        </Box>
    </Stack>
  )
}

export default Layout