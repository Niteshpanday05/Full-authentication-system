import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartButton() {
  return (
    <Link
      href="/cart"
      className="rounded-full p-2 transition hover:bg-gray-100"
    >
      <ShoppingCart size={22} />
    </Link>
  );
}