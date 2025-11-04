import React from "react";
import { Package, Folder, Layers, DollarSign, Gift, ChevronDown } from "lucide-react";

const ProductDatabaseInfo = () => {
  // 🔹 Top Info Cards
  const topCards = [
    {
      title: "Total Product",
      value: "2346",
      icon: <Package className="text-blue-500 w-5 h-5" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Category",
      value: "0",
      icon: <Folder className="text-yellow-500 w-5 h-5" />,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      title: "Materials",
      value: "0",
      icon: <Layers className="text-indigo-500 w-5 h-5" />,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    {
      title: "Catalog Value",
      value: "$0",
      icon: <DollarSign className="text-green-500 w-5 h-5" />,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Product Bundles",
      value: "0",
      icon: <Gift className="text-rose-500 w-5 h-5" />,
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
    },
  ];

  // 🔹 Bottom Wide Cards
  const bottomCards = [
    {
      title: "Category",
      value: "0",
      icon: <Folder className="text-yellow-500 w-5 h-5" />,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      dropdown: true,
    },
    {
      title: "Materials",
      value: "0",
      icon: <Layers className="text-indigo-500 w-5 h-5" />,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      dropdown: true,
    },
  ];

  return (
    <div className="space-y-4">
      {/* 🔸 Top Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {topCards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 rounded-xl shadow-sm ${card.bgColor}`}
          >
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className={`text-lg font-semibold ${card.textColor}`}>
                {card.value}
              </p>
            </div>
            <div className="opacity-80">{card.icon}</div>
          </div>
        ))}
      </div>

      {/* 🔸 Bottom Wide Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {bottomCards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 rounded-xl shadow-sm ${card.bgColor}`}
          >
            <div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>{card.title}</span>
                {card.dropdown && (
                  <ChevronDown className={`w-4 h-4 ${card.textColor}`} />
                )}
              </div>
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

export default ProductDatabaseInfo;
