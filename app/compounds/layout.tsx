import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BackgroundLayers } from "@/components/layout/BackgroundLayers";

export default function CompoundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundLayers />
      <Nav />
      <main className="relative pt-20 md:pt-24">{children}</main>
      <Footer />
    </>
  );
}
