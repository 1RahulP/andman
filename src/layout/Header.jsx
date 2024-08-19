import React from "react";
const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="flex justify-between sm:px-16 px-4 py-4 shadow-sm fixed w-full top-0 z-[9] bg-white">
      <div>
        <span className="text-xl font-semibold">Andaman.In</span>
      </div>
      <div>
        <ul className="gap-8 text-[#8890B1] sm:flex hidden">
          <li className="text-[#FF5C00] cursor-pointer font-semibold">About</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">The Andamans Wiki</li>
        </ul>
        <div className="sm:hidden block fixed top-4 right-4">
          {showMenu===false ?
          <img
            src="/svg/menu.svg"
            alt="menu"
            className="w-[32px]"
            onClick={() => setShowMenu(true)}
          />
            :
            <img
            src="/svg/close-white.svg"
            onClick={() => setShowMenu(false)}
            className="text-white z-[999] relative w-[22px]"
            />
        }
        
            <div className={`backdrop-blur-xl z-[99] fixed right-0 h-[102vh] top-0 ${showMenu===false ? "right-[-100px] w-[0px] duration-500": "w-full px-2 duration-500"}`}>
              <div className="w-full h-[102vh] fixed right-0 z-[9]  grid items-center justify-center bg-black text-white bg-opacity-70">
                <div className="grid gap-[50px] text-xl font-semibold">
                  <div className="mb-2 cursor-pointer text-center">About</div>
                  <div className="mb-2 cursor-pointer text-center">Shop</div>
                  <div className="cursor-pointer text-center">The Andamans Wiki</div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};
export default Header;
