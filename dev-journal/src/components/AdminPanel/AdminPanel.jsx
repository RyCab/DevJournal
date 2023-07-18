import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './styles.css';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AdminPanel = (props, {children}) => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/getUsers')
        .then(users => setUsers(users.data))
        .catch(err => console.log(err))
    }, [])
    // console.log(users);
    // console.log('auth', authContext);

    let roles= [];
    authContext.user.role.map((role) => {
        roles.push(role);
    })
    for(var i=1; i < roles.length; i++){
        // console.log('aaa', i);
        if(authContext.user.role[i] === 'admin') {
            // console.log('admin role')
            return (
                <div className="adminPanel-con">
                    <h1 id="admin-title">Admin Panel</h1>
                    <table id="admin-table">
                        <thead id="admin-table-head">
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Role
                                </th>
                                <th>
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => {
                                    console.log(user);
                                return ( 
                                    <tr>
                                        <td>
                                            {user._id}
                                        </td>
                                        <td>
                                            {user.username}
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.role}
                                        </td>
                                        <td>
                                            <EditIcon/>
                                        </td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <>
                    {
                        navigate('/')
                    }
                </>
            )
        }
    }
}
