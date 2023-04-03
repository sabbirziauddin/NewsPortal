import { createBrowserRouter } from "react-router-dom";
import Catagory from "../../pages/Catagory/Catagory";
import Home from "../../pages/Home/Home";
import Main from "../../Layout/Main";
import News from "../../pages/News/News";
import Login from "../../pages/Registration/Login/Login";
import SignUp from "../../pages/Registration/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/catagory/:id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/catagory/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/news"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
