import React from 'react'
//now to uset the private functionality use the react-router-dom
import {Navigate,Outlet} from 'react-router-dom'
 const PrivateComponent = () => {
    const auth = localStorage.getItem('user');
// is user is availble so return the <outlet> elese navigate to the 
  return (
     auth? <Outlet/>:<Navigate to={'/signup'}/>
  )
}

export default PrivateComponent;