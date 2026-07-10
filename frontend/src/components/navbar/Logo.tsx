import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-wide text-blue-600"
    >
      ShopMart
    </Link>
  );
}