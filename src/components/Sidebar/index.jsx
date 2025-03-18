import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar ({handleSidebar}) {
    const navbarMenu = ["Home", "Mobil Kami", "Layanan", "Testimoni", "Kontak"]

    return (
        <div className="sidebar fixed z-1001 bg-[#0D3B8C] w-[70%] h-[100vh] top-0 right-0 flex flex-col items-center justify-center">
            
            <AiOutlineClose className="text-white scale-200 absolute top-10 right-10 active:scale-190" onClick={() => handleSidebar()}/>
            
            <ul className="menu flex flex-col gap-4">
                {navbarMenu.map(menu => <li className="text-[#FAFAFA] cursor-pointer hover:text-[#FDC400] tracking-wider font-medium text-base" key={menu}>{menu}</li>)}

                <div className="pesan mt-2 px-4 py-2 rounded-lg bg-[#FAFAFA]  text-base cursor-pointer font-medium tracking-wider text-[#0D3B8C]">Pesan Sekarang</div>
            </ul>

            
        </div>
    )
}