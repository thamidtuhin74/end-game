import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import AdmissionForm from "../Pages/Admission/AdmissionForm/AdmissionForm";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "../Pages/Profile/Profile";
import EditeProfile from "../Pages/Profile/EditeProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "colleges/collegeDetails/:id",
        element: (
          <ProtectedRoutes>
            <CollegeDetails></CollegeDetails>
          </ProtectedRoutes>
        ),
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "admission/admissionForm/:id",
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "editProfile/:id",
        element: <EditeProfile></EditeProfile>,
      },
    ],
  },
]);

export default router;
