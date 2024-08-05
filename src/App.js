import BookingFerry from "./components/booking-ferry/BookingFerry";
import SelectDropdown from "./components/dropdown/dropdown";
import PopularCards from "./components/popular-cards/PopularCards";
import ThemeButton from "./components/theme-button/ThemeButton";
import WhyChooseCards from "./components/why-choose-cards/WhyChooseCard";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="max-w-[1450px] m-auto">
      <div className="px-8 py-8">
        <div className="bg-[url('/public/png/banner.png')] bg-contain relative">
          <img
            src="/png/bannerbg.png"
            alt="banner"
            className="w-full h-auto opacity-40"
          />
          <div className="absolute top-12 w-full">
            <h2 className="text-7xl font-semibold text-white leading-tight ml-12">
              Enjoy Your Dream Vacations <br /> with TheAndamans.in
            </h2>
            <p className="text-2xl text-white mt-6 leading-tight ml-12">
              Book Ferry trips, Scuba Diving, One Day Trips <br /> and much more
            </p>
            {/* upper tab section */}
            <div className="max-w-[650px] m-auto w-full grid grid-cols-3 text-center mt-36">
              <div className="bg-white py-2 rounded-tl-3xl cursor-pointer bg-opacity-90">
                <img src="/svg/ship.svg" alt="icon" className="m-auto mb-2" />
                <span className="font-semibold">Ferry Booking</span>
              </div>
              <div className="bg-black bg-opacity-[50%] py-2 text-white cursor-pointer">
                <img src="/svg/scuba.svg" alt="icon" className="m-auto mb-2" />
                <span className="font-semibold">Scuba Diving</span>
              </div>
              <div className="bg-black bg-opacity-[50%] py-2 text-white rounded-tr-3xl cursor-pointer">
                <img src="/svg/trip.svg" alt="icon" className="m-auto mb-2" />
                <span className="font-semibold">Hotel</span>
              </div>
            </div>
            {/* upper tab section end */}
            {/* lower details section start */}
            <div className="max-w-[1024px] m-auto w-full grid grid-cols-4 bg-white py-10 px-6 rounded-[30px] shadow-button-shadow bg-opacity-90">
              <div className="border-r-2 py-6 pr-4">
                <SelectDropdown
                  parentClassName="grid gap-6"
                  label="From"
                  id="from"
                  listArray={fromlocationArray}
                />
              </div>
              <div className="border-r-2 py-6 px-4">
                <SelectDropdown
                  selectClassName="bg-opacity-90"
                  parentClassName="grid gap-6"
                  label="To"
                  id="To"
                  listArray={tolocationArray}
                />
              </div>
              <div className="border-r-2 py-6 px-4 grid gap-6">
                <label
                  className="block text-[#0A1951] font-semibold"
                  id="departure"
                >
                  Departure
                </label>
                <input
                  className="outline-none bg-transparent"
                  type="date"
                  name="Departure"
                  id="departure"
                />
              </div>
              <div className="py-6 px-4 grid gap-6">
                <label
                  className="block text-[#0A1951] font-semibold"
                  id="passangers"
                >
                  Passangers
                </label>
                <input
                  className="outline-none bg-transparent"
                  type="number"
                  name="passangers"
                  id="passangers"
                  value={"2"}
                />
              </div>
            </div>
            {/* lower details section end */}
          </div>
        </div>
        {/* popular destination section start */}
        <div className="mt-36 px-8">
          <h2 className="text-4xl font-bold text-center text-[#0A1951]">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-3 gap-12 my-12">
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
        <div className="my-20 px-8">
          <h2 className="text-4xl font-bold text-center leading-tight text-[#0A1951]">
            Get All Your High-Speed Ferry <br />
            Needs Covered at Our Andaman Hub
          </h2>
          <div className="flex justify-between items-center gp-4 my-12">
            <div className="shadow-custom-shadow2 h-[160px] grid px-4">
              <img
                src="/svg/brand01.svg"
                alt="brand"
                className="m-auto w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4">
              <img
                src="/svg/brand02.svg"
                alt="brand"
                className="m-auto w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4">
              <img
                src="/svg/brand03.svg"
                alt="brand"
                className="m-auto w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4">
              <img
                src="/svg/brand04.svg"
                alt="brand"
                className="m-auto w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4">
              <img
                src="/svg/brand05.svg"
                alt="brand"
                className="m-auto w-[80%]"
              />
            </div>
            <div className="h-[160px] grid px-4">
              <img
                src="/svg/brand06.svg"
                alt="brand"
                className="m-auto w-[80%]"
              />
            </div>
          </div>
        </div>
        {/* booking ferry section start */}
        <div className="my-20 px-8">
          <h2 className="text-4xl font-bold text-center leading-tight text-[#0A1951]">
            Booking Ferry is now Easier
          </h2>
          <BookingFerry />
        </div>
        {/* booking ferry section end */}
        {/* why choose section start */}
        <div>
          <h2 className="text-4xl font-bold text-center leading-tight text-[#0A1951]">
            Why Choose TheAndamans.in
          </h2>
          <div className="mt-8">
            <WhyChooseCards />
          </div>
        </div>
        {/* why choose section end */}
        {/* ferry routes start */}
        <div className="my-16 max-w-[1250px] w-full m-auto">
          <h2 className="text-4xl font-bold text-center leading-tight text-[#0A1951]">
            Ferry Routes in Andaman
          </h2>
          <p className="text-[#8890B1] sm:px-8 px-4 mt-8 text-center">
            The Andaman & Nicobar Islands comprise a union territory of India,
            boasting approximately 572 islands, of which 38 are inhabited. The
            predominant language spoken is Andaman Creole Hindi*, and
            transactions are conducted using the Indian rupee. These islands are
            primarily settled by people from various regions of India, and they
            also host five indigenous tribes.
          </p>

          <div className="grid grid-cols-2 gap-8 justify-between items-center sm:px-8 px-4 mt-12">
            <div>
              <h3 className="text-[#0A1951] font-semibold mb-6">Average Ferries on  routes on daily basis</h3>
            <div className="grid grid-cols-2 gap-8">
              {ferryArray?.map((item,index)=>{
                return(
                  <div key={index} className={`cursor-pointer shadow-custom-shadow2 rounded-xl py-6 px-8 ${index===0 ? "bg-[#0A1951] text-white" : "bg-white"}`}>
                    <div className="flex gap-4 items-center">
                      <div className={`border rounded-full p-2 ${index===0 ? "bg-white" : "bg-[#0A1951]"}`}>
                        <img src={item?.imageUrl} alt="ferry" className="!w-[36px] !h-[33px]" />
                      </div>
                      <p className="text-[#8890B1] text-xl">{item?.name}</p>
                    </div>
                    <h3 className="text-2xl font-semibold mt-4">{item?.ferryCount} Ferries</h3>
                  </div>
                )
              })}
            </div>
            </div>

            <div className="flex justify-end">
              <img src="/jpg/route.jpg" alt="route" className="max-w-[500px]" />
            </div>
          </div>
          <div className="grid justify-center mt-12">
          <ThemeButton text="Book Ferry" />
          </div>
        </div>
        {/* ferry routes end */}

        {/* upcoming ferry trips section start */}
              <div>
                <h2 className="text-4xl font-bold text-center leading-tight text-[#0A1951]">Our Upcoming Ferry Trips</h2>
              </div>
        {/* upcoming ferry trips section end */}
      </div>
    </div>
  );
}

export default App;
const fromlocationArray = [
  {
    list: "Select location",
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
    list: "Select location",
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
    imageUrl:"/svg/ferry1.svg",
    name:"Havelock to Port Blair",
    ferryCount:12
  },
  {
    imageUrl:"/svg/ferry2.svg",
    name:"Havelock to Port Blair",
    ferryCount:12
  },
  {
    imageUrl:"/svg/ferry2.svg",
    name:"Havelock to Port Blair",
    ferryCount:12
  },
  {
    imageUrl:"/svg/ferry3.svg",
    name:"Havelock to Port Blair",
    ferryCount:12
  },
]