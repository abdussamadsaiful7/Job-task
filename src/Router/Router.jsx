import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/HomePage/Home/Home";
import AllData from "../Components/HomePage/AllData/AllData";
import UpdateData from "../Components/UpdateData/UpdateData";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
          path: '/allData',
          element: <AllData/>,
        },
        {
          path: '/updateData/:id',
          element: <UpdateData/>,
          loader: ({params}) =>fetch(`https://job-task-server-ten.vercel.app/allData/${params.id}`)
        },
       
      ]
    },
  ]);

  export default router;