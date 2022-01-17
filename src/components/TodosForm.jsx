
import React, { useState, useEffect } from 'react'
import "../styles/todosForm.styles.css"

const TodosForm = ({ addUser, userSelected, cleanUser, updateUser}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState('')

    const submit = (e) => {
        e.preventDefault();
        const user = {  email, 
                        password,
                        first_name: firstName,
                        last_name: lastName, 
                        birthday
                     }
        if(userSelected.first_name){
            updateUser(user);
            clearForm()
        }else{
            addUser(user)
            clearForm()
        }
    }
        const clearForm = () => {
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setBirthday('')
        }
    useEffect(() => {
        if(userSelected.first_name) {
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }else{
            clearForm()
        }
    }, [userSelected])
    return (
        
        <form onSubmit={submit} className="users-form" >
            <h2>Enter a user</h2>
            <section className='inputs-container'>

                <article className="inputs-name">
                    <div className="input-container">
                        <div className="cointainer-label">
                            <label htmlFor='firstName'><i className="fas fa-user"></i> </label>
                        </div>
                        <input type="text"
                            size="18" 
                            placeholder=" firt name"
                            id='firstName'
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor='lastName'> </label>
                        <input type="text"
                            size="18" 
                            placeholder=" last name"
                            id='lastName'
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                </article>

                <div className="input-container">
                    <div className="cointainer-label">
                        <label htmlFor='email'><i className="far fa-envelope"></i> </label>
                    </div>
                    <input type='email'
                        placeholder=" email" 
                        id='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="input-container">
                    <div className="cointainer-label">
                        <label htmlFor='password'><i className="fas fa-key"></i></label>
                    </div>
                    <input type={'text'} 
                        placeholder=" password"
                        id='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className="input-container">
                    <div className="cointainer-label">
                        <label htmlFor='birthday'><i className="fas fa-birthday-cake"></i></label>
                    </div>
                    <input type="date"
                        id='birthday'
                        onChange={e => setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>
            </section>

           
            <section className="btns">
                <button >
                    Upload
                </button>

                <button 
                type='button' 
                onClick={cleanUser} > 
                    Clear
                </button>
            </section>
            
        </form>
    )
}

export default TodosForm