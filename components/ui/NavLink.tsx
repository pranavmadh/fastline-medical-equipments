import Link from "next/link";

interface PropsType {
  href: string;
  name: string;
}
export default function NavLink({ href, name }: PropsType) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-neutral-950/80 hover:text-green-600 hover:font-semibold   "
    >
      {name}
    </Link>
  );
}
