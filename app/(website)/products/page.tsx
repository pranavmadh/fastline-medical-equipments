import category from "@/categories";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Products() {
  return (
    <div className="  md:p-36 p-5 ">
      <div className="flex flex-col items-center mb-10 md:mt-0 mt-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
          Medical Equipment Categories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
          Explore our comprehensive range of medical equipment across various
          specialties
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4 grid-cols-2  ">
        {category.map((cat) => (
          <div
            key={cat.id}
            className="bg-white border border-green-100 p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col "
          >
            <div>
              <Image
                src={cat.image}
                alt={cat.name}
                width={400}
                height={200}
                className="rounded-lg mb-4 w-full h-[150px] object-contain"
              />
            </div>
            <div className="flex gap-5 m-auto items-center">
              <div className="bg-green-100 p-2 rounded-lg text-green w-fit h-fit ">
                {cat.icon}
              </div>
              <div className="">
                <h3 className="text-sm font-semibold text-gray-900">
                  {cat.name}
                </h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px]">
                  Available
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <Link
                href={`/products/${cat.id}`}
                className="flex p-3 gap-4 bg-green-600 hover:bg-green-500 rounded-xl mt-5 text-white font-semibold cursor-pointer w-full justify-center md:text-lg text-sm"
              >
                View Products <ChevronRight className="hidden md:flex" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
