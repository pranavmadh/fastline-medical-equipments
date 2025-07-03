import Header from "@/components/sections/Header";
import FooterComponent from "@/components/sections/FooterComponent";
import whatsappLogo from "@/public/WhatsappLogo.png";
import Link from "next/link";
import Image from "next/image";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <div className="fixed flex bg-neutral-100 rounded-full shadow-2xl right-3 bottom-10 p-1 z-50">
        <Link
          href={`https://wa.me/971522922874/?text=${encodeURIComponent(`Hey`)}`}
          className=" "
        >
          <Image src={whatsappLogo} alt="whatsapp logo" className="size-15" />
        </Link>
      </div>
      <FooterComponent />
    </>
  );
}
