import "./globals.css";

export const metadata = {
  title: "MyStoryline",
  description: "A platform to create and share your Day in the Life stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
