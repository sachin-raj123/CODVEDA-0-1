// src/Pages/ContactInfoSection.jsx
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    detail: "support@medicare.com",
    description: "Reach out to us anytime via email for support, inquiries, or feedback.",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    detail: "+1 234 567 890",
    description: "Our support team is available via phone from 9 AM to 6 PM.",
  },
  {
    icon: MapPinIcon,
    title: "Visit Us",
    detail: "123 Health St, New York",
    description: "Come visit our office for  appointments.",
  },
  {
    icon: ClockIcon,
    title: "Working Hours",
    detail: "Mon - Fri: 9 AM - 6 PM",
    description: "We’re here to serve you during our business hours.",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-white py-16 px-40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((item) => (
            <div key={item.title} className="flex flex-col items-center bg-transparent py-6 px-10  transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-blue-600 font-medium text-[15px]">{item.detail}</p>
              <p className="mt-2 text-gray-600 text-[13px] text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
