import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {
  ClientIcon,
  FinanceIcon,
  InventoryIcon,
  SalesDashboardIcon,
} from "@/components/common/icons/CustomIcons";
const AdminLayout = () => {
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <SalesDashboardIcon />,
      text: "Sales Dashboard",
      path: "/dashboard", // main path (optional, if you still want to keep it)
      activePaths: ["/dashboard"], // all paths that should make this item active
    },
    {
      id: 2,
      icon: <InventoryIcon />,
      text: "Inventory",

      sublink: [
        {
          id: 1,
          text: "Product Database",
          path: "/product-database",
        },
        {
          id: 2,
          text: "Art Inventory",
          path: "/art-inventory",
        },
        {
          id: 3,
          text: "Stock Management",
          path: "/stock-management",
        },
        {
          id: 4,
          text: "Display items manager",
          path: "/display-items-manager",
        },
      ],
    },
    {
      id: 3,
      icon: <ClientIcon />,
      text: "Clients",

      sublink: [
        {
          id: 1,
          text: "Customer database",
          path: "/customer-database",
        },
        {
          id: 2,
          text: "Gallaries list",
          path: "/galleries-list",
        },
        {
          id: 3,
          text: "Stores list",
          path: "/stores-list",
        },
      ],
    },
    {
      id: 4,
      icon: <FinanceIcon />,
      text: "Finance",

      sublink: [
        {
          id: 1,
          text: "Expenses",
          path: "/expense",
        },
        {
          id: 2,
          text: "Invoices",
          path: "/invoice",
        },
        {
          id: 3,
          text: "Pricing calculator",
          path: "/pricing-calculator",
        },
        {
          id: 4,
          text: "Consignment Manager",
          path: "/consignment-manager",
        },
        {
          id: 5,
          text: "Galleries sales",
          path: "/galleries-sales",
        },
        {
          id: 6,
          text: "Factory payments",
          path: "/factory-payments",
        },
      ],
    },
  ];
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <ScrollRestoration />
      <div className="flex  h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark text-white flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col lg:gap-10 gap-5 lg:py-6 py-3 lg:px-[30px] px-2.5 sm:px-5">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
