import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@mui/material';

const Login = ({  }) => {

  const STATICUSER = {email: 'chahat@gmail.com', password: '12345'};

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(STATICUSER.email === credentials.email && STATICUSER.password === credentials.password){
      
      setError(false)
      let {email} = credentials
      localStorage.setItem('user', JSON.stringify({email,token:true}));
      navigate('/manage');
    }
    else{
      setError(true)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
      <Grid item xs={12}>
        <TextField
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          fullWidth
          value={credentials.email}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          fullWidth
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Grid>
      <Grid item xs={12}>
        {error && <Typography style={{ color: 'red' }}>Invalid Credentials</Typography>}
      </Grid>
    </Grid>
  </form>
  );
};

export default Login