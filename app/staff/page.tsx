import { PageHero } from "@/components/PageHero";
import { PersonCard } from "@/components/PersonCard";
import { getStaff } from "@/lib/queries";

export const metadata = {
  title: "Staff",
};

export default async function StaffPage() {
  const staff = await getStaff();

  return (
    <div>
      <PageHero
        eyebrow="Positions"
        title="Staff"
        description="Meet the members who hold positions in our club — from officers to committee roles."
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {staff.length === 0 ? (
          <p className="text-center text-kc-muted">
            No staff listed yet. Add people in Sanity and enable “Show on Staff
            page.”
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((person) => (
              <PersonCard key={person._id} person={person} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
