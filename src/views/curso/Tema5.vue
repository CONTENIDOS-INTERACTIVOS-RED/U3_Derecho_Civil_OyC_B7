<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Contrato de obra'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La regulación de acuerdos que implican la ejecución de trabajos técnicos, intelectuales o materiales con un resultado concreto es fundamental en el ámbito jurídico.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Contrato de obra
            p.mb-4(data-aos="fade-right") En el PDF <b>Contrato de obra</b>, se analiza esta figura legal como una modalidad contractual en la que una persona se compromete a realizar una obra a cambio de una remuneración. A lo largo del documento se abordan sus elementos esenciales, características jurídicas, obligaciones de las partes, posibles controversias y su aplicación en contextos como la construcción, el diseño o la prestación de servicios especializados, brindando herramientas para interpretar y aplicar esta figura con rigor técnico y jurídico.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Contrato de obra.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/1.png', alt='')

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
              a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=28729 " target="_blank" rel="noopener noreferrer") Congreso de Colombia. (1974). Código Civil colombiano (Edición actualizada). Recuperado de 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://isdabogados.es/tipos-contratos-civiles" target="_blank" rel="noopener noreferrer") ISD Abogados. (s.f.). Tipos de contratos civiles según lo establecido en el código civil. ISD Abogados. Recuperado el 27 de marzo de 2025, de 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rodenasabogados.es/tipos-de-contratos-civiles " target="_blank" rel="noopener noreferrer")  Rodenas Abogados. (2023). Tipos de contratos civiles: guía completa. Rodenas Abogados. Recuperado el 27 de marzo de 2025, de 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/KnRuSaSBn60?si=31S7kSUWY4_aMFXc " target="_blank" rel="noopener noreferrer") Empresa y Administración GA. (2020, 4 de noviembre). Unidad 6 Vídeo 4 Los contratos administrativos. [Video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema5',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
