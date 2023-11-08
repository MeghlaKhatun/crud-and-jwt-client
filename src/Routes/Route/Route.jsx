import { createBrowserRouter } from "react-router-dom";
import Root from "../../layOut/Root";
import Home from "../../Home/Home";
import Registration from "../../Pages/Registration/Registration";
import LogIn from "../../Pages/Login/Login";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import AddService from "../../Pages/AddService/AddService";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import AllServices from "../../Pages/AllServices/AllServices";
import SingleService from "../../Pages/SingleService/SingleService";
import MyServices from "../../Pages/MyServices/MyServices";
import UpdateService from "../../Pages/UpdateService/UpdateService";
import MySchedules from "../../Pages/MySchedules/MySchedules";

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
        },       
        {
          path:"/allService",
          element:<AllServices></AllServices>,
          loader:()=>fetch("https://ass-crud-and-jwt-server.vercel.app/service")
        },
        {
          path:"/singleService/:id",
          element:<PrivateRoute><SingleService></SingleService></PrivateRoute>,
          loader:({params})=>fetch(`https://ass-crud-and-jwt-server.vercel.app/service/${params.id}`)
        },
        {
          path:"/myServices",
          element:<PrivateRoute><MyServices></MyServices></PrivateRoute>,
          loader:()=>fetch("https://ass-crud-and-jwt-server.vercel.app/service")
        },
        {
          path:"/myServices/updateService/:id",
          element:<UpdateService></UpdateService>,         
          loader:({params})=>fetch(`https://ass-crud-and-jwt-server.vercel.app/service/${params.id}`)
        },{
          path:"/mySchedules",
          element:<PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
          loader:()=>fetch("https://ass-crud-and-jwt-server.vercel.app/booking")
        }
      ]
    },
  ]);

  export default router;