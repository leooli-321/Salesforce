import Head from "next/head";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/page.module.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // use client
  return (
    <>
      <Head>
        <title>
          SalesForce - Sua solução para gerenciamento de relacionamento com o
          cliente
        </title>
        <meta
          name="description"
          content="SalesForce oferece uma gama completa de recursos para gerenciamento de relacionamento com o cliente. Descubra como podemos ajudar a transformar o seu negócio hoje."
        />
        <meta
          name="keywords"
          content="CRM, gerenciamento de relacionamento com o cliente, SalesForce"
        />
        <script
          src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
          async
        ></script>
        <script src="./script/coletaClicks.js"></script>
      </Head>
      <body className={inter.className}>{children}</body>

      <Script id="meu-script" strategy="lazyOnload">
        {`
// No seu script externo
console.log("script carregado!")
export function coletaClicks(){
   // Array para armazenar os dados
   var data = [];

   // Função para coletar cliques e posição do mouse
   function trackClickAndPosition(event) {
       var clickData = {
           timestamp: new Date().toISOString(),
           xPosition: event.pageX, // Use pageX to include scroll position in X
           yPosition: event.pageY // Use pageY to include scroll position in Y
           // xPosition: event.clientX,
           // yPosition: event.clientY
       };

       // Adiciona os dados ao array
       data.push(clickData);
   }

   // Adiciona um ouvinte de eventos para o clique do mouse
   $(document).on('click', trackClickAndPosition);

   // Função para salvar os dados em CSV
   function saveDataToCSV() {
       var csvContent = "data:text/csv;charset=utf-8,";
       csvContent += "Timestamp,X Position,Y Position\n";

       data.forEach(function (click) {
           csvContent += click.timestamp + "," + click.xPosition + "," + click.yPosition + "\n";
       });

       // Usando o título do documento como base
       var fileName = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Sanitizando titulo
       fileName += "_click_data.csv"; // colocando sufixo da extensao do arquivo

       // Cria um link para download do CSV
       var encodedUri = encodeURI(csvContent);
       var link = document.createElement("a");
       link.setAttribute("href", encodedUri);
       link.setAttribute("download", fileName);
       document.body.appendChild(link);

       // Simula um clique no link para iniciar o download
       link.click();
   }

   // Adiciona um botão para salvar os dados em CSV
   $(document.body).append('<button onclick="saveDataToCSV()">Salvar em CSV</button>');

   // verifica se há informação de clicks e, se houver, faz o download antes de mudar a página
   window.onbeforeunload = function() {
       if (data.length > 0) {
           saveDataToCSV();
       }
   };
}
        `}
      </Script>
    </>
  );
}
