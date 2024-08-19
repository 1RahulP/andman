import BookingFerry from "./components/booking-ferry/BookingFerry";
import SelectDropdown from "./components/dropdown/dropdown";
import Faq from "./components/faq/Faq";
import PopularCards from "./components/popular-cards/PopularCards";
import ThemeButton from "./components/theme-button/ThemeButton";
import UpcomingFerry from "./components/upcoming-ferry/UpcomingFerry";
import WhyChooseCards from "./components/why-choose-cards/WhyChooseCard";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="max-w-[1450px] m-auto">
      <div className="sm:px-8 sm:py-8">
        <div className=" bg-contain relative ">
          <div className="overflow-hidden bg-gradient-to-r from-black to-[#5d6063] sm:rounded-[30px] h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1640618428217-30131ccdfd7a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
            className="w-full h-full opacity-80 sm:rounded-[30px]"
          />
          </div>
          <div className="absolute sm:top-12 top-0 w-full sm:px-0 sm:py-0 px-4">
            <h2 className="xl:text-7xl sm:block hidden text-4xl font-semibold text-white leading-tight ml-12">
              Enjoy Your Dream Vacations <br /> with TheAndamans.in
            </h2>
            <p className="text-2xl sm:block hidden text-white mt-6 leading-tight ml-12">
              Book Ferry trips, Scuba Diving, One Day Trips <br /> and much more
            </p>
            {/* upper tab section */}
            <div className="max-w-[650px] m-auto w-full grid grid-cols-3 text-center xl:mt-36 mt-12 sm:px-0 px-[25px]">
              <div className="bg-white py-2 rounded-tl-3xl cursor-pointer bg-opacity-90">
                <img src="/svg/ship.svg" alt="icon" className="m-auto sm:mb-2 sm:w-auto w-[24px]" />
                <span className="font-semibold sm:text-[15px] text-xs">Ferry Booking</span>
              </div>
              <div className="bg-black bg-opacity-[50%] py-2 text-white cursor-pointer">
                <img src="/svg/scuba.svg" alt="icon" className="m-auto sm:mb-2 sm:w-auto w-[24px]" />
                <span className="font-semibold sm:text-[15px] text-xs">Scuba Diving</span>
              </div>
              <div className="bg-black bg-opacity-[50%] py-2 text-white rounded-tr-3xl cursor-pointer">
                <img src="/svg/trip.svg" alt="icon" className="m-auto sm:mb-2 sm:w-auto w-[24px]" />
                <span className="font-semibold sm:text-[15px] text-xs">Hotel</span>
              </div>
            </div>
            {/* upper tab section end */}
            {/* lower details section start */}
            <div className="max-w-[880px] calender m-auto w-full grid sm:grid-cols-4 sm:gap-0 gap-3 bg-[#f5f5f5] py-10 px-6 rounded-[30px] shadow-button-shadow">
              <div className="sm:border-r-2 sm:py-6 py-2 ">
                <SelectDropdown
                  parentClassName="grid gap-6"
                  label="From"
                  id="from"
                  listArray={fromlocationArray}
                />
              </div>
              <div className="sm:border-r-2 sm:py-6 py-2 sm:px-4 ">
                <SelectDropdown
                
                  selectClassName="bg-opacity-90"
                  parentClassName="grid gap-6"
                  label="To"
                  id="To"
                  listArray={tolocationArray}
                />
              </div>
              <div className="sm:border-r-2 sm:py-6 py-2 sm:px-4  grid gap-6">
                <label
                  className="block text-[#0A1951] font-semibold sm:block hidden"
                  id="departure"
                >
                  Departure
                </label>
                <input
                placeholder="Departure"
                  className="outline-none sm:bg-transparent bg-white sm:px-0 sm:py-0 px-2 py-4 rounded-xl calender w-full"
                  type="date"
                  name="Departure"
                  id="departure"
                />
              </div>
              <div className="sm:py-6 py-2 sm:px-4 grid gap-6">
                <label
                  className="block text-[#0A1951] font-semibold sm:block hidden"
                  id="passangers"
                >
                  Passangers
                </label>
                <input
                  className="outline-none sm:bg-transparent bg-white sm:px-0 sm:py-0 px-2 py-4 rounded-xl w-full"
                  type="number"
                  name="passangers"
                  id="passangers"
                  value={"2"}
                />
              </div>
              <div className="sm:hidden block">
                <ThemeButton text="Search" className="w-full" />
              </div>
            </div>
            {/* lower details section end */}
          </div>
        </div>
        {/* popular destination section start */}
        <div className="sm:mt-36 mt-10 sm:px-8 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center text-[#0A1951]">
            Popular Destinations
          </h2>
          <div className="sm:grid flex overflow-x-auto sm:overflow-x-unset grid-cols-3 sm:gap-12 gap-4 sm:my-12 my-4 px-6 sm:pb-16 pb-12">
            {popularArray?.map((item, index) => {
              return (
                <PopularCards
                  key={index}
                  imageUrl={item?.imageUrl}
                  place={item?.place}
                  price={item?.price}
                  content={item?.content}
                />
              );
            })}
          </div>
        </div>
        {/* popular destination section end */}
        <div className="sm:my-20 my-8 px-8">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">
            Get All Your High-Speed Ferry <br />
            Needs Covered at Our Andaman Hub
          </h2>
          <div className="sm:flex sm:justify-between sm:items-center grid gap-4 my-12">
            <div className="shadow-card-shadow h-[160px] grid px-4">
              <img
                src="/svg/brand01.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4 shadow-card-shadow">
              <img
                src="/svg/brand02.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4 shadow-card-shadow">
              <img
                src="/svg/brand03.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4 shadow-card-shadow">
              <img
                src="/svg/brand04.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4 shadow-card-shadow">
              <img
                src="/svg/brand05.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4 shadow-card-shadow">
              <img
                src="/svg/brand06.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
          </div>
        </div>
        {/* booking ferry section start */}
        <div className="my-20 px-8">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">
            Booking Ferry is now Easier
          </h2>
          <BookingFerry />
        </div>
        {/* booking ferry section end */}
        {/* why choose section start */}
        <div className="sm:px-0 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">
            Why Choose TheAndamans.in
          </h2>
          <div className="mt-8">
            <WhyChooseCards />
          </div>
        </div>
        {/* why choose section end */}
        {/* ferry routes start */}
        <div className="sm:my-16 my-8 max-w-[1250px] w-full m-auto">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">
            Ferry Routes in Andaman
          </h2>
          <p className="text-[#8890B1] sm:text-[15px] text-[13px] sm:px-8 px-4 sm:mt-8 mt-4 text-center">
            The Andaman & Nicobar Islands comprise a union territory of India,
            boasting approximately 572 islands, of which 38 are inhabited. The
            predominant language spoken is Andaman Creole Hindi*, and
            transactions are conducted using the Indian rupee. These islands are
            primarily settled by people from various regions of India, and they
            also host five indigenous tribes.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 justify-between items-center sm:px-8 px-4 mt-12">
            <div>
              <h3 className="text-[#0A1951] font-semibold mb-6 sm:px-0 px-4">
                Average Ferries on routes on daily basis
              </h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {ferryArray?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer shadow-custom-shadow2 rounded-xl py-6 px-8 ${
                        index === 0 ? "bg-[#0A1951] text-white" : "bg-white"
                      }`}
                    >
                      <div className="flex gap-4 items-center">
                        <div
                          className={`border rounded-full p-2 flex-none ${
                            index === 0 ? "bg-white" : "bg-[#0A1951]"
                          }`}
                        >
                          <img
                            src={item?.imageUrl}
                            alt="ferry"
                            className="!w-[36px] !h-[33px]"
                          />
                        </div>
                        <p className="text-[#8890B1] text-xl">{item?.name}</p>
                      </div>
                      <h3 className="text-2xl font-semibold mt-4 sm:text-left text-center">
                        {item?.ferryCount} Ferries
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end">
              <img src="/jpg/route.jpg" alt="route" className="max-w-[500px] w-full" />
            </div>
          </div>
          <div className="grid justify-center mt-12">
            <ThemeButton text="Book Ferry" />
          </div>
        </div>
        {/* ferry routes end */}

        {/* upcoming ferry trips section start */}
        <div className="px-2">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">
            Our Upcoming Ferry Trips
          </h2>
          <div className="mt-8">
          <UpcomingFerry />
          </div>
        </div>
        {/* upcoming ferry trips section end */}
        {/* faq section */}
        <div className="my-12 sm:px-0 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">Frequently Asked Questions</h2>
          <div className="mt-8">
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
const fromlocationArray = [
  {
    list: "From",
  },
  {
    list: "Port Blair",
  },
  {
    list: "Port Blair",
  },
  {
    list: "Port Blair",
  },
  {
    list: "Port Blair",
  },
  {
    list: "Port Blair",
  },
];
const tolocationArray = [
  {
    list: "To",
  },
  {
    list: "Havelock Island",
  },
  {
    list: "Havelock Island",
  },
  {
    list: "Havelock Island",
  },
  {
    list: "Havelock Island",
  },
  {
    list: "Havelock Island",
  },
];
const popularArray = [
  {
    imageUrl: "/jpg/popular01.jpg",
    place: "Port Blair",
    price: 320,
    content: "Andaman and Nicobar Islands",
  },
  {
    imageUrl: "/jpg/popular02.jpg",
    place: "Port Blair",
    price: 320,
    content: "Andaman and Nicobar Islands",
  },
  {
    imageUrl: "/jpg/popular03.jpg",
    place: "Neil Island",
    price: 320,
    content: "Andaman and Nicobar Islands",
  },
];
const ferryArray = [
  {
    imageUrl: "/svg/ferry1.svg",
    name: "Havelock to Port Blair",
    ferryCount: 12,
  },
  {
    imageUrl: "/svg/ferry2.svg",
    name: "Havelock to Port Blair",
    ferryCount: 12,
  },
  {
    imageUrl: "/svg/ferry2.svg",
    name: "Havelock to Port Blair",
    ferryCount: 12,
  },
  {
    imageUrl: "/svg/ferry3.svg",
    name: "Havelock to Port Blair",
    ferryCount: 12,
  },
];
