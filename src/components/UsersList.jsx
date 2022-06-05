import React from 'react';
// import { useState } from 'react';
import '../css/UsersList.css';


const UsersList = ({ users, selectUser}) => {

    return (
        <div>

            <h2 className='users'>
                Usuarios 
            </h2>

            <ul>
                {
                    users.map(user => (
                    <article key={user.id}>
                        <div className='card-container'>
                            <div className='card'>

                                <h3 className='name'>{`${user.first_name} ${user.last_name}`}</h3>

                                <div>
                                    <span className='title-email'>CORREO</span>
                                    <p className='email'>{user.email}</p>
                                </div>
                                
                                <div className='birthday'>
                                    <span className='title-birthday'>CUMPLEAÑOS</span>
                                    <p className='gift'><i className="fa-solid fa-gift"></i> {user.birthday}</p>
                                </div>

                                
                                <div className='btn-delete-edit' align='right'>
                                    <button className='btn-delete'><i className="fa-solid fa-trash-can"></i></button>

                                    <button onClick={() => selectUser(user)}className='btn-edit'>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                   
                                </div>

                            </div>
                        </div>
                     </article>
                    ))
                }
            </ul>
            
        </div>
       
    );
};

export default UsersList;