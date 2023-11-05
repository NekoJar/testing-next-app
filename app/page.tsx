"use client";
import Pizza from "@/public/images/pizza-7.jpeg";
import Image from "next/image";

import { useState } from "react";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  const [isVisible, setVisible] = useState(false);

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
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
