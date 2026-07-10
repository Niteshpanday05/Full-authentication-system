import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl p-6">
        <h1 className="text-3xl font-bold">Welcome to ShopMart</h1>
      </main>
    </>
  );
}