export default function MissionVision() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Purpose</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving healthcare innovation through compassionate care and
            cutting-edge medical solutions
          </p>
        </div>

        {/* Mission & Vision stacked */}
        <div className="space-y-10">
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 relative overflow-hidden group">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional, compassionate healthcare through
                innovative medical solutions, advanced technology, and a
                commitment to improving patient outcomes and quality of life.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500 relative overflow-hidden group">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
              <svg
                className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize healthcare delivery by creating a world where
                advanced medical care is accessible to all, fostering healthier
                communities through prevention, innovation, and
                patient-centered excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: "❤️", title: "Compassion", desc: "Patient-first approach" },
            { icon: "⚡", title: "Innovation", desc: "Cutting-edge solutions" },
            { icon: "🤝", title: "Excellence", desc: "Highest quality care" },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{value.icon}</div>
              <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
