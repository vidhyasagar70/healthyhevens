"use client";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

interface ProductCardProps {
  img: string;
  title: string;
  desc: string;
}

const PRODUCTS: ProductCardProps[] = [
  {
    img: `${getImagePrefix()}image/product1.jpg`,
    title: "Formula 1",
    desc: "Available Flavors: Dutch Chocolate, Vanilla, Banana Caramel. A delicious meal replacement shake from Herbalife.",
  },
  {
    img: `${getImagePrefix()}image/product2.jpg`,
    title: "Afresh",
    desc: "Flavor: Elaichi. A refreshing energy drink mix that helps refresh the body and mind.",
  },
  {
    img: `${getImagePrefix()}image/product3.jpg`,
    title: "Active Fiber Complex",
    desc: "Unflavoured. Supports digestive health with a blend of soluble and insoluble fiber from Herbalife.",
  },
  {
    img: `${getImagePrefix()}image/product4.jpg`,
    title: "Personalized Protein Powder",
    desc: "Unflavoured protein supplement that helps you stay fit and support lean muscle mass.",
  },
];

// ProductCard Component
function ProductCard({ img, title, desc }: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-4 items-start rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <div className="w-full h-48 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Typography 
          variant="h5" 
          className="text-gray-800 font-bold group-hover:text-green-600 transition-colors duration-200"
        >
          {title}
        </Typography>
        <Typography 
          variant="small" 
          className="text-gray-600 leading-relaxed line-clamp-3"
        >
          {desc}
        </Typography>
      </div>

    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Our Products
          </div>
          <Typography 
            variant="h2" 
            className="text-gray-800 font-bold mb-4 text-3xl lg:text-4xl"
          >
            Premium Wellness Solutions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto max-w-3xl text-gray-600 leading-relaxed text-lg"
          >
            Explore our carefully curated range of Herbalife wellness products designed to support 
            your nutritional goals and overall health journey with proven results.
          </Typography>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>


      </div>
    </section>
  );
}

export default Products;