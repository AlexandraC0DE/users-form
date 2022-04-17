
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import useModal from './hooks/useModal';



function App() {

  const [ users, setUsers ] = useState([]);
  const [isOpenModal, openModal, closeModal ] = useModal(); 

  useEffect (() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }
 

  return (
    <div className="App">

      <div className='container-btn'>
      <button className='btn-modal' onClick={openModal}>
        + Crear nuevo usuario
      </button>
      </div>

      <Modal
      isOpen={isOpenModal}
      closeModal={closeModal}
      title='Formulario'
      >
      <UsersForm 
          getUsers={getUsers}
      />
      </Modal>
      <UsersList 
        users={users}
      />

    </div>
  )
}

export default App
