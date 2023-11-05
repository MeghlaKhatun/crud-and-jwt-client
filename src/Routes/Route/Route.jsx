import { createBrowserRouter } from "react-router-dom";
import Root from "../../layOut/Root";
import Home from "../../Home/Home";
import Registration from "../../Pages/Registration/Registration";
import LogIn from "../../Pages/Login/Login";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import DashBoard from "../../Pages/DashBoard/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:"/registration",
          element:<Registration></Registration>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/dashboard",
          element:<DashBoard></DashBoard>
        }
      ]
    },
  ]);

  export default router;