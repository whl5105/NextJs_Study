import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middle");
  if (request.nextUrl.pathname.startsWith("/products/1004"))
    return NextResponse.redirect(new URL("/products", request.url));
  return;
}

//특정 경로에서만 수행
export const config = {
  matcher: "/products/:path*",
};
