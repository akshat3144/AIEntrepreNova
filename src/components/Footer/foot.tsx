import Link from "next/link";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1 - About */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">
              AI-EntrepreNova
            </h2>
            <p className="text-gray-400 mb-6">
              Empowering rural entrepreneurs with AI-driven tools and resources
              to build successful businesses and transform communities.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/FAQ"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/research-insights"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Newsletter</h2>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new tools, success stories, and
              entrepreneurship tips.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-3 py-3 text-gray-200 bg-gray-800/50 outline-none border border-gray-700 focus:border-blue-500 rounded-lg transition-colors"
                />
              </div>
              <button className="w-full py-3 px-4 font-medium text-sm text-center text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {currentYear} AI-EntrepreNova. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <p className="text-gray-400 text-sm mr-1">Made with ❤️ by</p>
              <a
                href="https://www.linkedin.com/in/akshat-gupta-840740285/"
                className="text-blue-500 hover:text-blue-400 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Akshat Gupta
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
