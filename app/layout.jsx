import { Poppins } from "next/font/google";
import "./globals.css";
import "./index.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Menu Match",
  description:
    "Find menus from different restaurants for you to choose from and compare prices and quality  .",
  keywords: "food, menu, restaurants, restaurant, prices, price, foodie",
  author: "Lambe Boluwatife",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
