const Header = () =>{
    return(
        <div className="flex justify-between px-16 py-4 shadow-sm">
            <div>
                <span className="text-xl font-semibold">Andaman.In</span>
            </div>
            <div>
                <ul className="flex gap-8 text-[#8890B1]">
                    <li className="text-[#FF5C00] cursor-pointer font-semibold">About</li>
                    <li className="cursor-pointer">Shop</li>
                    <li className="cursor-pointer">The Andamans Wiki</li>
                </ul>
            </div>
        </div>
    )
}
export default Header
