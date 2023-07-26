import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import './styles/AdminPanelStyles.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { UserEdit } from './UserEdit';
import SearchIcon from '@mui/icons-material/Search';

export const AdminPanel = (props) => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [currentModal, setCurrentModal] = useState("");
    useEffect(() => {
        axios.get('http://localhost:3000/getUsers')
        .then(users => setUsers(users.data))
        .catch(err => console.log(err))
    }, [])
    console.log('USERS ', users)
    const handleNavigate = (user) => {
        navigate(`/adminUserEdit/${user.username}`)
    };
    const refreshPage = () => {
        window.location.reload(false);
      };
    const handleSwitchModal = (modalName) => {
        setCurrentModal(modalName);
        console.log("Switching");
      };
    // console.log(users);
    // console.log('auth', authContext);

    let roles= [];
    authContext.user.role.map((role) => {
        roles.push(role);
    })
    for(var i=0; i < roles.length; i++){
        i++;
        // console.log('I: ', i);
        if(authContext.user.role[i] === 'admin') {
            console.log('admin role')
            return (
                <>
                    <div className="adminPanel-con">
                        <p id='admin-pageTitle'>DASHBOARD / <p id='admin-pageTitle-color'>ADMIN PANEL</p></p>
                        <h2 id="admin-title">Welcome {authContext.user.username}!</h2>
                        <div className="admin-btn-group">
                            {/* <SearchIcon id='search-icon'/>
                            <input id='admin-search'></input> */}
                            <button id="admin-btn">Filter By</button>
                            <button id="admin-btn">click</button>
                        </div>
                        <div className="table-con">
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
                                        {/* <th>
                                            Role
                                        </th> */}
                                        <th>
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => {
                                            console.log(user);
                                            let cutText = user._id;
                                            var string_length = cutText.split('').length;
                                            var num = string_length;
                                            var numCut = string_length - 4;
                                            let cut = cutText.substr(numCut, num);
                                            let cutFirst = cutText.substr(0, 4);
                                        return ( 
                                            <tr>
                                                <td className="td-id">
                                                    {cutFirst + '...' + cut}
                                                </td>
                                                <td>
                                                    {user.username}
                                                </td>
                                                <td>
                                                    {user.email}
                                                </td>
                                                {/* <td>
                                                    {user.role}
                                                </td> */}
                                                <td>
                                                    {/* {authContext.loggedIn && (
                                                        <>   
                                                            <button onClick={() => handleSwitchModal('userEdit')}>
                                                                <EditIcon>
                                                                    <UserEdit ></UserEdit>
                                                                </EditIcon>
                                                            </button>                               
                                                        </>
                                                    )} */}
                                                    <UserEdit user={user}/>
                                                </td>
                                            </tr>
                                        )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="adminCard-con">
                                <h1>aaa</h1>
                                <h1>aaa</h1>
                                <h1>aaa</h1>
                                <h1>aaa</h1>
                                <h1>aaa</h1>
                        </div>
                        {currentModal === 'userEdit' && (
                            console.log('aaabb'),
                            <UserEdit handleSwitchModal={handleSwitchModal} user={users}/>
                        )}{" "}
                    </div>
                </>
            )
        } else {
            return (
                <>
                    {
                        // console.log("user role")
                        navigate('/')
                    }
                </>
            )
        }
    }
}
