import React, { useEffect, useState } from 'react'
import {userEffect } from 'react'
import {get_post, logout} from "../endpoints/axios"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const [post, setPost] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchPost= async ()=>{
            const posts= await get_post()
            setPost(posts)
        }
        fetchPost();
    },[])

    const handleLogout = async ()=>{
        const success = await logout();
        if (success){
            navigate('/login')
        }
    }
  return (
    <>
        {post.map((pos)=>{
            return <p>{pos.caption}</p>
        })}

        <Button variant="custom" onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default Menu