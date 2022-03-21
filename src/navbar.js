import navbar from './Navbar.css'
import { Route, Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
export default function NavbarComp(props) {
     const [active, setActive] = useState({
        '/login': false,
        '/movies': false,
        '/subscriptions': false,
    '/users':false
    })
    useEffect(()=>{
        
        let x = ['/login', '/movies', '/subscriptions','/users']
        let a = active;
        x.forEach(element => {
            a[element] = false
        })

       a[props.active] = true
        setActive(a)
    },[])
   

    const next = (e, parm) => {
    
     props.callBack(parm)
     
    }
    return (
        <div>
            <div   style={{textAlign:'center'}} class="topnav" id="myTopnav">
                <a >Home</a>
                <a className={active['/login'] ? 'active' : '0'} onClick={(e) => next(e, '/login')}>LogOut</a>
                <a className={active['/movies'] ? 'active' : '0'} onClick={(e) => next(e, '/movies')}>Movies</a>
                <a className={active['/subscriptions'] ? 'active' : '0'} onClick={(e) => next(e, '/subscriptions')}>Subscrptions</a>
                <a className={active['/users'] ? 'active' : '0'} onClick={(e) => next(e, '/users')}>Users</a>

                <a href="javascript:void(0);" class="icon" >
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}