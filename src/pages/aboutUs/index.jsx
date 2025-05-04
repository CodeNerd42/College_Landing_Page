const AboutUs = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Cream background */}
      <div className="absolute inset-0 w-full h-full z-0">
      <img 
        src="/Group 49.png" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
      </div>

      {/* Content container */}
      <div className="container mx-auto md:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Left side - Benefits */}
          <div className="w-full mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold uppercase mb-12 text-center">
              WHAT WE OFFER
            </h2>

            {/* Benefit 1 */}
            <div className="mb-5">
              <div className="flex items-center">
                <div className="bg-[#4070CE] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  01
                </div>
                <h3 className="text-2xl font-bold">Admin Dashboard</h3>
              </div>
              <p className="text-gray-600 ml-20 lg:w-1/2">
                A centralised platform for restaurant owners to manage everything, including orders, menus, inventory, and analytics, all in one place.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="mb-5">
              <div className="flex items-center">
                <div className="bg-[#F79773] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  02
                </div>
                <h3 className="text-2xl font-bold">Customer Panel</h3>
              </div>
              <p className="text-gray-600 ml-20 lg:w-1/2">
                A seamless self-ordering system at every table, allowing diners to browse the menu, customize their orders and place requests without waiting for staff.
              </p>
            </div>

            {/* Benefit 3 */}
            <div>
              <div className="flex items-center mb-1">
                <div className="bg-[#FFD9B1] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  03
                </div>
                <h3 className="text-2xl font-bold">Delivery Management</h3>
              </div>
              <p className="text-gray-600 ml-20 lg:w-1/2">
                Integrated tracking and management of Swiggy & Zomato orders, helping restaurants handle both in-house and online deliveries effortlessly.
              </p>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="w-full relative">
            <div className="relative h-[400px] md:h-[450px]">
              {/* Top image - Fine dining plate */}
              <div className="absolute overflow-hidden sm:ml-12 sm:mt-20 md:mt-24 lg:mt-0">
                <img 
                  src="/images (2).jpeg" 
                  alt="Fine dining plate" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;