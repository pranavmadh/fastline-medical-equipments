"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import category from "@/categories";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Categories() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(6);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const next = () => {
    if (startIndex + itemsPerView < category.length) {
      setStartIndex((prev) => prev + itemsPerView);
    }
  };

  const prev = () => {
    if (startIndex - itemsPerView >= 0) {
      setStartIndex((prev) => prev - itemsPerView);
    }
  };

  const visibleCategories = category.slice(
    startIndex,
    startIndex + itemsPerView
  );

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            Our Categories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Medical Equipment Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of medical equipment across various
            specialties
          </p>
        </div>

        <div className="relative">
          <div
            className={`grid gap-6 ${
              itemsPerView === 2
                ? "grid-cols-2"
                : itemsPerView === 4
                ? "grid-cols-2 md:grid-cols-4"
                : "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
            }`}
          >
            {visibleCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-green-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="p-4">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 w-full h-[150px] object-cover"
                  />
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {cat.name}
                      </h3>
                      <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px]">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 mt-auto">
                  <Link
                    className="w-full border border-green-600 bg-green-600  hover:bg-green-500 px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-center text-white font-semibold"
                    href={`/products/${cat.id}`}
                  >
                    View Products
                    <ChevronRight className="ml-1 h-4 w-4 hidden md:block" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className="border border-green-600 text-green-600 hover:bg-green-50 bg-transparent p-2 rounded-md transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              disabled={startIndex + itemsPerView >= category.length}
              className="border border-green-600 text-green-600 hover:bg-green-50 bg-transparent p-2 rounded-md transition-colors disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
