import "./SectionTujuh.css"

export default function SectionTujuh ({banner}) {

    return (
        <div className="section-tujuh relative h-[500px] text-[#1E1E1E] flex flex-col justify-center xl:h-[400px] 2xl:h-[500px] xl:py-24">
            <img src={banner} alt="banner" className="absolute inset-0 w-[full] h-full object-cover object-bottom" />

            <div className="relative z-10 text-white px-8 py-16 max-w-[400px] 2xl:max-w-[450px] lg:ml-1 xl:ml-13 2xl:ml-9 min-[1919px]:translate-x-10">
                <h4 className="text-2xl font-bold tracking-wider 2xl:text-4xl">Siap Memulai <br /> Perjalanan Anda?</h4>
                <p className="tracking-wide mt-6 2xl:text-lg">Jelajahi berbagai pilihan penyewaan mobil kami dan temukan teman yang tepat untuk petualangan Anda berikutnya. Dengan berbagai macam kendaraan dan layanan pelanggan yang luar biasa.</p>
                <button className="mt-6 px-6 py-2 text-[#0D3B8C] bg-[#FDC400] font-bold text-lg rounded-md tracking-widest">Pesan Sekarang</button>
            </div>
            
        </div>
    )
}