import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const SmartFilter = () => {
  const [isActive, setIsActive] = useState(true);
  const [filterCount, setFilterCount] = useState(0);
  const totalFilters = 7;

  return (
    <div className="w-full bg-white sm:bg-gray-50 sm:p-4 p-3 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left Section - Smart Filter */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-lg p-2.5 flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-gray-900 font-semibold text-base sm:text-lg">
                Smart Filter
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            <span className="text-gray-500 text-sm sm:text-base">
              Advance filtering options
            </span>
          </div>
        </div>

        {/* Right Section - Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Active Button */}
          <button
            onClick={() => setIsActive(!isActive)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm sm:text-base ${
              isActive
                ? "bg-blue-50 border-blue-200 text-blue-600"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                isActive ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></div>
            <span className="font-medium">Active</span>
          </button>

          {/* Clear Filters Button */}
          <button
            onClick={() => setFilterCount(0)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            <X className="w-4 h-4" />
            <span className="font-medium">Clear filters</span>
          </button>

          {/* Filter Count */}
          <div className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm sm:text-base">
            <span className="font-semibold text-gray-900">{filterCount}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{totalFilters}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartFilter;
