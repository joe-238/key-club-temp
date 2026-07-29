import { PersonCard } from "@/components/PersonCard";
import { getStaff } from "@/lib/queries";

export const metadata = {
  title: "Staff",
};

export default async function StaffPage() {
  const staff = await getStaff();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kc-blue">
        Positions
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-kc-blue-deep sm:text-5xl">
        Staff
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-kc-muted">
        Meet the members who hold positions in our club — from officers to
        committee roles.
      </p>

      {staff.length === 0 ? (
        <p className="mt-10 text-kc-muted">
          No staff listed yet. Add people in Sanity and enable “Show on Staff
          page.”
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((person) => (
            <PersonCard key={person._id} person={person} />
          ))}
        </div>
      )}
    </div>
  );
}
