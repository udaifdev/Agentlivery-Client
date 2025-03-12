// components/admin/Header.tsx
import React, { useState } from 'react';
import { Bell, Search, Menu, X, User, LogOut } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const AdminHeader = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-gray-200  shadow-sm fixed w-full top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"  
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="ml-4  bg-gray-800 lg:ml-0">
            <img src="/images/agentlivery-logos.png" alt="Logo" className="h-12 w-12" />
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 px-4 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <img
                src="https://media.istockphoto.com/id/1396322048/photo/young-indian-businesswoman-talking-on-a-tuuelephone-in-an-office-alone-one-female-only-making-a.jpg?s=612x612&w=0&k=20&c=LdozydESIBqXbzF7f0KM2WQogUemeWkmB33d1DGMvK4="
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <User size={16} className="mr-2" />
                  Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader