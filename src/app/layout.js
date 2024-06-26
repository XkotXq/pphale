import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "P.P.HALE",
  description: "Producent konstrukcji stalowych",
};

export default function RootLayout({ children }) {
  return (
      <html lang="pl" className={inter.className}>
      <body>
              <main>
                  {children}
              </main>
      </body>
      </html>
  );
}
