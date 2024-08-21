import DestinationCard from "../components/destination-cards/DestinationCard"
import ThemeButton from "../components/theme-button/ThemeButton"
import Faq from "../components/faq/Faq"

const ScubaDriving = () =>{
    return(
        <div className="sm:mt-32 mt-24 px-4">
            {/* tabs section start */}
            <section className="max-w-[500px] shadow-custom-shadow4 w-full m-auto grid grid-cols-3 mb-8 rounded-[20px]">
                <div className="text-center py-2 px-4 cursor-pointer">
                    <img src="/svg/ship.svg" alt="ship" width={32} className="m-auto" />
                    <p className="sm:text-sm text-xs text-primary mt-2">Ferry Booking</p>
                </div>
                <div className="bg-primary text-white text-center py-2 px-4 cursor-pointer">
                    <img src="/svg/scuba.svg" alt="scuba" width={32} className="m-auto" />
                    <p className="sm:text-sm text-xs mt-2">Scuba Diving</p>
                </div>
                <div className="text-center py-2 px-4 cursor-pointer">
                    <img src="/svg/trip-dark.svg" alt="trip" width={32} className="m-auto" />
                    <p className="sm:text-sm text-xs text-primary mt-2">Book Day Trip</p>
                </div>
            </section>
            {/* tabs section end */}
            {/* packages section start */}
            <section className="px-4 max-w-[1250px] m-auto sm:my-12 my-6">
                <h2 className="text-primary sm:text-4xl text-2xl text-center font-bold mb-8">Popular Packages</h2>
                <div className="sm:grid sm:grid-cols-3 flex overflow-x-auto sm:overflow-x-visible sm:gap-12 gap-6 pb-6">
                {destinationArray?.map((item,index)=>{
                    return(

                        <DestinationCard key={index} imageUrl={item?.imageUrl} content={item?.content} headline={item?.headline} title={item?.title} />
                    )
                })}
                </div>
            </section>
            {/* packages section end */}

            {/* basic equipments section start */}
            <section>
                <h2 className="sm:text-4xl text-2xl font-bold text-primary text-center mb-6 px-4">Basic Equipments</h2>
                <img src="/png/underWater.png" alt="scuba" className="w-full" />
            </section>
            {/* basic equipments section end */}

            {/* do's section start */}
                <section className="sm:my-16 my-8 max-w-[1250px] mx-auto">
                    <h2 className="text-center text-primary font-bold sm:text-4xl text-2xl">Do&apos;s in Scuba Diving</h2>
                    <div className="grid sm:grid-cols-3 gap-8 mt-10">
                        {dosArray?.map((item,index)=>{
                            return(
                                <div key={index} className="max-w-[300px] w-full sm:m-0 m-auto">
                                    <div className="bg-[#D8FFE0] w-fit m-auto p-6 rounded-full">
                                        <img src={item?.imageUrl} alt="buddy"/>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-lg my-4 text-primary">{item?.heading}</h3>
                                        <p className="text-sm text-secondary line-clamp-4">{item?.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            {/* do's section end */}

            {/* don'ts section start */}
            <section className="sm:my-12 my-6 max-w-[1250px] mx-auto">
                    <h2 className="text-center text-primary font-bold sm:text-4xl text-2xl">Don&apos;ts in Scuba Diving</h2>
                    <div className="grid sm:grid-cols-3 gap-8 mt-10">
                        {dontssArray?.map((item,index)=>{
                            return(
                                <div key={index} className="max-w-[300px] w-full sm:m-0 m-auto">
                                    <div className="w-fit m-auto p-6 rounded-full bg-[#FFC7C7]">
                                        <img src={item?.imageUrl} alt="buddy" className="m-auto" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-lg my-4 text-primary">{item?.heading}</h3>
                                        <p className="text-sm text-secondary line-clamp-4">{item?.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            {/* don'ts section end */}

            {/* why become start */}
                <section className="sm:my-16 my-8 max-w-[1250px] mx-auto">
                    <div className="grid items-center sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold sm:text-4xl text-2xl text-primary">Why Become a certified diver and travel the world exploring the largest mass on the planet. Us!</h3>
                            <p className="text-secondary text-sm my-8">Andaman and Nicobar Islands Tropical paradise in the Bay of Bengal. Pristine beaches, diverse marine life, indigenous cultures, and historic significance. Natures wonder in 30 islands.Andaman and Nicobar Islands Tropical paradise in the Bay of Bengal. Pristine beaches, diverse marine life, indigenous cultures</p>
                            <div className="sm:m-0 w-fit m-auto">
                            <ThemeButton text="Book Now" className="shadow-button-shadow" />

                            </div>
                        </div>
                        <div>
                            <img src="/png/under-water.png" alt="underWater" />
                        </div>
                    </div>
                </section>
            {/* why become end */}

            {/* hand singnal section start */}
                <section className="max-w-[1250px] m-auto w-full my-16">
                    <h2 className="text-primary text-4xl px-4 text-center font-bold mb-12">Hand Signals in Scuba Diving</h2>
                    <div className="grid grid-cols-3 gap-8">
                    {handSignal?.map((item,index)=>{
                        return(
                            <div key={index} className="max-w-[300px] mx-auto">
                                <div className="w-fit mx-auto p-4 bg-[#D8E7FF] rounded-full">
                                    <img src={item?.imageUrl} alt="hand" width={42} />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg text-primary my-4">{item?.heading}</h3>
                                    <p className="text-secondary text-sm line-clamp-4">{item?.content}</p>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </section>
            {/* hand singnal section end */}
            {/* faq section start */}
                <section className="my-16 max-w-[1250px] m-auto px-4">
                            <h3 className="text-primary text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h3>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <Faq />
                        </div>
                        <div className="bg-[#FAFBFF] p-6 shadow-custom-shadow3 rounded-xl">
                            <h3 className="text-primary font-bold text-xl">What is a Payment Gateway?</h3>
                            <div className="text-sm">
                            <p className="my-6">A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.</p>
                            <p>Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.</p>
                            </div>
                        </div>
                    </div>
                </section>
            {/* faq section end */}

        </div>
    )
}
export default ScubaDriving
const destinationArray = [
    {
        imageUrl:"/svg/destination01.svg",
        content:"30 Min Dive Dive with instructor Upto 10m dive Explore corals at Nemo reef",
        headline:"Shore Dive",
        title:"Dive at Nemo Beach"
    },
    {
        imageUrl:"/svg/destination02.svg",
        content:"30 Min Dive Dive with instructor Upto 10m dive Explore corals at Nemo reef",
        headline:"Shore Dive",
        title:"Dive at Nemo Beach"
    },
    {
        imageUrl:"/svg/destination03.svg",
        content:"30 Min Dive Dive with instructor Upto 10m dive Explore corals at Nemo reef",
        headline:"Shore Dive",
        title:"Dive at Nemo Beach"
    },
]
const dosArray = [
    {
        imageUrl:"/svg/buddy-green.svg",
        heading:"Dive with a buddy",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/buddy-green.svg",
        heading:"Dive with a buddy",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/buddy-green.svg",
        heading:"Dive with a buddy",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
]
const dontssArray = [
    {
        imageUrl:"/svg/buddy.svg",
        heading:"Dive with a buddy",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/buddy.svg",
        heading:"Dive with a buddy",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/buddy.svg",
        heading:"Dive with a buddy",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
]
const handSignal = [
    {
        imageUrl:"/svg/hand.svg",
        heading:"Stop",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/hand.svg",
        heading:"Stop",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/hand.svg",
        heading:"Stop",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/hand.svg",
        heading:"Stop",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/hand.svg",
        heading:"Stop",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
    {
        imageUrl:"/svg/hand.svg",
        heading:"Stop",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
    },
]