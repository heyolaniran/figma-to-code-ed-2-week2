import Category from "@/components/Category";
import Collection from "@/components/Collection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="container px-14">
      <Hero />
      <Category />
      <Collection />
    </main>
  );
}
