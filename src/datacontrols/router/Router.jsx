import React from "react";
import { createBrowserRouter } from "react-router";
import Error from "../error/Error";
import Layout from "../layout/Layout";
import Home from "../../components/Home";
import AddCrop from "../../components/AddCrop";
import CropDetails from "../../components/CropDetails";
import MyPost from "../../components/MyPost";
import Registration from "../../components/Registration";
import Login from "../../components/Login";
import MyProfile from "../../components/MyProfile";
import AllCropPost from "../../components/AllCropPost";
import PrivateRouter from "./PrivateRouter";
import MyInterest from "../../components/MyInterest";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Error></Error>,
  },
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/all_crop_post",
        element: <AllCropPost></AllCropPost>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/add-crop",
        element: (
          <PrivateRouter>
            <AddCrop></AddCrop>
          </PrivateRouter>
        ),
      },
      {
        path: "/crops-details/:id",
        element: (
          <PrivateRouter>
            <CropDetails></CropDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-post",
        element: (
          <PrivateRouter>
            <MyPost></MyPost>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-interests",
        element: (
          <PrivateRouter>
            <MyInterest></MyInterest>
          </PrivateRouter>
        ),
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
