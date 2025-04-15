"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WelcomeSectionThree() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-white to-indigo-100 py-20 px-6 sm:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
      {/* Left: Info cards mirrored vertically */}
      <motion.div
        className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          "Global Network",
          "Verified by IndiaMART",
          "For Over 10 Years",
          "Printing blankets    ",
          "Used printing machinery",
          "Pressroom products",
        ].map((text, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl border border-white/40 bg-white/70 backdrop-blur-md p-6 shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="text-indigo-600 w-6 h-6" />
              <h4 className="font-semibold text-slate-800">{text}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right: Headline */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-right"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* <h2 className="text-sm sm:text-base uppercase tracking-wider text-gray-600">
          1982
        </h2> */}
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-teal-500 to-purple-600 text-transparent bg-clip-text my-4">
          Oval Industrials
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
          Specialists in used printing machinery with years of experience in
          import/export and trade worldwide.
        </p>
        {/* <p className="mt-4 font-semibold text-indigo-600 underline cursor-pointer">
          Explore Our History
        </p> */}
      </motion.div>
    </section>
  );
}
