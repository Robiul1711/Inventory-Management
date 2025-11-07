import React, { useState } from "react";
import {
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Plus,
  Share2,
  Edit,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { Modal } from "antd";
import "antd/dist/reset.css";

const SalesList = () => {
  const [expandedSale, setExpandedSale] = useState(null);
  const [selectedSales, setSelectedSales] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const salesData = [
    {
      id: "#1001",
      saleId: "Sale #113",
      date: "Aug 14, 2025",
      type: "Direct Sale",
      customer: "General",
      customerName: "Addie Orie Posseic",
      orderNumber: "Factory Order #14374",
      amount: "$220.00",
      shipping: "+$20.00 shipping",
      status: "Payment Included",
      customerDetails: "Customer: $320.00 | Net Profit: $210.00",
      revenue: "$150.00",
      products: [
        {
          code: "WL12559340",
          name: "10 inline - 2 subbin power",
          variantCode: "WL02582 - 7197",
          price: "$15.00",
          qty: "18",
          subtotal: "$315.00",
        },
      ],
      profitBreakdown: {
        revenue: "$15,000.00",
        productionCost: "-$ 3,73.00",
        partnerShare: "-$ 3,73.00",
        netProfit: "$87,00.00",
      },
    },
    {
      id: "#1002",
      saleId: "Sale #112",
      date: "Aug 14, 2025",
      type: "Direct Sale",
      customer: "General",
      customerName: "Addie Orie Posseic",
      orderNumber: "Factory Order #14374",
      amount: "$220.00",
      shipping: "+$20.00 shipping",
      status: "Payment Included",
      customerDetails: "Customer: $320.00 | Net Profit: $210.00",
      revenue: "$150.00",
      products: [
        {
          code: "WL12559340",
          name: "10 inline - 2 subbin power",
          variantCode: "WL02582 - 7197",
          price: "$15.00",
          qty: "18",
          subtotal: "$315.00",
        },
      ],
      profitBreakdown: {
        revenue: "$15,000.00",
        productionCost: "-$ 3,73.00",
        partnerShare: "-$ 3,73.00",
        netProfit: "$87,00.00",
      },
    },
    {
      id: "#1003",
      saleId: "Sale #111",
      date: "Aug 14, 2025",
      type: "Direct Sale",
      customer: "General",
      customerName: "Addie Orie Posseic",
      orderNumber: "Factory Order #14374",
      amount: "$220.00",
      shipping: "+$20.00 shipping",
      status: "Payment Included",
      customerDetails: "Customer: $320.00 | Net Profit: $210.00",
      revenue: "$150.00",
      products: [
        {
          code: "WL12559340",
          name: "10 inline - 2 subbin power",
          variantCode: "WL02582 - 7197",
          price: "$15.00",
          qty: "18",
          subtotal: "$315.00",
        },
      ],
      profitBreakdown: {
        revenue: "$15,000.00",
        productionCost: "-$ 3,73.00",
        partnerShare: "-$ 3,73.00",
        netProfit: "$87,00.00",
      },
    },
    {
      id: "#1004",
      saleId: "Sale #110",
      date: "Aug 14, 2025",
      type: "Direct Sale",
      customer: "General",
      customerName: "Addie Orie Posseic",
      orderNumber: "Factory Order #14374",
      amount: "$220.00",
      shipping: "+$20.00 shipping",
      status: "Payment Included",
      customerDetails: "Customer: $320.00 | Net Profit: $210.00",
      revenue: "$150.00",
      products: [
        {
          code: "WL12559340",
          name: "10 inline - 2 subbin power",
          variantCode: "WL02582 - 7197",
          price: "$15.00",
          qty: "18",
          subtotal: "$315.00",
        },
      ],
      profitBreakdown: {
        revenue: "$15,000.00",
        productionCost: "-$ 3,73.00",
        partnerShare: "-$ 3,73.00",
        netProfit: "$87,00.00",
      },
    },
  ];

  const toggleExpand = (index) => {
    setExpandedSale(expandedSale === index ? null : index);
  };

  const handleCheckbox = (index) => {
    if (selectedSales.includes(index)) {
      setSelectedSales(selectedSales.filter((i) => i !== index));
    } else {
      setSelectedSales([...selectedSales, index]);
    }
  };

  const showMarkAsPaidModal = () => {
    if (selectedSales.length > 0) {
      setIsModalVisible(true);
    }
  };
  const [paymentReport, setPaymentReport] = useState(false);
  const [viaEmail, setViaEmail] = useState(false);

  const handleConfirmPaid = () => {
    // Handle marking as paid logic here
    console.log("Marked as paid:", selectedSales);
    setIsModalVisible(false);
    setSelectedSales([]);
    setPaymentReport(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const calculateTotalRevenue = () => {
    return selectedSales
      .reduce((total, index) => {
        const amount = parseFloat(salesData[index].revenue.replace("$", ""));
        return total + amount;
      }, 0)
      .toFixed(2);
  };

  if (salesData.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="bg-white rounded-lg">
          <div className="p-16 flex flex-col items-center justify-center">
            <div className="mb-4">
              <ShoppingCart
                className="w-16 h-16 text-gray-300"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              No Sales found
            </h2>
            <p className="text-sm text-gray-500">
              Add your first sale to get started
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:bg-gray-50 min-h-screen sm:p-6">
      <div className="bg-white rounded-lg">
{/* Header */}
<div className="p-3 sm:p-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
  {/* Left side */}
  <div className="flex items-center gap-2">
    <ShoppingCart className="w-5 h-5 text-blue-600" />
    <h1 className="text-base sm:text-lg font-semibold text-black">
      Sales List (3)
    </h1>
  </div>

  {/* Right side */}
  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
    <div className="flex items-center flex-wrap gap-2 text-sm">
      <span className="text-gray-600 whitespace-nowrap">
        Showing 1 to 3 of 3 Sales show:
      </span>
      <select className="px-3 py-1 border border-gray-300 text-gray-900 rounded text-sm">
        <option>50</option>
        <option>100</option>
        <option>200</option>
      </select>
    </div>

    {selectedSales.length > 0 && (
      <button
        onClick={showMarkAsPaidModal}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        <CheckCircle2 className="w-4 h-4" />
        Mark as paid
      </button>
    )}

    <button className="text-black px-3 sm:px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium">
      Already Unpaid
    </button>
  </div>
</div>

{/* Sales List */}
<div className="divide-y">
  {salesData.map((sale, index) => (
    <div
      key={index}
      className={`bg-white ${
        selectedSales.includes(index) ? "bg-blue-50" : ""
      }`}
    >
      {/* Main Row */}
      <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 overflow-x-auto">
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={selectedSales.includes(index)}
            onChange={() => handleCheckbox(index)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded cursor-pointer"
          />

          {/* ID Badge */}
          <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs sm:text-sm font-medium text-center min-w-[50px]">
            {sale.id}
          </div>
        </div>

        {/* Info badges (scrollable on small) */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <div className="text-blue-600 font-medium">{sale.date}</div>

          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {sale.type}
          </div>

          <div className="bg-purple-50 text-purple-700 px-2 py-1 rounded font-medium">
            {sale.customer}
          </div>

          <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">
            {sale.orderNumber}
          </div>

          <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">
            {sale.status}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Amount */}
        <div className="text-right min-w-[100px]">
          <div className="text-green-600 font-semibold text-sm sm:text-base">
            {sale.amount}
          </div>
          <div className="text-gray-500 text-xs">{sale.shipping}</div>
          <div className="text-gray-500 text-xs">{sale.status}</div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>

      {/* Expandable Section */}
      <div className="px-3 sm:px-4 pb-4">
        <button
          onClick={() => toggleExpand(index)}
          className="flex items-center gap-2 text-gray-700 text-sm font-medium hover:text-gray-900"
        >
          {expandedSale === index ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
          Direct Sale
        </button>

        <div className="text-xs text-gray-500 ml-6 mt-1">
          {sale.customerDetails}
        </div>

        {expandedSale === index && (
          <div className="mt-3 ml-4 border-l-4 border-yellow-400 pl-4 overflow-x-auto">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Product Sold
            </h3>

            {/* Product Table */}
            <div className="bg-gray-50 rounded-lg overflow-hidden min-w-[600px]">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">
                      Product Code
                    </th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">
                      Name
                    </th>
                    <th className="text-left py-2 px-3 font-medium text-gray-700">
                      Price/Qty
                    </th>
                    <th className="text-right py-2 px-3 font-medium text-gray-700">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sale.products.map((product, pIndex) => (
                    <tr key={pIndex} className="border-b">
                      <td className="py-2 px-3 text-blue-600 font-medium">
                        {product.code}
                      </td>
                      <td className="py-2 px-3">
                        <div className="text-gray-900">{product.name}</div>
                        <div className="text-gray-500 text-xs">
                          {product.variantCode}
                        </div>
                      </td>
                      <td className="py-2 px-3 text-gray-900">
                        {product.price} × {product.qty}
                      </td>
                      <td className="py-2 px-3 text-right text-gray-900 font-medium">
                        {product.subtotal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Subtotal */}
              <div className="flex justify-end py-2 px-3 border-t bg-white">
                <div className="text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="ml-2 font-semibold text-gray-900">
                    $315.00
                  </span>
                </div>
              </div>
            </div>

            {/* Profit Breakdown */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Profit Breakdown
                </h3>
              </div>

              <div className="space-y-1">
                {[
                  ["Revenue:", sale.profitBreakdown.revenue, "text-green-600"],
                  [
                    "Production Cost:",
                    sale.profitBreakdown.productionCost,
                    "text-red-600",
                  ],
                  [
                    "Partner: Yossi Bitton",
                    sale.profitBreakdown.partnerShare,
                    "text-red-600",
                  ],
                ].map(([label, value, color], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-1 text-sm"
                  >
                    <span className="text-gray-700">{label}</span>
                    <span className={`font-semibold ${color}`}>{value}</span>
                  </div>
                ))}

                <div className="flex justify-between items-center py-2 border-t mt-1">
                  <span className="text-sm font-semibold text-blue-600">
                    My Net Profit
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {sale.profitBreakdown.netProfit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Confirmation Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        closeIcon={
          <span className="text-gray-400 hover:text-gray-600 text-xl">×</span>
        }
        width={500}
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div> */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Confirm mark as paid
              </h2>
              <p className="text-sm text-blue-600">
                Configure Permission for read status
              </p>
            </div>
          </div>

          {/* Sales List */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Enter Returned Quantity for Each Itbem
            </h3>
            <div className="space-y-2">
              {selectedSales.map((saleIndex) => (
                <div
                  key={saleIndex}
                  className="flex justify-between items-center py-2"
                >
                  <span className="text-sm text-gray-700">
                    {salesData[saleIndex].saleId}:{" "}
                    {salesData[saleIndex].customerName}
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    {salesData[saleIndex].revenue}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Revenue */}
          <div className="flex justify-between items-center py-3 border-t border-b mb-6">
            <span className="text-base font-semibold text-gray-900">
              Total Revenue
            </span>
            <span className="text-base font-bold text-green-600">
              ${calculateTotalRevenue()}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={handleCancel}
              className="px-6 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmPaid}
              className="px-6 py-2 text-sm !text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
            >
              Confirm Mark As Paid
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={paymentReport}
        onCancel={() => setPaymentReport(false)}
        footer={null}
        closeIcon={
          <span className="text-gray-400 hover:text-gray-600 text-xl">×</span>
        }
        width={500}
      >
        <div className="p-4">
          {" "}
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div> */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Payment report
              </h2>
              <p className="text-sm text-blue-600">
                Configure permission for yossi bitton
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          {/* --- Summary Section --- */}
          <div className="mb-2">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Summary
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Sales</p>
                <p className="text-lg font-bold text-blue-600">50</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
                <p className="text-lg font-bold text-green-600">$24,99.00</p>
              </div>
            </div>
          </div>

          <hr className="" />

          {/* --- Sales Details Section --- */}
          <div className="">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Sales Details
            </h3>
            <div className="space-y-3">
              {/* Card 1 */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-semibold text-gray-800">
                    Sales#1291
                  </h4>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Total Revenue</p>
                    <p className="font-semibold text-green-600">$24,99.00</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>8-28-2025</p>
                  <p>SKU very stores 34-98 | Size: 24k34</p>
                  <p>Items: 10X $15</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-semibold text-gray-800">
                    Sales#1291
                  </h4>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Total Revenue</p>
                    <p className="font-semibold text-green-600">$24,99.00</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>8-28-2025</p>
                  <p>SKU very stores 34-98 | Size: 24k34</p>
                  <p>Items: 10X $15</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Button Section --- */}
          <div className="flex justify-end items-center gap-3 mt-3">
            {/* <button className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold text-sm hover:bg-gray-300 transition-colors">
              Cancel
            </button> */}
            {/* <button className="px-5 py-2 rounded-lg bg-green-500 !text-white font-semibold text-sm hover:bg-green-600 transition-colors">
              Download
            </button> */}
            <button
              onClick={() => {
                setViaEmail(true);
                setPaymentReport(false);
              }}
              className="px-5 py-2 rounded-lg bg-blue-600 !text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Send Email
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={viaEmail}
        onCancel={() => setViaEmail(false)}
        // I've replaced footer={null} with the actual buttons from your image
        footer={null}
        closeIcon={
          <span className="text-gray-400 hover:text-gray-600 text-xl">×</span>
        }
        width={500}
      >
        {/* This is your existing header section */}
        <div className="p-4">
          {" "}
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Send payment report via email
              </h2>
              <p className="text-sm text-blue-600">
                Configure permission for yossi bitton
              </p>
            </div>
          </div>
        </div>

        {/* This is the new content you requested */}
        <div className="px-4 pb-4">
          {/* --- Search Section --- */}
          <div className="mb-4">
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Search & Select Product
            </h3>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Inline SVG for the search icon */}
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2} // Bolder stroke like the image
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Type To Search Products By Name, SKU, Material..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>
          </div>

          {/* --- Email Preview Section --- */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Email preview:
            </h3>
            {/* The white preview card */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="text-gray-500">Subject: </span>
                  <span className="font-semibold text-gray-800">
                    Payment report
                  </span>
                </p>
                <p className="text-sm">
                  <span className="text-gray-500">Messages: </span>
                  <span className="font-semibold text-gray-800">
                    Payment report
                  </span>
                </p>
                <p className="font-semibold text-gray-800 text-sm">
                  2 sales marked as paid
                </p>
                <p className="font-semibold text-gray-800 text-sm">
                  Total revenue: $4,55.00
                </p>
                <p className="font-semibold text-gray-800 text-sm">
                  Total revenue: 8-28-2025 6:02 PM
                </p>
              </div>

              <hr className="my-4 border-gray-200" />

              <div>
                <p className="text-red-500 font-semibold text-sm">
                  Pdf attachment
                </p>
              </div>
            </div>

            <div className=" mt-4">
              <button
                onClick={() => {
                  setViaEmail(false);
                  setPaymentReport(true);
                }}
                className="px-5 py-2 rounded-lg bg-blue-600 !text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SalesList;
