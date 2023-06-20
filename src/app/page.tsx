"use client"
import styles from './page.module.css'
import HomeCustom from '../../components/Home/HomeCustom'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Team from '../../components/Team/Team'
import Clients from '../../components/Clients/Clients'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll("header nav a");
    
    window.onscroll = () => {
      sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach( links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
          })
        }
      })
    }
    return () => {};
  }, []);

  return (
    <main className={styles.main}>
      <HomeCustom />
      <About></About>
      <Services></Services>
      <Team></Team>
      <Clients></Clients>
    </main>
  )
}
