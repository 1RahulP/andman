import React from "react";
const Faq = () => {
  const [showAns, setShowAns] = React.useState("");
  const toggleFaq = (value) => {
    showAns === ""
      ? setShowAns(value)
      : showAns !== value
      ? setShowAns(value)
      : setShowAns("");
  };
  return (
    <div className="max-w-[550px] w-full m-auto shadow-custom-shadow3 py-8 bg-[#FAFBFF] rounded-xl">
      {faqCollection?.map((item, index) => {
        return (
          <div
            key={index}
            className={`bg-white ${index === 0 ? "border-t" : ""}`}
          >
            <h3
              className={`py-4 px-6 cursor-pointer flex justify-between items-center ${
                showAns === item?.que ? "bg-[#FAFBFF]" : "bg-[white]"
              }`}
              onClick={() => toggleFaq(item?.que)}
            >
              <div className="flex gap-2 sm:text-[15px] text-[13px]">
                <span className={`block w-[20px] h-[20px] rounded-full flex-none mt-[3px] ${showAns===item?.que ? "bg-[#0A1951]" : "bg-[#D1DCF8]"}`}></span>
                <p>{item?.que}</p>
              </div>
              <div className="flex-none">
                <img
                  src="/svg/right-arrow.svg"
                  alt="rightArrow"
                  className={`w-[16px] ${showAns===item?.que ? "rotate-90 duration-300" : "duration-300"}`}
                />
              </div>
            </h3>
            {showAns === item?.que && <p className="px-6 py-2 ml-8 sm:text-[13px] text-[11px]">{item?.ans}</p>}
          </div>
        );
      })}
    </div>
  );
};
export default Faq;
const faqCollection = [
  {
    que: "What is a Payment Gateway?",
    ans: "Updating soon..!!",
  },
  {
    que: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    ans: "Updating soon..!!",
  },
  {
    que: "What platforms does Instapay payment gateway support?",
    ans: "Updating soon..!!",
  },
  {
    que: "Does Instapay provide international payments support?",
    ans: "Updating soon..!!",
  },
  {
    que: "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
    ans: "Updating soon..!!",
  },
];
