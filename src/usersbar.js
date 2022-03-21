// import navbar from './Navbar.css'
import { Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function UsersbarComp(props) {
  
    const next = (e, parm) => {

        props.callBack(parm)

    }
    return (
        <div>
            <div class="topnav" id="myTopnav">
                <a >Home</a>
                <a onClick={(e) => next(e, '/user/')}>All Users</a>
                <a  onClick={(e) => next(e, '/movies')}>Add User</a>
             
                <a href="javascript:void(0);" class="icon" >
                    <i class="fa fa-bars"></i>
                </a>
            </div>
      
       
        </div >
    )
}