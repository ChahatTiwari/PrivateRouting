import React, { useState, useEffect } from 'react';
import { Button, Modal, TextField, Typography, Box } from '@mui/material';

const EditUserModal = ({ isOpen, onClose, editedUser, handleEditUser }) => {
  const [editedFirstName, setEditedFirstName] = useState(editedUser?.firstName || '');
  const [editedLastName, setEditedLastName] = useState(editedUser?.lastName || '');

  useEffect(() => {
    setEditedFirstName(editedUser?.firstName || '');
    setEditedLastName(editedUser?.lastName || '');
  }, [editedUser]);

  const handleSaveChanges = () => {
    const updatedUser = {
      ...editedUser,
      firstName: editedFirstName,
      lastName: editedLastName,
    };

    handleEditUser(updatedUser);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit User
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          name="firstName"
          label="First Name"
          type="text"
          fullWidth
          variant="standard"
          value={editedFirstName}
          onChange={(e) => setEditedFirstName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          name="lastName"
          label="Last Name"
          type="text"
          fullWidth
          variant="standard"
          value={editedLastName}
          onChange={(e) => setEditedLastName(e.target.value)}
        />
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
