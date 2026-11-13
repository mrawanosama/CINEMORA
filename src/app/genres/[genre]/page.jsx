
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import MovieGrid from "@/components/movies/MovieGrid";
import { movies } from "@/data/movies";

const genres = {
  action: "أكشن",
  comedy: "كوميدي",
  romance: "رومانسي",
  drama: "دراما",
  horror: "رعب",
  thriller: "إثارة وتشويق",
  adventure: "مغامرة",
};

export default async function GenrePage({ params }) {
  const { genre } = await params;

  const genreName = genres[genre];

  if (!genreName) {
    notFound();
  }

  const genreMovies = movies.filter((movie) =>
    movie.genre?.includes(genreName)
  );

  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="min-h-screen bg-[#08090D] px-6 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl">

          {/* Back Link */}
          <Link
            href="/genres"
            className="mb-10 inline-block text-sm text-[#C6A76A] transition hover:text-white"
          >
            ← العودة إلى جميع التصنيفات
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="mb-3 text-sm tracking-[4px] text-[#C6A76A]">
              EXPLORE GENRE
            </p>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              أفلام {genreName}
            </h1>

            <p className="text-gray-400">
              اكتشف مجموعة الأفلام المصرية من تصنيف {genreName}.
            </p>
          </div>

          {/* Movies Count */}
          <p className="mb-8 text-sm text-gray-400">
            عدد الأفلام: {genreMovies.length}
          </p>

          {/* Movies */}
          {genreMovies.length > 0 ? (
            <MovieGrid movies={genreMovies} />
          ) : (
            <div className="py-20 text-center">
              <h2 className="mb-3 text-2xl font-bold">
                لا توجد أفلام في هذا التصنيف حاليًا
              </h2>

              <p className="text-gray-400">
                سنضيف المزيد من الأفلام قريبًا.
              </p>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
