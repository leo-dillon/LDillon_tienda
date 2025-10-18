import { Outlet } from "react-router-dom";
import { Header } from "../sectionFijas/Header";
import { Footer } from "../sectionFijas/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="
        w-full
        min-h-screen 
        flex flex-col
      ">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}