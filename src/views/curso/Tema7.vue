<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'7. Mutuo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p.mb-4 El <b>contrato de mutuo</b> es una de las formas más antiguas y esenciales de relación obligacional en el Derecho Civil. También conocido como <b>préstamo de consumo</b>, es la figura que regula el acuerdo entre una persona que entrega a otra bienes fungibles, es decir, cosas que pueden ser reemplazadas por otras de la misma especie, calidad y cantidad, con la obligación de que, pasado un tiempo, se devuelvan no los mismos bienes, sino otros equivalentes. Su comprensión no solo es útil para el ejercicio práctico del Derecho, sino que es indispensable para construir una visión sólida sobre el origen y circulación de obligaciones dentro del sistema patrimonial colombiano.

      .bg-full-width.bg-color-1.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure
                img(src="@/assets/curso/tema7/1.svg", data-aos="zoom-in")
            .col-lg-7
              p Para estudiar esta temática, lo invitamos a escuchar el siguiente <em>podcast</em>.
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Mutuo"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema7/3.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p(data-aos="fade-left") Un ejemplo concreto permite entender la aplicación práctica del mutuo. Imagine que una persona presta a un conocido la suma de cinco millones de pesos, pactando que se le devolverán en seis meses con un interés mensual del 1,5 %. Se redacta un contrato simple, se entrega el dinero, y se establece una cláusula penal en caso de mora. Transcurrido el plazo, si el deudor no paga, el mutuante podrá iniciar un proceso ejecutivo, porque tiene un título valor que acredita la obligación.
      
          .bg-color-8.p-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema7/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La deuda incluye el capital, los intereses pactados y, si hay lugar, los moratorios, conforme a la Ley. Esta situación no solo refleja la utilidad del mutuo, sino también los riesgos que asume quien presta sin garantías suficientes o sin respaldo documental adecuado.
      
      .bg-color-11.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema7/4.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En la práctica, el contrato de mutuo es ampliamente utilizado en contextos familiares, sociales, empresariales y financieros. Lo celebran padres con hijos, amigos entre sí, pequeños empresarios, microfinancieras, cooperativas y entidades bancarias. También puede funcionar como instrumento accesorio dentro de contratos más complejos, como los de construcción o compraventa, donde se anticipa una suma que se restituye después. En todos los casos, su eficacia y validez dependen de una correcta redacción, del cumplimiento de las formalidades mínimas y, sobre todo, del equilibrio entre las prestaciones.
      
      .row.mb-5
        .col-lg-4.order-2
          figure
            img(src="@/assets/curso/tema7/5.png", data-aos="zoom-in")
        .col-lg-8.order-1.mb-3.mb-lg-0
          p.mb-4(data-aos="fade-left") La jurisprudencia colombiana ha señalado reiteradamente, que el mutuo no es un contrato informal ni exento de obligaciones. En múltiples sentencias, la Corte Suprema de Justicia ha precisado que, una vez entregada la cosa, nace para el mutuario una obligación plena de restituir, y que la falta de contrato escrito no impide el reconocimiento judicial de la deuda, siempre que exista prueba de la entrega. También ha recordado que el pacto de intereses debe ser expreso y que su cobro no puede exceder los límites legales, so pena de configurarse interés usurario, sancionado con la nulidad de la cláusula y la pérdida de los intereses a favor del mutuante. Estas reglas protegen tanto al deudor frente a abusos como al acreedor frente al incumplimiento.
      
          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-0 En definitiva, el contrato de mutuo es una herramienta jurídica fundamental en la gestión patrimonial cotidiana. Aunque su estructura es sencilla, implica una transferencia de dominio y una obligación exigible que puede tener gran impacto económico. Para usted, como estudiante de Derecho, comprender este contrato significa adquirir herramientas para redactar cláusulas claras, asesorar correctamente sobre préstamos entre particulares, interpretar pactos de intereses y actuar jurídicamente ante el incumplimiento. En una sociedad donde las relaciones de confianza, crédito y ayuda mutua son frecuentes, el mutuo permite canalizar legalmente ese intercambio, equilibrando las necesidades de las partes con la seguridad jurídica que exige el Derecho.

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69558" target="_blank" rel="noopener noreferrer") Goddard, J. A. (2010). Obligaciones y contratos en el derecho contemporáneo: ( ed.). Universidad de La Sabana.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51617" target="_blank" rel="noopener noreferrer") Arnau Moya, F. (2016). Lecciones de derecho civil II: obligaciones y contratos: ( ed.). D - Universitat Jaume I. Servei de Comunicació i Publicacions. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/2693" target="_blank" rel="noopener noreferrer") García-Trevijano Garnica, E. (1992). La extinción de los contratos administrativos por mutuo acuerdo. Revista de Administración Pública, (127): ( ed.). CEPC - Centro de Estudios Políticos y Constitucionales.    
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=28729 " target="_blank" rel="noopener noreferrer") Congreso de Colombia. (1974). Código Civil colombiano (Edición actualizada). Recuperado de 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://isdabogados.es/tipos-contratos-civiles" target="_blank" rel="noopener noreferrer") ISD Abogados. (s.f.). Tipos de contratos civiles según lo establecido en el código civil. ISD Abogados. Recuperado el 27 de marzo de 2025, de 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rodenasabogados.es/tipos-de-contratos-civiles " target="_blank" rel="noopener noreferrer")  Rodenas Abogados. (2023). Tipos de contratos civiles: guía completa. Rodenas Abogados. Recuperado el 27 de marzo de 2025, de 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/eZAUo_zI6hk?si=rX7wXLQ6pGKZg0EL " target="_blank" rel="noopener noreferrer")  Universidad continental (2021, 3 de mayo) Contratos traslativos de posesión y de uso.  [Video] YouTube. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema7',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
