"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import mainImage from "@/public/AboutUs.png";
import subImage from "@/public/subimage.jpg";
import { ChevronDown, ChevronUp } from "lucide-react";

function AccordionSection() {
  const [activeSection, setActiveSection] = useState<string | null>("mission");

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const accordionItems = [
    {
      id: "mission",
      title: "Our Mission",
      content: `To provide exceptional medical equipment and services that exceed client expectations through
        innovation, quality craftsmanship, and a commitment to healthcare excellence. We aim to build lasting
        relationships and create solutions that enhance patient care and medical outcomes. Our dedicated team
        works tirelessly to ensure that healthcare providers have access to the most advanced and reliable
        medical equipment available.`,
    },
    {
      id: "vision",
      title: "Our Vision",
      content: `To be the leading global provider of innovative medical equipment solutions, setting industry
        standards for quality, reliability, and customer service. We envision a future where advanced medical
        technology is accessible to healthcare providers worldwide, improving patient outcomes and saving
        lives. Through continuous innovation and strategic partnerships, we strive to transform healthcare
        delivery across the globe.`,
    },
    {
      id: "history",
      title: "Our History",
      content: `Founded in 2020, Fastline Medical Equipments began as a small family business with a vision to revolutionize medical
        equipment supply. Over 15 years, we've grown from serving local clinics to partnering with hospitals
        and healthcare facilities across 50+ countries, always maintaining our commitment to quality and
        innovation. Our journey has been marked by significant milestones, including ISO certification,
        international expansion, and the development of cutting-edge medical solutions.`,
    },
  ];

  return (
    <div className="space-y-4">
      {accordionItems.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between">
            <h3 className="text-2xl font-bold text-green-600">{item.title}</h3>
            <div className="ml-4">
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </button>

          <div className={`overflow-hidden `}>
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="aboutus" className="py-20 bg-white md:px-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeader name="About Us" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            With years of experience in the medical equipment industry, we
            specialize in delivering high-quality, innovative, and reliable
            solutions tailored to meet the unique needs of healthcare
            professionals and medical facilities.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={mainImage}
                alt="About Us"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 w-64 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
              <Image
                src={subImage}
                alt="Medical Professionals"
                width={250}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <AccordionSection />
        </div>
      </div>
    </section>
  );
}
