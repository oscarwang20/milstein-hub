import Banners from "@/components/Banners";
import Image from "next/image";
import Hello from "../components/Hello";

export default function Home() {
  return (
    <div>
      Hello World!
      <Hello />
      <Banners/>
    </div>

  );
}
