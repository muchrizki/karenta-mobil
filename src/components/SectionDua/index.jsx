

export default function SectionDua ({logos}) {
    const {audi, daihatsu, toyota, volkswagen, honda, nissan, byd, bmw} = logos

    const brands = [
        {img: audi, text: 'Audi'},
        {img: daihatsu, text: 'Daihatsu'},
        {img: toyota, text: 'Toyota'},
        {img: volkswagen, text: 'Volkswagen'},
        {img: honda, text: 'Honda'},
        {img: nissan, text: 'Nissan'},
        {img: byd, text: 'BYD'},
        {img: bmw, text: 'BMW'}
    ]
    return (
        <div className="section-dua bg-[#FFFFFF] px-8 py-12 lg:pl-10">
            <h3 className="text-2xl font-bold tracking-wide xl:translate-x-11 2xl:text-4xl">Armada Kami dari yang Terbaik</h3>
            
            <div className="logo-container mt-6 lg:mt-10 2xl:mt-14 bg-cyan-0 px-1 flex flex-wrap gap-6 md:gap-4 justify-start lg:justify-around items-baseline" >
                {brands.map(brand => (
                    <div key={brand.text} className="logo bg-none w-fit px-2 flex flex-col items-center">
                        <img src={brand.img} alt="" className="w-[48px] lg:w-[64px]" />
                        <p className="font-medium">{brand.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}