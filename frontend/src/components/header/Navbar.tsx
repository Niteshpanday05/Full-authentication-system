"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./Search/SearchBar";
import HeaderActions from "./HeaderActions";
import MobileMenuButton from "./MobileMenuButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* Left */}
        <div className="flex items-center gap-4 lg:gap-10">
          <MobileMenuButton />
          <Logo />
          <Navigation />
        </div>

        {/* Center */}
        <div className="hidden flex-1 justify-center px-8 lg:flex">
          <SearchBar />
        </div>

        {/* Right */}
        <HeaderActions />
      </div>
    </header>
  );
}