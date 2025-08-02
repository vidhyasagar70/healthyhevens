'use client';

import React from "react";
import { Typography } from "@material-tailwind/react";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import {
  HomeIcon,
  ShoppingBagIcon,
  CalendarDaysIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const CURRENT_YEAR = new Date().getFullYear();

const NAV_LINKS = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "#home",
  },
  {
    name: "Products",
    icon: ShoppingBagIcon,
    href: "#products",
  },
  {
    name: "Book Session",
    icon: CalendarDaysIcon,
    href: "#session",
  },
  {
    name: "Contact",
    icon: PhoneIcon,
    href: "#contact",
  }
];

const CONTACT_INFO = [
  {
    icon: Phone,
    text: "+91 9789446443",
    href: ""
  },
  {
    icon: Mail,
    text: " Healthevens62@gmail.com",
    href: "mailto:info@vetrihealthyheavens.com"
  },
  {
    icon: MapPin,
    text: "T.vadipatti, Tamil Nadu, India",
    href: "#location"
  }
];

export function Footer() {
  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Leaf className="w-6 h-6 text-white" />
              <Typography className="text-lg font-bold text-white">
                Vetri Healthy Heavens
              </Typography>
            </div>
            <Typography className="text-sm text-white/90 leading-relaxed max-w-sm mx-auto md:mx-0">
              Empowering lives through premium nutrition and wellness solutions. Your health journey starts here with personalized guidance.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <Typography className="text-lg font-semibold text-white mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <Typography
                    as="a"
                    href={href}
                    className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/90 hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <Typography className="text-lg font-semibold text-white mb-4">
              Contact Info
            </Typography>
            <ul className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, text, href }, index) => (
                <li key={index}>
                  <Typography
                    as="a"
                    href={href}
                    className="flex items-center justify-center md:justify-start gap-3 text-sm text-white/90 hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="break-all">{text}</span>
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Typography className="text-sm text-white/70">
            &copy; {CURRENT_YEAR} Vetri Healthy Heaven Nutrition Center. All rights reserved.
          </Typography>
          
          <div className="flex items-center gap-4 text-xs text-white/70">
            <Typography as="a" href="#privacy" className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </Typography>
            <span>•</span>
            <Typography as="a" href="#terms" className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;