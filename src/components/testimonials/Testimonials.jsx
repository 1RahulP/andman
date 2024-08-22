import React from "react";
const Testimonials = () => {
  const [testimonial, setTestimonials] = React.useState(1);
  return (
    <div className="grid sm:grid-cols-[1fr_1.5fr] gap-12 mt-12">
      {/* left part of the testimonials start */}
      <div>
        {testimonialsArray?.map((item, index) => {
          return (
            <div
              className={`flex items-center gap-6 cursor-pointer h-fit px-6 py-8 ${testimonial===item?.id ? "shadow-custom-shadow2 rounded-2xl border" : ""}`}
              onClick={() => setTestimonials(index + 1)}
              key={index}
            >
              <div>
                <img src={item?.userImage} alt="user" width={42} />
              </div>
              <div>
                <h3 className="text-primary font-[500]">Milton Austin</h3>
                <p className="text-secondary text-sm">Jaypur, India</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* left part of the testimonials end */}

      {/* right part of the testimonilas start */}
      <div>
        {testimonialsArray?.map((item, index) => {
          return (
            <div key={index}>
              {testimonial === item?.id && (
                <div>
                  <h3 className="text-primary font-bold">{item?.headline}</h3>
                  <div className="my-2">
                    <img src="/svg/stars.svg" alt="stars" width={80} />
                  </div>
                  <div className="text-secondary text-sm">
                    {item?.contentArray?.map((value, ind) => {
                      return (
                        <p className="mb-2" key={ind}>
                          {value?.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* right part of the testimonilas end */}
    </div>
  );
};
export default Testimonials;
const testimonialsArray = [
  {
    id: 1,
    userImage: "/png/user01.png",
    userName: "Milton Austin",
    location: "Jaypur, India",
    headline: "It was a great experience!",
    contentArray: [
      {
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro",
      },
      {
        content:
          "Quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia volupta",
      },
    ],
  },
  {
    id: 2,
    userImage: "/png/user02.png",
    userName: "Harris J.",
    location: "London, England",
    headline: "It was a great experience.!",
    contentArray: [
      {
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro",
      },
    ],
  },
  {
    id: 3,
    userImage: "/png/user03.png",
    userName: "Aditya Ariya",
    location: "Kashmir, Pakistan",
    headline: "It was a great experience..!",
    contentArray: [
      {
        content:
          "Quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia volupta",
      },
    ],
  },
];
