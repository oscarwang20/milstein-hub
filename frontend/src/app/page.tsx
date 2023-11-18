import Image from "next/image";
import Hello from "../components/Hello";
import Events from "../components/Events";

export default function Home() {
  return (
    <div>
      Hello World!
      <Hello />
      <Events />
    </div>
  );
}
