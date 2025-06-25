"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Loader2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage(data.success);
      setEmail(""); // Clear the form
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again."
      );
    }
  };

  return (
    <footer className="pt-16 bg-black border-t border-gray-800">
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
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    AI Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Community
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/FAQ"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research-insights"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Newsletter</h2>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new tools, success stories, and
              entrepreneurship tips.
            </p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-3 py-3 text-gray-200 bg-gray-900 outline-none border border-gray-800 focus:border-blue-500 rounded-lg transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 font-medium text-sm text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm">{message}</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {currentYear} AI-EntrepreNova. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
