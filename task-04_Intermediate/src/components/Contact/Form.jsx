import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Form */}
          <div className="space-y-8">

            <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              
              <h2 className="text-3xl font-bold text-blue-800">
                Get In Touch With Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Learn your advice at math.comcenter.sdjquery@t.kv.WithUs.<br />
                Update recruitment matrix, explore options, see top-mipush.
              </p>
            </div>
            </div>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300"
              >
                CONTACT US
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
        <div className="flex items-center justify-center">
        <img
            src="https://post.healthline.com/wp-content/uploads/2023/03/doctor-patient-1296x728-header.jpg"
            alt="Medical contact"
            className="rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px] shadow-lg w-[90%] h-full object-cover"
        />
        </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
