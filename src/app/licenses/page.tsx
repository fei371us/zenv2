import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function LicensesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-6">
                Software <span className="text-primary">Licenses</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                View licensing information for Microsoft 365 and Dynamics 365 products.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-bold text-2xl mb-4">Microsoft 365 License</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed licensing terms and conditions for Microsoft 365 products.
                </p>
                <Link
                  href="https://www.microsoft.com/en-au/microsoft-365/business/microsoft-365-plans-and-pricing"
                  target="_blank"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  View Microsoft 365 Licensing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
                <h3 className="font-montserrat font-bold text-2xl mb-4">Dynamics 365 License</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed licensing terms and conditions for Dynamics 365 products.
                </p>
                <Link
                  href="https://www.microsoft.com/en-us/dynamics-365/pricing-overview"
                  target="_blank"
                  className="text-primary font-medium inline-flex items-center hover:underline"
                >
                  View Dynamics 365 Licensing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}