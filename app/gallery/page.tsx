import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/components/site-data";
import { WavyText } from "@/components/WavyText";

export default function GalleryPage() {
  const imgs = (site as any).gallery ?? [];
  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              <WavyText text="Gallery" />
            </h1>
            <p className="mt-4 text-white/70">
              A selection of recent work, showroom images and flooring finishes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {imgs.map((src: string, idx: number) => (
              <a key={idx} href={src} target="_blank" rel="noreferrer" className="card p-0 overflow-hidden hover-lift">
                <img
                  src={src}
                  alt={`Greenfields Flooring gallery photo ${idx + 1}`}
                  className="h-[260px] w-full object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
