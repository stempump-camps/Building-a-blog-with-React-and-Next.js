import Link from "next/link";

export default function Navbar({}) {
  return (
    <nav className="py-4 border-b">
      <Link href="/" passHref>
        <div className="cursor-pointer font-medium text-blue-500 hover:text-blue-700">
          Things and stuff
        </div>
      </Link>
    </nav>
  );
}
