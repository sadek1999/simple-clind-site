
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const data= useLoaderData()
    return (
        <div>
            <h1> this is user page</h1>
            <h1>{data.length}</h1>
            <div>
                {
                    data.map(data=><p key={data._id}>{data.name} : {data.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;