const PopularHotels = () =>{
    return(
        <div>
            <h2 className="sm:text-4xl text-2xl text-primary text-center px-4 font-bold">Popular Hotels</h2>
            <div className="grid sm:grid-cols-3 gap-8 mt-8">
                {hotelsArray?.map((item,index)=>{
                    return(
                        <div key={index} className="shadow-custom-shadow2 rounded-2xl overflow-hidden">
                            <div>
                                <img src={item?.imageUrl} alt="hotel" className="h-[250px] w-full object-cover" />
                            </div>
                            <div className="p-4">
                                <img src="/svg/stars.svg" alt="stars" />
                            </div>
                            <div className="text-primary font-semibold flex justify-between px-4 pb-4">
                                <span>{item?.name}</span>
                                <span>INR. {item?.price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default PopularHotels
const hotelsArray = [
    {
        imageUrl:"/jpg/hotel01.jpg",
        name:"Luxury Hotel",
        price:2750
    },
    {
        imageUrl:"/jpg/hotel02.jpg",
        name:"Luxury Hotel",
        price:2250
    },
    {
        imageUrl:"/jpg/hotel03.jpg",
        name:"Luxury Hotel",
        price:3600
    },
]