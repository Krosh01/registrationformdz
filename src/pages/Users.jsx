import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../components/User'
import * as userActions from '../store/action/user'
import Home from './Home'
import { Link, unstable_HistoryRouter } from 'react-router-dom';

const Users = () => {
    const users = useSelector((state) => {return state.users})
    const dispatch = useDispatch()
    const removeUser = () => {dispatch(userActions.removeUser())}

  return (
    <div className='main_page' ><p className='Main_p'>List of users</p>
        {users.map((user) => {
            return <User name={user.name} email={user.email} age={user.age} password={user.password} password1={user.password1} />
        })}
        <button type='button' onClick={removeUser}>remove users</button>
        <Link to='/'>
          <button className='Button_back'>back</button>
        </Link>  
    </div>
  )
}

export default Users