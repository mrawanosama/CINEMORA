
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedMovies from "@/components/home/FeaturedMovies";
import LatestMovies from "@/components/home/LatestMovies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedMovies />
        <LatestMovies />
      </main>
    </>
  );
}
