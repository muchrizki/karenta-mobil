
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar ({logoKarenta, handleSidebar, scrollToSection, currentSection}) {

    const navbarMenu = ["Home", "Mobil Kami", "Layanan", "Testimoni", "Kontak"]


    const [visible, setVisible] = useState(true)
    const [prevScrollY, setPrevScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > prevScrollY) setVisible(false)
            else setVisible(true)
    
            setPrevScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollY])





   

    return (
        <div className={`navbar fixed ${visible ? 'flex' : 'hidden'} mx-auto z-1000 w-full bg-white border-b-[0.2px] border-[#0D3B8C] shadow-lg px-8 md:px-6 py-2 justify-between md:justify-around lg:gap-18 min-[1920px]:justify-around items-center`}>
            <img src={logoKarenta} alt="" className="w-[136px] h-[51px] 2xl:w-[200px] 2xl:h-[70px] 2xl:-translate-x-14 min-[1920px]:-translate-x-18" />

            <ul className="hidden md:flex gap-4 lg:gap-4">
                {navbarMenu.map(menu => <li className={`cursor-pointer ${currentSection == menu.toLowerCase() ? 'text-[#FDC400]' : 'text-[#111928]'} hover:text-[#FDC400] 2xl:text-2xl`} key={menu} onClick={() => scrollToSection(menu.toLowerCase())}>{menu}</li>)}
            </ul>

            <div className="pesan hidden md:block px-4 py-2 bg-[#0D3B8C] text-[#FDC400] text-sm font-medium tracking-wide rounded-md cursor-pointer 2xl:text-2xl">Pesan Sekarang</div>

            <RxHamburgerMenu  className="w-[42px] md:hidden scale-200 active:scale-190 text-[#0D3B8C] cursor-pointer" onClick={() => handleSidebar()}/>
        </div>
    )
}