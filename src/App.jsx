
import './App.css'
import SectionEmpat from './components/SectionEmpat'
import armada from "./assets/icons/armada.png"
import harga from "./assets/icons/harga.png"
import layanan from "./assets/icons/layanan.png"
import proses from "./assets/icons/proses.png"
import SectionTujuh from './components/SectionTujuh'
import banner from './assets/images/banner.png'
import Footer from './components/Footer'
import logoKarenta from './assets/images/logo-karenta.png'

import facebook from './assets/icons/facebook.png'
import linkedin from './assets/icons/linkedin.png'
import twitter from './assets/icons/twitter.png'
import instagram from './assets/icons/instagram.png'
import SectionEnam from './components/SectionEnam'

import mail from "./assets/icons/fi_mail.png"
import phone from "./assets/icons/fi_phone.png"
import clock from "./assets/icons/fi_clock.png"
import location from './assets/icons/fi_location.png'

import batamMap from './assets/images/batam-map.png'

import orangeFacebook from './assets/icons/orange-facebook.png'
import orangeTwitter from './assets/icons/orange-twitter.png'
import orangeInstagram from './assets/icons/orange-instagram.png'
import SectionLima from './components/SectionLima'

import anna from './assets/avatars/anna.png'
import budi from './assets/avatars/budi.png'
import laura from './assets/avatars/laura.png'
import SectionTiga from './components/SectionTiga'
import SectionDua from './components/SectionDua'

import audi from "./assets/logo/audi.png"
import daihatsu from "./assets/logo/daihatsu.png"
import toyota from './assets/logo/toyota.png'
import volkswagen from "./assets/logo/volkswagen.png"
import honda from './assets/logo/honda.png'
import nissan from './assets/logo/nissan.png'
import byd from './assets/logo/byd.png'
import bmw from './assets/logo/bmw.png'

import SectionSatu from './components/SectionSatu'
import hero from "./assets/images/hero.png"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => setSidebar(!sidebar)

  const iconFooter = [facebook, linkedin, twitter, instagram] 
  const iconsEnam = {mail, phone, clock, location}
  const iconsOrange = {orangeFacebook, orangeInstagram, orangeTwitter}
  const avatars = {anna, budi, laura}
  const logos = {audi, daihatsu, toyota, volkswagen, honda, nissan, byd, bmw}

  


  const [currentSection, setCurrentSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    setCurrentSection(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let current = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        current = section.id;
      }
    });

    if (current !== currentSection) {
      setCurrentSection(current);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animation
      easing: 'ease-in-out', // Easing function
      once: true, // Whether the animation should happen only once
    });
  }, [])


  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Menambahkan event listener scroll

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <>
      <Navbar logoKarenta={logoKarenta} handleSidebar={handleSidebar} scrollToSection={scrollToSection} currentSection={currentSection}/>
      {sidebar && <Sidebar handleSidebar={handleSidebar} scrollToSection={scrollToSection} currentSection={currentSection}/>}

      <SectionSatu hero={hero} />
      <SectionDua logos={logos} />
      <SectionTiga />
      <SectionEmpat armada={armada} harga={harga} layanan={layanan} proses={proses}/>
      <SectionLima avatars={avatars} />
      <SectionEnam iconsEnam={iconsEnam} batamMap={batamMap} iconsOrange={iconsOrange} />
      <SectionTujuh banner={banner} />

      <Footer logoKarenta={logoKarenta} iconFooter={iconFooter} scrollToSection={scrollToSection} currentSection={currentSection}/>
    </>
  )
}

export default App
