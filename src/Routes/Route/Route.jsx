import { createBrowserRouter } from "react-router-dom";
import Root from "../../layOut/Root";
import Home from "../../Home/Home";
import Registration from "../../Pages/Registration/Registration";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;