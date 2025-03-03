"use client";
import Link from "next/link";
import { useState } from "react";
import { HeaderItem } from "@/types/menu";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  item: HeaderItem;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive = path === item.href;

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`text-lg font-medium ${
          isActive ? "text-primary" : "text-black dark:text-white hover:text-primary"
        }`}
      >
        {item.label}
      </Link>
      
      {item.submenu && submenuOpen && (
        <div className="absolute left-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
