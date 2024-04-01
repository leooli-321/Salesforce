function Beneficios() {
    return (

        <section className="about section" id="about">
            <div className="container">
                {/* section title */}
                <h2 className="section-title padd-15">Incorpore recursos e multiplique os benefícios.</h2>
                <div className="row">
                    <div className="about-img padd-15">
                        {/* avatar img */}
                        <img src="https://i.ibb.co/nDfycGD/astro2.png" alt="Astro segurando um celular" />
                        <a href="/Cadastro" className="btn btn-default">Teste Grátis</a>
                    </div>
                    <div className="about-content padd-15">
                        <div className="rounded">
                            <div className="row">
                                <div className="about-text padd-15">
                                    {/* Benefícios */}
                                    <p>Quando os clientes utilizam mais de um app do Customer 360:
                                    </p>

                                </div>
                                <div className="skills padd-15">
                                    <div className="row">
                                        {/* skill item */}
                                        <div className="skill-item">
                                            <h4>Relatam melhora no tempo de ROI:</h4>
                                            <div className="progress">
                                                <div className="progress-in"
                                                    style={{ width: "72%", background: "rgb(255,209,92)" }}></div>
                                                <div className="skill-percent">72%</div>
                                            </div>
                                        </div>
                                        {/* skill item */}
                                        <div className="skill-item">
                                            <h4>Reportam melhorias gerais de eficiência:</h4>
                                            <div className="progress">
                                                <div className="progress-in"
                                                    style={{ width: "95%", background: "rgb(255,76,96)" }}></div>
                                                <div className="skill-percent">95%</div>
                                            </div>
                                        </div>
                                        {/* skill item */}
                                        <div className="skill-item">
                                            <h4>Afirmam ter atingido ou excedido as expectativas de ROI:</h4>
                                            <div className="progress">
                                                <div className="progress-in"
                                                    style={{ width: "96%", background: "rgb(108,108,229)" }}></div>
                                                <div className="skill-percent">96%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Beneficios;