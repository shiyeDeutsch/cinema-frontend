import { useState, useEffect } from "react"

export default function UserComp(props) {
    const [user, setUser] = useState({})
    const [num, setNum] = useState(0)
    useEffect(() => {

        setUser(props.userData)

    }, [props.userData.permissions])


    const setdate = (key) => {

        setUser({ ...user, permissions: { ...user.permissions, [key]: !user.permissions[key] } })
        //   debugger

    }
    return (

        <div>
            {user.permissions && <from border="1">

                name    <input type="text" disabled="disabled" value={user.name} /><br />

                View Subscriptions
                <input type="checkbox"
                    checked={user.permissions['view_subscriptions']}
                    onChange={() => setdate('view_subscriptions')} /><br />

                Create Subscriptions
                <input type="checkbox"
                    checked={user.permissions['create_subscriptions']}
                    onChange={() => setdate('create_subscriptions')} /><br />
                Delete Subscriptions
                <input type="checkbox"
                    checked={user.permissions['delete_subscriptions']}
                    onChange={() => setdate('delete_subscriptions')} /><br />

                Update Subscriptions
                <input type="checkbox"
                    checked={user.permissions['update_subscriptions']}
                    onChange={() => setdate('update_subscriptions')} /><br />

                View Movies
                <input type="checkbox"
                    checked={user.permissions['view_movies']}
                    onChange={() => setdate('view_movies')} /><br />

                Create Movies
                <input type="checkbox"
                    checked={user.permissions['create_movies']}
                    onChange={() => setdate('create_movies')} /><br />

                Delete Movies
                <input type="checkbox"
                    checked={user.permissions['delete_movies']}
                    onChange={() => setdate('delete_movies')} /><br />

                Update Movies
                <input type="checkbox"
                    checked={user.permissions['update_movies']}
                    onChange={() => setdate('update_movies')} /><br />

            </from>}
        </div>

    )
}