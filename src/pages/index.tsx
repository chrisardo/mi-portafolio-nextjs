/*index.tsx*/
import Layout from "src/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { skills, experiences, projects } from "src/profile"; //Importando los datos json de profile.tsx
export default function Index() {
    return (
        <Layout title="">
            {/* Header card */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/profile.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h1>Christian Eduardo Rojas Lozano</h1>
                                <p style={{ width: "100%", height: "3px", backgroundColor: "white" }}></p>
                                <h3>Ingeniero en sistemas e informatica</h3>
                                <p>
                                    Soy una persona con ánimo de superarme profesionalmente, tengo
                                    capacidad de adaptación y aprender  rápidamente, quiero seguir
                                    aprendiendo con responsabilidad.
                                </p>

                                <Link href="/hireme" className="btn btn-outline-light">
                                    Contrátame
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Second section */}
            <section className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light border border-primary">
                        <div className="card-body">
                            <h1 className="text-decoration-underline">Habilidades</h1>
                            {/* Skill Progress 1 */}
                            {skills.map(({ skill, percentage }, index) => ( //Recorriendo el array de skills
                                <div className="py-3" key={index}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}
                                            aria-valuenow={percentage}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light border border-primary">
                        <div className="card-body">
                            <h1 className="text-decoration-underline">Experiencia laboral</h1>
                            <ul>
                                {/* Experience 1 */}
                                {experiences.map(({ title, description, from, to }, index) => ( //Recorriendo el array de experiences
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>
                                            {from} - {to}
                                        </h5>
                                        <p>{description}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/experiences" className="btn btn-outline-primary">
                                Saber más
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Portfolio */}
            <section className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12 my-2">
                                <h1 className="text-center text-light">Portafolio</h1>
                            </div>
                            {projects.map(({ name, description, image }, index) => (
                                <div className="col-md-4 p-2" key={index}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#!" className="btn btn-outline-dark">Saber más</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <Link href="/portfolio" className="btn btn-outline-light">
                                Más proyectos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}
