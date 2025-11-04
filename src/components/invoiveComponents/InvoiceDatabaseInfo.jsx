import React from "react";
import {  InStock, LowStock, OutofStock, TotalSold, TotalValue, TotlaItems } from "../stockMangement/StockManagementSvg";


const InvoiceDatabaseInfo = () => {
  // 🔹 Top Info Cards
  const topCards = [
    {
      title: "Total Invoices",
      value: "2346",
      icon: <TotlaItems/>,
      bgColor: "bg-[#E9EDFD]",
      textColor: "text-blue-700",
    },
    {
      title: "Total Revenue",
      value: "0",
      icon: <InStock/>,
      bgColor: "bg-[#E7FFE5]",
      textColor: "text-[#12B603]",
    },
        {
      title: "Paid revenue",
      value: "$0",
      icon: <LowStock/>,
      bgColor: "bg-[#FAE9D9]",
      textColor: "text-[#8A4402]",
    },
    {
      title: "Outstanding",
      value: "0",
      icon: <OutofStock/>,
      bgColor: "bg-[#FADCD9]",
      textColor: "text-[#C31606]",
    },


  ];

  // 🔹 Bottom Wide Cards
 
  return (
    <div className="space-y-4">
      {/* 🔸 Top Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

export default InvoiceDatabaseInfo;
