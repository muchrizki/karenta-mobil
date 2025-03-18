

import "./Footer.css"
export default function Footer ({logoKarenta, iconFooter}) {

    const menuCompany = ["Home", "Mobil Kami", "Layanan", "Testimoni", "Kontak"]
    const armadaKami = ["Toyota", "Honda", "Daihatsu", "Wuling", "Nissan"]

    return (
        <div className="footer bg-cyan-0 px-8 py-16 flex flex-col md:grid md:grid-cols-2 md:items-start gap-6 md:gap-x-16 lg:flex lg:flex-row lg:items-start lg:justify-around lg:gap-6">
            
            <div className="satu md:max-w-[360px] lg:max-w-[360px] 2xl:max-w-[400px]">
                <img src={logoKarenta} alt="" />
                <p className="mt-4 text-left tracking-wide text-[#1E1E1E] 2xl:text-lg">Cepat, mudah, dan dengan harga terbaik. Apakah Anda merencanakan liburan akhir pekan atau memiliki keperluan penting, armada kami yang beragam dan layanan yang luar biasa akan memastikan perjalanan Anda berlangsung dengan lancar</p>
            </div>

            <div className="dua md:translate-y-7 lg:translate-y-0">
                <h4 className="text-lg font-semibold tracking-widest 2xl:text-2xl">Company</h4>
                <ul className="mt-3 grid grid-cols-2 gap-2 lg:gap-3 md:flex md:flex-col">
                    {
                        menuCompany.map(menu => (
                            <li key={menu} className="tracking-widest cursor-pointer 2xl:text-xl">{menu}</li>
                        ))
                    }
                    
                </ul>
            </div>

            <div className="tiga">
                <h4 className="text-lg font-semibold tracking-widest 2xl:text-2xl">Armada Kami</h4>
                <ul className="mt-3 grid grid-cols-2 gap-2 lg:gap-3 md:flex md:flex-col">
                    {
                        armadaKami.map(menu => (
                            <li key={menu} className="tracking-widest cursor-pointer 2xl:text-xl">{menu}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="empat lg:translate-y-16">
                <h4 className="text-lg font-semibold tracking-widest 2xl:text-2xl">Connect With Us</h4>
                
                <div className="socmed flex mt-3 bg-cyan-0">
                    { iconFooter.map(icon => (
                        <img key={icon} src={icon} alt=""className="cursor-pointer w-[52px] 2xl:w-[80px]"/>
                    ))}
                </div>
            </div>

        </div>
    )
}