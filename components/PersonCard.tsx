import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Person } from "@/lib/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PersonCard({ person }: { person: Person }) {
  const photoUrl = person.photo
    ? urlFor(person.photo).width(400).height(400).fit("crop").url()
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-kc-border bg-white shadow-[0_12px_30px_rgba(15,28,51,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,28,51,0.1)]">
      <div className="relative aspect-[4/3] bg-kc-blue-soft">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={person.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-kc-blue to-kc-blue-deep">
            <span className="font-display text-4xl font-semibold text-white/90">
              {initials(person.name)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kc-blue">
          {person.position}
        </p>

        <h3 className="mt-1 font-display text-xl font-semibold text-kc-ink">
          {person.name}
        </h3>

        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="mt-3 break-words text-sm text-kc-blue hover:text-kc-blue-deep"
          >
            {person.email}
          </a>
        )}
      </div>
    </article>
  );
}
