import React, { useState } from "react";
import { Edit2, Trash2, ChevronDown, X, Download, Mail, Phone } from "lucide-react";

const ArtCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [editorModalOpen, setEditorModalOpen] = useState(false);
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);
  const [markSoldModalOpen, setMarkSoldModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [salesDate, setSalesDate] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [platform, setPlatform] = useState("");
  const [shareWithOther, setShareWithOther] = useState(false);

  // Placeholder image - replace with actual art image
  const ArtImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999'%3EArt%3C/text%3E%3C/svg%3E";

  const collectionData = [
    {
      id: 1,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 2,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 3,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 4,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 6,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 7,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 8,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
    {
      id: 9,
      image: ArtImage,
      product: "7 Species - parrots",
      panels: "7 panels 18-20 inches",
      sku: "20*34",
      artType: "Sketch Poster",
      status: "Available",
      gallery: { beginning: 30, build: 30, instock: 30 },
      daysCollection: "9 days",
      contract: "No contract",
    },
  ];

  const handleEditClick = (itemId, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleConnectClick = () => {
    setActiveDropdown(null);
    setConnectModalOpen(true);
  };

  const handleGeneratedClick = () => {
    setActiveDropdown(null);
    setEditorModalOpen(true);
  };

  const handleMarkSoldClick = () => {
    setActiveDropdown(null);
    setMarkSoldModalOpen(true);
  };

  const handleContinueToDelivery = () => {
    setEditorModalOpen(false);
    setDeliveryModalOpen(true);
  };

  const handleConnect = () => {
    if (selectedGallery) {
      setConnectModalOpen(false);
      setSelectedGallery("");
      // Handle connection logic here
    }
  };

  const handleSendDelivery = () => {
    if (deliveryMethod === "email" && emailAddress) {
      setDeliveryModalOpen(false);
      // Handle email delivery
    } else if (deliveryMethod === "whatsapp" && phoneNumber) {
      setDeliveryModalOpen(false);
      // Handle WhatsApp delivery
    } else if (deliveryMethod === "pdf") {
      setDeliveryModalOpen(false);
      // Handle PDF download
    }
  };

  const handleMarkAsSold = () => {
    if (salesDate && finalPrice && platform) {
      setMarkSoldModalOpen(false);
      // Handle mark as sold logic
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div className="sm:bg-gray-50 sm:p-6 min-h-screen !text-black">
      <div className="">
        {/* Smart Filter Header */}
        <div
          className="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold">
              V
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Smart Filter
              </h2>
              <p className="text-xs text-gray-500">Advance filtering options</p>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              filterOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Collection Header */}
        <div className="p-6 bg-white">
          <h1 className="text-lg font-semibold text-gray-900 mb-4">
            Collection (67pieces)
          </h1>

          {/* Table */}
          <div className="overflow-x-auto relative">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Image
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Product
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    SKU
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    ART Type
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Gallery
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Days Collection
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Contract
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {collectionData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={item.image}
                        alt={item.product}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.product}
                      </div>
                      <div className="text-xs text-gray-500">{item.panels}</div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {item.sku}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {item.artType}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-xs space-y-1">
                        <div className="text-gray-600">
                          Beginning:{" "}
                          <span className="font-medium text-gray-900">
                            {item.gallery.beginning}
                          </span>
                        </div>
                        <div className="text-gray-600">
                          Build:{" "}
                          <span className="font-medium text-gray-900">
                            {item.gallery.build}
                          </span>
                        </div>
                        <div className="text-gray-600">
                          In stock:{" "}
                          <span className="font-medium text-gray-900">
                            {item.gallery.instock}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-blue-600 font-medium">
                        {item.daysCollection}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        {item.contract}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 relative">
                        <button
                          className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                          onClick={(e) => handleEditClick(item.id, e)}
                        >
                          <Edit2 className="w-4 h-4 text-gray-600" />
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === item.id && (
                          <div className="absolute right-0 top-8 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <button
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 border-b"
                              onClick={handleConnectClick}
                            >
                              <span className="text-gray-400">🔗</span> Connected
                            </button>
                            <button
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 border-b"
                              onClick={handleMarkSoldClick}
                            >
                              <span className="text-gray-400">📊</span> MARK Sold
                            </button>
                            <button
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 border-b"
                              onClick={handleGeneratedClick}
                            >
                              <span className="text-gray-400">⚙️</span> Generated
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 border-b">
                              <span className="text-gray-400">📤</span> Upload
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 border-b">
                              <span className="text-gray-400">✏️</span> Edit
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                              <span>🗑️</span> Delete
                            </button>
                          </div>
                        )}

                        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-600">1–10 of 245</div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                ‹
              </button>
              <button className="px-3 py-1.5 text-sm bg-indigo-600 !text-white rounded">
                {currentPage}
              </button>
              <button
                className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Connect to Gallery Modal */}
      {connectModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <div >
              <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setConnectModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6" >
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">🎨</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Connect Art to Gallery
                </h3>
                <p className="text-xs text-gray-500">
                  Connect #2 Tribes | Eskilan Thomas | For A Gallery
                </p>
              </div>
            </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Gallery
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedGallery}
                onChange={(e) => setSelectedGallery(e.target.value)}
              >
                <option value="">Choose A Gallery</option>
                <option value="gallery1">Gallery 1</option>
                <option value="gallery2">Gallery 2</option>
                <option value="gallery3">Gallery 3</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                onClick={() => setConnectModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 px-4 py-2 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleConnect}
                disabled={!selectedGallery}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Current Editor Modal */}
      {editorModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0  text-white p-4 flex items-center justify-between rounded-t-lg" style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold">Current Editor</h3>
                  <p className="text-xs opacity-90">Commissioner@gmail.com</p>
                </div>
              </div>
              <button
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                onClick={() => setEditorModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <button className="w-full bg-blue-600 !text-white py-3 rounded-lg font-semibold mb-4 hover:bg-blue-700">
                COMMISSION AGREEMENT
              </button>

              <div className="mb-6 text-sm text-gray-700 space-y-3">
                <p>
                  Run to Group Corp ("Company") and Dr. Ash S. Galstun Musical
                  Interests Collective ("Commissioner") under the following
                  terms: Josh S. Ash = #2 Tribes = Eskilian Poster
                </p>
                <p className="font-semibold">TERMS:</p>
                <ol className="list-decimal list-inside space-y-2 text-xs">
                  <li>
                    Binding agreement effective with termination with 50-days
                    notice.
                  </li>
                  <li>
                    COMMISSION: Company earns 40% commission on gross sales
                    made in good faith; Commissioner earns 60% professionally.
                  </li>
                  <li>
                    CREDIT: Company promoted ownership to artistic music and
                    intellectual property.
                  </li>
                  <li>
                    PAYMENT: Modify sales regions, payment upon 90 days of
                    transaction.
                  </li>
                  <li>
                    Company should apply random agreement of commission upon
                    sale.
                  </li>
                  <li>
                    GOVERNING: In roles item to signing, below.
                    <br />
                    Modification's via written consent.
                    <br />
                    Signature / Date:
                    <br />
                    Company: Run to Group Corp / Contact undefined
                    <br />
                    Correco undefined undefined
                  </li>
                </ol>
              </div>

              <div className="border-t pt-4">
                <p className="text-xs text-gray-600 mb-2">
                  Document Generated: 02/08/2025
                </p>
                <button 
                  className="w-full bg-blue-600 !text-white py-2 rounded-lg text-sm hover:bg-blue-700"
                  onClick={handleContinueToDelivery}
                >
                  Continue to Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Send Contract Delivery Modal */}
      {deliveryModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <div className=" text-white p-4 flex items-center justify-between rounded-t-lg" style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">📄</span>
                </div>
                <div>
                  <h3 className="font-semibold">Send Contract</h3>
                  <p className="text-xs opacity-90">Commission Agreement - #2 Tribes | Eskilian Poster</p>
                </div>
              </div>
              <button
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                onClick={() => setDeliveryModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-600 mb-6">
                Select your preferred delivery method for that contract
              </p>

              <div className="space-y-4">
                {/* Download PDF Option */}
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    deliveryMethod === "pdf"
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setDeliveryMethod("pdf")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Download Pdf</h4>
                      <p className="text-xs text-gray-500">Save To Your Device</p>
                    </div>
                  </div>
                </div>

                {/* Send Via Email Option */}
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    deliveryMethod === "email"
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setDeliveryMethod("email")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Send Via Email</h4>
                      <p className="text-xs text-gray-500">Enter Email Address</p>
                    </div>
                  </div>
                  {deliveryMethod === "email" && (
                    <div className="mt-3 flex gap-2">
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                      />
                      <button className="px-4 py-2 bg-green-600 !text-white rounded-lg text-sm hover:bg-green-700">
                        Send
                      </button>
                    </div>
                  )}
                </div>

                {/* Send Via WhatsApp Option */}
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    deliveryMethod === "whatsapp"
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setDeliveryMethod("whatsapp")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Send Via What's App</h4>
                      <p className="text-xs text-gray-500">Enter Phone Number</p>
                    </div>
                  </div>
                  {deliveryMethod === "whatsapp" && (
                    <div className="mt-3 flex gap-2">
                      <input
                        type="tel"
                        placeholder="+44 - 345 - 4755"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <button className="px-4 py-2 bg-green-600 !text-white rounded-lg text-sm hover:bg-green-700">
                        Send
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  onClick={() => setDeliveryModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="flex-1 px-4 py-2 bg-blue-600 !text-white rounded-lg hover:bg-blue-700"
                  onClick={handleSendDelivery}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mark Art as Sold Modal */}
      {markSoldModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md relative">
            <div className=" text-white p-4 flex items-center justify-between rounded-t-lg" style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold">Mark Art as Sold</h3>
                  <p className="text-xs opacity-90">Complete Sales Information For "#2 Tribes | Eskilian Thomas"</p>
                </div>
              </div>
              <button
                className="text-white  hover:bg-opacity-20 rounded-full p-1"
                onClick={() => setMarkSoldModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Sales Date */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>
                  <span>📅</span>
                  <span className="ml-2">Sales date</span>
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={salesDate}
                  onChange={(e) => setSalesDate(e.target.value)}
                  placeholder="01/03/2025"
                />
              </div>

              {/* Final Sales Price */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>
                  <span>💵</span>
                  <span className="ml-2">Final sales price</span>
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={finalPrice}
                  onChange={(e) => setFinalPrice(e.target.value)}
                  placeholder="0.00"
                />
              </div>

              {/* Platform */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>
                  <span>🛒</span>
                  <span className="ml-2">Platform</span>
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                >
                  <option value="">Select Platform</option>
                  <option value="etsy">Etsy</option>
                  <option value="shopify">Shopify</option>
                  <option value="amazon">Amazon</option>
                  <option value="website">Own Website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Share with Other User Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="shareWithOther"
                  className="mt-1"
                  checked={shareWithOther}
                  onChange={(e) => setShareWithOther(e.target.checked)}
                />
                <label htmlFor="shareWithOther" className="text-xs text-gray-600">
                  Share The Sales Data With Other User
                </label>
              </div>

              {/* Warning Message */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex gap-2">
                <span className="text-yellow-600 text-lg">⚠️</span>
                <p className="text-xs text-yellow-800">
                  This will remove the art from inventory and add it to your
                  sales records. The art will can be marked as sold in the
                  galleries sales tracking.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  onClick={() => setMarkSoldModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="flex-1 px-4 py-2 bg-blue-600 !text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleMarkAsSold}
                  disabled={!salesDate || !finalPrice || !platform}
                >
                  Mark As Sold
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtCollection;