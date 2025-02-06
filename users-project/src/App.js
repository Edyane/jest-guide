import { useState } from 'react';
import UserForm from './components/userForm/UserForm.js';
import UserList from './components/userList/UserList.js';
import InputTexto from './components/input/Input.js';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
      <InputTexto />
    </div>
  );
}

export default App;
