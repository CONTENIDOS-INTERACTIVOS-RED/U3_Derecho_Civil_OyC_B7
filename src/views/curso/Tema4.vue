<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Mandato'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El contrato de mandato es una figura jurídica que encarna una de las relaciones más delicadas y necesarias en el ámbito del Derecho Civil: la delegación de la gestión de asuntos propios en cabeza de otro. Su estudio resulta esencial para usted como estudiante de Derecho, no solo por su aplicabilidad en múltiples áreas, desde lo civil hasta lo comercial, desde lo privado hasta lo notarial, sino porque representa una herramienta de gestión de confianza entre personas naturales o jurídicas que, bien comprendida, permite la representación, el manejo patrimonial y la ejecución de actos jurídicos en nombre de otro. Su correcta interpretación es fundamental en escenarios que van desde el otorgamiento de poderes para firmar contratos, hasta la administración de bienes o negocios de terceros.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Código Civil colombiano, en su artículo 2142, define el contrato de mandato como “un contrato en que una persona confía la gestión de uno o más negocios a otra, que se hace cargo de ellos por cuenta y riesgo de la primera” (Código Civil colombiano, 1974, Artículo. 2142). 

    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
