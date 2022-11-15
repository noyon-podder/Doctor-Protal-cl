import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
           {
            path: '/',
            element: <Home/>
           },
           {
            path: '/login',
            element: <Login/>
           },
           {
            path: '/appointment',
            element: <Appointment/>
           },
           {
            path: '/register',
            element: <Register/>
           }
        ]
    }
])