import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - you can add your API call here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', mobile: '', email: '', message: '' });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex sm:flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative sm:h-[300px] md:h-[400px] lg:h-[600px]">          
            {/* Left image (hiking family) */}
            <div className="absolute bottom-0 left-0 overflow-hidden">
              <img 
                src="/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg" 
                alt="Family hiking" 
                className="w-full h-full object-cover"
              />
            </div>       
          </div>
          
          {/* Right side - Contact form */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name input */}
                <div>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:border-transparent shadow-sm"
                    required
                  />
                </div>
                
                {/* Mobile input */}
                <div>
                  <input 
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile no"
                    className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:border-transparent shadow-sm"
                    required
                  />
                </div>
              </div>
              
              {/* Email input */}
              <div>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:border-transparent shadow-sm"
                  required
                />
              </div>
              
              {/* Message textarea */}
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:border-transparent shadow-sm resize-none"
                  required
                ></textarea>
              </div>
              
              {/* Submit button */}
              <div className="flex justify-start">
                <button 
                  type="submit"
                  className="bg-[#6495ED] text-black font-medium py-3 px-8 rounded-full hover:bg-[#FFE54C] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;