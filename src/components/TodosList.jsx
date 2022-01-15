import React from 'react'
import "../styles/todosList.styles.css"
const TodosList = ({users, deleteUser, selectUser}) => {
    
    return (
        <ul className='ul'>
            {
                users.map((user) => (
                    <li className='li' key={user.id}>
                        <section className='first-section'>
                            <div className="container-name">
                                <h3>{user.first_name}</h3>
                                <h3>{user.last_name}</h3>
                            </div>
                            <p className='email'>{user.email}</p>
                            <p><i className="fas fa-birthday-cake"></i>{user.birthday}</p>
                        </section>
                        
                        <section className='second-section'>
                            <button className='btn-delete' onClick={() => deleteUser(user.id)}>
                            <i className="fas fa-user-slash"></i>
                            </button>

                            <button className='btn-edit' onClick={() => selectUser(user, user.id)} >
                                <i className="fas fa-user-edit"></i>
                            </button>
                        </section>
                        
                    </li>
                ))
            }   
        </ul>
    )
}

export default TodosList