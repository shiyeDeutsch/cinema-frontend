import axios from 'axios'
async function getAllUsers() {
    let resp = await axios.get("http://localhost:8000/api/users");
    return resp.data
    // return [
    //     {
    //         id: "621bb6a5706393a09a6609e5",
    //         name: "yeoshua deutsch",
    //         userName: "sd",
    //         createdDate: "",
    //         permissions: [
    //             "view subscriptions",
    //             "create subscriptions",
    //             "delete subscriptions",
    //             "update subscriptions",
    //             "view movies",
    //             "create movies",
    //             "delete movies",
    //             "update movies"
    //         ]
    //     }
    // ]
}

export default { getAllUsers }