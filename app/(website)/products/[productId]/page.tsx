import products from "@/products";
import category from "@/categories";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  // Use params directly without awaiting
  const productDetails = products.find(
    (product) => product.id.toString() === params.productId
  );

  return (
    <div className="pt-20 flex justify-center px-5 md:px-0">
      <div className="w-1/5 md:flex md:flex-col border-r pr-2 pb-20 border-r-neutral-200 pl-5 pt-5 shadow-xl hidden">
        <div className="mb-5 text-lg font-medium">All Categories</div>
        {category.map((cat) => (
          <Link
            key={cat.id}
            className={`border p-2 border-white pl-6 text font-medium ${
              cat.id.toString() === params.productId
                ? "bg-green-500 rounded-lg text-white font-semibold"
                : "hover:bg-green-100"
            }`}
            href={`/products/${cat.id}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:w-4/5">
        <div className="text-center md:max-w-4xl mx-auto pt-10">
          <h1 className="text-2xl font-semibold">{productDetails?.name}</h1>
          <p className="my-5 text-gray-600">
            {productDetails?.seo_description}
          </p>
        </div>

        {productDetails?.products.length === 0 && (
          <div className="flex flex-col mx-auto mt-5 rounded-2xl shadow">
            <Image
              src={productDetails.image}
              alt={productDetails.name}
              height={500}
              width={300}
              className=""
            />
            <Link
              href={`https://wa.me/971522922874/?text=${encodeURIComponent(
                `Hey, I Want to Enquire About , ${productDetails.name}`
              )}`}
              className="bg-green-600 hover:bg-green-500 text-center mt-10 font-semibold justify-center w-full items-center gap-3 flex text-white py-3 rounded-lg cursor-pointer md:text-lg text-sm mx-auto"
            >
              Enquire Now <ChevronRight />
            </Link>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 md:px-15 gap-5 pb-32">
          {productDetails?.products.map((product) => (
            <div
              key={product.id}
              className="border border-slate-300 shadow rounded-lg hover:shadow-xl p-2"
            >
              <div className="w-full bg-neutral-100 rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 w-full h-[150px] object-contain"
                />
              </div>
              <div>
                <Link
                  href={`https://wa.me/971522922874/?text=${encodeURIComponent(
                    `Hey, I Want to Enquire About , ${product.name}`
                  )}`}
                  className="bg-green-600 hover:bg-green-500 text-center font-semibold justify-center items-center gap-3 flex text-white py-3 rounded-lg cursor-pointer md:text-lg text-sm"
                >
                  Enquire Now <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
