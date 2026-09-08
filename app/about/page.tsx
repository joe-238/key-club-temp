import Image from "next/image";
import { PageHero } from "@/components/PageHero";
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
    <div>
      <PageHero
        eyebrow="Our chapter"
        title={about.headline}
        description="Learn about our mission, values, and the impact we make at Staten Island Technical High School."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-2xl border border-kc-border bg-white p-6 shadow-[0_12px_40px_rgba(15,28,51,0.06)] sm:p-8">
            <PortableBody value={about.body} />
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,61,165,0.18)]">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div className="flex h-full min-h-[320px] flex-col justify-end bg-gradient-to-br from-kc-blue via-kc-blue-deep to-[#001a4d] p-8 text-white">
                <div className="mb-4 h-1 w-12 rounded-full bg-kc-yellow" />
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
    </div>
  );
}
