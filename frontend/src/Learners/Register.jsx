import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    user_type: "learner", // default selected
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register/", formData);
      alert("Registered successfully!");
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto mt-10">
      <Input name="username" placeholder="Username" onChange={handleChange} />
      <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <Input name="fullname" placeholder="Full Name" onChange={handleChange} />
      
      <select
        name="user_type"
        value={formData.user_type}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      >
        <option value="learner">Learner</option>
        <option value="creator">Creator</option>
      </select>

      <Button type="submit">Register</Button>
    </form>
  );
};
