import React from 'react'
import { logout} from "../endpoints/axios"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import Layout from '@/components/Layouts/Layout'

export const Home = () => {
  const navigate=useNavigate();
  const handleLogout = async ()=>{
          const success = await logout();
          if (success){
              navigate('/login')
          }
    }
  return (
   <>
          <Layout>
          <h2>Learner Home</h2>
           <Button variant="custom" onClick={handleLogout}>Logout</Button>
           <Button variant="sucsess" onClick={()=>navigate('/')}>Menu</Button>
          </Layout>
   </>
  );
}

