import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("BWAMICRO:user")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Tentukan rute yang perlu diproteksi
export const config = {
  matcher: ["/"], // Middleware berjalan untuk halaman "/"
};
