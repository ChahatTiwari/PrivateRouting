import React, { useState, useEffect } from 'react';
import { Button, Modal, TextField, Typography, Box } from '@mui/material';

const PostModal = ({ isOpen, onClose, editedPost, handleCreatePost }) => {
  const [postTitle, setPostTitle] = useState(editedPost?.title || '');
  const [postContent, setPostContent] = useState(editedPost?.content || '');


const StaticUsers =  {
  "id": "60d0fe4f5311236168a109dd",
  "title": "mr",
  "firstName": "Miguel",
  "lastName": "Lima",
  "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
}
  const handleSaveChanges = () => {
    const updatedPost = {
      text: postContent,
      owner: StaticUsers,
      tags: ['animal', 'canine', 'dog'],
      image: "https://img.dummyapi.io/photo-1576707064479-3139e7e8aace.jpg"

    };

    handleCreatePost(updatedPost);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Post
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          name="postTitle"
          label="Post Title"
          type="text"
          fullWidth
          variant="standard"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          name="postContent"
          label="Post Content"
          multiline
          rows={4}
          fullWidth
          variant="standard"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Save Post
        </Button>
      </Box>
    </Modal>
  );
};

export default PostModal;
