import React from 'react'
import { logout} from "../endpoints/axios"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const CreatorHome = () => {
  const navigate=useNavigate();
  const handleLogout = async ()=>{
          const success = await logout();
          if (success){
              navigate('/login')
          }
    }
  return (
   <>
          <h2>Creator Home</h2>
           <Button variant="custom" onClick={handleLogout}>Logout</Button>
           <Button variant="sucsess" onClick={()=>navigate('/')}>Menu</Button>
   
   </>
  );
}

