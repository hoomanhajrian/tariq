import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { request } from "http";

let locales = ["en", "arb"];
let headers = { "accept-language": "en-US,en,arb;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let defaultLocale = "en";

// Get the preferred locale, similar to the above or using a library
const getLocale = (request: NextRequest) => {
  return match(languages, locales, defaultLocale); // -> 'en-US'
};

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  
  matcher: [
    '/',
    '/api/:path*',
  ],
};
