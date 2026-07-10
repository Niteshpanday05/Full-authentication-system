import Link from "next/link";
import { User } from "lucide-react";

export default function ProfileButton() {
  return (
    <Link
      href="/profile"
      className="rounded-full p-2 transition hover:bg-gray-100"
    >
      <User size={22} />
    </Link>
  );
}