import { Outlet } from "react-router-dom";
import AnimatedCharacters from "./AnimatedCharacters";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="app-shell">
      <AnimatedCharacters />
      <Header />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
