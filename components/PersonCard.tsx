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

function instagramHref(value: string) {
  if (value.startsWith("http")) return value;
  const handle = value.replace(/^@/, "");
  return `https://instagram.com/${handle}`;
}

export function PersonCard({
  person,
  showContacts = false,
}: {
  person: Person;
  showContacts?: boolean;
}) {
  const photoUrl = person.photo
    ? urlFor(person.photo).width(400).height(400).fit("crop").url()
    : null;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-kc-border bg-white shadow-[0_12px_30px_rgba(15,28,51,0.05)]">
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
        {person.bio && (
          <p className="mt-2 text-sm leading-relaxed text-kc-muted">{person.bio}</p>
        )}
        {showContacts && (person.email || person.instagram) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-4 text-sm font-medium">
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="text-kc-blue hover:text-kc-blue-deep"
              >
                Email
              </a>
            )}
            {person.instagram && (
              <a
                href={instagramHref(person.instagram)}
                target="_blank"
                rel="noreferrer"
                className="text-kc-blue hover:text-kc-blue-deep"
              >
                Instagram
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
