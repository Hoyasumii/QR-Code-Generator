import { getLanguage, getLocation } from "@/services";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware() {
  const location = await getLocation();
  const lang = getLanguage(location.country_code);

  return NextResponse.next({ headers: { lang } });
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
