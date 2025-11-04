import React from "react";
import SmartFilter from "./SmartFilter";
import SalesList from "./SalesList";

const DashboardRowTwo = () => {
  return (
    <div className="flex flex-col gap-6">
      <SmartFilter />
      <SalesList />
    </div>
  );
};

export default DashboardRowTwo;
