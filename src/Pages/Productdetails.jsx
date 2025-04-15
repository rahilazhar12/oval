import { useParams } from "react-router-dom";

// Sample static product list (same as in ProductSection)
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
    <div className="max-w-4xl mx-auto p-6 sm:p-12">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold text-slate-800 mb-4">{product.title}</h1>
      <p className="text-gray-700 text-lg">{product.desc}</p>
    </div>
  );
}
