import Navbar from "@/components/layout/Navbar";


import MoviesClient from "@/components/movies/MoviesClient";
import { movies } from "@/data/movies";

export default function MoviesPage() {
  return (
    <>
    <Navbar />
    <main
      dir="rtl"
      className="min-h-screen bg-[#08090D] text-white px-6 py-16"
    >
      <section className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-sm text-[#C6A76A] mb-3 tracking-widest">
            EXPLORE CINEMA
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            اكتشف الأفلام
          </h1>

          <p className="text-gray-400 text-lg">
            اكتشف أفضل الأفلام المصرية واستمتع بعالم السينما.
          </p>
        </div>

        <MoviesClient movies={movies} />

      </section>
    </main>
    
    </>
  );
}

