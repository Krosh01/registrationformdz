import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const user = ({name, email,age,password,password1}) => {
  return (
    <ul  className='Main_user_page'>
   

        <li>
            <div className='Main_users_name'>
            <p> Ваше имя: {name}</p>
            </div>
            <div className='Main_users_name'>
            <p>Ваш возраст: {age}</p>
              
            </div>
            <div className='Main_users_name'>
            <p>Ваш email: {email}</p>
            </div>
            <div className='Main_users_name'>
            <p>Ваш пароль: {password}</p>
            </div>
            <div className='Main_users_name'>
            <p>Ваш пароль: {password1}</p>
            </div>
            <div className='Main_users_mane'>
              _
            </div>
        </li>
    </ul>
  )
}

export default user