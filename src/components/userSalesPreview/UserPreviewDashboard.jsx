import { Modal } from "antd";
import { User } from "lucide-react";
import React from "react";
import {Download, Upload, Printer, FileText, Plus, Filter} from 'lucide-react'

const UserPreviewDashboard = ({ selectUser, handleCancel }) => {
  const salesData = [
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "12 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "12 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "12 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "12 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "12 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "17 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "12 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
    {
      date: "Aug 28, 2025",
      customer: "Aisle One Prestoric",
      product: "12 Filters - 2 Bakusin Poster",
      payment: "Paid",
      production: "$3.73",
      customerCost: "$3.73",
    },
  ];
  return (
    <Modal
      open={selectUser}
      onCancel={handleCancel}
      footer={null}
      closable={false}
      width={900}
      styles={{
        body: { padding: 0 },
      }}
    >
      {/* Header */}
      <div
        className="text-white px-4 py-3 flex items-center justify-between"
        style={{
          background:
            "linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="bg-teal-700 rounded-full p-1.5">
            <User size={16} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Preview yossi biiton</h3>
            <p className="text-xs text-teal-100">
              Configure Permision For Yossi Biiton
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-white hover:bg-teal-700 rounded px-2 py-1 text-xs transition-colors flex items-center gap-1">
            <Download size={14} />
            <span>Export PDF</span>
          </button>
          <button className="text-white hover:bg-teal-700 rounded px-2 py-1 text-xs transition-colors flex items-center gap-1">
            <Upload size={14} />
            <span>Export Excel</span>
          </button>
          <button className="text-white hover:bg-teal-700 rounded px-2 py-1 text-xs transition-colors flex items-center gap-1">
            <Printer size={14} />
            <span>Print</span>
          </button>
          <button className="text-white hover:bg-teal-700 rounded px-2 py-1 text-xs transition-colors flex items-center gap-1">
            <FileText size={14} />
            <span>Export Data</span>
          </button>
          {/* <button className="text-white bg-teal-700 hover:bg-teal-800 rounded-full p-1 transition-colors">
            <Plus size={16} />
          </button> */}
          <button
            onClick={handleCancel}
            className="text-white hover:bg-teal-700 rounded-full p-1 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-4 bg-gray-50">
        {/* Info Text */}
        <div className="mb-4 text-xs text-gray-600">
          View and export your sales data with filtering and statistics
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <span className="text-xs text-gray-500">Active order</span>
            </div>
            <div className="text-xl font-bold">$452</div>
            <div className="text-xs text-gray-500">Total sales</div>
          </div>

          <div className="bg-white rounded-lg p-3 border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-xs text-gray-500">Inventory</span>
            </div>
            <div className="text-xl font-bold">12</div>
            <div className="text-xs text-gray-500">Products sold</div>
          </div>

          <div className="bg-white rounded-lg p-3 border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
              </div>
              <span className="text-xs text-gray-500">$10500 Earned</span>
            </div>
            <div className="text-xl font-bold">2</div>
            <div className="text-xs text-gray-500">Paid sales</div>
          </div>

          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <span className="text-xs text-red-600">$35100 pending</span>
            </div>
            <div className="text-xl font-bold">8</div>
            <div className="text-xs text-gray-500">Pending</div>
          </div>

          <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <span className="text-xs text-purple-600">$10500 Earned</span>
            </div>
            <div className="text-xl font-bold">$857.64</div>
            <div className="text-xs text-gray-500">Yossi Biiton Profit</div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <Filter size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold">Smart Filter</div>
              <div className="text-xs text-gray-500">
                Dynamic filtering options
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors flex items-center gap-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              Active
            </button>
            <button className="px-3 py-1.5 text-xs bg-blue-500 !text-white rounded hover:bg-blue-600 transition-colors">
              Clear filters
            </button>
          </div>
        </div>

        {/* Sales Table */}
        <div className="bg-white rounded-lg border">
          <div className="p-4">
            <h3 className="font-semibold text-sm mb-3">My sales(10 sales)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      Customer
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      Product Details
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      Payment Status
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      Production Cost
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      Customer Cost
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sale, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2 text-gray-600">{sale.date}</td>
                      <td className="py-3 px-2 text-gray-600">
                        {sale.customer}
                      </td>
                      <td className="py-3 px-2 text-gray-600">
                        {sale.product}
                      </td>
                      <td className="py-3 px-2">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                          {sale.payment}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-gray-600">
                        {sale.production}
                      </td>
                      <td className="py-3 px-2 text-gray-600">
                        {sale.customerCost}
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex gap-2">
                          <button className="text-gray-500 hover:text-blue-500">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-red-500">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserPreviewDashboard;
