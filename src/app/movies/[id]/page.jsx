
import { movies } from "../../../data/movies.js";
import Link from "next/link";
import { notFound } from "next/navigation";
import VideoPlayer from "../../components/VideoPlayer";

export const instant = false;

export default async function MovieDetails({ params }) {
  const { id } = await params;

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    notFound();
  }

  const hasVideo = Boolean(movie.videoUrl);
  const hasWatchLink = Boolean(movie.watchUrl);

  return (
    <main className="min-h-screen bg-[#080808] text-white" dir="rtl">

      {/* Movie Hero */}
      <section className="relative min-h-[550px] overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
          style={{
            backgroundImage: `url(${movie.image})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-black/40" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center">

          {/* Poster */}
          <div className="mx-auto w-64 shrink-0 overflow-hidden rounded-2xl shadow-2xl md:mx-0">
            <img
              src={movie.image}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Information */}
          <div className="flex-1 text-center md:text-right">

            <Link
              href="/movies"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#c9a96e]"
            >
              <span>→</span>
              العودة إلى الأفلام
            </Link>

            <h1 className="mb-5 text-4xl font-bold md:text-5xl">
              {movie.title}
            </h1>

            <div className="mb-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300 md:justify-start">

              <span className="rounded-full border border-white/20 px-4 py-2">
                {movie.year}
              </span>

              {movie.genre.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/20 px-4 py-2"
                >
                  {genre}
                </span>
              ))}

            </div>

            <h2 className="mb-3 text-xl font-semibold">
              قصة الفيلم
            </h2>

            <p className="max-w-2xl text-base leading-8 text-gray-300">
              {movie.description}
            </p>

            {hasVideo || hasWatchLink ? (
              <a
                href="#movie-player"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#c9a96e] px-8 py-4 font-bold text-black transition hover:bg-[#dfbd82]"
              >
                <span className="text-xl">▶</span>
                مشاهدة الفيلم
              </a>
            ) : (
              <p className="mt-8 inline-block rounded-lg border border-white/10 bg-white/5 px-6 py-4 text-gray-400">
                الفيلم غير متاح للمشاهدة حاليًا
              </p>
            )}

          </div>
        </div>
      </section>

      {/* Cast */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <h2 className="mb-8 text-2xl font-bold">
          أبطال الفيلم
        </h2>

        <div className="flex flex-wrap gap-4">

          {movie.cast.map((actor, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition hover:border-[#c9a96e]"
            >
              <p className="font-medium">
                {actor}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Video Player */}
      {(hasVideo || hasWatchLink) && (
        <section
          id="movie-player"
          className="mx-auto max-w-6xl scroll-mt-10 px-6 pb-20"
        >

          <h2 className="mb-6 text-2xl font-bold">
            مشاهدة الفيلم
          </h2>

          <VideoPlayer
            videoUrl={movie.videoUrl}
            watchUrl={movie.watchUrl}
            title={movie.title}
            poster={movie.image}
          />

        </section>
      )}

    </main>
  );
}

