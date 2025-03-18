


import "./SectionEnam.css"
export default function SectionEnam ({iconsEnam, batamMap, iconsOrange}) {
   
    const {mail, phone, clock, location} = iconsEnam
    const batam = [
        {img: mail, text: "karenta@gmail.com"}, 
        {img: clock, text: "Setiap hari : 08.00-21.00"}, 
        {img: phone, text: "+62 821 1222 0001"},
        {img: location, text: "Jl. Raya Cihaluan No.112 Blok A No.1, Batam Indonesia 41222"}
    ]

    const karimun = [
        {img: mail, text: "karenta@gmail.com"}, 
        {img: clock, text: "Setiap hari : 08.00-21.00"}, 
        {img: phone, text: "+62 821 1222 0001"},
        {img: location, text: "Jl. Raya Cihaluan No.112 Blok A No.1, Batam Indonesia 41222"}
    ]

    const {orangeFacebook, orangeInstagram, orangeTwitter} = iconsOrange

    return (
        <div className="section-enam mb-6 px-8 py-8 bg-cyan-0 flex flex-col md:flex-row md:items-end md:gap-10 gap-8 xl:pl-19 min-[1920px]:ml-9">

            <div className="first ml-1 flex flex-col gap-4 bg-purple-0 max-w-[330px] lg:max-w-[500px] 2xl:max-w-[700px]">
                <h3 className="text-2xl font-bold tracking-wide 2xl:text-4xl">Hubungi Kami</h3>
                <h4 className="text-xl mt-4 font-semibold tracking-wide 2xl:text-3xl">Batam</h4>

                <div className="mail-phone-locate-hour mt-2 grid grid-cols-2 gap-y-4 bg-purple-0 w-[100%]">
                    {batam.map(item => (
                        <div key={item} className="mail flex bg-0 items-center gap-2 w-[170px] lg:w-[200px] 2xl:w-[270px] bg-cyan-0">
                            <img src={item.img} alt="" className="w-[20px]" />
                            <p className="text-[#808080] text-xs cursor-pointer lg:text-base 2xl:text-lg">{item.text}</p>
                        </div>
                    ))}
                    
                </div>

                <img src={batamMap} alt="" className="-translate-x-3 lg:-translate-x-4 w-400px 2xl:w-[650px]" />

                <div className="icon flex gap-2">
                    <img src={orangeFacebook} alt="" className="cursor-pointer" />
                    <img src={orangeInstagram} alt="" className="cursor-pointer" />
                    <img src={orangeTwitter} alt="" className="cursor-pointer" />
                </div>
            </div>

            <div className="second ml-1 flex flex-col gap-4 bg-purple-0 max-w-[330px] lg:max-w-[500px] 2xl:max-w-[700px]">
                <h4 className="text-xl mt-4 font-semibold tracking-wide 2xl:text-3xl">Karimun</h4>

                <div className="mail-phone-locate-hour mt-2 grid grid-cols-2 gap-y-4 bg-purple-0 w-[100%]">
                    {karimun.map(item => (
                        <div key={item} className="mail flex bg-0 items-center gap-2 w-[170px] lg:w-[200px] 2xl:w-[270px] ">
                            <img src={item.img} alt="" className="w-[20px]" />
                            <p className="text-[#808080] text-xs cursor-pointer lg:text-base 2xl:text-lg">{item.text}</p>
                        </div>
                    ))}
                    
                </div>

                <img src={batamMap} alt="" className="-translate-x-3 lg:-translate-x-4 w-400px 2xl:w-[650px]" />

                <div className="icon flex gap-2">
                    <img src={orangeFacebook} alt="" className="cursor-pointer" />
                    <img src={orangeInstagram} alt="" className="cursor-pointer" />
                    <img src={orangeTwitter} alt="" className="cursor-pointer" />
                </div>
            </div>
            
        </div>
    )
}