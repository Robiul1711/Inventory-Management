import DashboardRowOne from "@/components/dashboard/DashboardRowOne";
import DashboardRowTwo from "@/components/dashboard/DashboardRowTwo";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 ">
      <DashboardRowOne />
      <DashboardRowTwo />
    </div>
  );
};

export default Dashboard;
