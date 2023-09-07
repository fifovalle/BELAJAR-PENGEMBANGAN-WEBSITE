import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const apakahMasuk = true;
  if (apakahMasuk) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/produk", "/tentang"],
};
