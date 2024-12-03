import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Src/components/Header" 
import Body from "./Src/components/Body"
const Applayout = () =>{
 return(
    <div className="app">
    <Header/>
    <Body/>
    </div>
 )

}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Applayout />) // render functional component.