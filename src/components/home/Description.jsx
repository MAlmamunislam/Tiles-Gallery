import React from 'react';
const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "We ensure fast and safe delivery of your tiles across the country."
  },
  {
    icon: "💎",
    title: "Premium Quality",
    desc: "Guaranteeing the finest grade marble and ceramic for your home."
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    desc: "Your transactions are 100% secure and encrypted with us."
  },
  {
    icon: "🎨",
    title: "Unique Designs",
    desc: "A vast collection of modern and aesthetic tile patterns."
  }
];

const Description = () => {
     return (
       <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience excellence with our world-class services and high-quality tile collections.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 text-center group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     );
};

export default Description;