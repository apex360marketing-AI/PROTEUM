import Link from "next/link";
import { cookies } from "next/headers";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { BackgroundLayers } from "@/components/layout/BackgroundLayers";
import { ADMIN_COOKIE_NAME, isValidAdminCookie } from "@/lib/admin/auth";

async function logout() {
  "use server";
  cookies().set(ADMIN_COOKIE_NAME, "", { path: "/", maxAge: 0 });
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const signedIn = isValidAdminCookie(cookieStore.get(ADMIN_COOKIE_NAME)?.value);

  return (
    <div className="relative min-h-screen bg-proteum-void">
      <BackgroundLayers />
      <header className="relative border-b border-proteum-chrome-mid/15 backdrop-blur-[16px]">
        <Container
          size="wide"
          className="flex h-16 items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <span
              className="font-mono text-[11px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              Admin
            </span>
          </div>
          <div className="flex items-center gap-4 text-[13px]">
            <Link
              href="/admin/vendors"
              className="text-proteum-mist hover:text-proteum-bone"
            >
              Vendors
            </Link>
            {signedIn && (
              <form action={logout}>
                <button
                  type="submit"
                  className="text-proteum-mist hover:text-proteum-sapphire-glow"
                >
                  Sign out
                </button>
              </form>
            )}
          </div>
        </Container>
      </header>
      <Container size="wide" className="relative py-10 md:py-14">
        {children}
      </Container>
    </div>
  );
}
