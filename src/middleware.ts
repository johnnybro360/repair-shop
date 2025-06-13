import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
// import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(){

    }, {
        isReturnToCurrentPage: true
    }
)

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - images
         * - login
         * - homepage (represented with $ after beginning /)
         */
        '/((?!api|_next/static|_next/image|auth|favicon.ico|sitemap.xml|robots.txt|images|login|$).*)',
      ],
}