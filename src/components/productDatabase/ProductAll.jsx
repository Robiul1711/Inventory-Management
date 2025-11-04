import React from "react";
import { FiEdit2, FiTrash2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Product from "@/assets/images/product.png";

const ProductAll = () => {
  const products = Array(10).fill({
    img: "https://via.placeholder.com/80x50",
    sku: "Vinyl-20-73",
    name: "12 Tribes–1 Sukkah Poster",
    category: "Sukkah Posters",
    type: "Vinyl Poster",
    dimension: "20x28",
    price: "$24.90",
  });

  return (
    <div className="w-full px-6 py-4 bg-white">
      {/* Top Search + Filter */}
      <div className="flex items-center justify-between mb-4 !text-black">
        <input
          type="text"
          placeholder="Search products by name, SKU, material, or category..."
          className="w-[60%] border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-blue-500 !text-black"
        />

        <div className="flex items-center gap-3">
          {/* Sort */}
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-blue-500 !text-black">
            <option>Name A-Z</option>
            <option>Name Z-A</option>
          </select>

          {/* Filter Btn */}
          <button className="bg-blue-600 !text-white px-4 py-3 rounded-md text-sm hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>

      {/* Total Products Count */}
      <p className="text-sm font-medium mb-2">
        Products (2213 total, showing 50)
      </p>

      {/* Table */}
      <div className="border rounded-md overflow-hidden">
        <table className="w-full text-left">
          {/* <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="p-3"></th>
              <th className="p-3">SKU</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Size</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead> */}

          <tbody className="text-sm text-gray-700">
            {products.map((p, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={Product}
                    className="w-14 h-8 rounded-md object-cover border"
                    alt="product"
                  />
                  {p.sku}
                </td>
                <td className="p-3">{p.name}</td>
                <td className="p-3 text-blue-600 cursor-pointer">
                  {p.category}
                </td>
                <td className="p-3">{p.type}</td>
                <td className="p-3">{p.dimension}</td>
                <td className="p-3">
                  <span className="bg-green-200 text-green-700 px-3 py-1 rounded-md">
                    {p.price}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-3 text-sm">
        <span>1 - 10 of 245</span>

        <div className="flex gap-2">
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <FiChevronLeft />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAll;
