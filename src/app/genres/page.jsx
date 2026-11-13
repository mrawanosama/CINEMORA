
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { movies } from "@/data/movies";

const genres = [
  {
    id: 1,
    name: "أكشن",
    englishName: "ACTION",
    slug: "action",
    description: "أفلام مليئة بالمواجهات والإثارة.",
  },
  {
    id: 2,
    name: "كوميدي",
    englishName: "COMEDY",
    slug: "comedy",
    description: "استمتع بأجمل الأفلام الكوميدية.",
  },
  {
    id: 3,
    name: "رومانسي",
    englishName: "ROMANCE",
    slug: "romance",
    description: "حكايات الحب والمشاعر.",
  },
  {
    id: 4,
    name: "دراما",
    englishName: "DRAMA",
    slug: "drama",
    description: "قصص إنسانية وأحداث مؤثرة.",
  },
  {
    id: 5,
    name: "رعب",
    englishName: "HORROR",
    slug: "horror",
    description: "تجارب سينمائية مليئة بالغموض والخوف.",
  },
  {
    id: 6,
    name: "إثارة وتشويق",
    englishName: "THRILLER",
    slug: "thriller",
    description: "أحداث مشوقة ومفاجآت غير متوقعة.",
  },
  {
    id: 7,
    name: "مغامرة",
    englishName: "ADVENTURE",
    slug: "adventure",
    description: "رحلات وتجارب مليئة بالمغامرات.",
  },
];

export default function GenresPage() {
  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="min-h-screen bg-[#08090D] px-6 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm tracking-[5px] text-[#C6A76A]">
              EXPLORE BY GENRE
            </p>

            <h1 className="mb-5 text-4xl font-bold md:text-5xl">
              تصنيفات الأفلام
            </h1>

            <p className="mx-auto max-w-xl text-gray-400">
              اكتشف عالم السينما المصرية واختر التصنيف
              المفضل لديك لتجد الأفلام التي تناسب ذوقك.
            </p>
          </div>

          {/* Genres Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {genres.map((genre) => {
              const featuredMovie = movies.find((movie) =>
                movie.genre?.includes(genre.name)
              );

              return (
                <Link
                  key={genre.id}
                  href={`/genres/${genre.slug}`}
                  className="group relative flex h-64 items-end overflow-hidden rounded-2xl border border-white/10 bg-[#15151B] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#C6A76A]/60"
                  style={
                    featuredMovie
                      ? {
                          backgroundImage: `linear-gradient(to top, rgba(8,9,13,0.98), rgba(8,9,13,0.15)), url("${featuredMovie.image}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                >
                  <div className="relative z-10">
                    <p className="mb-2 text-xs tracking-[4px] text-[#C6A76A]">
                      {genre.englishName}
                    </p>

                    <h2 className="mb-2 text-3xl font-bold transition group-hover:text-[#C6A76A]">
                      {genre.name}
                    </h2>

                    <p className="text-sm text-gray-300">
                      {genre.description}
                    </p>

                    <p className="mt-4 text-sm text-[#C6A76A]">
                      اكتشف الأفلام ←
                    </p>
                  </div>
                </Link>
              );
            })}

          </div>
        </div>
      </main>
    </>
  );
}
