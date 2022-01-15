import React, {useEffect, useState} from 'react';
import TodosList from './components/TodosList';
import TodosForm from "./components/TodosForm"
//axios
import axios from 'axios'
//css
import './App.css';


function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState({})

    useEffect(() => {
      axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
    }, [])
    
     const getUser = () => {
      axios.get("https://users-crud1.herokuapp.com/users/")
        .then((res) => setUsers(res.data));
      };

    const addUser = (user) => {
      axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => getUser());
    };

    const deleteUser = (id) => {
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUser());
    }

    const selectUser = (user) => {
        setUserSelected(user) 
      }
    const cleanUser = () => setUserSelected({})

    const updateUser = (editUser) => {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, editUser)
      .then(() => getUser());
      
    }
  return (
    <div className="App">
      <TodosForm addUser={addUser} 
                userSelected={userSelected} 
                cleanUser={cleanUser}
                updateUser={updateUser}
                
                />
      <TodosList users={users} deleteUser={deleteUser} selectUser={selectUser}/>
    
      
    
    </div>
  );
}

export default App;
