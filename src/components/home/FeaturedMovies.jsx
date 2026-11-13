
import Link from "next/link";

export default function FeaturedMovies() {
  return (
    <section
      dir="rtl"
      className="relative min-h-[550px] overflow-hidden bg-[#090909] text-white md:min-h-[650px]"
    >
      {/* Background Image */}
      <img
        src="/images/movies/featured-welad-rizk-3.jpg"
        alt="ولاد رزق 3"
        className="absolute inset-0 h-full w-full object-contain object-center opacity-100"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#090909] via-[#090909]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[550px] max-w-7xl items-center px-6 py-20 md:min-h-[650px] md:px-12 lg:px-20">
        <div className="max-w-2xl">

          <span className="mb-6 inline-block border-r-4 border-[#C6A15B] pr-3 text-sm font-semibold tracking-widest text-[#C6A15B]">
            FEATURED MOVIE
          </span>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
            ولاد رزق 3
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span>2024</span>
            <span>•</span>
            <span>أكشن / جريمة</span>
            <span>•</span>
            <span className="text-[#C6A15B]">★ 8.5</span>
          </div>

          <p className="mb-8 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
            يعود الأشقاء الأربعة في مغامرة جديدة مليئة بالإثارة
            والمواجهات والتحديات، في الجزء الثالث من سلسلة ولاد رزق.
          </p>

          <p className="mb-8 text-base leading-8 text-gray-300 md:text-lg">
            بطوله: احمد عز - عمرو يوسف - اسماء جلال - اسر ياسين - سيد رجب
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/movies"
              className="rounded-full bg-[#C6A15B] px-8 py-3 font-bold text-black transition hover:bg-[#dfbd79]"
            >
              اكتشف الفيلم
            </Link>

            <Link
              href="/movies"
              className="rounded-full border border-white/30 px-8 py-3 transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              جميع الأفلام
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

