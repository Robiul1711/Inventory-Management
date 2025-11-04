import React, { useState } from "react";
import { Edit2, Trash2, ChevronDown } from "lucide-react";
import ArtImage from "@/assets/images/art.png";

const ArtCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const collectionData = [
    {
      id: 1,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 2,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 3,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 4,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
  ];

  return (
    <div className=" bg-gray-50 p-6">
      <div className="">
        {/* Smart Filter Header */}
        <div
          className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold">
              V
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Smart Filter
              </h2>
              <p className="text-xs text-gray-500">Advance filtering options</p>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              filterOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Collection Header */}
        <div className="p-6">
          <h1 className="text-lg font-semibold text-gray-900 mb-4">
            Collection (67pieces)
          </h1>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Image
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Product
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    SKU
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    ART Type
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Gallery
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Days Collection
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Contract
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {collectionData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={item.image}
                        alt={item.product}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.product}
                      </div>
                      <div className="text-xs text-gray-500">{item.panels}</div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {item.sku}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {item.artType}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-xs space-y-1">
                        <div className="text-gray-600">
                          Beginning:{" "}
                          <span className="font-medium text-gray-900">
                            {item.gallery.beginning}
                          </span>
                        </div>
                        <div className="text-gray-600">
                          Build:{" "}
                          <span className="font-medium text-gray-900">
                            {item.gallery.build}
                          </span>
                        </div>
                        <div className="text-gray-600">
                          In stock:{" "}
                          <span className="font-medium text-gray-900">
                            {item.gallery.instock}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-blue-600 font-medium">
                        {item.daysCollection}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        {item.contract}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                          <Edit2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-600">1–10 of 245</div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                ‹
              </button>
              <button className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded">
                {currentPage}
              </button>
              <button
                className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCollection;
