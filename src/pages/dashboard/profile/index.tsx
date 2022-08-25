import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateProfile from "./create-profile";
import UpdateProfile from "./update-profile";

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateProfile />} />
      {/* <Route path="/update" element={<UpdateProfile />} /> */}
    </Routes>
  );
};

export default ProfileRoutes;
