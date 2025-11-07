import React from 'react';
import { TrendingUp, ShoppingCart, Users } from 'lucide-react';

const CustomerDatabaseInfo = () => {
  const statsCards = [
    {
      title: 'Total Customers',
      value: '2',
      subtitle: 'Customers',
      icon: '🎲',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      title: 'Samples Distributed:',
      value: '14',
      subtitle: 'Total Samples',
      icon: '💎',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      title: 'Filters Applied:',
      value: '0',
      subtitle: 'Active Filters',
      icon: '🎨',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      title: 'Sample Worth:',
      value: '$6,090.00',
      subtitle: 'Total Value',
      icon: '💰',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
  ];

  const topSellingItems = [
    {
      id: 1,
      rank: '1',
      name: 'Aisle One Passoic',
      price: '$4025.00',
      orders: '17,212',
      rankColor: 'bg-blue-600',
    },
    {
      id: 2,
      rank: '1',
      name: 'Judaica House',
      price: '$4025.00',
      orders: '17,212',
      rankColor: 'bg-green-600',
    },
    {
      id: 3,
      rank: '1',
      name: 'Gift World Jusaica',
      price: '$200.00',
      orders: '17,212',
      rankColor: 'bg-green-600',
    },
  ];

  const topCustomers = [
    {
      id: 1,
      rank: '1',
      name: 'The Yellow Door Flatbush',
      amount: '$955.00',
      orders: '17,212',
      rankColor: 'bg-orange-600',
    },
    {
      id: 2,
      rank: '1',
      name: 'Shabsi Batimore',
      amount: '$955.00',
      orders: '17,212',
      rankColor: 'bg-purple-600',
    },
  ];

  const summaryCards = [
    {
      title: 'Total Revenue',
      value: '$4025.00',
      subtitle: 'From all customers',
      icon: TrendingUp,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      valueColor: 'text-blue-600',
    },
    {
      title: 'Active customers',
      value: '7',
      subtitle: 'with orders',
      icon: Users,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      valueColor: 'text-gray-900',
    },
    {
      title: 'Avg order value',
      value: '$4025.00',
      subtitle: 'in last transaction',
      icon: ShoppingCart,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      valueColor: 'text-purple-600',
    },
    {
      title: 'Total customers',
      value: '101',
      subtitle: 'in database',
      icon: Users,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      valueColor: 'text-gray-900',
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
                  <h3 className={`text-sm font-medium ${card.textColor} mb-1`}>
                    {card.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {card.value}
                  </p>
                </div>
                <div className="text-2xl">{card.icon}</div>
              </div>
              <p className="text-xs text-gray-600">{card.subtitle}</p>
            </div>
          ))}
        </div>

 {/* Main Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Top Selling Section */}
  <div className="bg-white rounded-xl p-6 border border-gray-200">
    {/* Header */}
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
        <span className="text-white text-sm">🔥</span>
      </div>
      <h2 className="text-lg font-semibold text-gray-900">Top Selling</h2>
    </div>

    {/* Top Selling List */}
    <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {topSellingItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-3 flex-1">
            <div
              className={`w-8 h-8 ${item.rankColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}
            >
              {item.rank}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                {item.name}
              </h4>
              <p className="text-xs text-gray-500">{item.orders}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-base font-bold text-gray-900">{item.price}</p>
            <p className="text-xs text-gray-500">{item.orders}</p>
          </div>
        </div>
      ))}

      {/* Top Customers */}
      <div className="pt-4 mt-4 border-t border-gray-200 sm:col-span-2">
        {topCustomers.map((customer) => (
          <div
            key={customer.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mb-3 last:mb-0"
          >
            <div className="flex items-center gap-3 flex-1">
              <div
                className={`w-8 h-8 ${customer.rankColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}
              >
                {customer.rank}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900">
                  {customer.name}
                </h4>
                <p className="text-xs text-gray-500">{customer.orders}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-base font-bold text-gray-900">
                {customer.amount}
              </p>
              <p className="text-xs text-gray-500">{customer.orders}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Summary Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
    {summaryCards.map((card, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              {card.title}
            </h3>
            <p className={`text-2xl font-bold ${card.valueColor} mb-1`}>
              {card.value}
            </p>
            <p className="text-xs text-gray-500">{card.subtitle}</p>
          </div>
          <div
            className={`w-10 h-10 ${card.iconBg} rounded-lg flex items-center justify-center`}
          >
            <card.icon className={`w-5 h-5 ${card.iconColor}`} />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default CustomerDatabaseInfo;