import ThemeButton from "../theme-button/ThemeButton"

const WhyChooseCards = () =>{
    return(
      <>
        <div className="grid grid-cols-3 gap-8">  
            {whyChoose?.map((item,index)=>{
                return(
                    <div key={index} className=" max-w-[450px] w-full p-12 shadow-custom-shadow2 cursor-pointer rounded-2xl">
                    <img src={item?.imageUrl} alt="icon" className="w-[80px] mb-6 m-auto"/>
                    <p className={`max-w-[280px] m-auto text-center ${index===0 ? "text-[#0A1951]" : "text-[#8890B1]"}`}>{item?.content}</p>
                </div>
                )
            })}
        </div>
        <div className="grid justify-center mt-12">
        <ThemeButton text="Search Ferry Now"  />
        </div>
        </>
    )
}
export default WhyChooseCards
const whyChoose = [
    {
      imageUrl:"/svg/diamond.svg",
      content:"Premier Choice for Ferry Reservations"
    },
    {
      imageUrl:"/svg/easy.svg",
      content:"Ultimate Ease in Ferry Booking"
    },
    {
      imageUrl:"/svg/refund.svg",
      content:"Easy changes & fast refunds"
    },
    {
      imageUrl:"/svg/support.svg",
      content:"Responsive Email and Phone Assistance"
    },
    {
      imageUrl:"/svg/visa.svg",
      content:"International & domestic payment accepted"
    },
    {
      imageUrl:"/svg/locker.svg",
      content:"Guaranteed Security for Your Funds"
    },
  ]