import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import ProfileButton from "./ProfileButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left */}
        <Logo />

        {/* Center */}
        <div className="hidden flex-1 px-10 md:flex">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <CartButton />
          <ProfileButton />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t p-4 md:hidden">
        <SearchBar />
      </div>
    </header>
  );
}