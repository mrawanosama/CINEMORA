
import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-xl bg-[#15151B]">

        {/* Movie Poster */}
        <div className="aspect-[2/3] overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Movie Rating */}
        {movie.rating && (
          <div className="absolute top-3 left-3 rounded-md bg-black/70 px-3 py-1 text-sm text-[#D6B46A]">
            ★ {movie.rating}
          </div>
        )}

      </div>

      {/* Movie Information */}
      <div className="mt-3">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#D6B46A]">
          {movie.title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {movie.genre}
        </p>
      </div>
    </Link>
  );
}

