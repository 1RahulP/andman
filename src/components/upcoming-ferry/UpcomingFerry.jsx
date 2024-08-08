const UpcomingFerry = () =>{
    return(
        <div>
            {/* upper tabs */}
            <div className="max-w-[950px] m-auto grid grid-cols-4 shadow-button-shadow overflow-hidden rounded-tl-[25px] rounded-tr-[25px]">
                {upcomingFerryTabs?.map((item,index)=>{
                    return(
                        <div key={index} className={`sm:p-6 p-[4px] sm:text-[15px] text-[12px] border-r ${index===0 ? "bg-white text-[#0A1951]" : "text-white bg-[#8890B1]"}`}>{item?.tab}</div>
                    )
                })}
            </div>
            {/* lower section */}
            <div className="max-w-[1150px] m-auto shadow-button-shadow rounded-[30px] sm:p-8 p-2">
                {nouticaSchedule?.map((item,index)=>{
                    return(

                        <div key={index} className="grid sm:grid-cols-[90%_10%] grid-cols-[80%_20%] gap-4 w-full items-center border-b-2 border-[#dde0ee] mb-4">
                            <div className="flex justify-between items-center border-r-2 border-[#dde0ee] pr-4 mb-4">
                                <div className="text-center sm:pr-6 sm:text-[15px] text-[12px]">
                                    <p className="text-[#0A1951]">{item?.departureTime}</p>
                                    <span className="text-[#8890B1]">Departure</span>
                                </div>
                                <div className="sm:block hidden">
                                <img src="/svg/dashed.svg" alt="line" className="w-full" />
                                </div>
                                <div className="text-center sm:px-6 px-2">
                                    <img src={item?.imageUrl} alt="noutica" className="sm:w-[60px] w-[26px] m-auto" />
                                    <p className="text-[#0A1951] sm:text-[15px] text-[12px]">Nautika Lite</p>
                                </div>
                                <div className="sm:block hidden">
                                <img src="/svg/dashed.svg" alt="line" className="w-full" />
                                </div>
                                <div className="text-center sm:pl-6 sm:text-[15px] text-[12px]">
                                    <p className="text-[#0A1951]">{item?.arrivalTime}</p>
                                <span className="text-[#8890B1]">Arrival</span>
                                </div>
                            </div>
                            <div className="mb-4 sm:text-[15px] text-[12px]">
                                <p className="text-[#0A1951]">{item?.bookingDate}</p>
                                <span className="text-[#8890B1]">Booking Date</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default UpcomingFerry
const upcomingFerryTabs = [
    {
        tab:"Port Blair to Havelock"
    },
    {
        tab:"Havelock to Neil Island"
    },
    {
        tab:"Neil Island to Port Blair"
    },
    {
        tab:"Havelock to Port Blair"
    },
]
const nouticaSchedule = [
    {
        departureTime:"08:00",
        imageUrl:"/svg/noutica.svg",
        arrivalTime:"12:00",
        bookingDate:"Mar 23, 2024"
    },
    {
        departureTime:"08:00",
        imageUrl:"/svg/noutica.svg",
        arrivalTime:"12:00",
        bookingDate:"Mar 23, 2024"
    },
    {
        departureTime:"08:00",
        imageUrl:"/svg/noutica.svg",
        arrivalTime:"12:00",
        bookingDate:"Mar 23, 2024"
    },
    {
        departureTime:"08:00",
        imageUrl:"/svg/noutica.svg",
        arrivalTime:"12:00",
        bookingDate:"Mar 23, 2024"
    },

]