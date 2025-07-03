import AboutUs from "@/components/sections/AboutUs";
import Body from "@/components/sections/Body";
import Catogeries from "@/components/sections/Catogeries";
import RequestCallback from "@/components/sections/RequestCallback";
import WhyUs from "@/components/sections/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Body />
      <Catogeries />
      <AboutUs />
      <WhyUs />
      <RequestCallback />
    </main>
  );
}
