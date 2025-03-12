// components/admin/Sidebar.tsx
import React from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  Mail, 
  FileText, 
  BarChart2,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Users', href: '/admin/users' },
    { icon: Mail, label: 'Messages', href: '/admin/messages' },
    { icon: FileText, label: 'Blogs', href: '/admin/reports' },
    { icon: BarChart2, label: 'Services', href: '/admin/analytics' },
    // { icon: Settings, label: 'Settings', href: '/admin/settings' },
    // { icon: HelpCircle, label: 'Help', href: '/admin/help' },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-full bg-gray-200 shadow-lg transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}
        pt-16`}
    >
      <nav className="px-4 py-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center space-x-2 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 mb-1"
          >
            <item.icon size={25} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar