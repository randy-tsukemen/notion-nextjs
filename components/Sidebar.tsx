import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/settings" className="hover:text-gray-300">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
