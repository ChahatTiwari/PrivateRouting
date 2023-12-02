import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({ handleCreateUser, handleClose, setOpen, open }) {

  const [modalDetails, setModalDetails] = React.useState({
    title: 'Create Users'
  });

  const handleClickOpen = (title) => {
    setOpen(true);
    setModalDetails((prev) => ({ ...prev, title }));
  };

  const [userFields, setUsersFields] = React.useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    setUsersFields({ ...userFields, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen('Create Users')}>
        Create Users
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{modalDetails.title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleCreateUser(e, userFields)} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
