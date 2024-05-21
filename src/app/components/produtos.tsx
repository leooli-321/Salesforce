import Image from "next/image";

function Produtos() {
  return (
    <section className="services section">
      <div className="container">
        {/* section title */}
        <h2 className="section-title padd-15">Produtos</h2>
        <div className="row">
          {/* service item */}
          <div className="service-item padd-15">
            <div
              className="service-item-inner"
              style={{ background: "#0F3A76" }}
            >
              <Image
                src="https://i.ibb.co/897wSMc/datacloud.png"
                alt="DataCloud"
                width={137}
                height={104}
              />
              <h3>DataCloud</h3>
              <p>
                Integre Customer 360 e Salesforce Data Cloud para unir equipes,
                conectar dados em tempo real e criar experiências encantadoras.
              </p>
            </div>
          </div>
          {/* service item */}
          <div className="service-item padd-15">
            <div
              className="service-item-inner"
              style={{ background: "#6C6CE5" }}
            >
              <Image
                src="https://i.ibb.co/wcrD6FF/costumer360.png"
                alt="Costumer 360"
                width={148}
                height={133}
              />
              <h3>Costumer 360</h3>
              <p>
                O Salesforce Customer 360 impulsiona vendas, marketing e
                satisfação do cliente ao oferecer uma visão compartilhada.
              </p>
            </div>
          </div>

          {/* service item */}
          <div className="service-item padd-15">
            <div
              className="service-item-inner"
              style={{ background: "#F97B8B" }}
            >
              <Image
                src="https://i.ibb.co/R7ctnRf/einsteinai.png"
                alt="Einstein AI"
                width={132}
                height={107}
              />
              <h3>Einstein AI</h3>
              <p>
                Com o Slack para comunicação, Einstein AI para produtividade e
                empatia, e o Trailhead para aprendizado.
              </p>
            </div>
          </div>
        </div>
        <div className="text padd-15">
          <p>
            Saiba como iniciar sua transformação digital para agregar a empresa
            em torno do cliente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
