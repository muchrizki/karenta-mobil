import Ratings from "../Ratings";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import previousButton from '../../assets/icons/previous-button.png'

import './SectionLima.css'

export const CustomButton = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    return (
        <div className="button w-fit bg-cyan-0 absolute cursor-pointer top-18 right-10 xl:right-7 2xl:right-19 flex gap-2">
            <button className="cursor-pointer" onClick={() => previous()}>
                <img src={previousButton} alt="" />
            </button>
            <button className="cursor-pointer" onClick={() => next()}>
                <img src={previousButton} alt="" className="rotate-180" />
            </button>
        </div>
    )
}


export default function SectionLima ({avatars}) {
    const {anna, budi, laura, } = avatars

    const testimonial = [
        {
            img: anna,
            desc: '“Excellent service! The booking process was incredibly straightforward, and the car was in perfect condition.”', 
            name: 'Anna Hibert',
            who: 'Turis dari Inggris',
            rate: 5
        }, {
            img: laura,
            desc: '“The customer service is unbeatable. They helped me find the perfect car for my trip and were available to answer”', 
            name: 'Laura Herlambang',
            who: 'Ibu Rumah Tangga',
            rate: 5
        }, {
            img: budi,
            desc: '“Gak nyesel sewa mobil di Karenta saat perjalanan bisnis ke batam, proses mudah, gak neko-neko.”', 
            name: 'Budi Triyanto',
            who: 'CEO PT. CRT Kabelita',
            rate: 5
        }

    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1
        }
      };

    return (
        <div id="testimoni" className="section section-lima bg-[#F1F1F1] px-9 py-20 relative xl:px-10 2xl:px-18">

            <div className="header flex justify-between">
                <h3 className="text-2xl font-bold tracking-wider 2xl:text-4xl xl:translate-x-10">Testimoni</h3>
                {/* <CustomButton /> */}
            </div>

            <Carousel arrows={false} responsive={responsive} renderButtonGroupOutside={true} infinite={true} autoPlay={true} itemClass="carousel-item-padding-0-px" autoPlaySpeed={4000} customButtonGroup={<CustomButton />} className="mt-9 rounded-xl bg-transparent md:pl-0 lg:pl-0 xl:translate-x-8">
                {testimonial.map(item => (
                    <div key={item.name} className="card ml-0 md:mr-1 max-w-[500px] min-[912px]:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[550px] bg-white p-4 rounded-xl shadow-lg border-[0.7px] border-[#E9E9E9]" data-aos="fade-down" data-aos-duration="3000">

                        <Ratings ratings={item.rate} totalStars={5} />
                        <p className="mt-4 tracking-widest md:tracking-wide 2xl:max-w-[400px]">{item.desc}</p>
                        <div className="profile mt-4 flex justify-start items-center gap-4">
                            <img src={item.img} alt="" />
                            <div className="text">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p>{item.who}</p>
                            </div>
                        </div>

                    </div>    
                ))}
            </Carousel>
        
        </div>
    )
}