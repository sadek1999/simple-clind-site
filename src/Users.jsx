
import { useLoaderData } from 'react-router-dom';

const handlremove = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/users/${id}`,{
        method : 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        alert('successfully delete the data')
        console.log(data)
    })
}

const Users = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1> this is user page</h1>
            <p>tihisi ieyrjeiu</p>
            <h1>{data.length}</h1>
            <div>
                {
                    data.map(data => <p key={data._id}>{data.name} : {data.email} <button onClick={() => handlremove(data._id)}>X</button>  </p>)
                }
            </div>
        </div>
    );
};

export default Users;