import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Image from "next/image";
import PropTypes from "prop-types"
import nProgress from "nprogress"; //Crear un loader en la parte superior de la pagina
import classNames from "classnames";
const Layout = ({ children, title, footer = true, dark = false }) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => { //Cuando se cambie de ruta se va a ejecutar el evento
            console.log(url);
            nProgress.start();
        };
        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", () => nProgress.done());
        router.events.on("routeChangeError", () => nProgress.done());
        return () => {
            router.events.off("routeChangeStart", handleRouteChange); //Cuando se destruya el componente se va a eliminar el evento
        };
    }, []);
    return (
        <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
            <Navbar />
            <main className="container py-4">
                {/* Title */}
                {title && ( //Si title existe entonces se muestra el titulo
                    <h1 className={classNames("text-center", { "text-light": dark })}>
                        {title}
                    </h1>
                )}
                {/* Content */}
                {children}
            </main>
            {footer && (
                <footer className="bg-dark text-light text-center">
                    <div className="col-md-12 container p-3">
                        <div className="row">
                            <div className="col-md-4 column column--33">
                                <h1 style={{ fontSize: 28 }} className="column__title">Christian Eduardo Rojas Lozano</h1>
                                <p style={{ width: "100%", height: "3px", backgroundColor: "white" }}></p>
                                <p className="text-start">
                                    Soy una persona con ánimo de superarme profesionalmente, tengo
                                    capacidad de adaptación y aprender  rápidamente, quiero seguir
                                    aprendiendo con responsabilidad.
                                </p>
                                <p>1999 - {new Date().getFullYear()}</p>
                            </div>
                            <div className="col-md-4 column column--33 ">
                                <h1 style={{ fontSize: 28 }} className="column__title" >Contacto</h1>
                                <p style={{ width: "100%", height: "3px", backgroundColor: "white" }}></p>
                                <p className="text-start column__txt">
                                    <Image src="/whatsapp.png" alt="logo" width={30} height={30} className="me-2" />
                                    916376338
                                </p>
                                <p className="text-start column__txt">
                                    <Image src="/email.png" alt="logo" width={30} height={30} className="me-2" />
                                    chrisardorojas02@gmail.com
                                </p>
                            </div>

                            <div className="col-md-4">
                                <h1 style={{ fontSize: 28 }}>Redes sosciales</h1>
                                <p style={{ width: "100%", height: "3px", backgroundColor: "white" }}></p>
                                <ul className="social-icons" style={{ listStyle: "none" }}>
                                    <li className="text-start">
                                        <a href="https://www.instagram.com/chrisardo_02/" target="_blank">
                                            <Image src="/instagram.png" alt="logo" width={30} height={30} className="me-2" />
                                            Instragram
                                        </a>
                                    </li>
                                    <li className="text-start">
                                        <a href="https://www.linkedin.com/in/christian-eduardo-rojas-lozano-b36166288" target="_blank">
                                            <Image src="/linkedin.png" alt="logo" width={30} height={30} className="me-2" />
                                            Linkedin
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <h2>Todos los derechos reservados.&copy;</h2>
                        </div>
                    </div>

                </footer>
            )
            }
        </div >
    );
};
Layout.proptypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    footer: PropTypes.bool,
};
export default Layout;