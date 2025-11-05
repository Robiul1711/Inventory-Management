"use client";
import React, { useState } from "react"; // Removed useEffect and useRef
import { FiFilter, FiEdit, FiTrash2 } from "react-icons/fi"; // Removed FiMoreVertical
import { Modal, Button } from "antd"; // Added antd components

const FactoryPayment = () => {
  // State for the new modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Hardcoded orders data (as provided)
  const orders = [
    {
      date: "Aug 28, 2025",
      order: "#182681212",
      product: "T2 Tribes - 2 Sukash Poster",
      material: "Acrylic Class",
      cost: "$3.75",
      customer: "Ashik",
      platform: "Stores",
      status: "Pending",
    },
    {
      date: "Aug 28, 2025",
      order: "#182681213",
      product: "T2 Tribes - 2 Sukash Poster",
      material: "Acrylic Class",
      cost: "$3.75",
      customer: "Tommy",
      platform: "Stores",
      status: "Pending",
    },
    {
      date: "Aug 28, 2025",
      order: "#182681214",
      product: "T2 Tribes - 2 Sukash Poster",
      material: "Acrylic Class",
      cost: "$3.75",
      customer: "Anik",
      platform: "Stores",
      status: "Pending",
    },
    // ... other orders
  ];

  // --- Modal Handler Functions ---
  const showModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // Add your logic for "Send & Mark Paid" here
    console.log("Marking order as paid:", selectedOrder);
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  // Custom Modal Title to match the image
  const modalTitle = (
    <div style={{
        background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"
    }} className="!px-6 !py-4 !text-white">
      <h3 className="text-xl font-semibold">Factory payment confirmation</h3>
      <p className="text-sm  font-normal">
        Provide How The Platform Appears To Different Users With Their Specific
        Permissions And Access Levels.
      </p>
    </div>
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50 ">
      {/* --- Top Stats --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* ... stats cards ... */}
        <div className="bg-white rounded-2xl shadow-sm p-4 border">
          <p className="text-gray-500 text-sm">Current month payment</p>
          <h2 className="text-2xl font-semibold text-blue-600">$12,90.83</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-4 border">
          <p className="text-gray-500 text-sm">Total payment ever</p>
          <h2 className="text-2xl font-semibold text-orange-400">$0.00</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-4 border">
          <p className="text-gray-500 text-sm">Outstanding payments</p>
          <h2 className="text-2xl font-semibold text-purple-500">$23,230.83</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-4 border">
          <p className="text-gray-500 text-sm">Product order</p>
          <h2 className="text-2xl font-semibold text-green-600">14</h2>
        </div>
      </div>

      {/* --- Smart Filter --- */}
      <div className="bg-white rounded-2xl shadow-sm border p-4 flex items-center justify-between">
        {/* ... filter content ... */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full">
            <FiFilter className="text-blue-500" />
          </div>
          <div>
            <p className="font-medium text-gray-700">Smart Filter</p>
            <p className="text-sm text-gray-400">Advanced filtering options</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="border !border-blue-500 !text-blue-500 px-3 py-1 rounded-lg text-sm">
            Active
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
            Clear filters
          </button>
          <div className="text-gray-400 text-sm flex items-center">0/7</div>
        </div>
      </div>

      {/* --- Factory Order Table --- */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Factory Order</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Date</th>
                <th className="p-3">Order</th>
                <th className="p-3">Product Details</th>
                <th className="p-3">Material</th>
                <th className="p-3">Cost</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Platform</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b last:border-0 hover:bg-gray-50 relative"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">{order.order}</td>
                  <td className="p-3">{order.product}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                      {order.material}
                    </span>
                  </td>
                  <td className="p-3 font-medium">{order.cost}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.platform}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                      {order.status}
                    </span>
                  </td>

                  {/* --- Action Buttons --- */}
                  <td className="p-3 text-right relative">
                    <div className="flex justify-center items-center gap-2">
                      {/* Edit Button (opens MODAL) */}
                      <button
                        onClick={() => showModal(order)} // <-- UPDATED
                        className="p-2 rounded-md hover:bg-gray-100 text-blue-600"
                      >
                        <FiEdit size={18} />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => alert("Delete clicked")}
                        className="p-2 rounded-md hover:bg-gray-100 text-red-500"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>

                    {/* --- Old Dropdown (REMOVED) --- */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Ant Design Modal --- */}
      {selectedOrder && (
        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={900}
          footer={null}
        >
<div className=" !px-6 !py-4">
              {/* Payment Summary */}
          <div className="bg-green-50 rounded-lg p-4 my-4 border border-green-200">
            <div className="flex items-center space-x-8">
              <div>
                <span className="text-sm text-gray-600">Orders</span>
                <span className="text-lg font-bold block bg-white px-4 py-1 rounded">
                  1
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Amount</span>
                <span className="text-lg font-bold block bg-white px-4 py-1 rounded">
                  {selectedOrder.cost}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-green-200 text-green-800 px-3 py-1 rounded-full">
                  {selectedOrder.order}
                </span>
              </div>
            </div>
          </div>

          {/* PDF Report Preview */}
          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg text-center font-medium mb-4 hover:bg-gray-200">
            Pdf report preview
          </button>

          {/* Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Email Preview */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 h-full">
              <h4 className="font-semibold text-blue-700 mb-2">
                Email Preview
              </h4>
              <div className="text-sm text-gray-700 space-y-2 bg-white p-3 rounded h-64 overflow-y-auto">
                <p>Hello,</p>
                <p>This is Ben Ari Group Corp.</p>
                <p>
                  Payment has been made for the Factory Order (
                  <strong>{selectedOrder.order}</strong>) listed in the
                  attached report.
                </p>
                <p>
                  Please check your email for the detailed payment report with
                  order dates, factory order numbers, prices, and totals.
                </p>
                <br />
                <p>Best Regards,</p>
                <p>Avigdor Ben-Ari</p>
                <p>Ben Ari Group Corp</p>
                <p>702 Avenue M</p>
              </div>
            </div>
            {/* Whatsapp Preview */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 h-full">
              <h4 className="font-semibold text-green-700 mb-2">
                Whatsapp Preview
              </h4>
              <div className="text-sm text-gray-700 space-y-2 bg-white p-3 rounded h-64 overflow-y-auto">
                <p>Hello,</p>
                <p>This is Ben Ari Group Corp.</p>
                <p>
                  Payment has been made for all the factory orders listed in
                  the attached report.
                </p>
                <p>
                  Please check your email for the detailed payment report with
                  order dates, factory order numbers, prices, and totals.
                </p>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Preview
              </label>
              <input
                type="text"
                id="email"
                defaultValue="Factory@example.com"
                className="w-full border rounded-lg p-2 mt-1 border-gray-300"
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate Multiple Emails With Commas
              </p>
            </div>
            <div>
              <label
                htmlFor="whatsapp"
                className="text-sm font-medium text-gray-700"
              >
                Whatsapp Preview
              </label>
              <input
                type="text"
                id="whatsapp"
                defaultValue="+1234567890"
                className="w-full border rounded-lg p-2 mt-1 border-gray-300"
              />
              <p className="text-xs text-gray-500 mt-1">
                (Include Country Code: +1, +44, Etc.)
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-700 mb-2">
              Actions On 'Send & Mark Paid'
            </h4>
            <ul className="list-disc list-inside text-sm text-blue-600 space-y-1">
              <li>Generate PDF Report With Order Details</li>
              <li>Send Email With PDF Attachment</li>
              <li>Send WhatsApp Messages</li>
              <li>Mark Orders As Paid In System</li>
              <li>Update Dashboard Statistics</li>
            </ul>
          </div>
</div>

<div className=" flex items-center justify-end gap-4 p-4">
    <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              onClick={handleOk}
              className="bg-green-500 hover:bg-green-600 border-green-500"
            >
              Send & Mark Paid
            </Button>
</div>
        </Modal>
      )}
    </div>
  );
};

export default FactoryPayment;