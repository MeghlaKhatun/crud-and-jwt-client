import { createBrowserRouter } from "react-router-dom";
import Root from "../../layOut/Root";
import Home from "../../Home/Home";
import Registration from "../../Pages/Registration/Registration";
import LogIn from "../../Pages/Login/Login";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import AddService from "../../Pages/AddService/AddService";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";

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
          path:"/addService",
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;