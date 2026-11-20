import { useState, useEffect } from "react";
import "./App.css";
function App() {
const [users, setUsers] = useState([]);
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => setUsers(data));
}, []);
return (
<div className="container">
<h1>Student Portal</h1>
<h2>Student Information</h2>
  {users.map(user => (
    <div className="user-card" key={user.id}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  ))}
</div>
);
}
export default App;


