import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Grid Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Grocify</h2>
            <p className="text-green-100">
              We provide high quality services with modern design and smooth
              performance. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-green-100">
              <li className="hover:text-white cursor-pointer">Web Development</li>
              <li className="hover:text-white cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer">E-commerce</li>
              <li className="hover:text-white cursor-pointer">SEO Optimization</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <span className="hover:text-green-200 cursor-pointer">🌐</span>
              <span className="hover:text-green-200 cursor-pointer">📘</span>
              <span className="hover:text-green-200 cursor-pointer">📸</span>
              <span className="hover:text-green-200 cursor-pointer">🐦</span>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-blue-400 mt-12 pt-6 text-center text-green-100">
          © {new Date().getFullYear()} Grocify. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;