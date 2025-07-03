import Image from "next/image";
import steth from "@/public/steth.png";
import medicalicon from "@/public/medicalicon.png";

export default function Body() {
  return (
    <section className="px-4 md:px-16 mt-28" id="home">
      <div className="md:h-[80vh] bg-gradient-to-b from-green-200 to-green-400 rounded-3xl p-6 md:p-28 flex justify-center items-center relative flex-col text-center overflow-hidden">
        {/* Tagline */}
        <div className="bg-neutral-100 text-black w-fit px-4 py-2 rounded-full mb-6 text-sm md:text-base font-medium backdrop-blur-3xl z-20">
          🔥 #1 Best Medical Equipments
        </div>

        {/* Heading */}
        <div className="w-full md:w-2/3 z-10">
          <div className="text-6xl sm:text-5xl md:text-7xl flex flex-col gap-2 leading-tight text-neutral-800">
            <h1>Get The best</h1>
            <h1 className="font-bold text-black">Medical Equipment</h1>
            <h1>Supply</h1>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 z-20">
          <div className="bg-neutral-100 px-6 py-3 rounded-full shadow-xl hover:drop-shadow-xl text-sm md:text-base font-medium">
            Get A Call Back
          </div>
        </div>

        {/* Decorative Images */}
        <Image
          src={steth}
          alt="steth"
          className="object-contain w-36 md:w-96 absolute -top-3 -left-10 rotate-[140deg] z-10 hidden md:block"
        />
        <Image
          src={medicalicon}
          alt="medical icon"
          className="object-contain w-36 md:w-96 absolute -top-3 -right-10 rotate-[30deg] z-10 opacity-30"
        />
        <Image
          src={medicalicon}
          alt="medical icon"
          className="object-contain w-36 md:w-96 absolute bottom-2 left-2 rotate-[20deg] z-10 opacity-30 md:hidden"
        />
      </div>
    </section>
  );
}
