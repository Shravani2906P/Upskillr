import { useEffect, useState } from 'react';
import { getUsers } from '../api';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Public Profiles</h2>
      {users.length === 0 && <p>No users yet. Go create one!</p>}
      {users.map((user, i) => (
        <div key={i} className="card">
          <h3>{user.name}</h3>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Location:</b> {user.location}</p>
          <p><b>Skills Offered:</b> {user.skillsOffered?.join(', ')}</p>
          <p><b>Skills Wanted:</b> {user.skillsWanted?.join(', ')}</p>
          <p><b>Availability:</b> {user.availability?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
