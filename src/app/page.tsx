import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-1/1 bg-gray-300">
      <main className="flex">
        <Sidebar />
        <Header />
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
