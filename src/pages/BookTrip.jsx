import PopularHotels from "../components/popular-hotels/PopularHotels";

const BookTrip = () => {
  return (
    <div className="sm:my-26 my-24 px-4">
      {/* tabs section start */}
      <section className="bg-[url('/public/jpg/andaman.jpg')] bg-cover py-8 h-[50vh] grid content-center rounded-2xl">
        <div className="max-w-[500px] bg-white shadow-custom-shadow4 w-full m-auto grid grid-cols-3 rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
          <div className="text-center py-2 px-4 cursor-pointer">
            <img src="/svg/ship.svg" alt="ship" width={32} className="m-auto" />
            <p className="sm:text-sm text-xs text-primary mt-2">
              Ferry Booking
            </p>
          </div>
          <div className="text-center text-primary py-2 px-4 cursor-pointer">
            <img
              src="/svg/scuba-primary.svg"
              alt="scuba"
              width={32}
              className="m-auto"
            />
            <p className="sm:text-sm text-xs mt-2">Scuba Diving</p>
          </div>
          <div className="bg-primary text-white text-center py-2 px-4 cursor-pointer] w-[101%]">
            <img src="/svg/trip.svg" alt="trip" width={32} className="m-auto" />
            <p className="sm:text-sm text-xs mt-2">Book Day Trip</p>
          </div>
        </div>
        <div className="max-w-[700px] bg-white shadow-custom-shadow4 w-full m-auto grid grid-cols-4 px-4 py-12 gap-4 rounded-[20px]">
          <div className="border-r">
            <label htmlFor="checkin" className="font-semibold text-primary">
              Check In
            </label>
            <input type="date" name="" id="checkin" className="outline-none text-sm" />
          </div>
          <div>
            <label htmlFor="checkin" className="font-semibold text-primary">
              Check Out
            </label>
            <input type="date" name="" id="checkin" className="outline-none text-sm" />
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </section>
      {/* tabs section end */}
      {/* popular hotels */}
      <section className="my-12 max-w-[1250px] w-full m-auto">
        <PopularHotels />
      </section>
      {/* popular hotels end*/}
    </div>
  );
};
export default BookTrip;
