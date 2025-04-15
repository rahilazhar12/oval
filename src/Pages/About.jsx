import { motion } from "framer-motion";

const sections = [
  {
    title: "Offset Printing Consumables",
    content: [
      {
        subtitle: "Printing Plates",
        details: [
          "Types: Thermal, digital, analog, polyester, and chemistry-free CTP plates.",
          "Usage: Serve as image carriers in the offset printing process.",
          "Suppliers: Available from various manufacturers.",
        ],
      },
      {
        subtitle: "Inks",
        details: [
          "Conventional Offset Inks: Standard inks for general printing needs.",
          "Soy-Based Inks: Environmentally friendly inks derived from soybeans.",
          "UV-Curable Inks: Dry instantly under UV light, great for high-speed printing.",
          'Notable Products: Spring Ink\'s "Best One QSG Series" for fast-setting, high-pigmentation.',
        ],
      },
      {
        subtitle: "Blankets",
        details: [
          "Function: Transfer ink from plate to substrate.",
          "Types: Compressible blankets for various papers & machines.",
          "Brands: GAFF, Meiji, Kinyo and many others",
        ],
      },
      {
        subtitle: "Rollers",
        details: [
          "Purpose: Ink and dampening solution transfer.",
          "Materials: Neoprene and other rubber compounds.",
        ],
      },
    ],
  },
  {
    title: "Pressroom Chemicals",
    content: [
      {
        subtitle: "Fountain Solutions",
        details: [
          "Role: Maintain ink-water balance.",
          "Variants: Alcohol-based & alcohol-free types.",
        ],
      },
      {
        subtitle: "Plate Cleaners & Gums",
        details: [
          "Function: Clean/protect plates from ink & oxidation.",
          "Products: Cleaners, gums, desensitizers.",
        ],
      },
      {
        subtitle: "Washing Agents",
        details: [
          "Use: Clean rollers, blankets, etc.",
          "Types: Manual, automatic, eco-friendly.",
        ],
      },
      {
        subtitle: "Anti-Set-Off Powders",
        details: [
          "Purpose: Prevent ink transfer between sheets.",
          "Composition: Starch-based (corn or rice).",
          "Use: Essential for sheet-fed offset printing.",
        ],
      },
    ],
  },
  {
    title: "Pressroom Accessories & Maintenance",
    content: [
      {
        subtitle: "Cleaning Supplies",
        details: [
          "Items: Solvents, roller cleaners, wipes, etc.",
          "Features: Low-lint, high-strength.",
        ],
      },
      {
        subtitle: "Lubricants & Greases",
        details: [
          "Function: Reduce friction and wear.",
          "Products: Specialized greases like Katsura Idling Grease.",
        ],
      },
      {
        subtitle: "Underlay & Packing Materials",
        details: [
          "Purpose: Ensure proper pressure and contact.",
          "Materials: Calibrated underlay papers & sheets.",
        ],
      },
    ],
  },
  {
    title: "Offset Printing Equipment",
    content: [
      {
        subtitle: "Presses",
        details: [
          "Types: Sheet-fed and web offset presses.",
          "Manufacturers: Heidelberg, Komori, Roland.",
        ],
      },
      {
        subtitle: "Computer-to-Plate (CTP) Systems",
        details: [
          "Function: Image digital files onto plates.",
        ],
      },
      {
        subtitle: "Post-Press Equipment",
        details: [
          "Includes: Binding machines, laminators, cutting systems.",
          "Use: Final finishing for printed materials.",
        ],
      },
    ],
  },
];

export default function About() {
  return (
    <div className="bg-gradient-to-tr from-blue-50 via-white to-green-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-slate-800 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our Printing Solutions
        </motion.h1>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              {section.title}
            </h2>

            {section.content.map((item, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.subtitle}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
