import React from "react";
import { FaFilter, FaUtensils, FaGasPump, FaBriefcase, FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";

const categoryData = [
  {
    title: "Food",
    color: "bg-[#C14C1B]",
    amount: "$750.25",
    expenses: [
      { name: "Lunch At Olympic Pita", place: "Sheehy Toyota Of Stafford", type: "Business" },
      { name: "Grocery Shopping", place: "Sheehy Toyota Of Stafford", type: "Business" },
    ],
    icon: <FaUtensils />,
  },
  {
    title: "Gas",
    color: "bg-[#0066CC]",
    amount: "$750.25",
    expenses: [
      { name: "Gas To Deal", place: "Sheehy Toyota Of Stafford", type: "Business" },
      { name: "Gas To Deal", place: "Sheehy Toyota Of Stafford", type: "Business" },
    ],
    icon: <FaGasPump />,
  },
  {
    title: "Business expenses",
    color: "bg-[#159A54]",
    amount: "$750.25",
    expenses: [
      { name: "Gas To Deal", place: "Sheehy Toyota Of Stafford", type: "Business" },
      { name: "Gas To Deal", place: "Sheehy Toyota Of Stafford", type: "Business" },
    ],
    icon: <FaBriefcase />,
  },
  {
    title: "Bills",
    color: "bg-[#888888]",
    amount: "$750.25",
    expenses: [
      { name: "Gas To Deal", place: "Sheehy Toyota Of Stafford", type: "Business" },
      { name: "Gas To Deal", place: "Sheehy Toyota Of Stafford", type: "Business" },
    ],
    icon: <FaFileInvoiceDollar />,
  },
];

const ExpensesDashboard = () => {
  return (
    <div className="w-full p-6 bg-[#F9FAFB] rounded-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <AiOutlineDollarCircle size={30} className="text-[#0D172A]" />
        <h1 className="text-2xl font-semibold text-[#0D172A]">August 2025 Expenses</h1>
      </div>

      {/* Top Summary Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Total Expenses */}
        <div className="bg-[#FFF4E5] border border-[#E8D3A1] rounded-xl p-5 flex justify-between items-center">
          <div>
            <p className="text-[#2E2E2E] text-lg font-medium flex items-center gap-2">
              <span>📊</span>Total expenses
            </p>
            <h2 className="text-3xl font-bold mt-2">$14,01.25</h2>
          </div>
          <div className="relative w-16 h-16 rounded-full border-4 border-[#FFD580] flex items-center justify-center text-xl font-semibold text-[#2E2E2E]">
            51%
          </div>
        </div>

        {/* Average per Expense */}
        <div className="bg-[#EAF8ED] border border-[#B8E0B5] rounded-xl p-5 flex justify-between items-center">
          <div>
            <p className="text-[#2E2E2E] text-lg font-medium flex items-center gap-2">
              <span>💰</span>Average per expense
            </p>
            <h2 className="text-3xl font-bold mt-2">$3,50.00</h2>
            <p className="text-sm text-gray-600 mt-1">
              Top Category Food Nature Of Spending
            </p>
          </div>
          <div className="relative w-16 h-16 rounded-full border-4 border-[#34C759] flex items-center justify-center text-xl font-semibold text-[#2E2E2E]">
            45%
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl p-4 shadow-sm border mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#0D172A]">
            <FaFilter className="text-blue-600" />
            <span className="font-medium">Smart Filter</span>
            <span className="text-gray-500 text-sm">Advance filtering options</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="border border-blue-600 text-blue-600 rounded-full px-3 py-1 text-sm">
              Active
            </button>
            <button className="bg-blue-600 !text-white rounded-full px-3 py-1 text-sm">
              Clear filters
            </button>
            <span className="text-gray-500 text-sm">0/7</span>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {categoryData.map((cat, idx) => (
          <div key={idx} className="bg-white border rounded-xl shadow-sm">
            <div className={`flex justify-between items-center text-white px-4 py-3 rounded-t-xl ${cat.color}`}>
              <div className="flex items-center gap-2">
                {cat.icon}
                <span className="font-semibold">{cat.title}</span>
              </div>
              <span className="font-semibold">{cat.amount}</span>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {cat.expenses.map((exp, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-3 flex justify-between items-center bg-white hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{exp.name}</p>
                    <p className="text-sm text-gray-500">{exp.place}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{cat.amount}</p>
                    <span className="text-xs bg-blue-600 text-white rounded-md px-2 py-0.5">
                      {exp.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesDashboard;
