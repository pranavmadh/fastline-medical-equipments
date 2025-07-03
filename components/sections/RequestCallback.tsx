"use client";
import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RequestCallback() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 px-10 md:px-20 flex justify-center items-center"
    >
      <div className="container flex flex-col items-center md:px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            Contact us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch with Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            We're here to answer your questions, discuss your project, and help
            you find the best solutions for your medical equipment needs. Reach
            out to us, and let's start building something great together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Let’s Talk
            </h3>

            {submitted ? (
              <div className="text-green-600 text-lg font-medium">
                ✅ Thank you! We'll contact you soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/contact.pranavm@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Your phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Optional"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition"
                >
                  Request Call Back
                </button>
              </form>
            )}
          </div>

          {/* Right - Info and Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Prefer a Direct Approach?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 flex flex-col">
                    {" "}
                    <Link href={"tel:971522922874"}>+971 522 922 874 </Link>
                    <Link href={"tel:+971561625886"}>+971 561 625 886 </Link>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    <Link href={"mailto:fastlinemedicalequipment@gmail.com"}>
                      fastlinemedicalequipment@gmail.com
                    </Link>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Sunday to Friday, 9 AM – 6 PM (Gulf Time)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200 relative">
                <iframe
                  width="100%"
                  height="650px"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Muweilah%20Commercial%20-%20Sharjah%20-%20United%20Arab%20Emirates&maptype=roadmap"
                ></iframe>
                <div className="absolute inset-0 bg-green-100 opacity-20" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Visit Our Office
                </h4>
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">
                    Ajman, United Arab Emirates – Healthcare Industrial Area
                  </span>
                </div>

                <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition">
                  <span>Get Directions</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
