import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const SaleListHeader = () => {
      const [selectedFilter, setSelectedFilter] = useState('Newest first');
  const [open, setOpen] = useState(false);

  const filters = ['Newest first', 'Oldest first', 'Highest price', 'Lowest price'];

  const handleSelect = (filter) => {
    setSelectedFilter(filter);
    setOpen(false);
  };
  return (
    <div className="flex justify-between items-center mb-8 relative">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-200 rounded">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Sales List (0)</h1>
          </div>

          {/* Dropdown Filter */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-700 transition-all"
            >
              {selectedFilter}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleSelect(filter)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      filter === selectedFilter ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
  )
}

export default SaleListHeader