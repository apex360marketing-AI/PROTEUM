import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BackgroundLayers } from "@/components/layout/BackgroundLayers";
import { LogoAnimationGallery } from "@/components/marketing/logo-animations/LogoAnimationGallery";

export const metadata = {
  title: "Logo gallery (dev)",
  robots: { index: false, follow: false },
};

export default function LogoGalleryPage() {
  // Gated to development environments only.
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundLayers />
      <Container size="wide" className="relative py-20 md:py-28">
        <LogoAnimationGallery />
      </Container>
    </div>
  );
}
