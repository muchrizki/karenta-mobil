import "./SectionEmpat.css"

export default function SectionEmpat ({armada, harga, layanan, proses}) {

    const listData = [
        {
            id: 1,
            logo: armada,
            title: 'Armada Lengkap',
            desc: 'Kami menawarkan berbagai pilihan mobil yang sesuai dengan kebutuhan Anda dan setiap kendaraan kami dirawat dengan baik'

        }, {
            id: 2,
            logo: harga,
            title: 'Harga Kompetitif',
            desc: 'Kami berkomitmen untuk memberikan harga terbaik di pasar tanpa mengorbankan kualitas layanan'

        }, {
            id: 3,
            logo: layanan,
            title: 'Layanan 24/7',
            desc: 'Tim layanan pelanggan kami siap membantu Anda kapan saja, baik itu untuk pertanyaan, pemesanan, atau dukungan darurat'

        }, {
            id: 4,
            logo: proses,
            title: 'Proses Mudah',
            desc: 'Dengan sistem pemesanan yang sederhana dan intuitif, Anda dapat menyewa mobil dalam hitungan menit.'

        }
    ]

    return (
        <div id='layanan' className="section section-empat bg-cyan-0 w-[100%] px-8 py-14 text-[#050B20]">
            <h3 className="font-bold tracking-wider text-2xl bg-white xl:pl-12 2xl:pl-8 2xl:text-4xl min-[1920px]:translate-x-12">Mengapa Memilih <br /> Karenta</h3>

            <div className="section-empat-list  mt-10 flex flex-col md:flex-row md:flex-wrap xl:justify-around 2xl:justify-around gap-8 lg:gap-6 xl:gap-0 2xl:gap-4 w-[100%] p-0 xl:px-7 bg-white">

                {listData.map(item => (
                    <div key={item.id} className="item bg-cyan-0 p-0 max-w-[400px] md:max-w-[320px] lg:max-w-[220px] xl:max-w-[250px] 2xl:max-w-[340px]" data-aos="fade-right" data-aos-duration="3000">
                        <img src={item.logo} alt="" />
                        <h4 className="font-medium text-lg tracking-wide ml-1 mt-2 2xl:text-2xl">{item.title}</h4>
                        <p className="font-base text-sm tracking-wide ml-1 mt-2 2xl:text-xl">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}