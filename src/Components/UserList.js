import React from 'react'
import axios from 'axios'
import { useEffect ,useState } from 'react'
import { Card } from 'react-bootstrap';


const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([]);
    const [loadUser, setLoadUser] = useState([]);
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then ((res) => { setListOfUSer(res.data)
            setLoadUser(false)})
         .catch(err => console.log(err))   
    },[]
    );
  return (
    <section>
        <header style={{display: 'flex', margin:"3%"}}>
        </header>
        {loadUser ? (<h3>loading...</h3>):(listOfUSer.map((user)=>(
             <div key={user.id}>
             <h2>Name : {user.name}</h2>
             <h3>user Name :{user.username}</h3>
             <h3>Phone : {user.phone}</h3>
             <h3>Email : {user.email}</h3>
             <h6>--------------------------------</h6>
        </div>
        )
       
        ))}
    </section>
    

 
  );
};

export default UserList