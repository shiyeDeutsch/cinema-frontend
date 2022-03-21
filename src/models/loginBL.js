import axios from 'axios'
async function login(obj)
{
    let resp= await axios.post("http://localhost:8000/api/users",obj)
    let data=resp.data;
    // console.log(data)
    return data;
}
export default {login}