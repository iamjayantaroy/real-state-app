import { assets, testimonialsData } from "../assets/assets";
const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories From Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {testimonialsData.map((item, idx) => (
          <div
            key={idx}
            className="max-w-[250px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full  mb-4"
              src={item.image}
              alt={item.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">{item.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{item.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: item.rating }, (e, idx) => (
                <img key={idx} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
