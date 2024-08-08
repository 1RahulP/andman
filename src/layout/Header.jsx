import React from "react"
const Header = () =>{
    const [showMenu,setShowMenu] = React.useState()
    return(
        <div className="flex justify-between sm:px-16 px-4 py-4 shadow-sm relative">
            <div>
                <span className="text-xl font-semibold">Andaman.In</span>
            </div>
            <div>
                <ul className="gap-8 text-[#8890B1] sm:flex hidden">
                    <li className="text-[#FF5C00] cursor-pointer font-semibold">About</li>
                    <li className="cursor-pointer">Shop</li>
                    <li className="cursor-pointer">The Andamans Wiki</li>
                </ul>
                <div className="sm:hidden block" >
                    <img src="/svg/menu.svg" alt="menu" className="w-[32px]" onClick={()=>setShowMenu(!showMenu)} />
                    {showMenu &&
                    <div className="backdrop-blur-xl z-[99] absolute right-0 w-full h-screen">
                        <div className="w-[200px] h-screen bg-white border absolute right-0 z-[9] p-2">
                            <div className="mb-2 cursor-pointer">About</div>
                            <div className="mb-2 cursor-pointer">Shop</div>
                            <div className="cursor-pointer">The Andamans Wiki</div>
                        </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Header
