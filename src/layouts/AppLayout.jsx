import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        {/* Header */}
        <Header />
        <Outlet />
      </main>
      {/* footer */}
      <footer className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️ by Vanraj
      </footer>
    </div>
  );
};

export default AppLayout;
