import { useState, useEffect } from "react";
import Testimonials from '../components/Testimonials';

const sliderData = [
  {
    id: 1,
    image: "/images.jpeg",
    title: "Smart Solutions for",
    subtitle: "Smarter Colleges",
    description:
      "Streamline your college operations with our innovative management platform",
  },
  {
    id: 2,
    image: "/download (2).jpeg",
    title: "Efficient Management",
    subtitle: "Better Service",
    description:
      "Transform your teaching experience with smart technology solutions",
  },
  {
    id: 3,
    image: "/download (1).jpeg",
    title: "Seamless Integration",
    subtitle: "Enhanced Performance",
    description:
      "Connect all aspects of your university with our unified platform",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="relative min-h-screen bg-black">
        {/* Slider */}
        <div className="relative h-screen">
          {/* Slides */}
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-70"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-6">
                  <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#6495ED] mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl text-white mb-8">
                      {slide.description}
                    </p>
                    <button className="bg-[#6495ED] text-black px-8 py-3 rounded-full font-medium hover:bg-[#FFE54C] transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#6495ED] p-2 rounded-full z-20 hover:bg-[#FFE54C] transition-colors duration-300"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#6495ED] p-2 rounded-full z-20 hover:bg-[#FFE54C] transition-colors duration-300"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide
                    ? "bg-[#6495ED]"
                    : "bg-white bg-opacity-50"
                }`}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Testimonials/>
      <div className="relative h-screen mt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/IEEE Speak.jpeg"
            alt="Restaurant background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="relative flex items-center justify-end h-full">
          <div className="px-8 mr-8 md:mr-16 lg:mr-24">
            <div className="bg-white bg-opacity-95 p-8 max-w-md rounded-lg shadow-lg">
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                College-O-mania
              </div>
              <h1 className="text-3xl font-bold mt-2 mb-3">
                One Smart Platform for College Management
              </h1>
              <p className="text-gray-700 mb-6">
                Effortless teaching, Detailed Lectures, and Smarter technology
                Management
              </p>
              <button className="bg-[#6495ED] text-black font-medium py-2 px-6 rounded button-pulse-effect hover:animate-none hover:bg-[#FFE54C] transition-all duration-300">
                BOOK DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
