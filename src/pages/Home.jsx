import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as userActions from '../store/action/user'
import { Link } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState({
 
    name: '',
    email: '',
    age:'',
    password:'',
    password1:''
  })

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value
      }
    })
  }

  const dispatch = useDispatch()
  const addUser = () => {
    dispatch(userActions.addUser(user))
    setUser({

      name: '',
      email: '',
      age:'',
      password:'',
      password1:''
    })
  }

  return (
    <div className='Main_verification'>
      <div className='Main_verification_inner' >
      <h1>Зарегестрироваться</h1>
        
        <br />
        <br />
        <input name='name' placeholder='enter a name' onChange={inputHandler} value={user.name}/>
        <br />
        <br />
        <input name='email' type='email' placeholder='enter a email' onChange={inputHandler} value={user.email}/>
        <br />
        <br />
        <input name='age' type='number' placeholder='enter a age' onChange={inputHandler} value={user.age}/>
        <br />
        <br />
        <input name='password' type='password' placeholder='enter a password' onChange={inputHandler} value={user.password}/>
        <br />
        <br />
        <input name='password1' type='password' placeholder='enter a password again' onChange={inputHandler} value={user.password1}/>
        <br />
        <br />
        <button type='submit' onClick={addUser}>Отправить</button>
        <br />
        <br />
      <Link to='/Users'>
      <button className='Button_userlist'>Registrated List</button>
      
      </Link>  

      </div>
     
    </div>
  )
}

export default Home