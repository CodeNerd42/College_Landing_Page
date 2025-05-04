const Features = () => {
    return (
      <div className="bg-white py-16">
        {/* Yellow circle divider with bounce and glow effects */}
        <div className="flex justify-center -mt-28 mb-12 relative z-10">
          <div className="bg-[#6495ED] rounded-full w-12 h-12 flex items-center justify-center bounce-effect circle-glow-effect hover:animate-none cursor-pointer">
            <span className="text-black text-3xl">↓</span>
          </div>
        </div>
        
        {/* Features section */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Admin Panel Feature */}
            <div className="relative overflow-hidden rounded-lg h-96">
              {/* Background image */}
              <img 
                src="/AKTU-One-View-Result-2024-1.png" 
                alt="Admin Panel Background" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-70"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-4">
                  WHAT DO WE OFFER FOR THE ADMIN PANEL?
                </h2>
                <p className="mb-6">
                  A Powerful and intuitive tool designed to streamline University operations. It enables staff to manage files from every table in real-time, track pending orders from third party platforms and monitor payment easily.
                </p>
                <div className="mt-auto flex items-center cursor-pointer">
                  <span className="mr-2 text-sm hover:text-[#FFDD19] transition-colors duration-300">Learn more</span>
                  <div className="relative">
                    {/* Glowing circle effect */}
                    <div className="absolute inset-0 rounded-full bg-white pulse-effect"></div>
                    {/* Main circle */}
                    <div className="relative bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#6495ED] transition-colors duration-300">
                      <span className="text-black text-s">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer Panel Feature */}
            <div className="relative overflow-hidden rounded-lg h-96">
              {/* Background image */}
              <img 
                src="/images (1).jpeg" 
                alt="Customer Panel Background" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-70"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-4">
                  WHAT DO WE OFFER FOR THE Student PANEL?
                </h2>
                <p className="mb-6">
                  A Powerful and intuitive tool designed to streamline study operations. It enables staff to manage lectues from every subject in real-time, track notes from third party platforms and monitor payment easily.
                </p>
                <div className="mt-auto flex items-center cursor-pointer">
                  <span className="mr-2 text-sm hover:text-[#FFDD19] transition-colors duration-300">Learn more</span>
                  <div className="relative">
                    {/* Glowing circle effect */}
                    <div className="absolute inset-0 rounded-full bg-white pulse-effect"></div>
                    {/* Main circle */}
                    <div className="relative bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#6495ED] transition-colors duration-300">
                      <span className="text-black text-s">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;