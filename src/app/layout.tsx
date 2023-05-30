import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./_lib/registry";
import { Theme } from "./_styles/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calendly Take Home Assignment",
  description: "A take home assignment for Calendly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>{children}</Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
