
"use client";

import { useState } from "react";
import MovieGrid from "./MovieGrid";

export default function MoviesClient({ movies }) {
  // Search State
  const [search, setSearch] = useState("");

  // Year Filter State
  const [selectedYear, setSelectedYear] = useState("all");

  // Genre Filter State
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Sorting State
  const [sortBy, setSortBy] = useState("newest");

  // Filter Movies
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesYear =
      selectedYear === "all" ||
      movie.year.toString() === selectedYear;

    const matchesGenre =
      selectedGenre === "all" ||
      movie.genre?.includes(selectedGenre);

    return matchesSearch && matchesYear && matchesGenre;
  });

  // Sort Movies
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.year - a.year;

      case "oldest":
        return a.year - b.year;

      case "name-asc":
        return a.title.localeCompare(b.title, "ar");

      case "name-desc":
        return b.title.localeCompare(a.title, "ar");

      default:
        return 0;
    }
  });

  return (
    <div>

      {/* Search and Filters */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row">

        {/* Search */}
        <input
          type="text"
          placeholder="ابحث عن فيلم..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-[#15151B] px-5 py-4 text-white outline-none transition focus:border-[#C6A76A] md:flex-1"
        />

        {/* Year Filter */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="rounded-lg border border-white/10 bg-[#15151B] px-5 py-4 text-white outline-none focus:border-[#C6A76A]"
        >
          <option value="all">كل السنوات</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>

        {/* Genre Filter */}
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="rounded-lg border border-white/10 bg-[#15151B] px-5 py-4 text-white outline-none focus:border-[#C6A76A]"
        >
          <option value="all">كل التصنيفات</option>
          <option value="أكشن">أكشن</option>
          <option value="كوميدي">كوميدي</option>
          <option value="رومانسي">رومانسي</option>
          <option value="دراما">دراما</option>
          <option value="رعب">رعب</option>
          <option value="إثارة وتشويق">إثارة وتشويق</option>
          <option value="مغامرة">مغامرة</option>
        </select>

        {/* Sorting */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-white/10 bg-[#15151B] px-5 py-4 text-white outline-none focus:border-[#C6A76A]"
        >
          <option value="newest">الأحدث أولاً</option>
          <option value="oldest">الأقدم أولاً</option>
          <option value="name-asc">الاسم: أ - ي</option>
          <option value="name-desc">الاسم: ي - أ</option>
        </select>

      </div>

      {/* Results Count */}
      <p className="mb-6 text-sm text-gray-400">
        عدد الأفلام: {sortedMovies.length}
      </p>

      {/* Movies Grid */}
      {sortedMovies.length > 0 ? (
        <MovieGrid movies={sortedMovies} />
      ) : (
        <div className="py-20 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">
            لم يتم العثور على أفلام
          </h3>

          <p className="text-gray-400">
            جرب البحث باسم فيلم آخر أو تغيير الفلاتر.
          </p>
        </div>
      )}

    </div>
  );
}
