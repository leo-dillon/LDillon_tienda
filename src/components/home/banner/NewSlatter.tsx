import { TextButton } from "../../general/button/TextButon"

interface Props {
    img: number
}

export const NewSlatter = ( {img}: Props ) => {

    const newSlatters_img: string[] = ["newSlatter.webp"]

    const submit = () => {
        console.log('submit Subscripción')
    }

    return (
        <article className="relative w-full px-4 py-48
            flex flex-col items-start justify-center gap-6
            text-stone-800
            dark:text-stone-100
        ">
            <div className={`absolute inset-0 -z-10 bg-[url('/image/banners/${newSlatters_img[img]}')] bg-cover bg-center h-full`}></div>
            <div className="absolute inset-0 -z-1 bg-black opacity-60"></div>
            <div className="w-full max-w-[500px] px-4 py-6 ml-32
                flex flex-col gap-6
                bg-stone-200 rounded-2xl
            ">
                <h2 className="text-xl text-stone-800 font-semibold">Subscríbete a nuestro boletín y recibe las mejores ofertas del sector.</h2>
                <form action="" className="flex flex-col gap-6
                    text-stone-800
                ">
                    <label className="text-lg opacity-80 " htmlFor=""> 
                        Introduce tu correo electronico 
                    </label>
                    <input 
                        type="email" 
                        required
                        className="border-1 px-4 py-2 rounded bg-stone-300"
                        placeholder="ejemplo@gmail.com"
                    />
                    <TextButton text="Subscríbete" onClick={submit} />
                </form>
            </div>
        </article>
    )
}