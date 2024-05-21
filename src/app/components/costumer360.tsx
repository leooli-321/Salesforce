function Costumer360() {
    return (

        <section className="section" id="experience">
            <div className="container">
                {/* section title */}
                <h2 className="section-title padd-15">Veja os principais produtos do Costumer 360:</h2>
                <div className="row">
                    {/* Produtos */}
                    {/*Primeira Coluna*/}
                    <div className="experience padd-15">
                        <div className="row">
                            <div className="timeline-box">
                                <div className="timeline">

                                    {/* uvem de Vendas */}
                                    <div className="timeline-item">
                                        <i className="lni lni-briefcase timeline-icon"></i>
                                        <h3 className="timeline-date">
                                            <i className="lni lni-calendar"></i>Nuvem de Vendas:
                                        </h3>
                                        <h3 className="timeline-title">Sales Cloud:</h3>
                                        <p className="timeline-text">É a principal plataforma de automação de vendas da Salesforce, projetada para ajudar as equipes de vendas e gerenciar leads, oportunidades e contatos.</p>
                                    </div>
                                    {/* Nuvem de Atendimento */}
                                    <div className="timeline-item">
                                        <i className="lni lni-briefcase timeline-icon"></i>
                                        <h3 className="timeline-date">
                                            <i className="lni lni-calendar"></i>Nuvem de Atendimento:
                                        </h3>
                                        <h3 className="timeline-title">Service Cloud:</h3>
                                        <p className="timeline-text">Gestão de atendimento ao cliente, fornecendo ferramentas para rastreamentos de casos, automação de serviços de suporte multicanal.</p>
                                    </div>
                                    {/* Nuvem de Marketing */}
                                    <div className="timeline-item">
                                        <i className="lni lni-briefcase timeline-icon"></i>
                                        <h3 className="timeline-date">
                                            <i className="lni lni-calendar"></i>Nuvem de Marketing:
                                        </h3>
                                        <h3 className="timeline-title">Marketing Cloud:</h3>
                                        <p className="timeline-text">Oferece recursos de automação de marketing, permitindo que as empresas criem campanhas personalizadas, gerenciem jornadas de clientes e analisem dados para otimizar o marketing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Segunda Coluna*/}
                    <div className="experience padd-15">
                        <div className="row">
                            <div className="timeline-box">
                                <div className="timeline">

                                    {/* Nuvem de Comércio */}
                                    <div className="timeline-item">
                                        <i className="lni lni-briefcase timeline-icon"></i>
                                        <h3 className="timeline-date">
                                            <i className="lni lni-calendar"></i>Nuvem de Comércio:
                                        </h3>
                                        <h3 className="timeline-title">Commerce Cloud:</h3>
                                        <p className="timeline-text">Plataforma de comércio eletrônico. Projetada para ajudar as empresas a criar experiência de compra online personalizadas e integradas</p>
                                    </div>

                                    {/* Plataforma e Aplicações */}
                                    <div className="timeline-item">
                                        <i className="lni lni-briefcase timeline-icon"></i>
                                        <h3 className="timeline-date">
                                            <i className="lni lni-calendar"></i>Plataforma e Aplicações:
                                        </h3>
                                        <h3 className="timeline-title">Platform and Apps:</h3>
                                        <p className="timeline-text">Permite o desenvolvimento personalizado, integração de aplicativos de terceitos e construção de soluções específicas.</p>
                                    </div>

                                    {/* Análise Inteligente */}
                                    <div className="timeline-item">
                                        <i className="lni lni-briefcase timeline-icon"></i>
                                        <h3 className="timeline-date">
                                            <i className="lni lni-calendar"></i>Análise Inteligente:
                                        </h3>
                                        <h3 className="timeline-title">Analytics:</h3>
                                        <p className="timeline-text">Componente de análise fornece ferramentas para visualizar e entender dados do cliente.</p>
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

export default Costumer360;