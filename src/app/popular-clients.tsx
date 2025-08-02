"use client";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function ContactPage() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="h1" color="blue-gray" className="mb-4 text-4xl lg:text-5xl font-bold">
            Get In Touch
          </Typography>
          <Typography variant="lead" className="text-gray-600 max-w-3xl mx-auto">
            Ready to start your health journey? Contact us today for personalized nutrition
            guidance and product information
          </Typography>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Call Us */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <PhoneIcon className="w-8 h-8 text-white" />
            </div>
            <Typography variant="h4" color="blue-gray" className="mb-6 font-semibold">
              Call Us
            </Typography>
            <div className="space-y-3">
              <Typography className="text-gray-600 text-lg">
                9789446443
              </Typography>
              <Typography className="text-gray-600 text-lg">
                8382819949
              </Typography>
              <Typography className="text-gray-600 text-lg">
                8838219770
              </Typography>
            </div>
          </div>

          {/* Email Us */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <EnvelopeIcon className="w-8 h-8 text-white" />
            </div>
            <Typography variant="h4" color="blue-gray" className="mb-6 font-semibold">
              Email Us
            </Typography>
            <Typography className="text-gray-600 text-lg">
              Healthevens62@gmail.com
            </Typography>
          </div>

          {/* Visit Us */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPinIcon className="w-8 h-8 text-white" />
            </div>
            <Typography variant="h4" color="blue-gray" className="mb-6 font-semibold">
              Visit Us
            </Typography>
            <div className="space-y-3">
              <Typography className="text-gray-600 text-lg">
                Maharaningar, near Madhakovil
              </Typography>
              <Typography className="text-gray-600 text-lg">
                Vadipatti, Madurai – 625218
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;