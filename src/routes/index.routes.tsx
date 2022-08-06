import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import AuthRoutes from "../pages/auth";
import DashboardRoutes from "../pages/dashboard";
import LandingRoutes from "../pages/landing";
import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PublicRoutes />}>
          <Route path ="/*" element = {<LandingRoutes/>} />
          <Route path ="auth/*" element = {<AuthRoutes/>} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard/*" element={<DashboardRoutes/>}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default IndexRoutes;
