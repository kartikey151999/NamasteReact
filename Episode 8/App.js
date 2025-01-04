import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Src/components/Header" 
import Body from "./Src/components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Error from "./Src/components/Error"
import Aboutus from "./Src/components/Aboutus"
import Contact from "./Src/components/Contact"
import RestaurantMenu from "./Src/components/RestaurantMenu"
import Login from "./Src/components/Login"

const Applayout = () =>{
 return(
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
 )

}
const route = createBrowserRouter([
{
  path:"/",
  element:<Applayout/>,  
  children:[
{
  path : "/",
  element : <Body/>     
  
},
{
   path:"/About",
   element : <Aboutus/>,  
},
{
   path:"/Contact",
   element: <Contact/>,
},
{
 path:"/restaurant/:resId",
 element:<RestaurantMenu/>  
},
{
   path:"/Login",
   element:<Login/>
}
],
errorElement : <Error/>,
},
]);


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={route} />) // render functional component.