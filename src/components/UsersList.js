import React from 'react';
import { Paper, Typography, Card, CardContent, CardActions, Button, Grid, CardMedia } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UsersList = ({ users, deleteUser, editUser }) => {
  const dummyImage = 'https://via.placeholder.com/140'; 

  return (
    <>
     
      <Grid container spacing={2}>
        {users?.map((user) => (
          <Grid item xs={12} sm={6} md={3} key={user.id}>
            <Card>
                          <CardMedia
                component="img"
                height="140"
                image={user.picture || dummyImage}
                alt={`${user.firstName} ${user.lastName}`}
                style={{ objectFit: 'cover' }}
              />

              <CardContent>
                <Typography variant="h6" component="div">
                  {user.firstName} {user.lastName}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'space-between' }}>
                <Button size="small" startIcon={<EditIcon />} onClick={() => editUser(user)}>
                  Edit
                </Button>
                <Button size="small" startIcon={<DeleteIcon />} onClick={(e) => deleteUser(e,user)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UsersList;
