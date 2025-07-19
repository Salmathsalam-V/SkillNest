import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from '@/endpoints/axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // to navigate after login

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form refresh

    const res = await login(username, password);

    if (res?.success) {
      console.log('Login successful');
      navigate('/register'); // or wherever you want to go
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
        <Button type="submit">Login</Button>
      </form>

        
    </>
  );
};

export default Login;
