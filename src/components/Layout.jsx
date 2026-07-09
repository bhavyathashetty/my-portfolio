import { Outlet } from "react-router-dom";
import CursorGlow from "./CursorGlow";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="app-shell">
      <CursorGlow />
      <Header />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
