
import AdminLayout from "@/layout/AdminLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/NotFound";
import ProductDatabase from "@/pages/product/ProductDatabase";

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
    ],
  },
]);

export default router;
