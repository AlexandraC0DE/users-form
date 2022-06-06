
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import useModal from './hooks/useModal';


function App() {

  const [ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);
  const [isOpenModal, openModal, closeModal ] = useModal(); 
  const [isOpenModalEdit, openModalEdit, closeModalEdit ] = useModal(); 


  useEffect (() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }
 
  const selectUser = user => setUserSelected(user);
  console.log(userSelected);


  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
     .then(() => getUsers());
  };
  
  

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
        selectUser={selectUser}
        deleteUser={deleteUser}
      />

      <Modal
        isOpen={isOpenModalEdit}
        isOpenBtn={openModalEdit}
        closeModal={closeModalEdit}
        title='editar formulario'
      >

      </Modal>

    </div>
  )
}

export default App
