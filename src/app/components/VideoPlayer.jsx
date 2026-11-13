
export default function VideoPlayer({
  videoUrl,
  watchUrl,
  title,
  poster,
}) {
  const isYouTube =
    videoUrl?.includes("youtube.com") ||
    videoUrl?.includes("youtu.be");

  const isDirectVideo =
    videoUrl?.match(/\.(mp4|webm|ogg)(\?.*)?$/i);

  const getYouTubeId = (url) => {
    if (!url) return null;

    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.slice(1);
      }

      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/")[2];
      }

      return null;
    } catch {
      return null;
    }
  };

  const youtubeId = isYouTube
    ? getYouTubeId(videoUrl)
    : null;

  const externalUrl = watchUrl || videoUrl;

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">

        {isYouTube && youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full"
          />
        ) : videoUrl && isDirectVideo ? (
          <video
            key={videoUrl}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            className="aspect-video w-full"
          >
            <source src={videoUrl} />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center text-center">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a96e] text-3xl text-[#c9a96e]">
              ▶
            </div>

            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              {externalUrl
                ? "يمكنك مشاهدة الفيلم عبر منصة المشاهدة الرسمية"
                : "الفيلم غير متاح للمشاهدة حاليًا"}
            </p>

            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-full bg-[#c9a96e] px-8 py-3 font-bold text-black transition hover:bg-[#dfc18b]"
              >
                شاهد الفيلم الآن
              </a>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

