import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrintPricePage() {
  return (
   
      <div className="max-w-4xl w-full mx-auto">
        {/* Back Button */}
        <div className="mb-8 flex justify-center">
          <Link to="/pricing-calculator" className="flex items-center gap-2 px-4 py-2  rounded-lg shadow-sm !text-gray-600 hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to products</span>
          </Link>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl text-black font-bold text-center mb-4">
          Your perfect print price
        </h1>

        {/* Product Type */}
        <p className="text-center text-blue-600 mb-12">
          Acrylic Glasss - 38.2 * 28 in
        </p>

        {/* Price Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Price Display */}
          <div className="text-center mb-12">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              $99.72
            </div>
            <p className="text-gray-600">
              Total price for your acrylic glass
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 !text-gray-600 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-center mb-6">
              Order details
            </h2>

            {/* Details Grid */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Product:</span>
                <span className="font-medium">Acrylic glass</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Dimensions</span>
                <span className="font-medium">38.2 * 28 inches</span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600">Size</span>
                <span className="font-medium">7.43 sq ft</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 justify-center">
            <Link to="/print-price-calculator" className="px-8 py-3 bg-gray-200 !text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Add shipping
            </Link>
            <button className="px-8 py-3 bg-blue-600 !text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              New quote
            </button>
          </div>
        </div>
      </div>
   
  );
}