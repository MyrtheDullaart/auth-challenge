import { useState } from "react"

function UserForm() {
    const [user, setUser] = useState({ 
        username: '', 
        password: '' 
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <form>
            <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
  }
  
  export default UserForm