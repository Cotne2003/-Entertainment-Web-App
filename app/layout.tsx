import "./global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
