import React from "react";
import { createBrowserRouter } from "react-router";
import Error from "../error/Error";
import Layout from "../layout/Layout";
import Home from "../../components/Home";
import AllCropPost from "../../components/AddCropPost";
import AddCrop from "../../components/AddCrop";
import CropDetails from "../../components/CropDetails";
import MyPost from "../../components/MyPost";
import Registration from "../../components/Registration";
import Login from "../../components/Login";

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
        path: "/add-crop",
        element: <AddCrop></AddCrop>,
      },
      {
        path: "/crops-details/:id",
        element: <CropDetails></CropDetails>,
      },
      {
        path: "/my-post",
        element: <MyPost></MyPost>,
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
