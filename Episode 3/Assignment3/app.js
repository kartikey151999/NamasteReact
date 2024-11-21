/*Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
*/
import React from "react"
import ReactDOM from "react-dom/client"
// const div = React.createElement("div",{class:"title"},[
//     React.createElement("h1",{id: 'h1'}),
//     React.createElement("h2",{id: 'h2'}),
//     React.createElement("h3",{id: 'h3'}),
// ])

// Create the same element using JSX

// const div = (<div className="title">
//     <h1>1st</h1>
//     <h2>2nd</h2>
//     <h3>3rd</h3>
// </div>)


//Create a functional component of the same with JSX 

// 1 . without using return


// const TitleComponent = () =>(
// <div className="title">
// <h1>1</h1>
// <h2>2</h2>
// <h3>3</h3>
// </div>
// )
//************************************

//2.with using return
// const Header = () =>(
// <div>
// <h1>H1</h1>
// <h2>H2</h2>
// <h3>H3</h3>
// </div>
// )

// const TitleComponent = () =>{
// return<div className="title">
// {Header()}
// </div>
// }

// Create a Header Component from scratch using Functional Components with JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const Header = ()=>(
<div className="head">
<img id = "logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ykvNKNJS3Ke-LxDLSIbU0GaQpJVDz1w5Pw&s"></img>
<img id="search-bar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaK0U86mYtnEny4StYsAbHyUhOEw_v8g-Jw&s"/>
<img id="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&s"/>
</div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)