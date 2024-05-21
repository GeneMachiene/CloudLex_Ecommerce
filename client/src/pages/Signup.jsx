import React from 'react'
import './Login.css'

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

// design
import {
  TextField,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

// API Functions
import { register } from '../api/user';

const Signup = () => {
  const history = useNavigate();

  //form states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // password validation
  let hasSixChar = password.length >= 6;
  let hasLowerChar = /(.*[a-z].*)/.test(password);
  let hasUpperChar = /(.*[A-Z].*)/.test(password);
  let hasNumberChar = /(.*[0-9].*)/.test(password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const res = await register({username, email, password});
      if (res.error) toast.error(res.error);
      else{
        toast.success(res.message);
        //redirect to loging
        //Deprecated history.replace('/login');
        history('/login', { replace: true });
      }
    }catch (err){
      toast.error(err);
    }
  }

  return (
    <div className='login_box'>
      <div className="text-center mb-5 alert-primary alert">
        <label className='h2'>
          Signup
        </label>
      </div>

      <div className="form-group mb-3">
        <TextField 
          size="small"
          variant="outlined"
          className="form-control"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <TextField 
          size="small"
          variant="outlined"
          className="form-control"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <FormControl 
          size="small"
          variant="outlined"
          className="form-control"
        >
          <InputLabel>Password</InputLabel>
          <OutlinedInput 
            label="Password"
            type= {showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment>
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {password &&
          <div className="ms-1" style={{columns:2}}>
            <div>
              {hasSixChar ? 
                <span className='text-success'>✅ at least 6 characters</span> : 
                <span className='text-danger'>❌ at least 6 characters</span>
              }
            </div>
            <div>
              {hasLowerChar ? 
                <span className='text-success'>✅ one lowercase letter</span> : 
                <span className='text-danger'>❌ one lowercase letter</span>
              }
            </div>
            <div>
              {hasUpperChar ? 
                <span className='text-success'>✅ one uppercase letter</span> : 
                <span className='text-danger'>❌ one uppercase letter</span>
              }
            </div>
            <div>
              {hasNumberChar ? 
                <span className='text-success'>✅ one number</span> : 
                <span className='text-danger'>❌ one number</span>
              }
            </div>
            <div>
              {hasSpecialChar ? 
                <span className='text-success'>✅ one special symbol</span> : 
                <span className='text-danger'>❌ one special symbol</span>
              }
            </div>
          </div>
        }
      </div>

      <div className="form-group mt-3">
        <TextField 
          size="small"
          type='password'
          variant="outlined"
          className="form-control"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {password && confirmPassword &&
        <FormHelperText className='mt-1 ms-1'>
          {password === confirmPassword ?
            <span className='text-success '>Password matches</span> :
            <span className='text-danger '>Password Does not match</span>
          }
        </FormHelperText>
      }


      <div className="text-center mt-4">
        <Button
          variant='contained'
          disabled={
            !username || 
            !email || 
            !password || 
            !confirmPassword ||
            confirmPassword !== password||
            !hasSixChar ||
            !hasLowerChar ||
            !hasUpperChar ||
            !hasNumberChar ||
            !hasSpecialChar
          }
          onClick={handleRegister}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Signup