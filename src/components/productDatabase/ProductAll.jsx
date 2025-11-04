import React, { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";
import { Modal, Input } from "antd";
import Product from "@/assets/images/product.png";

const ProductAll = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [quantity, setQuantity] = useState("");

  const products = Array(10)
    .fill({
      img: "https://via.placeholder.com/80x50",
      sku: "Vinyl-20-73",
      name: "12 Tribes–1 Sukkah Poster",
      category: "Sukkah Posters",
      type: "Vinyl Poster",
      dimension: "20x28",
      price: "$24.90",
    })
    .map((p, idx) => ({ ...p, id: idx }));

  const handleCheckboxChange = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(products.map((p) => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleDropdownClick = (type) => {
    setModalType(type);
    setIsModalVisible(true);
    setShowDropdown(false);
  };

  const handleModalOk = () => {
    // Handle save logic here
    console.log(`${modalType} - Quantity: ${quantity}`);
    setIsModalVisible(false);
    setQuantity("");
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setQuantity("");
  };

  return (
    <div className="w-full px-6 py-4 bg-white">
      {/* Top Search + Filter */}
      <div className="flex items-center justify-between mb-4 text-black">
        <input
          type="text"
          placeholder="Search products by name, SKU, material, or category..."
          className="w-[60%] border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-blue-500 text-black"
        />

        <div className="flex items-center gap-3">
          {/* Sort */}
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-blue-500 text-black">
            <option>Name A-Z</option>
            <option>Name Z-A</option>
          </select>

          {/* Filter Btn */}
          <button className="bg-blue-600 !text-white px-4 py-3 rounded-md text-sm hover:bg-blue-700">
            Filter
          </button>

          {/* Actions Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="border-blue-600 border-[1px] text-black px-4 py-3 rounded-md text-sm flex items-center gap-2"
            >
              Actions ({selectedProducts.length})
              <FiChevronDown />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && selectedProducts.length > 0 && (
              <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleDropdownClick("Send To Art Inventory")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-sm border-b"
                >
                  <span className="text-lg">🎨</span>
                  <span>Send To Art Inventory</span>
                </button>
                <button
                  onClick={() => handleDropdownClick("Send To Inventory")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-sm border-b"
                >
                  <span className="text-lg">📦</span>
                  <span>Send To Inventory</span>
                </button>
                <button
                  onClick={() => handleDropdownClick("Creative Bundle")}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-sm border-b"
                >
                  <span className="text-lg">➕</span>
                  <span>Creative Bundle</span>
                </button>
                <button
                  onClick={() => {
                    console.log("Delete Selected");
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-sm text-red-600"
                >
                  <span className="text-lg">🗑️</span>
                  <span>Delete Selected</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Total Products Count */}
      <p className="text-sm font-medium mb-2">
        Products (2213 total, showing 50)
      </p>

      {/* Table */}
      <div className="border rounded-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="p-3">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedProducts.length === products.length}
                />
              </th>
              <th className="p-3">SKU</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Size</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {products.map((p, i) => (
              <tr
                key={i}
                className={`border-b hover:bg-gray-50 transition ${
                  selectedProducts.includes(p.id) ? "bg-blue-50" : ""
                }`}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(p.id)}
                    onChange={() => handleCheckboxChange(p.id)}
                  />
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

      {/* Modal */}
      <Modal
        title={
          <div className="flex items-center gap-2 py-4 px-6">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
              📦
            </span>
            <span className="font-semibold">{modalType}</span>
          </div>
        }
        open={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
        closeIcon={<span className="text-gray-400 hover:text-gray-600">✕</span>}
      >
        <div className="py-4 px-6">
          <p className="text-sm text-gray-600 mb-2">
            Add {selectedProducts.length} Selected Products To Regular Inventory
            With A Quantity
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Quantity Per Products
            </label>
            <Input
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full"
            />
          </div>

          <p className="text-xs text-gray-500">
            Each Selected Product Will Be Added To Inventory With This Quantity
          </p>
        </div>

        <div className="w-full flex justify-end items-end pb-4 px-4">
          <button
            key="save"
            onClick={handleModalOk}
            className="px-4 py-2 bg-blue-600 !text-white rounded-lg "
          >
            Save Change
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductAll;
