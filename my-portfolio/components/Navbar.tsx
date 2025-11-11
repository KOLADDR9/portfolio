'use client';
import Link from 'next/link';

export default function Navbar() {
  const menuItems = [
    { name: 'Hero', href: '#hero' },
    { name: 'About ME', href: '#aboutme' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact ME', href: '#contactme' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-lg z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-red-600 font-extrabold text-2xl tracking-wider cursor-pointer">
          SKY.K.O
        </h1>

        {/* Menu */}
        <ul className="flex space-x-10 text-white font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative group transition-colors hover:text-red-500"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
