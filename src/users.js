import NavbarComp from './navbar'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react'
import { Switch, Link } from 'react-router-dom';
import usersBL from './models/usersBL'
import UserComp from './user'

function UsersComp(props) {
    const [users, setUsers] = useState([])
    useEffect( async () => {
        let data = await usersBL.getAllUsers()
        setUsers(data)
    }, [])
    return (
        <div>
            <NavbarComp active='/users' callBack={x => props.history.push(x)} /><br />
            <div style={{ textAlign: 'center' }}>
                <  Button variant="contained" Link >All Users</Button>
                <  Button variant="contained"  >Add Users</Button>

      <br/>  <br/>
                {

                    users.map((x,y) => {
                        return <UserComp userData={x} key={y}/>
                    })
                }
            </div>
        </div>
    )
}

export default UsersComp