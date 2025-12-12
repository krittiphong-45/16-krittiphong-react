import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./view/Home";
import User from "./view/User";
import Admin from "./view/Admin";
import Owner from "./view/Owner";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement:(
      <div className="min-h-screen flex justify-center items-center">
        <h1>404 - Page Not Found 👀</h1>
      </div>
    ),
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/home/user",
        element:<User/>,
      },
      {
        path:"/home/admin",
        element:<Admin/>,
      },
      {
        path:"owner",
        element:<Owner/>,
      },
  ]
  }]);
export default function App() {
  return <RouterProvider router={router}/>;
}
