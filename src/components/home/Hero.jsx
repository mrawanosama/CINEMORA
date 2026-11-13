
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#0b0b0d] px-6 py-24 md:px-16 lg:px-24">

      <div className="absolute inset-0 bg-gradient-to-l from-[#0b0b0d] via-[#0b0b0d]/90 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        <span className="mb-8 block text-sm tracking-[4px] text-[#c6a15b]">
          EGYPTIAN CINEMA COLLECTION
        </span>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.5] text-[#f5f1e8] md:text-7xl">
          حكايات مصرية
          <br />
          <span className="text-[#c6a15b]">
            تستحق أن تُروى
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-9 text-gray-400 md:text-lg">
          اكتشف عالم السينما المصرية، واستمتع بأحدث
          الأفلام والقصص التي صنعت تاريخاً من الإبداع.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="/movies"
            className="inline-flex items-center justify-center rounded-md bg-[#c6a15b] px-10 py-4 font-semibold text-black transition duration-300 hover:bg-[#a78343]"
          >
            اكتشف الأفلام
          </Link>

          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-10 py-4 text-white transition duration-300 hover:border-[#c6a15b] hover:text-[#c6a15b]"
          >
            ابحث عن فيلم
          </Link>

        </div>

      </div>
    </section>
  );
}
