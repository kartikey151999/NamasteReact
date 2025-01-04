import React from "react";

class User1 extends React.Component{
  constructor(props){
    
     super(props);
     console.log(props.name,'parent constructor ')
     this.state={ //always create state variable for class component inside the constructor.
         count : 0,
         userinfo:{
            name:"none",
            avatar_url:"",
         }
     }
    }  
    
    async componentDidMount(){
        console.log('parent componentDidMount render')
        const data = await fetch("https://api.github.com/users/kartikey151999");
       
        const json = await data.json();
        this.setState({
            userinfo:json
        })
    }   

    render(){
        const {name,location,avatar_url} = this.state.userinfo

        const {count} = this.state
        console.log('parent render')
        return(
        <div className="about">
        <h3>Count: {count}</h3> 
        <button onClick={()=>{
            this.setState({  //setState method is use to update state variable of a class component.
                count:count+1,
             })}}>
        count increase</button>
        <h3>Name: {name}</h3>
        <img height="100" width="100" src={avatar_url}/>
        </div>
        )
    }
}
export default User1;