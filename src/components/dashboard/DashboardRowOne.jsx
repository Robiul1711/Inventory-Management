import React from 'react'

import { TrendingUp, DollarSign, ShoppingCart, Package, ArrowBigRight } from 'lucide-react';
import { ArrowRight, DashboardIcon, SalesIcon } from '@/components/common/icons/CustomIcons';

const DashboardRowOne = () => {

      // Left dashboard data - you can populate this from your API
  const leftDashboardData = [
    {
      id: 1,
      icon: <DollarSign className="w-5 h-5" />,
      title: "Revenue",
      value: "$452",
      subtitle: "0 Payments Received . 0 Sales . 0 Invoice",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Profit",
      value: "$452",
      subtitle: "0 Payments Received . 0 Sales . 0 Invoice",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Paid Sales",
      value: "$452",
      subtitle: "0 Payments Received . 0 Sales . 0 Invoice",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      id: 4,
      icon: <Package className="w-5 h-5" />,
      title: "Unpaid Sales",
      value: "$452",
      subtitle: "0 Payments Received . 0 Sales . 0 Invoice",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  // Right dashboard data - you can populate this from your API
  const rightDashboardData = [
    {
      id: 1,
      title: "Total Sales",
      subtitle: "August 2020",
      value: "9",
      clickable: false
    },
    {
      id: 2,
      title: "Performance Statistics",
      subtitle: "August 2020--Click For Details",
      value: null,
      clickable: true
    },
    {
      id: 3,
      title: "Total Unpaid Payments",
      subtitle: "Click For User Breakdown",
      value: "$4543",
      clickable: true
    },
    {
      id: 4,
      title: "Total Production Cost",
      subtitle: "Click For Cost Break",
      value: "$4543",
      clickable: true
    },
    {
      id: 5,
      title: "Total Shipping Profit",
      subtitle: "Revenue From Shipping",
      value: "$16541",
      clickable: false
    }
  ];
  return (
 
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:bg-[#F4F7FF] gap-6">
          {/* Left Dashboard */}
          <div className=" rounded-lg sm:shadow sm:p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">
                <DashboardIcon/>
              </span>
              <h2 className="text-xl text-black font-semibold">Dashboard Summary</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leftDashboardData.map((item) => (
                <div 
                  key={item.id} 
                  className={`${item.bgColor} rounded-lg p-5 border border-gray-200`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={item.iconColor}>{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {item.title}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">
                      {item.value}
                    </span>
                    <div className="w-12 h-0.5 bg-gray-300"></div>
                  </div>
                  
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-black"><SalesIcon/></span>
                <h2 className="text-xl text-black font-semibold">Sales & customers status</h2>
              </div>
              <span className="text-sm text-gray-500">
                📅 Dec 10, 2022 - July 18, 2023
              </span>
            </div>
            
            <div className="space-y-3">
              {rightDashboardData.map((item) => (
                <div 
                  key={item.id}
                  className={`p-4 rounded-lg border border-gray-200 flex items-center justify-between ${
                    item.clickable ? 'cursor-pointer hover:bg-gray-50' : ''
                  } ${item.id === 1 ? 'bg-blue-50' : item.id === 2 ? 'bg-purple-50' : item.id === 3 ? 'bg-orange-50' : item.id === 4 ? 'bg-pink-50' : 'bg-green-50'}`}
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {item.value && (
                      <span className="text-xl font-bold text-gray-900">
                        {item.value}
                      </span>
                    )}
                    {item.clickable && (
                      <span className=' text-black' >
                       <ArrowRight/>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
  )
}

export default DashboardRowOne