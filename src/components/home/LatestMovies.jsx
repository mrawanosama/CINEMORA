
const movies = [
    {
        id: 1,
        title: "ولاد رزق 3",
        year: 2024,
        rating: 8.5,
        image: "/images/movies/welad-rizk-3.jpg",
    },
    {
        id: 2,
        title: "الفيل الأزرق 2",
        year: 2025,
        rating: 7,
        image: "/images/movies/blue-elephant-3.jpg",
    },
    {
        id: 3,
        title: "الحريفة 2",
        year: 2024,
        rating: 9,
        image: "/images/movies/el-harifa-2.jpg",
    },
    {
        id: 4,
        title: "شقو",
        year: 2024,
        rating: 8,
        image: "/images/movies/shako.jpg",
    },
];

export default function LatestMovies() {
    return (
        <section className="bg-[#090909] px-6 py-20 text-white md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <span className="mb-3 block text-sm font-medium tracking-widest text-[#C6A15B]">
                            CINEMORA COLLECTION
                        </span>

                        <h2 className="text-3xl font-bold md:text-4xl">
                            أحدث الأفلام
                        </h2>

                        <p className="mt-3 text-sm text-gray-400 md:text-base">
                            اكتشف أحدث إصدارات السينما المصرية
                        </p>
                    </div>

                    <button className="hidden rounded-full border border-[#C6A15B]/50 px-6 py-3 text-sm text-[#C6A15B] transition hover:bg-[#C6A15B] hover:text-black md:block">
                        عرض كل الأفلام
                    </button>
                </div>

                {/* Movies Grid */}
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="group cursor-pointer overflow-hidden rounded-xl"
                        >
                            <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-[#181818]">
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                                <div className="absolute right-3 top-3 rounded-md bg-black/70 px-3 py-1 text-sm text-[#C6A15B]">
                                    ★ {movie.rating}
                                </div>

                                <div className="absolute bottom-4 right-4 left-4">
                                    <h3 className="text-lg font-bold">
                                        {movie.title}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-300">
                                        {movie.year}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="mt-8 w-full rounded-full border border-[#C6A15B]/50 py-3 text-sm text-[#C6A15B] md:hidden">
                    عرض كل الأفلام
                </button>

            </div>
        </section>
    );
}
