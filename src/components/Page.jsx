import React from "react";
import { useThemeToggle } from "../contexts/themeContext";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieDisplay from "./movieDisplay/MovieDisplay";

function Page() {
  const { isDarkMode } = useThemeToggle();
  return (
    <div className={`h-full w-full ${isDarkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieDisplay />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
