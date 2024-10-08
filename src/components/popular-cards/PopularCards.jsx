const PopularCards = (props) => {
  return (
    <>
      <div key={props.key} className="shadow-custom-shadow1-mobile rounded-[30px] min-w-[218px] w-full">
        <img src={props.imageUrl} alt="popular" className="" />
        <div className="p-6">
          <div className="flex justify-between mb-8 font-semibold">
            <span>{props.place}</span>
            <span className="text-[#FF5C00]">₹ {props.price}</span>
          </div>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};
export default PopularCards;
