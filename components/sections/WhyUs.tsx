import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import healthlogo from "@/public/Health.png";
import { BadgeCheck, Settings, Rocket } from "lucide-react";

const why = [
  {
    index: 1,
    name: "Quality",
    icon: <BadgeCheck className="h-8 w-8 text-green-600" />,
    description:
      "Our unwavering commitment to quality ensures that every product we offer is reliable, precise, and user-friendly. We adhere to strict quality control standards, so you can trust our equipment to perform consistently in even the most demanding medical environments.",
    image: "https://i.postimg.cc/vTnbwmzQ/quality.jpg",
  },
  {
    index: 2,
    name: "Service",
    icon: <Settings className="h-8 w-8 text-green-600" />,
    description:
      "We provide comprehensive service contracts, responsive technical support, and in-depth training programs to ensure your equipment remains in optimal condition. Our dedicated team works closely with clients to minimize downtime and maximize performance and confidence in every use.",
    image: "https://i.postimg.cc/V66XRxF9/service.jpg",
  },
  {
    index: 3,
    name: "Innovation",
    icon: <Rocket className="h-8 w-8 text-green-600" />,
    description:
      "By heavily investing in research and development, we ensure that our products are equipped with the latest advancements in medical technology. This forward-thinking approach allows us to continuously evolve and deliver cutting-edge solutions that meet the dynamic needs of modern healthcare.",
    image: "https://i.postimg.cc/QMSpc8cx/innovation.jpg",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-green-200 py-20">
      <Image
        src={healthlogo}
        alt="Health Logo"
        className="z-0 absolute size-96 top-5 opacity-65 -rotate-[12deg]"
      />
      <Image
        src={healthlogo}
        alt="Health Logo"
        className="z-0 absolute size-96 -top-52 right-80 opacity-65 -rotate-x-3 -scale-x-100"
      />
      <Image
        src={healthlogo}
        alt="Health Logo"
        className="z-0 absolute size-96 -bottom-36 right-5 opacity-65 -rotate-[12deg]"
      />

      <div className="relative z-10 md:px-16 px-4">
        <SectionHeader name="Why Choose Us?" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-5 md:px-0">
          {why.map((item) => (
            <div
              key={item.index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-start hover:shadow-2xl transition"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="bg-green-100 p-2 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              </div>
              <p className="text-gray-600 text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
