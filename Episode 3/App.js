import React from "react"
import ReactDOM from "react-dom/client"
// Creating heading using react 
const heading = React.createElement("h1",{id: 'h1'},"Namaste React")
//Creating functional component
const Title =() => (
    <h1>Namaste React heading</h1>
)
//Creating functional component
const Jsxheading =()=> (
<>
<Title />  
<h1 className="h1">Namaste React🙏
</h1>
</> 
) 




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Jsxheading />) // render functional component.