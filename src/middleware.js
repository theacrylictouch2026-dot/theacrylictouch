import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Hum un pages ko select kar rahe hain jinhe protect karna hai
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/store(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // Agar user login nahi hai, toh ye line usse login page par bhej degi
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};