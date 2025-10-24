import { Outlet } from "react-router-dom";
import { Header } from "../sectionFijas/header/Header";
import { Footer } from "../sectionFijas/footer/Footer";
import { Modal } from "../modal/Modal";
import { useState } from "react";

type ModalType = {
  text: string,
  isOpen: boolean
}

export const Layout = () => {
  
  const [ isOpen, setIsOpen ] = useState<ModalType>({text: "", isOpen: false})
  
  const changeIsOpen = (txt: string) => {
    setIsOpen( ( prev ) => { 
      return {text: txt, isOpen: !prev.isOpen  }
    } )
    
  }

  return (
    <>
      <Header changeIsOpen={changeIsOpen}/>
      <Modal isOpen={isOpen} changeIsOpen={changeIsOpen} />
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