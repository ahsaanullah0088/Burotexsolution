import React from "react";
import Sidebar from "../Components/Sidenavbar/Sidenavbar";
import { useUser } from "@clerk/clerk-react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUser();
  const userName = user?.firstName || "User";

  const stats = [
    { label: "Submitted to SRN", count: 0 },
    { label: "Submitted to Client", count: 0 },
    { label: "Interview", count: 0 },
    { label: "Offers", count: 0 },
    { label: "Placements", count: 0 },
    { label: "Completed Guarantee Periods", count: 0 },
  ];

  const buttons = [
    { label: "View all available jobs", link: "/jobs" },
    { label: "View my candidates", link: "/candidates" },
    { label: "FAQ", link: "/faq" },
    { label: "Discord", link: "/discord" },
    { label: "Settings", link: "/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-10">
        {/* Welcome Message */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Welcome {userName}
        </h1>
        <p className="text-gray-600 mb-6">
          Expand your earning potential. Grow your network. Make an impact.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 text-center border hover:shadow-md transition"
            >
              <div className="text-3xl font-bold text-[#0B1F61]">{item.count}</div>
              <div className="text-sm text-gray-700 mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
          {buttons.map(({ label, link }, idx) => (
            <Link
              key={idx}
              to={link}
              className="bg-[#0B1F61] text-white py-3 rounded-lg shadow hover:bg-[#0A1B52] transition flex items-center justify-center gap-2"
            >
              {label === "Discord" && <FaDiscord className="text-lg" />}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
