import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#B91C1C]">Cambridge Language Council</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Empowering students worldwide with top-notch English language education, 
              exam preparation, and communication mastery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#B91C1C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#B91C1C] transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-[#B91C1C] transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-[#B91C1C] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A8A]">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#B91C1C]" />
                Cambridge Language Council, Office no 3, first floor, Tehsil Chowk, 06 Bosan Rd, Gulgasht Colony, Multan, Punjab 60000
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#B91C1C]" /> +92 331-7078351
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#B91C1C]" /> info@clcconsultants.org
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Cambridge Language Council. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#B91C1C] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-[#B91C1C] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-[#B91C1C] transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
