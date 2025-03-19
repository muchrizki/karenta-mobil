


import "./SectionSatu.css"
export default function SectionSatu ({hero}) {

    return (
        <div id="home" className="section section-satu pt-30 px-8 min-[1920px]:mr-20 py-10 flex flex-col lg:flex-row-reverse lg:justify-around min-[1920px]:justify-between lg:items-center lg:px-12 gap-8 bg-cyan-0">
            <div className="hero" >
                <img src={hero} alt="" className="drop-shadow-2xl min-[1920px]:-translate-x-10 lg:scale-100 min-[1920px]:scale-145" data-aos="fade-up" data-aos-duration="3000"/>
            </div>

            <div className="konten lg:max-w-[400px] 2xl:max-w-[700px] min-[1920px]:mr-80  xl:translate-x-11 2xl:translate-x-10 min-[1920px]:-translate-x-10" data-aos="fade-right" data-aos-duration="3000">
                <h3 className="text-2xl 2xl:text-4xl font-bold tracking-wide">Sewa Mobil <br /> Terpercaya di <span className="text-[#FDC400]"> Karimun <br /> dan Batam</span></h3>
                <p className="mt-4 text-sm 2xl:text-lg min-[1920px]:text-1xl text-[#1E1E1E] ">Sejak berdiri Maret 2022 di Karimun, Karenta selalu berikan pilihan terbaik armada rental. Untuk meningkatkan pelayanan, Karenta hadir di Kota Batam pada Maret 2025 dengan pelopor rental mobil listrik. Selain mendukung program pemerintah untuk transportasi yang lebih bersih, efisien, dan berkelanjutan, Karenta Batam ingin berikan sensari berkendara tanpa harus membeli. Dengan supir professional, Karenta Batam siap berikan perjalanan nyaman dan lebih berkelas.</p>

                <div className="button mt-6 flex gap-4">
                    <button className="px-4 py-2 bg-[#0D3B8C] text-white font-medium tracking-wide rounded-lg text-sm 2xl:text-lg cursor-pointer">Pesan Sekarang</button>
                    <button className="px-0 py-2 font-medium tracking-wide rounded-lg text-sm 2xl:text-lg cursor-pointer">Lihat Layanan Kami</button>
                </div>
            </div>
        </div>
    )
}