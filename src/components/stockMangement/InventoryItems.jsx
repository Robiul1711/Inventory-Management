import React, { useState } from 'react';
import { Search, Filter, Edit2, Trash2, ChevronDown } from 'lucide-react';

const InventoryItems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Name A-Z');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      image: '🏠',
      product: '7 Species - panels',
      description: '7 panels 10-20 inches',
      sku: 'Fabric -10-02',
      category: 'Active',
      beginning: 30,
      sold: 30,
      inStock: 30,
      status: 'Instock'
    },
    {
      id: 2,
      image: '🏠',
      product: '7 Species - panels',
      description: '7 panels 10-20 inches',
      sku: 'Fabric -10-02',
      category: 'Active',
      beginning: 30,
      sold: 30,
      inStock: 30,
      status: 'Instock'
    },
    {
      id: 3,
      image: '🏠',
      product: '7 Species - panels',
      description: '7 panels 10-20 inches',
      sku: 'Fabric -10-02',
      category: 'Active',
      beginning: 30,
      sold: 30,
      inStock: 30,
      status: 'Instock'
    },
    {
      id: 4,
      image: '🏠',
      product: '7 Species - panels',
      description: '7 panels 10-20 inches',
      sku: 'Fabric -10-02',
      category: 'Active',
      beginning: 30,
      sold: 30,
      inStock: 30,
      status: 'Instock'
    }
  ]);

  const sortOptions = ['Name A-Z', 'Name Z-A', 'SKU', 'Stock Low-High', 'Stock High-Low'];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(inventoryItems.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit item:', id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setInventoryItems(inventoryItems.filter(item => item.id !== id));
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    }
  };

  const handleSort = (option) => {
    setSortBy(option);
    setShowSortDropdown(false);
    
    let sorted = [...inventoryItems];
    switch(option) {
      case 'Name A-Z':
        sorted.sort((a, b) => a.product.localeCompare(b.product));
        break;
      case 'Name Z-A':
        sorted.sort((a, b) => b.product.localeCompare(a.product));
        break;
      case 'SKU':
        sorted.sort((a, b) => a.sku.localeCompare(b.sku));
        break;
      case 'Stock Low-High':
        sorted.sort((a, b) => a.inStock - b.inStock);
        break;
      case 'Stock High-Low':
        sorted.sort((a, b) => b.inStock - a.inStock);
        break;
      default:
        break;
    }
    setInventoryItems(sorted);
  };

  const filteredItems = inventoryItems.filter(item =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   
      <div className="">
        {/* Header Section */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products by name, SKU, material, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border !text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700 font-medium">Sort by:</span>
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg !text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-sm ">{sortBy}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              
              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white !text-black border border-gray-200 rounded-lg shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSort(option)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium !text-white">Filter</span>
            </button>
          </div>
        </div>

        {/* Inventory Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Inventory items</h1>
{/* ✅ Responsive Table Wrapper */}
<div className="w-full rounded-lg border border-gray-200 overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[800px] text-sm">
      {/* Table Head */}
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="w-12 px-4 py-3">
            <input
              type="checkbox"
              checked={
                selectedItems.length === inventoryItems.length &&
                inventoryItems.length > 0
              }
              onChange={handleSelectAll}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700">
            Image
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700">
            Product
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700">
            SKU
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700">
            Category
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700">
            Stock Details
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700">
            Status
          </th>
          <th className="px-4 py-3 text-left font-semibold text-gray-700">
            Actions
          </th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="divide-y divide-gray-200">
        {filteredItems.map((item) => (
          <tr
            key={item.id}
            className="hover:bg-gray-50 transition-colors"
          >
            <td className="px-4 py-4">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </td>

            <td className="px-4 py-4">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-2xl">
                {item.image}
              </div>
            </td>

            <td className="px-4 py-4">
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">
                  {item.product}
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">
                  {item.description}
                </span>
              </div>
            </td>

            <td className="px-4 py-4 text-gray-900">{item.sku}</td>

            <td className="px-4 py-4">
              <span className="inline-flex px-3 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                {item.category}
              </span>
            </td>

            <td className="px-4 py-4 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-gray-600">
                  Beginning:{" "}
                  <span className="font-medium text-gray-900">
                    {item.beginning}
                  </span>
                </span>
                <span className="text-gray-600">
                  Sold:{" "}
                  <span className="font-medium text-gray-900">
                    {item.sold}
                  </span>
                </span>
                <span className="text-gray-600">
                  In stock:{" "}
                  <span className="font-medium text-gray-900">
                    {item.inStock}
                  </span>
                </span>
              </div>
            </td>

            <td className="px-4 py-4">
              <span className="inline-flex px-3 py-1 text-xs sm:text-sm font-medium text-green-700 bg-green-100 rounded">
                {item.status}
              </span>
            </td>

            <td className="px-4 py-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


        {/* Results Info */}
        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No items found matching your search.
          </div>
        )}
      </div>
   
  );
};

export default InventoryItems;