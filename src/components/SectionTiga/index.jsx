

import brio from "../../assets/images/cars/brio.png"
import raizeGR from "../../assets/images/cars/raize-gr.png"
import avanza from "../../assets/images/cars/avanza.png"
import yarisCrossHybrid from "../../assets/images/cars/yaris-cross-hybrid.png"
import bydM6 from "../../assets/images/cars/byd-m6.png"
import atto3 from "../../assets/images/cars/atto-3.png"


import detailIcon from '../../assets/icons/detail-icon.png'
import save from "../../assets/icons/save.png"

export default function SectionTiga () {

    const products = [
        {
            img: brio,
            title: "Brio",
            spek: ["Bensin", "Manual"],
            price: "Rp. 150.000/Hari",
            greatPrice: false,
        }, {
            img: raizeGR,
            title: "Raize GR",
            spek: ["Bensin", "Manual"],
            price: "Rp. 250.000/Hari",
            greatPrice: true,
        }, {
            img: avanza,
            title: "Avanza",
            spek: ["Bensin", "Automatic"],
            price: "Rp. 200.000/Hari",
            greatPrice: false,
        }, {
            img: yarisCrossHybrid,
            title: "Yaris Cross Hybrid",
            spek: ["Bensin", "Automatic"],
            price: "Rp. 300.000/Hari",
            greatPrice: true,
        }, {
            img: bydM6,
            title: "BYD M6",
            spek: ["Electric", "Automatic"],
            price: "Rp. 1.250.000/Hari",
            greatPrice: false,
        }, {
            img: atto3,
            title: "Atto 3",
            spek: ["Electric", "Automatic"],
            price: "Rp. 1.500.000",
            greatPrice: false,
        }
    ]

    return (
        <div id="mobil kami" className="section section-tiga bg-[#FAFAFA] px-8 py-12">
            <h3 className="text-[#07090D] font-bold text-2xl tracking-wider xl:translate-x-14 2xl:translate-x-10 2xl:text-4xl">Pilihan Mobil Kami</h3>
            
            <div className="card-container mt-10 md:mt-12 bg-blue-0 p-0 xl:px-14 2xl:px-10 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

                {products.map(product => (
                    <div key={product.title} className="card bg-white shadow-lg rounded-2xl overflow-hidden relative w-fit" data-aos="fade-up" data-aos-duration="3000">
                        <img src={product.img} alt="" />

                        <div className={`save-or-great-price-label flex ${product.greatPrice ? 'justify-between' : 'justify-end' }  items-center bg-cyan-0 absolute top-0 w-full px-4 py-4`}>
                            {product.greatPrice && <p className="great-price px-4 text-sm shadow-sm py-1 bg-white w-fit rounded-full font-semibold tracking-wide cursor-pointer flex"> Great Price</p> }
                            
                            <div className="w-8 h-8 rounded-full shadow-sm bg-white flex items-center justify-center cursor-pointer">
                                <img src={save} alt="" className="w-3" />
                            </div>
                        </div>

                        <div className="konten px-4 py-4">
                            <h5 className="text-[#050B20] font-medium text-lg">{product.title}</h5>
                            <div className="spek flex gap-3 items-center text-lg">
                                {product.spek.map((item, index) => (
                                    <div key={item} className="flex gap-4">
                                        <p className="tracking-wide">{item}</p>
                                        {index < product.spek.length - 1 && <div className="h-2 w-2 rounded-full bg-[#ABAAAA] translate-y-[12px]"></div>}
                                    </div>
                                ))}
                                
        
                            </div>
                            <h5 className="price mt-3 mb-3 font-bold text-2xl tracking-wide">{product.price}</h5>
                            <button className="flex gap-2 items-center cursor-pointer">
                                <p className="text-[#F97316] font-medium text-lg tracking-wide">Lihat Detail</p>
                                <img src={detailIcon} alt=""  className="translate-y-1"/>
                            </button>
                        </div>
                    </div>
                ))}
                

            </div>
        </div>
    )
}