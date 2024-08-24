import SelectDropdown from "../components/dropdown/dropdown";
import Faq from "../components/faq/Faq";
import PopularHotels from "../components/popular-hotels/PopularHotels";
import WhyChooseCards from "../components/why-choose-cards/WhyChooseCard";

const BookTrip = () => {
  return (
    <div className="sm:my-26 my-16 px-4">
      {/* tabs section start */}
      <section className="bg-[url('/public/jpg/andaman.jpg')] bg-cover py-8 sm:h-[50vh] grid content-center rounded-2xl sm:px-0 px-4">
       <div className="sm:px-0 px-4">
       <div className="max-w-[500px] bg-white bg-opacity-90 shadow-custom-shadow4 w-full m-auto grid grid-cols-3 gap-[3px] rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
          <div className="text-center py-2 sm:px-4 cursor-pointer">
            <img src="/svg/ship.svg" alt="ship" width={32} className="m-auto sm:w-[32px] w-[24px]" />
            <p className="sm:text-sm text-xs text-primary mt-2">
              Ferry Booking
            </p>
          </div>
          <div className="text-center text-primary py-2 sm:px-4 cursor-pointer">
            <img
              src="/svg/scuba-primary.svg"
              alt="scuba"
              width={32}
              className="m-auto sm:w-[32px] w-[24px]"
            />
            <p className="sm:text-sm text-xs mt-2">Scuba Diving</p>
          </div>
          <div className="bg-primary text-white text-center py-2 sm:px-4 cursor-pointer] w-[101%]">
            <img src="/svg/trip.svg" alt="trip" width={32} className="m-auto sm:w-[32px] w-[24px]" />
            <p className="sm:text-sm text-xs mt-2">Hotel</p>
          </div>
        </div>
       </div>
        <div className="max-w-[700px] bg-white bg-opacity-90 shadow-custom-shadow4 w-full m-auto grid sm:grid-cols-4 px-4 sm:py-12 py-6 gap-4 rounded-[20px]">
        <div className="sm:border-r">
         <label htmlFor="destination" className="sm:hidden block font-semibold text-primary mb-[5px]">Destination</label>
          <SelectDropdown selectClassName="text-sm sm:border-none border w-full !py-4 !px-2 mt-[5px]" id="destination" label="Destination" listArray={destinationArray} />
        </div>
          
          <div className="sm:border-r">
            <label htmlFor="checkin" className="font-semibold text-primary block">
              Check In
            </label>
            <input type="date" name="" id="checkin" className="outline-none text-sm sm:bg-transparent bg-white text-secondary mt-[5px] sm:border-none border w-full py-4 px-2 rounded-xl" />
          </div>
          <div className="sm:border-r">
            <label htmlFor="checkin" className="font-semibold text-primary block">
              Check Out
            </label>
            <input type="date" name="checkin" id="checkin" className="outline-none text-sm sm:bg-transparent bg-white text-secondary mt-[5px] sm:border-none border w-full py-4 px-2 rounded-xl" />
          </div>
          <div>
            <span className="font-semibold text-primary block">Rooms & Guest</span>
            <p className="text-sm text-secondary mt-[5px] cursor-pointer sm:border-none border w-full py-4 px-2 rounded-xl sm:bg-transparent bg-white">1 Room, 2 Adults</p>
          </div>
        </div>
        <div></div>
      </section>
      {/* tabs section end */}
      {/* popular hotels */}
      <section className="my-12 max-w-[1250px] w-full m-auto">
        <PopularHotels />
      </section>
      {/* popular hotels end*/}

      {/* get all section start */}
        <section className="max-w-[1250px] w-full m-auto">
        <div className="sm:my-20 my-8 px-8">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">
            Get All Your High-Speed Ferry <br />
            Needs Covered at Our Andaman Hub
          </h2>
          <div className="sm:flex sm:justify-between sm:items-center grid sm:grid-cols-6 gap-4 my-12">
            <div className="shadow-card-shadow lg:h-[160px] sm:h-[60px] h-[150px] grid px-4 sm:w-[250px]">
              <img
                src="/svg/brand01.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="lg:h-[160px] sm:h-[60px] h-[150px] grid px-4 shadow-card-shadow sm:w-[250px]">
              <img
                src="/svg/brand02.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="lg:h-[160px] sm:h-[60px] h-[150px] grid px-4 shadow-card-shadow sm:w-[250px]">
              <img
                src="/svg/brand03.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
            <div className="lg:h-[160px] sm:h-[60px] h-[150px] grid px-4 shadow-card-shadow sm:w-[250px]">
              <img
                src="/svg/brand04.svg"
                alt="brand"
                className="m-auto sm:w-[50%]"
              />
            </div>
            <div className="lg:h-[160px] sm:h-[60px] h-[150px] grid px-4 shadow-card-shadow sm:w-[250px]">
              <img
                src="/svg/brand05.svg"
                alt="brand"
                className="m-auto sm:w-[60%]"
              />
            </div>
            <div className="lg:h-[160px] sm:h-[60px] h-[150px] grid px-4 shadow-card-shadow sm:w-[250px]">
              <img
                src="/svg/brand06.svg"
                alt="brand"
                className="m-auto sm:w-[80%]"
              />
            </div>
          </div>
        </div>
        </section>
      {/* get all section end */}

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

        {/* faq section */}
        <div className="mt-12 sm:mb-24 mb-12 sm:px-0 px-4">
          <h2 className="sm:text-4xl text-2xl font-bold text-center leading-tight text-[#0A1951]">Frequently Asked Questions</h2>
          <div className="mt-8">
            <Faq />
          </div>
        </div>
    </div>
  );
};
export default BookTrip;
const destinationArray = [
  {
    list:"Port Blair"
  },
  {
    list:"Havelock"
  },
  {
    list:"Neil Island"
  }
]