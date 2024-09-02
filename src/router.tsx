import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Students, { loader as studentLoader } from "./views/students/Students";
import NewStudent, {
  action as newStudentAction,
} from "./views/students/newStudent";
import EditStudent, {
  loader as editStudentLoader,
  action as editStudentAction,
} from "./views/students/EditStudent";
import LoginLayout from "./layouts/LoginLayout";
import Login, { action as loginAction } from "./views/login/Login";
import Enrollment from "./views/enrollments/enrollment";
import Professor from "./views/professors/Professor";
import Course from "./views/courses/Course";
import Reports from "./views/reports/Reports";
import Main from "./views/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
    ],
  },
  {
    path: "/main",
    element: <Layout />,
    children: [
      {
        path: "/main/oxford",
        element: <Main />,
      },

      {
        path: "students",
        element: <Students />,
        loader: studentLoader,
      },
      {
        path: "students/new",
        element: <NewStudent />,
        action: newStudentAction,
      },
      {
        path: "students/:id/edit", // ROA Pattern - Resource-oriented design
        element: <EditStudent />,
        loader: editStudentLoader,
        action: editStudentAction,
      },
      {
        path: "enrollments",
        element: <Enrollment />,
      },
      {
        path: "professors",
        element: <Professor />,
      },
      {
        path: "courses",
        element: <Course />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);
