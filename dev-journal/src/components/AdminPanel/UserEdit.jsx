import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect, useState } from "react";
import useFetch from "../../hooks/crud/useFetch";
import { useScrollTrigger } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './styles/UserEditStyles.css';

export const UserEdit = (props) => {
    console.log('props', props);
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState('');
    let user = props.user;
    
    const toggleModal = () => {
      setModal(!modal)

      console.log('id', user);
    }
  return (
    <>
      <button
        onClick={toggleModal}
        className='btn-modal'
      >
        <EditIcon id="editIcon"/>
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">

          </div>
          <div className="modal-content">
            <h1>Edit ( {user.username} )</h1>
            <p>{user._id}</p>
            {/* <input 
              type='username' 
              placeholder={user.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >

            </input> */}
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <button className='close-modal' onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
