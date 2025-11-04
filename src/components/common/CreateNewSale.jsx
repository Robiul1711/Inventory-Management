import React, { useState } from "react";
import {
  X,
  Search,
  Calendar,
  Tag,
  DollarSign,
  Package,
  Percent,
  ShoppingCart,
  Plus,
  Minus,
  Edit3,
  ChevronDown,
  User,
  Info,
} from "lucide-react";
import {
  Modal,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Button,
  Space,
  List,
  Tag as AntTag,
  Divider,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { ClientIcon } from "./icons/CustomIcons";

const { Option } = Select;
const { Search: AntSearch } = Input;

const CreateNewSale = ({ onClose }) => {
  const [formData, setFormData] = useState({
    saleDate: dayjs(),
    category: "",
    platform: "",
    customer: "",
    customerShippingPrice: "0.00",
    myShippingPrice: "0.00",
    factoryTotalPrice: "0.00",
    printingCost: "0.00",
    discountType: "percentage",
    discountPercentage: "0",
    discountAmount: "",
    discountReason: "",
    isConsignment: false,
    shareWithOthers: false,
    createInvoice: false,
  });

  const [products, setProducts] = useState([]);
  const [showManagePlatform, setShowManagePlatform] = useState(false);
  const [showManageCategory, setShowManageCategory] = useState(false);
  const [productSearch, setProductSearch] = useState("");
  const [customerSearch, setCustomerSearch] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Sample data
  const availableProducts = [
    { id: 1, name: "Product A", sku: "SKU001", price: 29.99 },
    { id: 2, name: "Product B", sku: "SKU002", price: 39.99 },
    { id: 3, name: "Product C", sku: "SKU003", price: 19.99 },
  ];

  const customers = [
    { id: 1, name: "John Doe", store: "Store A" },
    { id: 2, name: "Jane Smith", store: "Store B" },
    { id: 3, name: "Bob Johnson", store: "Store C" },
  ];

  const [platforms, setPlatforms] = useState([
    { id: 1, name: "Daraz", icon: "🔥", fee: 63, commission: "63%" },
    { id: 2, name: "Amazon", icon: "🛒", fee: 45, commission: "45%" },
    { id: 3, name: "Shopify", icon: "🏪", fee: 28, commission: "28%" },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", color: "blue" },
    { id: 2, name: "Clothing", color: "green" },
    { id: 3, name: "Food", color: "orange" },
    { id: 4, name: "Books", color: "purple" },
    { id: 5, name: "Toys", color: "red" },
  ]);

  const filteredProducts = availableProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.sku.toLowerCase().includes(productSearch.toLowerCase())
  );

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
      c.store.toLowerCase().includes(customerSearch.toLowerCase())
  );

  const handleAddProduct = (product) => {
    const existingProduct = products.find((p) => p.id === product.id);
    if (existingProduct) {
      setProducts(
        products.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + quantity } : p
        )
      );
    } else {
      setProducts([
        ...products,
        {
          ...product,
          qty: quantity,
          total: product.price * quantity,
        },
      ]);
    }
    setProductSearch("");
    setQuantity(1);
  };

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty < 1) return;
    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, qty: newQty, total: p.price * newQty } : p
      )
    );
  };

  const handlePlatformFeeChange = (platformId, newFee) => {
    if (newFee < 0 || newFee > 100) return;
    setPlatforms(
      platforms.map((p) =>
        p.id === platformId
          ? { ...p, fee: newFee, commission: `${newFee}%` }
          : p
      )
    );
  };

  const handleAddPlatform = (newPlatformName) => {
    if (newPlatformName.trim()) {
      const newPlatform = {
        id: Date.now(),
        name: newPlatformName,
        icon: "🆕",
        fee: 0,
        commission: "0%",
      };
      setPlatforms([...platforms, newPlatform]);
    }
  };

  const handleRemovePlatform = (platformId) => {
    setPlatforms(platforms.filter((p) => p.id !== platformId));
  };

  const handleAddCategory = (newCategoryName) => {
    if (newCategoryName.trim()) {
      const colors = [
        "blue",
        "green",
        "orange",
        "purple",
        "red",
        "cyan",
        "magenta",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCategories([
        ...categories,
        {
          id: Date.now(),
          name: newCategoryName,
          color: randomColor,
        },
      ]);
    }
  };

  const handleRemoveCategory = (categoryId) => {
    setCategories(categories.filter((c) => c.id !== categoryId));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Products:", products);
    // Handle form submission
  };

  const productTotal = products.reduce(
    (sum, product) => sum + product.total,
    0
  );

  const [saleData, setSaleData] = useState(false);
  const [commissionRules, setCommissionRules] = useState(false);
  const [createInvoice, setCreateInvoice] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg w-full">
        {/* Header */}
        <div
          style={{
            background:
              "linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)",
          }}
          className="bg-gradient-to-r text-white p-4 rounded-t-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[rgba(255,255,255,0.42)] bg-opacity-20 p-2 rounded-lg">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Create New Sale</h2>
              <p className="text-sm text-teal-50">
                Add A New Sale With Products, Customer Information, And Platform
                Details.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Products Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Products For This Sale
                </h3>
                <p className="text-xs text-red-500">
                  (Required - Add At Least One Product!)
                </p>
              </div>
              <Button
                type="link"
                icon={<Package className="w-4 h-4" />}
                className="text-blue-600 font-medium p-0"
              >
                Manage Products
              </Button>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search & Select Product
              </label>
              <Select
                showSearch
                placeholder="Type to search products by name, SKU, keyword..."
                value={productSearch || undefined}
                onSearch={setProductSearch}
                onChange={(value, option) => {
                  if (option?.product) {
                    handleAddProduct(option.product);
                  }
                }}
                filterOption={false}
                style={{ width: "100%"  ,height:"50px"}}
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    {filteredProducts.length === 0 && productSearch && (
                      <div className="p-2 text-gray-500 text-center">
                        No products found
                      </div>
                    )}
                  </>
                )}
              >
                {filteredProducts.map((product) => (
                  <Option key={product.id} value={product.id} product={product}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">
                          SKU: {product.sku} | ${product.price}
                        </div>
                      </div>
                      <Button
                        type="link"
                        icon={<PlusOutlined />}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddProduct(product);
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </Option>
                ))}
              </Select>
            </div>

            {products.length > 0 && (
              <div className="mt-4 space-y-3">
                <Divider orientation="left">Selected Products</Divider>
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        SKU: {product.sku} | ${product.price}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Button
                          size="small"
                          icon={<Minus className="w-3 h-3" />}
                          onClick={() =>
                            handleUpdateQuantity(product.id, product.qty - 1)
                          }
                        />
                        <span className="w-8 text-center font-medium">
                          {product.qty}
                        </span>
                        <Button
                          size="small"
                          icon={<Plus className="w-3 h-3" />}
                          onClick={() =>
                            handleUpdateQuantity(product.id, product.qty + 1)
                          }
                        />
                      </div>
                      <div className="w-20 text-right font-medium">
                        ${product.total.toFixed(2)}
                      </div>
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleRemoveProduct(product.id)}
                      />
                    </div>
                  </div>
                ))}
                <div className="text-right font-semibold text-lg border-t pt-2">
                  Total: ${productTotal.toFixed(2)}
                </div>
              </div>
            )}
          </div>

          {/* Sale Information */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Sale Information
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {/* Sale Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sale date
                </label>
                <DatePicker
                  value={formData.saleDate}
                  onChange={(date) =>
                    setFormData({ ...formData, saleDate: date })
                  }
                  style={{ width: "100%" }}
                  suffixIcon={<Calendar className="w-4 h-4 text-blue-500" />}
                />
              </div>

              {/* Platform */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Platform
                </label>
                <div className="flex gap-2">
                  <Select
                    value={formData.platform || undefined}
                    onChange={(value) =>
                      setFormData({ ...formData, platform: value })
                    }
                    placeholder="Select Platform"
                    style={{ flex: 1 }}
                    suffixIcon={<Tag className="w-4 h-4 text-blue-500" />}
                  >
                    {platforms.map((platform) => (
                      <Option key={platform.id} value={platform.name}>
                        <div className="flex items-center gap-2">
                          <span>{platform.icon}</span>
                          <span>{platform.name}</span>
                          <AntTag color="blue">{platform.commission}</AntTag>
                        </div>
                      </Option>
                    ))}
                  </Select>
                  <Button
                    type="primary"
                    onClick={() => setShowManagePlatform(true)}
                  >
                    Manage
                  </Button>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <div className="flex gap-2">
                  <Select
                    value={formData.category || undefined}
                    onChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                    placeholder="Select Category"
                    style={{ flex: 1 }}
                    suffixIcon={<Tag className="w-4 h-4 text-blue-500" />}
                  >
                    {categories.map((category) => (
                      <Option key={category.id} value={category.name}>
                        <AntTag color={category.color}>{category.name}</AntTag>
                      </Option>
                    ))}
                  </Select>
                  <Button
                    type="primary"
                    onClick={() => setShowManageCategory(true)}
                  >
                    Manage
                  </Button>
                </div>
              </div>

              {/* Customer */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Store/Customer (Optional)
                </label>
                <Select
                  showSearch
                  value={formData.customer || undefined}
                  placeholder="Search customers by store name..."
                  onSearch={setCustomerSearch}
                  onChange={(value) =>
                    setFormData({ ...formData, customer: value })
                  }
                  filterOption={false}
                  style={{ width: "100%" }}
                >
                  {filteredCustomers.map((customer) => (
                    <Option key={customer.id} value={customer.name}>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        {/* <div className="text-sm text-gray-500">
                          {customer.store}
                        </div> */}
                      </div>
                    </Option>
                  ))}
                </Select>
              </div>

              {/* Customer Shipping Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Shipping Price
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.customerShippingPrice}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      customerShippingPrice: e.target.value,
                    })
                  }
                  prefix={<DollarSign className="w-4 h-4 text-blue-500" />}
                  style={{ width: "100%" }}
                />
              </div>

              {/* My Shipping Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  My Shipping Price
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.myShippingPrice}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      myShippingPrice: e.target.value,
                    })
                  }
                  prefix={<DollarSign className="w-4 h-4 text-green-500" />}
                  style={{ width: "100%" }}
                />
              </div>

              {/* Factory Total Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Factory Total Price
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.factoryTotalPrice}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      factoryTotalPrice: e.target.value,
                    })
                  }
                  prefix={<DollarSign className="w-4 h-4 text-green-500" />}
                  style={{ width: "100%" }}
                />
              </div>

              {/* Printing Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Printing Cost
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.printingCost}
                  onChange={(e) =>
                    setFormData({ ...formData, printingCost: e.target.value })
                  }
                  prefix={<DollarSign className="w-4 h-4 text-gray-400" />}
                  suffix={
                    <Button
                      type="primary"
                      size="small"
                      className="bg-purple-500 border-purple-500"
                    >
                      Auto Calculator
                    </Button>
                  }
                  style={{ width: "100%" }}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Optional: Click when you print the order yourself
                </p>
              </div>
            </div>
          </div>

          {/* Discount Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Discount (Optional)
            </h3>

            <div className="flex gap-2 mb-4">
              <Button
                type={
                  formData.discountType === "percentage" ? "primary" : "default"
                }
                icon={<Percent className="w-4 h-4" />}
                onClick={() =>
                  setFormData({ ...formData, discountType: "percentage" })
                }
                style={{ flex: 1 }}
              >
                Percentage (%)
              </Button>
              <Button
                type={formData.discountType === "fixed" ? "primary" : "default"}
                icon={<DollarSign className="w-4 h-4" />}
                onClick={() =>
                  setFormData({ ...formData, discountType: "fixed" })
                }
                style={{ flex: 1 }}
              >
                Fixed Amount ($)
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {formData.discountType === "percentage" ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Discount Percentage
                  </label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.discountPercentage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discountPercentage: e.target.value,
                      })
                    }
                    prefix={<Percent className="w-4 h-4 text-gray-400" />}
                    suffix="%"
                    style={{ width: "100%" }}
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Discount Amount
                  </label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.discountAmount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discountAmount: e.target.value,
                      })
                    }
                    prefix={<DollarSign className="w-4 h-4 text-gray-400" />}
                    style={{ width: "100%" }}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Discount Reason
                </label>
                <Input
                  placeholder="Select Reason"
                  value={formData.discountReason}
                  onChange={(e) =>
                    setFormData({ ...formData, discountReason: e.target.value })
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2 mb-6">
            <Checkbox
              checked={formData.isConsignment}
              onChange={(e) =>
                setFormData({ ...formData, isConsignment: e.target.checked })
              }
            >
              This is A Consignment Sale
            </Checkbox>
            <Checkbox
              checked={formData.shareWithOthers}
              onChange={(e) => {
                setFormData({ ...formData, shareWithOthers: e.target.checked });
                setSaleData(!saleData);
              }}
            >
              Share This Sale Data With Other Users
            </Checkbox>
            <Checkbox
              checked={formData.createInvoice}
              onChange={(e) => {
                setFormData({ ...formData, createInvoice: e.target.checked });
                setCreateInvoice(!createInvoice);
              }}
            >
              Create Invoice For This Sale
            </Checkbox>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 flex justify-end gap-3">
          <Button onClick={onClose} size="large">
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleSubmit}
            size="large"
            disabled={products.length === 0}
          >
            Create Sale
          </Button>
        </div>
      </div>

      {/* Manage Platform Modal */}
      <ManagePlatformModal
        visible={showManagePlatform}
        onClose={() => setShowManagePlatform(false)}
        platforms={platforms}
        onPlatformFeeChange={handlePlatformFeeChange}
        onAddPlatform={handleAddPlatform}
        onRemovePlatform={handleRemovePlatform}
      />

      {/* Manage Category Modal */}
      <ManageCategoryModal
        visible={showManageCategory}
        onClose={() => setShowManageCategory(false)}
        categories={categories}
        onAddCategory={handleAddCategory}
        onRemoveCategory={handleRemoveCategory}
      />

      <ShareDataModal
        saleData={saleData}
        setSaleData={setSaleData}
        formData={formData}
        setCommissionRules={setCommissionRules}
      />
      <CommissionRulesModal
        commissionRules={commissionRules}
        setCommissionRules={setCommissionRules}
      />
      <CreateInvoiceModal
        createInvoice={createInvoice}
        setCreateInvoice={setCreateInvoice}
      />
    </>
  );
};

const ManagePlatformModal = ({
  visible,
  onClose,
  platforms,
  onPlatformFeeChange,
  onAddPlatform,
  onRemovePlatform,
}) => {
  const [newPlatformName, setNewPlatformName] = useState("");

  const handleAdd = () => {
    if (newPlatformName.trim()) {
      onAddPlatform(newPlatformName);
      setNewPlatformName("");
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Tag className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Manage platform</h2>
            <p className="text-sm text-gray-500">
              Choose A Platform To Share This Sale And Apply Commission Rules
            </p>
          </div>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <div className="space-y-6 px-6 py-4">
        {/* Add new platform */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add new platform
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="Enter Platform Name"
              value={newPlatformName}
              onChange={(e) => setNewPlatformName(e.target.value)}
              onPressEnter={handleAdd}
              style={{ flex: 1 }}
            />
            <Button type="primary" onClick={handleAdd}>
              Add
            </Button>
          </div>
        </div>

        {/* Current platforms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Current Platforms
          </label>
          <List
            dataSource={platforms}
            renderItem={(platform) => (
              <List.Item className="!px-0">
                <div className="flex items-center justify-between w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox />
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="font-semibold text-orange-600 min-w-[100px]">
                      {platform.name}
                    </span>
                    <span className="text-gray-500 text-sm min-w-[60px]">
                      Fee %
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        size="small"
                        icon={<Minus className="w-3 h-3" />}
                        onClick={() =>
                          onPlatformFeeChange(platform.id, platform.fee - 1)
                        }
                        disabled={platform.fee <= 0}
                      />
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={platform.fee}
                        onChange={(e) =>
                          onPlatformFeeChange(
                            platform.id,
                            parseInt(e.target.value) || 0
                          )
                        }
                        style={{ width: 80, textAlign: "center" }}
                        suffix="%"
                      />
                      <Button
                        size="small"
                        icon={<Plus className="w-3 h-3" />}
                        onClick={() =>
                          onPlatformFeeChange(platform.id, platform.fee + 1)
                        }
                        disabled={platform.fee >= 100}
                      />
                    </div>
                    <AntTag color="blue">{platform.commission}</AntTag>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => onRemovePlatform(platform.id)}
                    />
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </Modal>
  );
};

const ManageCategoryModal = ({
  visible,
  onClose,
  categories,
  onAddCategory,
  onRemoveCategory,
}) => {
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleAdd = () => {
    if (newCategoryName.trim()) {
      onAddCategory(newCategoryName);
      setNewCategoryName("");
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Tag className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Manage Categories</h2>
            <p className="text-sm text-gray-500">
              Add and manage product categories
            </p>
          </div>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={500}
    >
      <div className="space-y-6 px-6 py-4">
        {/* Add new category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add new category
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="Enter Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              onPressEnter={handleAdd}
              style={{ flex: 1 }}
            />
            <Button type="primary" onClick={handleAdd}>
              Add
            </Button>
          </div>
        </div>

        {/* Current categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3  ">
            Current Categories
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <div key={category.id} className="relative group">
                <AntTag
                  color={category.color}
                  closable
                  onClose={() => onRemoveCategory(category.id)}
                  className="text-sm py-1 px-3"
                >
                  {category.name}
                </AntTag>
              </div>
            ))}
            {categories.length === 0 && (
              <div className="text-gray-500 text-center w-full py-4">
                No categories added yet
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

const ShareDataModal = ({ saleData, setSaleData, setCommissionRules }) => {
  return (
    <Modal
      title={
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="bg-gray-800 p-2 rounded-lg">
            <ClientIcon />
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Select Partner to shear with{" "}
            </h2>
            <p className="text-sm text-gray-500">
              Choose a partner to shear this sale and apply commission rules
            </p>
          </div>
        </div>
      }
      open={saleData}
      onCancel={() => setSaleData(false)}
      footer={null}
      width={500}
    >
      <div className=" rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {/* Header Text */}
          <div>
            <h2 className="text-gray-700 text-sm font-medium">
              Choose a partner to Shear this sale with:
            </h2>
          </div>

          {/* Dropdown */}
          <Select
            placeholder="Select A Partner..."
            className="w-full"
            size="large"
            suffixIcon={<span className="text-gray-400">▼</span>}
            options={[
              { value: "partner1", label: "Partner 1" },
              { value: "partner2", label: "Partner 2" },
              { value: "partner3", label: "Partner 3" },
            ]}
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setSaleData(false)}
              className="px-6 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setCommissionRules(true)}
              className="px-6 py-2 text-sm !text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
            >
              Create Sale
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const CommissionRulesModal = ({ commissionRules, setCommissionRules }) => {
  return (
    <Modal
      title={
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="bg-gray-800 p-2 rounded-lg">
            <ClientIcon />
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Commission rules for shared sales
            </h2>
            <p className="text-sm text-gray-500">
              Configure commission setting for this shared sales
            </p>
          </div>
        </div>
      }
      open={commissionRules}
      onCancel={() => setCommissionRules(false)}
      footer={null}
      width={500}
    >
      <div className=" rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          <div className="space-y-6">
            {/* Selected User Section */}
            <div>
              <h3 className="text-gray-900 text-sm font-medium mb-3">
                Selected user for shearing
              </h3>
              <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">
                  info@benningrouperp.Com
                </span>
              </div>
            </div>

            {/* Commission Rule Section */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <h3 className="text-gray-900 text-sm font-medium">
                  Commission Rule
                </h3>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              <Select
                placeholder="Select A Partner..."
                className="w-full"
                size="large"
                suffixIcon={<span className="text-gray-400">▼</span>}
                options={[
                  { value: "rule1", label: "Rule 1" },
                  { value: "rule2", label: "Rule 2" },
                  { value: "rule3", label: "Rule 3" },
                ]}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button onClick={()=>setCommissionRules(false)} className="px-6 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                Back
              </button>
              <button className="px-6 py-2 text-sm !text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const CreateInvoiceModal = ({ createInvoice, setCreateInvoice }) => {
  const [selectedOption, setSelectedOption] = useState("next30days");
  return (
    <Modal
      title={
        <div className="flex items-center gap-3 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold">Select payment terms</h2>
            <p className="text-sm text-gray-500">
              Choose the payment terms for this invoice
            </p>
          </div>
        </div>
      }
      open={createInvoice}
      onCancel={() => setCreateInvoice(false)}
      footer={null}
      width={500}
    >
      <div className="max-w-lg mx-auto p-4 space-y-3">
        {/* Next 30 Days Option */}
        <label className="flex items-start gap-3 p-4 border-2 border-blue-500 rounded-lg cursor-pointer bg-white hover:bg-blue-50 transition-colors">
          <input
            type="radio"
            name="paymentTerm"
            value="next30days"
            checked={selectedOption === "next30days"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <div className="flex-1">
            <div className="text-gray-900 font-semibold text-base mb-1">
              Next 30 Days
            </div>
            <div className="text-gray-500 text-sm">
              Payment Due Within 30 Days Of Invoice Date
            </div>
          </div>
        </label>

        {/* Due The Receipt Option */}
        <label className="flex items-start gap-3 p-4 border-2 border-blue-500 rounded-lg cursor-pointer bg-white hover:bg-blue-50 transition-colors">
          <input
            type="radio"
            name="paymentTerm"
            value="dueReceipt"
            checked={selectedOption === "dueReceipt"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mt-1 w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <div className="flex-1">
            <div className="text-gray-900 font-semibold text-base mb-1">
              Due The Receipt
            </div>
            <div className="text-gray-500 text-sm">
              Payment Due Within 30 Days Of Invoice Date
            </div>
          </div>
        </label>
      </div>
    </Modal>
  );
};

export default CreateNewSale;
