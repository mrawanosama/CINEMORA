
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 bg-[#0b0b0d]">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-10 py-5">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-widest text-[#c6a15b]">
                    CINEMORA
                </Link>

                {/* Navigation Links */}
                <div className="hidden items-center gap-10 md:flex">
                    <Link
                        href="/"
                        className="text-sm text-white transition hover:text-[#c6a15b]"
                    >
                        الرئيسية
                    </Link>

                    <Link
                        href="/movies"
                        className="text-sm text-white transition hover:text-[#c6a15b]"
                    >
                        الأفلام
                    </Link>

                    <Link
                        href="/genres"
                        className="text-sm text-white transition hover:text-[#c6a15b]"
                    >
                        التصنيفات
                    </Link>

                    <Link
                        href="/watchlist"
                        className="text-sm text-white transition hover:text-[#c6a15b]"
                    >
                        قائمتي
                    </Link>
                </div>

                {/* Search */}


                <Link
                    href="/search"
                    aria-label="البحث"
                    className="mr-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#c6a15b]/40 text-[#c6a15b] transition-all duration-300 hover:border-[#c6a15b] hover:bg-[#c6a15b] hover:text-black"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                </Link>


            </div>
        </nav>
    );
}
