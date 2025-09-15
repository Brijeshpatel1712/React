import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Privatepage = ({children}) => {

    // const isAuth = true;

    const [user] = useAuthState(auth);

    if(!user)
    {
        return <Navigate to={'/login'}/>
    }


    return children;

}

export default Privatepage