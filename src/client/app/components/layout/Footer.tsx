import React from "react";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cart", label: "Cart" },
  { href: "/sign-in", label: "Sign in" },
] as const;

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
