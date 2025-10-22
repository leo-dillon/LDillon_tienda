import { Outlet } from "react-router-dom";
import { Header } from "../sectionFijas/header/Header";
import { Footer } from "../sectionFijas/footer/Footer";

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