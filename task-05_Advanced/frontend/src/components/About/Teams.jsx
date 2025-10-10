import React, { useState } from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description:
        "Passionate about revolutionizing e-commerce with innovative solutions.",
      details:
        "Alex has over 15 years of experience in tech entrepreneurship and loves innovating in the e-commerce space.He holds a bachelor’s degree in engineering in electrical and electronics engineering from Birla Institute of Technology and Science, Pilani and a post graduate diploma in management from Indian Institute of Management, Calcutta. He has more than 10 years of experience in our Company. He was awarded the ‘Entrepreneur of the Year 2019’ at ‘The Economic Times Awards for Corporate Excellence’ by The Economic Times in November, 2019.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Head of Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Marketing expert with 10+ years in the e-commerce industry.",
      details:
        "Sarah specializes in growth marketing and has helped scale multiple e-commerce platforms internationally.He holds a bachelor’s degree in engineering in electrical and electronics engineering from Birla Institute of Technology and Science, Pilani and a post graduate diploma in management from Indian Institute of Management, Calcutta. He has more than 10 years of experience in our Company. He was awarded the ‘Entrepreneur of the Year 2019’ at ‘The Economic Times Awards for Corporate Excellence’ by The Economic Times in November, 2019.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Tech Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Tech enthusiast building seamless shopping experiences.",
      details:
        "Michael is a full-stack developer with a passion for building scalable and user-friendly web applications.He holds a bachelor’s degree in engineering in electrical and electronics engineering from Birla Institute of Technology and Science, Pilani and a post graduate diploma in management from Indian Institute of Management, Calcutta. He has more than 10 years of experience in our Company. He was awarded the ‘Entrepreneur of the Year 2019’ at ‘The Economic Times Awards for Corporate Excellence’ by The Economic Times in November, 2019.",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <section className="px-6 md:px-12 lg:px-20 xl:px-32 mb-28 max-w-7xl mx-auto mt-32">
      <h2
        className="text-4xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border dark:border-gray-700 cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay={member.id * 100}
            onClick={() => openModal(member)}
          >
            <div className="h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-lg">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-900 rounded-[40px] max-w-5xl w-full p-8 flex flex-col md:flex-row relative">
          
            {/* Left side image */}
            <div className="w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden flex items-center justify-center mb-6 md:mb-0">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-[85%] h-[85%] object-cover rounded-[40px]"
              />
            </div>

            {/* Right side content */}
            <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-primary text-xl mb-4">{selectedMember.role}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedMember.details}
              </p>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default TeamSection;
