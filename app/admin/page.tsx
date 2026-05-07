import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidAdminCookie } from "@/lib/admin/auth";

export const metadata = { robots: { index: false, follow: false } };

export default function AdminIndexPage() {
  const cookieStore = cookies();
  const signedIn = isValidAdminCookie(cookieStore.get(ADMIN_COOKIE_NAME)?.value);
  redirect(signedIn ? "/admin/vendors" : "/admin/login");
}
