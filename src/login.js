import { Link, Routes, Route, withRouter } from 'react-router-dom'
import loginBL from './models/loginBL'
import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function LoginComp(props) {
    const [user, setUser] = useState({ userName: "", pwd: "" })
    const [data, setData] = useState({})
    const [unvalid, setUnvalid] = useState(false)
    const next = () => {
        props.history.push('/homePage')
    }
    async function isUserVlaid() {
        let resp = await loginBL.login(user)
        setData(resp)
        if (resp.valid) {
            props.history.push('/homePage')
        }
        else {
            setUnvalid(true)
        }
    }
    return (
        <div style={{ textAlign: "center", border: 1 }}>
       
            <h2 style={{ textAlign: "center" }}>     WELCOME TO THE CINEMA SYSTEM</h2>
            <TextField label="User Name" variant="outlined" size="small" onChange={e => setUser({ ...user, userName: e.target.value })} /><br /><br/>
            <TextField label="Pasworrd" variant="outlined" size="small" onChange={e => setUser({ ...user, pwd: e.target.value })} /><br />

            <  Button variant="contained" onClick={() => isUserVlaid()} >  Log In</Button><br />
            New User ? : <a href="/userManagement/singUp">Create An Account</a>

            {
                unvalid && alert('Incorrect username or password')
                //<div>Incorrect username or password  </div>
            }
        </div>
    )
}
export default LoginComp