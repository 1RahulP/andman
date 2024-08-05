const BookingFerry = () =>{
    return(
        <div className="mt-16 mb-8">
            <div className="flex justify-between items-center">
                <div>
                <img src="/svg/ferry01.svg" alt="ferry" />
                </div>
                <div>
                <img src="/svg/ferry02.svg" alt="ferry" />
                </div>
                <div>
                <img src="/svg/ferry03.svg" alt="ferry" />
                </div>
                <div>
                <img src="/svg/ferry04.svg" alt="ferry" />
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-12">
                <span className="text-4xl text-[#8890B1] cursor-pointer">&larr;</span>
                <span className="text-4xl text-[#8890B1] cursor-pointer">&rarr;</span>
            </div>
            <div>
                <p className="text-center mt-4"><span className="text-[#8890B1] font-semibold">Step 1.</span> Search for ferry </p>
                <img src="/png/sliderdot.png" alt="dotts" className="m-auto w-[60px] h-auto mt-6" />
            </div>
        </div>
    )
}
export default BookingFerry