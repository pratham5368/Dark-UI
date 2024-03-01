import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    
    <main className="flex items-center justify-between space-x-10 bg-black  h-20
    sticky top-0 z-50 border-b border-gray-900 mx-5 ml-5
">
      <Navbar/>
      
    </main>
  );
}
