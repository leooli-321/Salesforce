// Importando o componente Image do Next.js
import Image from 'next/image'

function Inicio() {
    return (
        <section className="home" id="home">
            <div className="container">
                {/* intro */}
                <div className="intro">
                    {/* Astro */}
                    <Image
                        src="https://i.ibb.co/nPgDb9V/astro.png"
                        width={500}
                        height={500}
                        alt="Astro, o mascote da Salesforce"
                    />                    {/* info */}
                    <br />
                    <span> <span className="info-text">Bem vindo a</span></span>

                    <h1>Salesforce</h1>
                    {/* button */}
                    <div>
                        <a href="#" className="btn btn-default">Descubra</a>
                    </div>
                    {/* scroll down mouse wheel */}
                    <div className="scroll-down">
                        <a href="#" className="mouse-wrapper">
                            <span>Deslize para baixo</span>
                            <span className="mouse">
                                <span className="wheel"></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio;
