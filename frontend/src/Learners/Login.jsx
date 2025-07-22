import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from '@/endpoints/axios';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/useAuth';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/userSlice';
import { useSelector } from 'react-redux';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form refresh
    const res = await login(username, password);

    if (res?.success) {
      console.log('Login successful');
      dispatch(setUser(res.data.user));
      if (res.data.user.user_type === 'learner'){
        navigate('/learnerhome');
      }
      else if (res.data.user.user_type === 'creator'){
        navigate('/creatorhome');
      }
      else {
          navigate('/adminhome'); // go to menu
      }
    } else {
      console.error('Login failed');
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <h1>Login</h1>
      
      <form className="space-y-4 w-full max-w-md mx-auto mt-10" onSubmit={handleLogin}>
        <Input
          name="username"
          type="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
        />
        <Input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <Button type="submit" variant="custom" size="custom">Login</Button>
      </form>

        
    </>
  );
};

export default Login;
