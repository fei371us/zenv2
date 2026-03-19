import Link from "next/link";

export default function NewsBanner() {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="font-montserrat font-semibold text-sm md:text-base">
          🔥 Save 10% on ALL Corporate Microsoft Licenses – Limited Time!{" "}
          <span className="font-normal">
            More than 3x the average discount—
            <Link href="/contact" className="underline hover:opacity-90">
              contact us
            </Link>{" "}
            to claim your savings today.
          </span>
        </p>
      </div>
    </div>
  );
}
