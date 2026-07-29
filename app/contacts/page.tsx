import { PersonCard } from "@/components/PersonCard";
import { getContacts } from "@/lib/queries";

export const metadata = {
  title: "Contacts",
};

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-blue">
        Leadership
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-kc-blue-deep sm:text-5xl">
        Contacts
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-kc-muted">
        Reach out to our president, vice presidents, and key officers with
        questions about joining or volunteering.
      </p>

      {contacts.length === 0 ? (
        <p className="mt-10 text-kc-muted">
          No contacts published yet. Add people in Sanity and enable “Show on
          Contacts page.”
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((person) => (
            <PersonCard key={person._id} person={person} showContacts />
          ))}
        </div>
      )}
    </div>
  );
}
