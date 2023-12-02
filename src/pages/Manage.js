import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography, Tabs, Tab, Button } from '@mui/material';
import UsersList from '../components/UsersList';
import PostsList from '../components/PostsList';
import Modal from '../components/Modal';
import EditUserModal from '../components/EditModal';
import PostModal from '../components/PostModal';

const Manage = ({ onLogout }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://dummyapi.io/data/v1/user', {
          headers: {
            'app-id': '6569c0ffd6980480c5edccb6',
          },
        });
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyapi.io/data/v1/post', {
          headers: {
            'app-id': '6569c0ffd6980480c5edccb6',
          },
        });
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchUsers();
    fetchPosts();
  }, []);

  const editUser = (updatedUser) => {
    const index = users.findIndex((user) => user.id === updatedUser.id);

    if (index !== -1) {
      const updatedUsers = [...users];
      updatedUsers[index] = updatedUser;
      setUsers(updatedUsers);
    }

    closeEditModal();
  };

  const deleteUser = (e, user) => {
    let filteredUsers = users.filter(el => el.id !== user.id);
    setUsers(filteredUsers);
  };

  const editPosts = (e, post) => {
    e.preventDefault();
    console.log(post, "post");
  };

  const deletePosts = (e, post) => {
    e.preventDefault();
    let filteredPosts = posts.filter(el => el.id !== post.id);
    setPosts(filteredPosts);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateUser = async (e, userData) => {
    e.preventDefault();
    const headers = {
      'app-id': '6569c0ffd6980480c5edccb6',
    };
    axios.post('https://dummyapi.io/data/v1/user/create', userData, {
      headers: headers
    })
      .then((response) => {
        let userList = users;
        userList.push(response.data);
        setUsers(userList);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleCreatePost = async (postData) => {
    const headers = {
      'app-id': '6569c0ffd6980480c5edccb6',
    };
    axios.post('https://dummyapi.io/data/v1/post/create', postData, {
      headers: headers
    })
      .then((response) => {
        let postList = posts;
        postList.push(response.data);
        setPosts(postList);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const openEditModal = (user) => {
    setEditedUser(user);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditedUser(null);
    setEditModalOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleOpenPostModal = ()=>{
    setOpen(true)
  }

  return (
    <div>
      <Paper elevation={3} style={{ padding: 20, marginTop: -10, marginBottom: 20, paddingLeft: 1100 }}>
        {selectedTab === 0 && <Modal handleCreateUser={handleCreateUser} handleClose={handleClose} open={open} setOpen={setOpen} />}
        {/* {selectedTab === 1 && <Button onClick={handleOpenPostModal} >Create Post</Button> }
        <PostModal handleCreatePost={handleCreatePost} handleClose={handleClose} isOpen={open} setOpen={setOpen} /> */}
      </Paper>

      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Users" />
        <Tab label="Posts" />
      </Tabs>

      <div role="tabpanel" hidden={selectedTab !== 0}>
        <UsersList users={users} deleteUser={deleteUser} editUser={openEditModal} />
      </div>

      <div role="tabpanel" hidden={selectedTab !== 1}>
        <PostsList posts={posts} editPosts={editPosts} deletePosts={deletePosts} />
      </div>

      <EditUserModal isOpen={isEditModalOpen} onClose={closeEditModal} editedUser={editedUser} handleEditUser={editUser} />
    </div>
  );
};

export default Manage;
