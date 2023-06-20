"use client"
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';

const MainC = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
  return (
    <></>
  )
}

export default MainC