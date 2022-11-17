import { TextField, Button } from "@mui/material";

const CreateUser = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        variant="filled"
        color="primary"
        multiline
        rows={5}
        margin="normal"
        name="name"
      />
       <TextField
        fullWidth
        variant="filled"
        color="primary"
        multiline
        rows={5}
        margin="normal"
        name="email"
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateUser;