// app/middleware.js
import { NextResponse } from "next/server";

// Middleware function to handle and proxy requests
export function middleware(request) {
  // Log the request for debugging
  console.log("Middleware triggered for:", request.nextUrl.pathname);

  // Check if the request is to be proxied
  if (request.nextUrl.pathname.startsWith("/api/proxy")) {
    // Construct the target URL by removing '/api/proxy' prefix and appending search params
    const url = new URL(
      request.nextUrl.pathname.replace(/^\/api\/proxy/, "") +
        request.nextUrl.search,
      process.env.NEXT_PUBLIC_API_BASE_URL // Base URL for the external API
    );

    // Log the constructed URL for debugging
    console.log("Proxying request to:", url.toString());

    // Rewrite the request to the new URL
    return NextResponse.rewrite(url);
  }

  // Proceed with the next middleware or the request itself
  return NextResponse.next();
}

// You can optionally define configuration for the middleware
export const config = {
  matcher: ["/api/proxy/:path*"], // Only apply middleware to paths starting with '/api/proxy'
};
