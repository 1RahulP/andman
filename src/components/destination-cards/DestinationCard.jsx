import ThemeButton from "../theme-button/ThemeButton";

const DestinationCard = (props) => {
  return (
    <>
      <div
        key={props.key}
        className="shadow-custom-shadow1-mobile sm:pb-0 rounded-[30px] min-w-[218px] w-full"
      >
        <div className="relative rounded-[45px] overflow-hidden ">
          <img src={props.imageUrl} alt="popular" />
          <div className="absolute bottom-0 text-white bg-gradient-to-t from-blue-900 to-blue-black pt-8 bg-opacity-50 pl-6 pb-6 w-full">
            <h3 className="font-semibold text-xl">{props.headline}</h3>
            <p className="text-sm">{props.title}</p>
          </div>
        </div>
        <div className="sm:p-6 p-2">
          <p className="text-secondary sm:text-sm text-xs">{props.content}</p>
          <div className="flex justify-center sm:mt-6 mt-2 sm:mb-4 mb-2">
            <ThemeButton text={"Book Now"} className="!py-[10px]" />
          </div>
        </div>
      </div>
    </>
  );
};
export default DestinationCard;
