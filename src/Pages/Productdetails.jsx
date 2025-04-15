import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Optional: for back icon

const products = [
  {
    id: 1,
    title: "Offset Printing Machines",
    desc: `High-quality used offset printing machines from leading global brands like Heidelberg, Komori, and Roland. These machines are meticulously maintained for peak performance, supporting high-speed, large-volume production with excellent registration accuracy and automation.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7I_z_KdjBbMWcHtXX_NNP6Zd07BPuGZCqXg&s",
  },
  {
    id: 2,
    title: "Offset Printing Blankets",
    desc: `Durable compressible printing blankets engineered for high print fidelity. Ideal for sheet-fed and web presses, offering consistent ink transfer, reduced dot gain, and minimal vibration. Compatible with major press systems and trusted by professionals worldwide.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GW_cQrII0GZCtELa5buD44CLacHq7LGtw&s",
  },
  {
    id: 3,
    title: "Offset Printing Inks",
    desc: `Premium quality offset inks available in conventional, soy-based, and UV-curable variants. Offers rich pigmentation, quick drying, and long-lasting results. Eco-friendly soy inks enhance recyclability, while UV-curable inks suit fast-paced print environments.`,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUtYLHmEmsdB3_Y3tdze4QnkAcU2d_UPpq7AbVYDw0YRsdDgbNUGX52uFeOmy0vJfPRKWaCMwluGxNYb5LN7WlFPYbOeJkM_wT0gKbibDuU_0vCJFi0HWGy3ma7vIxyUPKx11pMRTmCAR1iafA1VUhqh_RP2om0_WqG_1-jcl3yadcFzT4TQ/s1276/quick-set-inks.png",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full h-80 object-cover shadow"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {product.desc}
          </p>

          {/* Optional: Specs or tags */}
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-slate-700">Category:</span>{" "}
              Offset Printing
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-slate-700">Availability:</span>{" "}
              In Stock
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-slate-700">Condition:</span>{" "}
              Excellent (Used / Maintained)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
