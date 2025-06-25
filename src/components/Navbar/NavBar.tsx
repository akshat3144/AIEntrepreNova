"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { Menu as MenuIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Set the active tab based on the current path
  useEffect(() => {
    // Find which menu item corresponds to the current path
    const currentPath = menuItems.find((item) => pathname === item.href);
    if (currentPath) {
      setActiveTab(currentPath.label);
    } else {
      setActiveTab(null); // Reset if no match
    }
  }, [pathname]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/community", label: "Community" },
    { href: "/hub", label: "Opportunity Hub" },
    { href: "/FAQ", label: "FAQs" },
  ];

  const menuItemsmobile = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/community", label: "Community" },
    {
      href: "/resources",
      label: "Resources",
      subItems: [
        { href: "/education", label: "Business Education and Training" },
        {
          href: "/govt-support",
          label: "Government Schemes and Financial Support",
        },
        { href: "/legal", label: "Legal and Regulatory Guidance" },
        {
          href: "/research-insights",
          label: "Market Research and Consumer Insights",
        },
        { href: "/marketing", label: "Low-Cost Marketing Platforms" },
        { href: "/networking", label: "Mentorship and Networking Platforms" },
        { href: "/accounts", label: "Basic Financial and Accounting Tools" },
      ],
    },
    { href: "/hub", label: "Opportunity Hub" },
    { href: "/FAQ", label: "FAQs" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="bg-black text-white fixed top-7 left-1/2 transform -translate-x-1/2 w-3/5 z-50 rounded-[50px] text-lg hidden md:block">
        <Menu setActive={setActiveHover}>
          {menuItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <MenuItem
                setActive={setActiveHover}
                active={activeHover}
                item={item.label}
                currentPath={pathname}
                currentTab={activeTab}
              />
            </Link>
          ))}
        </Menu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-full bg-black text-white"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Side Pane */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col pt-20 px-4">
          {menuItemsmobile.map((item) =>
            item.subItems ? (
              <div key={item.href}>
                <button
                  onClick={toggleResources}
                  className="py-4 text-lg flex justify-between items-center w-full"
                >
                  {item.label}
                  <span>{isResourcesOpen ? "-" : "+"}</span>
                </button>
                {isResourcesOpen &&
                  item.subItems.map((sub) => (
                    <Link
                      href={sub.href}
                      key={sub.href}
                      className="block pl-4 py-2 text-base hover:text-gray-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                href={item.href}
                key={item.href}
                className={`py-4 text-lg hover:text-gray-300 border-b border-gray-800 ${
                  pathname === item.href ? "border-l-2 border-l-white pl-2" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
