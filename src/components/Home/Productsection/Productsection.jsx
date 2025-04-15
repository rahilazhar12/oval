import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Offset Printing Machines",
    desc: "High-quality used offset printing machines from leading global brands, maintained for top performance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7I_z_KdjBbMWcHtXX_NNP6Zd07BPuGZCqXg&s",
  },
  {
    id: 2,
    title: "Offset Printing Blankets",
    desc: "Durable and reliable printing blankets ensuring superior print quality and press stability.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GW_cQrII0GZCtELa5buD44CLacHq7LGtw&s",
  },
  {
    id: 3,
    title: "Offset Printing Inks",
    desc: "Premium inks that deliver vibrant color reproduction and long-lasting results.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUtYLHmEmsdB3_Y3tdze4QnkAcU2d_UPpq7AbVYDw0YRsdDgbNUGX52uFeOmy0vJfPRKWaCMwluGxNYb5LN7WlFPYbOeJkM_wT0gKbibDuU_0vCJFi0HWGy3ma7vIxyUPKx11pMRTmCAR1iafA1VUhqh_RP2om0_WqG_1-jcl3yadcFzT4TQ/s1276/quick-set-inks.png",
  },
];

export default function ProductSection() {
  return (
    <section className="w-full px-6 sm:px-12 py-20 bg-gradient-to-br from-white via-sky-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our range of top-notch offset printing products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
