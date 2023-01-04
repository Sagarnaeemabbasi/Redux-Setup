import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const logIn = () => {};
  return (
    <div>
      <Box>
        <Typography variant="h3" m={5}>
          Login here
        </Typography>
        <Box m={5}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            label="Enter Your Email"
            type="Email"
            size="normal"
            style={{ width: "500px", fontSize: "30px" }}
          />
        </Box>
        <Box m={5}>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            label="Enter Your Password"
            type="password"
            size="normal"
            style={{ width: "500px", fontSize: "30px" }}
          />
        </Box>
        <Box>
          <Button
            variant="filled"
            onClick={logIn}
            style={{ width: "500px", fontSize: "23px" }}
          >
            LogIn
          </Button>
        </Box>
      </Box>
    </div>
  );
}
