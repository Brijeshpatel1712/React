import axios from 'axios'

import { Navigate } from 'react-router-dom'

const Privatepage = ({children}) => {

    const user = JSON.parse(localStorage.getItem("token"))

    axios.get('http://localhost:3000/user')
    .then((res) => {
        console.log(res.data);
        const {email,password,role} = res.data;
        if(email && password && role === "admin")
        {
            return children;
        }
        else
        {
            return <Navigate to='/login' />
        }
    }).catch((err) => {
        console.error(err); 
    }) 
    
    if(!user)
    {
        return <Navigate to='/login' />
    }

    return children

}

export default Privatepage