import React from 'react'
import './Login.css'
import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { Container, Row, Col } from 'react-grid-system';
import { UserContext } from '../UserContext';

// design
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

// functions
import {login} from "../api/user";

const Login = () => {
  const history = useNavigate();
  const {setUser} = useContext(UserContext);

  //form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try{
      const res = await login({email, password});
      if(res.error) {
        toast.error(res.error);
        console.log(res.error);
      }
      else {
        toast.success(res.message);
        setUser(res.username)
        //redirect to home
        history('/', { replace: true });
      }
    }catch(err){
      toast.error("Cannot login at this time");
      console.log(err);
    }
  }

  return (
    <div  style={{background:'none'}}>
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <img src="https://freedesignfile.com/image/preview/16768/astronaut-drawing-black-and-white-clipart.png" width={150}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2>Astro Mart Login</h2>
        </Col>
      </Row>
    </Container>
      
      <div className="form-group">
        <FormControl 
          size="small"
          variant="outlined"
          className="form-control"
        >
          <InputLabel className='white'>Password</InputLabel>
          <OutlinedInput
            label="Password"
            type= {showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div className="text-center mt-4">
        <Button
          variant='contained'
          disabled={!email || !password}
          onClick={handleLogin}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Login