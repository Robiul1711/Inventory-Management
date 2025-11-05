import AdminLayout from "@/layout/AdminLayout";
import ArtInventory from "@/pages/art/ArtInventory";
import ConsignmentManager from "@/pages/Consignment Manager/ConsignmentManager";
import CustomerDatabase from "@/pages/CustomerDatabase/CustomerDatabase";

import Dashboard from "@/pages/dashboard/Dashboard";
import DisplayItemManager from "@/pages/DisplayItemManager/DisplayItemManager";
import FactoryPayment from "@/pages/FactoryPayment/FactoryPayment";
import Invoices from "@/pages/Invoices/Invoices";
import NotFound from "@/pages/NotFound";
import PricingCalculator from "@/pages/PricingCalculator/PricingCalculator";
import ProductDatabase from "@/pages/product/ProductDatabase";
import StockMangement from "@/pages/stock/StockMangement";
import StoresList from "@/pages/StoresList/StoresList";

import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  // Admin routes
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />, // ✅ Fixed typo
      },
      {
        path: "*",
        element: <NotFound />, // ✅ Fixed typo
      },
      {
        path: "/product-database",
        element: <ProductDatabase />, // ✅ Fixed typo
      },
      {
        path: "/art-inventory",
        element: <ArtInventory />, // ✅ Fixed typo
      },
      {
        path: "/product-database",
        element: <ProductDatabase />, // ✅ Fixed typo
      },
      {
        path: "/stock-management",
        element: <StockMangement />, // ✅ Fixed typo
      },
      {
        path: "/consignment-manager",
        element: <ConsignmentManager />, // ✅ Fixed typo
      },
      {
        path: "/pricing-calculator",
        element: <PricingCalculator />, // ✅ Fixed typo
      },
      {
        path: "/invoice",
        element: <Invoices />, // ✅ Fixed typo
      },
      {
        path: "/display-items-manager",
        element: <DisplayItemManager/>, // ✅ Fixed typo
      },
      {
        path: "/stores-list",
        element: <StoresList/>, // ✅ Fixed typo
      },
      {
        path: "/customer-database",
        element: <CustomerDatabase/>, // ✅ Fixed typo
      },
      {
        path: "/factory-payments",
        element: <FactoryPayment/>, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
