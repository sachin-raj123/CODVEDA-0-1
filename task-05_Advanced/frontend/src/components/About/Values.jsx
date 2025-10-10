import React from "react";

const ValuesSection = () => {
  const values = [
    {
      title: "Customer First",
      description: "We prioritize our customers' needs and strive to exceed their expectations in every interaction."
    },
    {
      title: "Innovation",
      description: "We continuously evolve our platform with the latest technology to enhance your shopping experience."
    },
    {
      title: "Quality",
      description: "We carefully curate our product selection to ensure only the highest quality items make it to you."
    },
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and reducing our environmental footprint."
    }
  ];

  return (
    <div className="mb-28">
      <h2 
        className="text-4xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;