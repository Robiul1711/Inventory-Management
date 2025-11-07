import React, { useState } from "react";
import { Search, MapPin, Phone, Star } from "lucide-react";

const ArtSellerSearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  const searchResults = [
    {
      id: 1,
      name: "Get The Picture Customer Framing",
      rating: 4.5,
      reviews: 65,
      phone: "01892738832",
      address: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      name: "Get The Picture Customer Framing",
      rating: 4.5,
      reviews: 66,
      phone: "01892738832",
      address: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <div className="w-full   ">
      {/* Header */}
      <div className="mb-6  py-2 px-4" style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
        <h2 className="text-lg font-semibold !text-white mb-1">
          Find Jewish Art Sellers
        </h2>
        <p className="text-sm !text-white">
          Discover Jewish Art Galleries, Judaica Stores, Synagogue Gift Shops...
        </p>
      </div>

      {/* Search Section */}
      <div className="mb-4 py-2 px-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search location
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Your Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 !text-white rounded font-medium hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Checkbox */}
      <div className="mb-6  py-2 px-4">
        <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
          <input type="checkbox" className="mr-2 w-4 h-4" />
          Share The Sales Data With Other User
        </label>
      </div>

      {/* Info Box */}
      <div className="py-2 px-4">
        {!showResults && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
              <MapPin className="w-6 h-6 text-gray-400" />
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm ">
            This will remove the art from inventory and add it to your sales
            records. The art will also be marked as sold in the galleries sales
            tracking.
          </p>
        </div>
      )}

      {/* Search Results */}
      {showResults && (
        <div className="mb-6 py-2 px-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">Search Result</p>
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="mr-2 w-4 h-4" />
              Share The Sales Data With Other User
            </label>
          </div>

          <div className="space-y-3 py-2 px-4">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-4 h-4" />
                    <h3 className="font-medium text-gray-800">{result.name}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {result.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({result.reviews})
                      </span>
                    </div>
                    <button className="px-4 py-1 bg-green-600 !text-white text-sm rounded font-medium hover:bg-green-700 transition-colors">
                      Add
                    </button>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-3 mb-3 py-2 px-4">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-xs font-bold">
                        !
                      </span>
                    </div>
                    <p className="text-sm text-orange-800">
                      This will remove the art from inventory and add it to your
                      sales records. The art will also be marked as sold in the
                      galleries sales tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{result.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{result.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>

      {/* Cancel Button */}
      {/* {!showResults && (
        <div className="flex justify-end">
          <button className=" bg-gray-200 text-gray-700 rounded font-medium hover:bg-gray-300 transition-colors py-2 px-4">
            Cancel
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ArtSellerSearchModal;
