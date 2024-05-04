import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export const Metadata = {
  title: "Tsotne",
  description: "Hehehe",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
