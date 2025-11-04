
import AdminLayout from "@/layout/AdminLayout";
import ArtInventory from "@/pages/art/ArtInventory";
import ConsignmentManager from "@/pages/Consignment Manager/ConsignmentManager";
import Dashboard from "@/pages/dashboard/Dashboard";
import Invoices from "@/pages/Invoices/Invoices";
import NotFound from "@/pages/NotFound";
import ProductDatabase from "@/pages/product/ProductDatabase";
import StockMangement from "@/pages/stock/StockMangement";

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
        element: <ArtInventory/>, // ✅ Fixed typo
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
        path: "/invoice",
        element: <Invoices />, // ✅ Fixed typo
      },
    ],
  },
]);

export default router;
