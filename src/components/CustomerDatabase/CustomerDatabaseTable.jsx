import React, { useState } from 'react';
import { Search, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const CustomerDatabaseTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const customers = [
    {
      id: 1,
      storeName: 'Aug 28, 2025',
      owner: 'Aisle One Passoic',
      location: 'New York, USA',
      phone: '+071-901202020',
      email: 'Ashikuzzamm@Gmail.Com',
      notes: '$3.73',
    },
    {
      id: 2,
      storeName: 'Aug 28, 2025',
      owner: 'Aisle One Passoic',
      location: '12 Tribes - 2 Sukkah Poster',
      phone: '+071-901202020',
      email: 'Ashikuzzamm@Gmail.Com',
      notes: '$3.73',
    },
    {
      id: 3,
      storeName: 'Aug 28, 2025',
      owner: 'Aisle One Passoic',
      location: '12 Tribes - 2 Sukkah Poster',
      phone: '+071-901202020',
      email: 'Ashikuzzamm@Gmail.Com',
      notes: '$3.73',
    },
    {
      id: 4,
      storeName: 'Aug 28, 2025',
      owner: 'Aisle One Passoic',
      location: '12 Tribes - 2 Sukkah Poster',
      phone: '+071-901202020',
      email: 'Ashikuzzamm@Gmail.Com',
      notes: '$3.73',
    },
    {
      id: 5,
      storeName: 'Aug 28, 2025',
      owner: 'Aisle One Passoic',
      location: '12 Tribes - 2 Sukkah Poster',
      phone: '+071-901202020',
      email: 'Ashikuzzamm@Gmail.Com',
      notes: '$3.73',
    },
  ];

  const totalCustomers = 101;
  const itemsPerPage = 10;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, 245);

  return (
    <div className=" sm:bg-white sm:p-6">
      <div className="">
{/* Header */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 mt-6">
  {/* Left Section */}
  <div className="flex flex-wrap items-center gap-3">
    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
      Customer Database
    </h1>
    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md whitespace-nowrap">
      101 Customers
    </span>
  </div>

  {/* Right Section */}
  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
    101 of 101 customers
  </span>
</div>

        {/* Smart Filter */}
        <div className="bg-white border border-gray-200 rounded-lg mb-6">
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-gray-900">
                Smart Filter
              </h2>
              <p className="text-xs text-gray-500">Advance filtering options</p>
            </div>
            <span className="text-sm text-gray-500">101 OF 101 customer</span>
          </div>

          {/* Search Bar */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products by name, SKU, material, or category..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Customer Count */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Customer(101)
        </h3>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="w-12 px-6 py-3">
                    {/* <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300"
                    /> */}
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Store Name
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {customer.storeName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {customer.owner}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {customer.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {customer.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {customer.notes}
                    </td>
                    <td className="px-6 py-4">
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
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-white">
            <div className="text-sm text-gray-600">
              {startItem} - {endItem} of 245
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="px-4 py-2 bg-blue-600 !text-white rounded text-sm font-medium">
                {currentPage}
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDatabaseTable;