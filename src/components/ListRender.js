import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Luis", "Matheus", "José"])

    const [users, setUsers] = useState([
        {id: 1, name: "Luis", age: 30},
        {id: 2, name: "Matheus", age: 23},
        {id: 3, name: "José", age: 60}
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 3);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
} 

export default ListRender