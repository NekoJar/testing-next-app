import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="pb-4">Home</h1>
      <ProductCard />
    </main>
  );
}
