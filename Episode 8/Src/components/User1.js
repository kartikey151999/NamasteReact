import React from "react";

class User1 extends React.Component{
  constructor(props){
    
     super(props);
     this.state={ //always create state variable for class component inside the constructor.
         count : 0,
     }
    }  
 
    render(){
        const {name,location,Contact} = this.props
        const {count} = this.state
        return(
        <div>
        <h3>Count: {count}</h3> 
        <button onClick={()=>{
            this.setState({  //setState method is use to update state variable of a class component.
                count:count+1,
             })}}>
        count increase</button>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: {Contact}</h4>
        </div>
        )
    }
}
export default User1;