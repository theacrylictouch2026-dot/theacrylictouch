import { ClerkProvider } from '@clerk/nextjs';
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-charcoal antialiased" suppressHydrationWarning>
          <Navbar /> 
          {/* Yahan padding add karni hai (pt-20 means padding-top: 5rem) */}
          <main className="pt-20 md:pt-28">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}