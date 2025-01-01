import {useRouteError}  from "react-router-dom";

const Error = () =>{
    const error = useRouteError();
    console.log(error)
    return <div>
       {error.status} Page {error.statusText}
    </div>
}

export default Error;