import { motion } from "framer-motion";
import ofp1 from "../../../assets/Images/ofp1.jpg";
import ofp2 from "../../../assets/Images/ofp2.jpg";
import ofp3 from "../../../assets/Images/ofp3.jpg";
import ofp4 from "../../../assets/Images/ofp4.jpg";

import ofb1 from "../../../assets/Images/ofb1.jpg";
import ofb2 from "../../../assets/Images/ofb2.jpg";
import ofb3 from "../../../assets/Images/ofb3.jpg";
import ofb4 from "../../../assets/Images/ofb4.jpg";

import ofi1 from "../../../assets/Images/ofi1.jpg";
import ofi2 from "../../../assets/Images/ofi2.jpg";
import ofi3 from "../../../assets/Images/ofi3.jpg";
import ofi4 from "../../../assets/Images/ofi4.jpg";




const categories = [
  {
    title: "Offset Printing Machines",
    description:
      "Explore our wide range of high-performance used offset printing machines sourced.",
    images: [ofp1, ofp2, ofp3, ofp4],
    gradient: "from-cyan-100 via-white to-blue-100",
  },
  {
    title: "Offset Printing Blankets",
    description:
      "Our premium blankets provide excellent durability and high-quality print output.",
    images: [ofb1, ofb2, ofb3, ofb4],
    gradient: "from-pink-100 via-white to-purple-100",
  },
  {
    title: "Offset Printing Inks",
    description:
      "Vibrant, long-lasting inks suitable for all types of offset printing environments.",
    images: [
      ofi1,
      ofi2,
      ofi3,
      ofi4,
    ],
    gradient: "from-yellow-100 via-white to-orange-100",
  },
];

export default function ProductCategorySection() {
  return (
    <div className="w-full">
      {categories.map((category, idx) => (
        <section
          key={idx}
          className={`w-full py-16 px-6 sm:px-12 bg-gradient-to-br ${category.gradient}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              {category.title}
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              {category.description}
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {category.images.map((img, i) => (
              <motion.div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-lg bg-white/40 backdrop-blur-md border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img}
                  alt={`Product ${i + 1}`}
                  className="w-full h-56 object-cover"
                />
                {/* Mirror effect */}
                <div className="absolute top-full left-0 w-full h-full transform scale-y-[-1] opacity-20 blur-sm">
                  <img
                    src={img}
                    alt="Mirror"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}
    </div>
  );
}
