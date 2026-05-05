import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
