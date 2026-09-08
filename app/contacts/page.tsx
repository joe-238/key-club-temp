import { PageHero } from "@/components/PageHero";
import { PersonCard } from "@/components/PersonCard";
import { getContacts } from "@/lib/queries";

export const metadata = {
  title: "Contacts",
};

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div>
      <PageHero
        eyebrow="Leadership"
        title="Contacts"
        description="Reach out to our president, vice presidents, and key officers with questions about joining or volunteering."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {contacts.length === 0 ? (
          <p className="text-center text-kc-muted">
            No contacts published yet. Add people in Sanity and enable “Show on
            Contacts page.”
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((person) => (
              <PersonCard key={person._id} person={person} showContacts />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
