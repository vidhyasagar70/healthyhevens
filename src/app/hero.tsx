"use client";

import { Button, Typography } from "@material-tailwind/react";
import { MapPin } from "lucide-react";

function Hero() {
  return (
    <header className="relative h-[80vh] md:h-[90vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600')",
        }}
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-600 bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-4xl text-center text-white">
          <Typography
            variant="h1"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            The Hero Site of Improving Health
          </Typography>

          <Typography
            variant="lead"
            className="mb-4 text-white/90 max-w-2xl mx-auto"
          >
            Transform your life with premium nutrition products and personalized
            wellness guidance at Vetri Healthy Heaven Nutrition Center.
          </Typography>

          <div className="flex justify-center items-center gap-2 mb-6 text-white">
            <MapPin className="w-5 h-5" />
            <Typography variant="small" className="font-medium">
              Maharaningar, near Madhakovil, Vadipatti, Madurai – 625218
            </Typography>
          </div>

          <Button
            color="white"
            className="px-6 py-3 text-sm font-semibold text-green-800 hover:bg-white/90 transition"
          >
            Start Journey
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
