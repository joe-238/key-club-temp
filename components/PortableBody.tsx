import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-8 font-display text-2xl font-semibold text-kc-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 font-display text-xl font-semibold text-kc-ink">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-kc-ink/85">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-kc-yellow pl-4 text-lg italic text-kc-blue-deep">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-kc-ink/85">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-kc-ink/85">{children}</ol>
    ),
  },
};

export function PortableBody({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
