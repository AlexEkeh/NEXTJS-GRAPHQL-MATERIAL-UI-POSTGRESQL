import { TextField, Button } from "@mui/material";
import { useState } from 'react'

const CreateUser = ({ onSubmit }) => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        variant="filled"
        color="primary"
        multiline
        rows={5}
        margin="normal"
        value={name}
      />
       <TextField
        fullWidth
        variant="filled"
        color="primary"
        multiline
        rows={5}
        margin="normal"
        value={email}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateUser;
