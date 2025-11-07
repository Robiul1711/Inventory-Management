import React from 'react';
import { Package, Filter, DollarSign, Info } from 'lucide-react';

const DisplayItemsInfo = () => {
  const statsCards = [
    {
      title: 'Total Customers',
      value: '2',
      subtitle: 'Customers',
      icon: '🎲',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Samples Distributed:',
      value: '14',
      subtitle: 'Total Samples',
      icon: '💎',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: 'Filters Applied:',
      value: '0',
      subtitle: 'Active Filters',
      icon: '🎨',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Sample Worth:',
      value: '$6,090.00',
      subtitle: 'Total Value',
      icon: '💰',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  const summaryItems = [
    {
      title: 'Total Customers',
      value: '2',
      subtitle: 'Customers',
      icon: '🎲',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Total Customers',
      value: '2',
      subtitle: 'Customers',
      icon: '🎲',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Total Customers',
      value: '2',
      subtitle: 'Customers',
      icon: '🎲',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Total Customers',
      value: '2',
      subtitle: 'Customers',
      icon: '🎲',
      iconColor: 'text-blue-600',
    },
  ];

  const recentActivities = [
    {
      title: 'New Display At Art Gallery NYC',
      date: 'Aug 17, 2025',
      detail: '2 Items Displayed',
      badge: 'Displayed',
      badgeColor: 'bg-orange-500',
    },
    {
      title: 'Items Returned From Design Studio',
      date: 'Aug 15, 2025',
      detail: '3 Items Returned',
      badge: 'Returned',
      badgeColor: 'bg-blue-500',
    },
    {
      title: 'Sale At Midtown Interiors',
      date: 'Aug 12, 2025',
      detail: '1 Item Sold',
      badge: 'Sold',
      badgeColor: 'bg-green-500',
    },
  ];

  return (
    <div className=" sm:bg-gray-50 sm:p-6">
      <div className=" space-y-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} rounded-xl p-4 border border-gray-200`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {card.value}
                  </p>
                </div>
                <div className={`w-10 h-10 ${card.bgColor} rounded-lg flex items-center justify-center text-xl`}>
                  {card.icon}
                </div>
              </div>
              <p className="text-xs text-gray-600">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Display Summary Section */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📊</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Display Summary
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summaryItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-blue-600 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-2xl font-bold text-gray-900 mb-1">
                        {item.value}
                      </p>
                      <p className="text-xs text-gray-600">{item.subtitle}</p>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Info className="w-4 h-4 text-orange-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-1">
                        {activity.date} — {activity.detail}
                      </p>
                    </div>
                    <span
                      className={`${activity.badgeColor} text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap`}
                    >
                      {activity.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItemsInfo;