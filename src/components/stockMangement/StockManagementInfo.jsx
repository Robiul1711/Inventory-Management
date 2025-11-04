import React from "react";
import { Package, Folder, Layers, DollarSign, Gift, ChevronDown } from "lucide-react";
import { InStock, LowStock, OutofStock, TotalSold, TotalValue, TotlaItems } from "./StockManagementSvg";

const StockManagementInfo = () => {
  // 🔹 Top Info Cards
  const topCards = [
    {
      title: "Total Items",
      value: "2346",
      icon: <TotlaItems/>,
      bgColor: "bg-[#E9EDFD]",
      textColor: "text-blue-700",
    },
    {
      title: "In stock",
      value: "0",
      icon: <InStock/>,
      bgColor: "bg-[#E7FFE5]",
      textColor: "text-[#12B603]",
    },
    {
      title: "Out of stock",
      value: "0",
      icon: <OutofStock/>,
      bgColor: "bg-[#FADCD9]",
      textColor: "text-[#C31606]",
    },
    {
      title: "Low stocks",
      value: "$0",
      icon: <LowStock/>,
      bgColor: "bg-[#FAE9D9]",
      textColor: "text-[#8A4402]",
    },
    {
      title: "Total sold",
      value: "0",
      icon: <TotalSold/>,
      bgColor: "bg-[#E1D9FA]",
      textColor: "text-[#7B5CFF]",
    },
    {
      title: "total value",
      value: "0",
      icon: <TotalValue/>,
      bgColor: "bg-[#FAE9D9]",
      textColor: "text-[#8A4402]",
    },
  ];

  // 🔹 Bottom Wide Cards
 
  return (
    <div className="space-y-4">
      {/* 🔸 Top Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {topCards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 rounded-xl shadow-sm ${card.bgColor}`}
          >
            <div>
              <p className={`text-sm font-medium ${card.textColor}`}>{card.title}</p>
              <p className={`text-lg font-semibold ${card.textColor}`}>
                {card.value}
              </p>
            </div>
            <div className="opacity-80">{card.icon}</div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default StockManagementInfo;
