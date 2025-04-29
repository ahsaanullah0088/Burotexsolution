import React from 'react';
import { FaHome, FaBriefcase, FaSignOutAlt, FaDiscord, FaQuestionCircle, FaPaperPlane, FaUserFriends, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col px-4 py-6">
      {/* Logo */}
      <div className="text-2xl font-bold mb-10">
        <span className="text-blue-500">My</span>Dashboard
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-4">
         <Link  to = "/dashboard"><NavItem  icon={<FaHome />} label="Home" /> </Link>
        <Link to = "/jobs"><NavItem  icon={<FaBriefcase />} label="Jobs" /></Link>
       <Link to = "/my-ats"> <NavItem icon={<FaClipboardList />} label="My ATS" /></Link>
       <Link to = "/my-submissiions"> <NavItem icon={<FaPaperPlane />} label="My Submissions" /></Link>
       <Link to = "/myreferrals"> <NavItem icon={<FaUserFriends />} label="My Referrals" /></Link>
       <Link to = "/faq"> <NavItem icon={<FaQuestionCircle />} label="FAQs" /></Link>
       <Link to = '/discord'> <NavItem icon={<FaDiscord />} label="Discord" /></Link>
      </nav>

      {/* Logout */}
      <div className="mt-auto">
        <NavItem icon={<FaSignOutAlt />} label="Logout" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded cursor-pointer transition">
    <div className="text-lg">{icon}</div>
    <span className="text-base">{label}</span>
  </div>
);

export default Sidebar;
