import Image from "next/image";
import { PortableBody } from "@/components/PortableBody";
import { getAboutPage } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata = {
  title: "About",
};

export default async function AboutPage() {
  const about = await getAboutPage();
  const imageUrl = about.image
    ? urlFor(about.image).width(1200).height(800).fit("crop").url()
    : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-blue">
        Our chapter
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-kc-blue-deep sm:text-5xl">
        {about.headline}
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="rounded-[1.75rem] border border-kc-border bg-white p-6 sm:p-8">
          <PortableBody value={about.body} />
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] bg-kc-blue">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          ) : (
            <div className="flex h-full min-h-[280px] flex-col justify-end bg-gradient-to-br from-kc-blue to-kc-blue-deep p-6 text-white">
              <p className="font-display text-3xl font-semibold">
                Caring — Our Way of Life
              </p>
              <p className="mt-2 text-sm text-white/75">
                Add a chapter photo in Sanity Studio to personalize this page.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
