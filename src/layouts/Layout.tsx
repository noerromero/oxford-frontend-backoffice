import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
export default function Layout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
