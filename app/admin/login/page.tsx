import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  ADMIN_COOKIE_MAX_AGE,
  ADMIN_COOKIE_NAME,
  getAdminPasswordHash,
  hashPassword,
} from "@/lib/admin/auth";

export const metadata = {
  title: "Admin login",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: { from?: string; error?: string };
};

async function login(formData: FormData) {
  "use server";
  const password = String(formData.get("password") ?? "");
  const expected = getAdminPasswordHash();
  if (!expected) {
    redirect("/admin/login?error=not-configured");
  }
  if (hashPassword(password) !== expected) {
    redirect("/admin/login?error=invalid");
  }

  cookies().set(ADMIN_COOKIE_NAME, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });

  const target =
    typeof formData.get("from") === "string" &&
    String(formData.get("from")).startsWith("/admin")
      ? String(formData.get("from"))
      : "/admin/vendors";
  redirect(target);
}

export default function AdminLoginPage({ searchParams }: Props) {
  const error = searchParams.error;
  const from = searchParams.from ?? "/admin/vendors";

  return (
    <Section spacing="tight" className="pt-20 md:pt-28">
      <Container size="narrow">
        <div className="mx-auto max-w-md">
          <Eyebrow tone="sapphire" bare>
            Admin
          </Eyebrow>
          <h1
            className="mt-6 font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 144',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Sign in.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-proteum-mist">
            Enter the admin password to view vendor analytics.
          </p>

          <Card variant="glass" className="mt-8 p-6 md:p-8">
            <form action={login} className="space-y-4">
              <input type="hidden" name="from" value={from} />
              <div>
                <label
                  htmlFor="password"
                  className="block font-mono text-[10px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-2"
                />
              </div>

              {error === "invalid" && (
                <p className="rounded-lg border border-proteum-gold-dim/40 bg-proteum-gold-dim/10 p-3 text-[13px] text-proteum-gold-dim">
                  Invalid password.
                </p>
              )}
              {error === "not-configured" && (
                <p className="rounded-lg border border-proteum-gold-dim/40 bg-proteum-gold-dim/10 p-3 text-[13px] text-proteum-gold-dim">
                  ADMIN_PASSWORD is not configured. Add it to .env.local and
                  restart the dev server.
                </p>
              )}

              <Button type="submit" size="md" className="w-full">
                Sign in
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
