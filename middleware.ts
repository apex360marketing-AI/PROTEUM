import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME } from "@/lib/admin/auth";

/**
 * Middleware: gate /admin/* routes behind the admin cookie.
 * The login form lives at /admin/login and is exempt.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  // Login page is open so users can authenticate.
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(ADMIN_COOKIE_NAME);
  if (!cookie) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Defer cookie validity check (timing-safe compare) to the route handlers
  // themselves; middleware runs in the Edge runtime where node:crypto is not
  // available with timingSafeEqual. The route handlers re-validate.
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
