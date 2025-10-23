import { Link, useNavigate, useParams } from "react-router-dom"
import { Title_h2 } from "../general/H/Title_h2"
import { TextAncord } from "../general/ancord/TextAncord"
// import { UseProduct } from "../../hooks/products/useProduct"

export const Product = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    if( slug == undefined ){
        navigate("/NotFound")
        return null
    }

    const prueba = {
    "id": "548189ba-c260-490e-8b6a-08ffec7d3d14",
    "created_at": "2024-08-30T05:57:41.27619+00:00",
    "name": "Samsung Galaxy S22",
    "brand": "Samsung",
    "slug": "samsung-galaxy-s22",
    "features": [
        "Cámara frontal de 40Mp",
        "Cámara trasera de 108 Mp Cuadruple"
    ],
    "description": {
        "type": "doc",
        "content": [
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Descubre el futuro de la tecnología móvil con el Samsung Galaxy S22. Este dispositivo representa la culminación del diseño y la ingeniería, fusionando un aspecto elegante con un rendimiento incomparable. Su diseño delgado y sofisticado, combinado con materiales premium, no solo impresiona a primera vista, sino que también ofrece una sensación de calidad inigualable al sostenerlo en tus manos. La pantalla deslumbrante del Samsung S22 te sumerge en un mundo de colores vibrantes y detalles nítidos. Con tecnología avanzada, cada imagen cobra vida con una claridad excepcional, ya sea que estés viendo películas, navegando por la web o jugando tus juegos favoritos. Además, la potente configuración de cámaras captura momentos inolvidables con una calidad de imagen excepcional, desde paisajes impresionantes hasta retratos perfectos. Equipado con un rendimiento incomparable, el Samsung Galaxy S22 te mantiene un paso adelante en todo momento. Con una duración de batería impresionante y capacidades de carga rápida, este dispositivo está listo para acompañarte en tus aventuras diarias sin perder el ritmo. Sumérgete en una experiencia móvil única con el Samsung S22 y descubre un nuevo estándar de excelencia en el mundo de los teléfonos inteligentes. En CELL DEPOT, te ofrecemos la oportunidad de poseer la última joya tecnológica de Samsung. Compra el Galaxy S22 y lleva tu experiencia móvil a nuevas alturas. ¡Explora la gama completa de características y adquiere el teléfono que cambiará tu forma de interactuar con el mundo! ¡Haz tuyo el futuro hoy con el Samsung S22!",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Encuéntralo en CELL DEPOT al mejor precio del mercado con garantía de un año.",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Encuentra mas especificaciones aquí: https://www.gsmarena.com/samsung_galaxy_s22_5g-11253.php",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Visita nuestro BLOG para nuevas sugerencias aquí: https://thecelldepot.com/blog/",
                        "type": "text"
                    }
                ]
            }
        ]
    },
    "images": [
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
        "https://ui.shadcn.com/placeholder.svg",
    ]
}

    // const { data, isLoading, error } = UseProduct({ slug })
    
    return (
        <section className="relative w-full max-w-[1400px] mx-auto pt-12 mt-6
            flex flex-col gap-6
            text-stone-800 
            dark:text-stone-200
        ">
            <div className="absolute top-0 -left-4 flex items-center gap-4">
                <TextAncord to="/" text="Ir al Inicio"/>
                <span> / </span>
                <TextAncord to="/Tienda?page=1" text="Ir a la Tienda"/>
            </div>
            <Title_h2 text={slug} />
            <div>
                <div>

                </div>
            </div>
        </section>
    )
}

