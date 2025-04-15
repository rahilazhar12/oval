import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />,
    title: "Address",
    content: ["3040 Oak Hampton Way, Duluth USA"],
  },
  {
    icon: <FaPhoneAlt className="text-blue-600 text-2xl mt-1" />,
    title: "Phone",
    content: ["+1 617-682-6354", "+1 305-924-5585"],
  },
  {
    icon: <FaEnvelope className="text-blue-600 text-2xl mt-1" />,
    title: "Email",
    content: ["ovalindustrials1@gmail.com"],
  },
  // {
  //   icon: <FaWhatsapp className="text-green-500 text-3xl mt-1" />,
  //   title: "WhatsApp",
  //   content: ["+1 305-924-5585"],
  //   href: "https://wa.me/13059245585",
  // },
];

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-green-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-slate-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We’re happy to assist with any questions about our printing machinery,
          supplies, or services. Feel free to reach out through any of the
          options below.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 text-left">
          {contactItems.map((item, index) =>
            item.href ? (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 hover:bg-green-50 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  {item.content.map((line, i) => (
                    <p key={i} className="text-green-600 font-medium">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.a>
            ) : (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  {item.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
