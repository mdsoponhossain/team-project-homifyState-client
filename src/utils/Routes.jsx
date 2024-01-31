import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";

import SignIn from "../pages/signin/SignIn";

import LayOut from "../components/mainLayout/LayOut";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/properties-details/PropertyDetails";
import Properties from "../pages/properties/Properties";
import ErrorPage from "../components/errorPage/ErrorPage";
import Blog from "../pages/blog/Blog";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Contact from "../pages/contact/Contact";
import AgentDashboard from "../components/dashboard/agent/AgentDashboard";
import AgentOderList from "../components/dashboard/agent/AgentOderList";
import AgentProperties from "../components/dashboard/agent/AgentProperties";
import About from "../pages/about/About";
import AgentProfile from "../pages/agentProfile/AgentProfile";
import UserProfile from "../components/dashboardcomponents/UserProfile";
import Wishlist from "../components/dashboardcomponents/Wishlist";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"",
        element: <Home></Home>
      },
      {
        path:"/properties",
        element: <Properties></Properties>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path:"properties/:id",
        element: <PropertyDetails></PropertyDetails>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },{
        path:"/about",
        element:<About></About>
      },
      {
        path:"/agentProfile",
        element:<AgentProfile></AgentProfile>
      }
    ]

  },
  {
    path:"dashboard",
    element:<DashboardLayout></DashboardLayout>,
    children: [
      {
        path:"",
        element:<div> Contents</div>
      },
      {
        path:"agentDashboard",
        element:<AgentDashboard></AgentDashboard>
      },
      {
        path:"agentProfile",
        element:<AgentProfile></AgentProfile>
      },
      {
        path:"agentOrder",
        element:<AgentOderList></AgentOderList>
      },
      {
        path:"agentProperties",
        element:<AgentProperties></AgentProperties>
      },
      {
        path:"userprofile",
        element:<UserProfile></UserProfile>
      },
      {
        path:"wishlist",
        element:<Wishlist></Wishlist>
      }
      
    ]
  }

]);
