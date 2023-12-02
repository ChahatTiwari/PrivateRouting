import React from 'react'
import { Button, Paper, Typography } from '@mui/material';

const PostsList = ({posts, deletePosts, editPosts}) => {
  return (
    <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" gutterBottom>
          Posts
        </Typography>
        <ul>
          {posts?.map((post) => (
            <li key={post.id} style={{display:"flex", justifyContent: "space-between"}}>
              <p>{post.id} {post.text}</p>
              <div>
              <Button variant="contained" color="secondary" onClick={(e) => editPosts(e, post)}>
                  Edit
              </Button>
              <Button variant="contained" color="error" onClick={(e) => deletePosts(e, post)}>
                  Delete
              </Button>

              </div>
              
            </li>
          ))}
        </ul>
      </Paper>
  )
}

export default PostsList