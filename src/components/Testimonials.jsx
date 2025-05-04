// src/components/Testimonials.jsx

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset...",
    author: "Arlene McCoy",
    location: "Germany",
    image: "/1.jpeg"
  },
  {
    id: 2,
    text: "EatoPae transformed how we handle busy weekend rushes. The table management system alone has increased our turnover by 15%, and customers love the seamless ordering experience. The platform is intuitive for our staff, and the customer support team is always responsive when we need help.",
    author: "Robert Johnson",
    location: "United States",
    image: "/2.jpeg"
  },
  {
    id: 3,
    text: "As a small café owner, I was hesitant to adopt new technology, but EatoPae made the transition so easy. Their onboarding team helped customize the platform to our specific needs. We've reduced order errors by 90% and can now focus more on creating great experiences for our guests.",
    author: "Sofia Rodriguez",
    location: "Spain",
    image: "/3.jpeg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 relative">
      {/* Central dotted line - decorative element */}
      
      <div className="container mx-auto px-4 relative">
        {/* Heading and subheading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What our teacher's say?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from the other university owners who've transformed their operations with college-O-Mania. Discover how our platform helped them serve faster, manage better, and grow smarter.
          </p>
        </div>
        
        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-[#FFF9E6] p-8 md:p-12 rounded-lg shadow-sm relative">
            {/* Large yellow quote mark */}
            <div className="text-[#6495ED] text-9xl font-serif absolute top-6 left-6">
                “
            </div>
            
            {/* Testimonial text */}
            <div className="pl-12 pt-8 md:pl-16 md:pt-10 relative">
              <p className="text-gray-700 mb-8 leading-relaxed">
                {currentTestimonial.text}
              </p>
              
              {/* Author details */}
              <div className="flex flex-col items-center mt-6">
                <h4 className="text-xl font-bold text-[#6495ED]">{currentTestimonial.author}</h4>
                <p className="text-gray-600">{currentTestimonial.location}</p>
                
                {/* Author image */}
                <div className="mt-4 mb-2 w-24 h-24 border-2 border-blue-300 rounded-sm overflow-hidden">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-[#6495ED] w-12 h-12 rounded-full flex items-center justify-center shadow-md focus:outline-none"
              aria-label="Previous testimonial"
            >
              <span className="text-black text-xl">&larr;</span>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-[#6495ED] w-12 h-12 rounded-full flex items-center justify-center shadow-md focus:outline-none"
              aria-label="Next testimonial"
            >
              <span className="text-black text-xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;