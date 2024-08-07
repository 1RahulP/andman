const Header = () =>{
    return(
        <div className="flex justify-between sm:px-16 px-4 py-4 shadow-sm">
            <div>
                <span className="text-xl font-semibold">Andaman.In</span>
            </div>
            <div>
                <ul className="gap-8 text-[#8890B1] sm:flex hidden">
                    <li className="text-[#FF5C00] cursor-pointer font-semibold">About</li>
                    <li className="cursor-pointer">Shop</li>
                    <li className="cursor-pointer">The Andamans Wiki</li>
                </ul>
                <div>
                    <img src="/svg/menu.svg" alt="menu" className="w-[32px]" />
                </div>
            </div>
        </div>
    )
}
export default Header
