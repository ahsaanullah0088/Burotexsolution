import React from "react";

// Importing all logos
import logo1 from "../../assets/trusted/logo1B.png";
import logo2 from "../../assets/trusted/logo2b.png";
import logo3 from "../../assets/trusted/Logo3b.png";
import logo4 from "../../assets/trusted/logo4b.png";
import logo5 from "../../assets/trusted/logo5b.png";
import logo6 from "../../assets/trusted/logo6b.png";
import logo7 from "../../assets/trusted/logo7b.jpeg";
import logo8 from "../../assets/trusted/logo8b.jpg";
import logo9 from "../../assets/trusted/logo9b.png";
import logo10 from "../../assets/trusted/logo10b.png";
import logo11 from "../../assets/trusted/logo11b.png";
import logo12 from "../../assets/trusted/logo12b.jpg";
import logo13 from "../../assets/trusted/logo13b.png";
import logo14 from "../../assets/trusted/logo14b.png";
import logo15 from "../../assets/trusted/logo15b.png";

const Logos = () => {
  const logos = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
    { src: logo7, alt: "Logo 7" },
    { src: logo8, alt: "Logo 8" },
    { src: logo9, alt: "Logo 9" },
    { src: logo10, alt: "Logo 10" },
    { src: logo11, alt: "Logo 11" },
    { src: logo12, alt: "Logo 12" },
    { src: logo13, alt: "Logo 13" },
    { src: logo14, alt: "Logo 14" },
    { src: logo15, alt: "Logo 15" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted By</h2>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
