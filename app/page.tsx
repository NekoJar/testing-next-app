import Link from "next/link";
import ProductCard from "./users/components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1 className="pb-4">
        Hello, {session && <span>{session.user!.name}</span>}👋
      </h1>
      <ProductCard />
    </main>
  );
}
