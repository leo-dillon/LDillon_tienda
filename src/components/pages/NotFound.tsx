import { Link } from "react-router-dom"
import darkLogo from "/image/LDillon/logo/darkLogo.svg"
import lightLogo from "/image/LDillon/logo/lightLogo.svg"
import { useDarkMode } from "../../utils/context/ThemesContext"

export const NotFound = () => {
  const { isDark } = useDarkMode()

  return (
    <section className={`w-full flex-1 flex flex-col justify-center items-center gap-6 
       text-stone-800 
       dark:text-stone-100 transition-colors duration-500`}>
      
      <img 
        src={isDark ? lightLogo : darkLogo} 
        alt="App Logo" 
        className="w-24 h-24 mb-4 drop-shadow-md"
      />

      <h1 className="text-3xl font-bold text-center">
        Oops! Está página no existe 🚫
      </h1>

      <p className="text-stone-500 dark:text-stone-400 text-center">
        Quizás escribiste mal la dirección o la página fue movida.
      </p>

      <Link 
        to="/" 
        className="mt-4 px-6 py-2 rounded-xl font-semibold 
          bg-stone-800 text-stone-100 
          dark:bg-stone-100 dark:text-stone-800
          hover:scale-105 active:scale-95 transition-transform duration-200">
        Volver al inicio
      </Link>
    </section>
  )
}