"use client";

export default function MegaMenuBanner() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-8 text-white">
      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
        New Collection
      </span>

      <h2 className="mt-4 text-3xl font-bold">
        Summer Sale
      </h2>

      <p className="mt-3 text-sm text-indigo-100">
        Save up to 50% on selected products.
      </p>

      <button className="mt-6 rounded-lg bg-white px-5 py-2 font-semibold text-indigo-700 transition hover:scale-105">
        Shop Now
      </button>
    </div>
  );
}