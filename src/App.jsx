
import { useState } from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [users,setusers]=useState([]);
 
 const handlsubmit =event=>{
         event.preventDefault();
         const form=event.target;
         const email=form.email.value;
         const name=form.name.value;
         const user={email,name}
        console.log(user)

        fetch('http://localhost:5000/users',
        {
          method:"POST",
          headers:{
            "content-type":'application/json'
          },
          body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          setusers(data)
          console.log(data);
        if(data.insertedId){
          alert('user added successfully');
          form.reset()
        }

        })
 }
  return (
    <>
    <Link to={'/users'}>users</Link>
     
      <h1>Vite + React</h1>
      <form onSubmit={handlsubmit}>

        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id=""></input><br />
        <input type="submit" value="submit" />
      </form>
     
    </>
  )
}

export default App
