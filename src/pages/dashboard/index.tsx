import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SocialMedia from "../../components/social-media";
import DashboardLayout from "./components/Layout";
import FeedRoutes from "./feed";
import HomeRoutes from "./home";
import ProfileRoutes from "./profile";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route path="home/*" element={<HomeRoutes />} />
        <Route path="profile/*" element={<ProfileRoutes />} />
        <Route path="feed/*" element={<FeedRoutes />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
