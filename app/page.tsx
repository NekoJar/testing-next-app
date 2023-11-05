import Image from "next/image";
import Pizza from "@/public/images/pizza-7.jpeg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src={Pizza}
        alt="pizza"
        className="object-cover "
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
