import { LDillon_footer } from "../Ldillon/LDillon_footer"
import { TextAncord } from "../ancord/TextAncord"
import { IconAncord } from "../ancord/IconAncord"

import instagram from "/icons/redes/instagram.svg"
import brandDarkGithub from "/icons/redes/brand-dark-github.svg"
import brandGithub from "/icons/redes/brand-github.svg"
import brandDarkLinkedin from "/icons/redes/brand-dark-linkedin.svg"
import brandLinkedin from "/icons/redes/brand-linkedin.svg"

export const Footer = () => {
    return (
        <footer className="mt-12 py-8 bg-zinc-300 dark:bg-zinc-800
            flex md:flex-row flex-col items-center justify-around gap-6
        ">
            <LDillon_footer />
            <div className="flex flex-col gap-2">
                <p className=" text-lg text-stone-800 font-semibold
                    dark:text-stone-200
                ">
                    Politicas:
                </p>
                <TextAncord text="Politicas de privacidad" to="/politicas-de-privacidad" />
                <TextAncord text="Terminos de uso" to="/terminos-de-uso" />
            </div>
            <div>
                <p className=" text-lg text-stone-800 font-semibold
                    dark:text-stone-200
                ">Mis Redes:</p>
                <div className="flex gap-2">
                    <IconAncord text="Ir a instagram"   img={instagram}             darkImg={instagram}             to="#instagram" />
                    <IconAncord text="Ir a github"      img={brandDarkGithub}       darkImg={brandGithub}           to="https://github.com/leo-dillon/LDillon_tienda"    />
                    <IconAncord text="Ir a linkedin"    img={brandDarkLinkedin}     darkImg={brandLinkedin}         to="#linkedin"  />
                </div>
            </div>
        </footer>
    )
}