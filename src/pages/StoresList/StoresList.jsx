import React, { useState } from "react";
import { Search, Edit2, Trash2, Mail } from "lucide-react";

const StoresList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const customers = [
    {
      id: 1,
      name: "Jonathan Zemmal",
      gallery: "Sheehy Toyota of Stafford",
      phone: "(885)371-1496",
      email: "ashikuzzaman123@gmail.com",
      partnership: "Partnership Since 2025",
      status: "Active",
    },
    {
      id: 2,
      name: "Grand Judaica",
      gallery: "Sheehy Toyota of Stafford",
      phone: "(885)371-1496",
      email: "ashikuzzaman123@gmail.com",
      partnership: "Partnership Since 2025",
      status: "Active",
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.gallery.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products by name, SKU, material, or category..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <span className="text-blue-600 text-sm font-medium">
                2 Stores
              </span>
            </div>
          </div>
        </div>

        {/* Customer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header with Name and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {customer.name}
                  </h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800">
                  {customer.status}
                </span>
              </div>

              {/* Customer Details */}
              <div className="space-y-2 mb-4 ml-8">
                <p className="text-sm text-gray-700">{customer.gallery}</p>
                <p className="text-sm text-gray-700">{customer.phone}</p>
                <p className="text-sm text-gray-700">{customer.email}</p>
                <p className="text-sm text-gray-600 italic">
                  {customer.partnership}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium !text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors ml-8">
                  <Mail className="w-4 h-4" />
                  Contact Letter
                </button>
                <div className="flex items-center gap-2">
                  <button className="p-2 !text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 !text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No customers found
              </h3>
              <p className="text-sm text-gray-600">
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoresList;