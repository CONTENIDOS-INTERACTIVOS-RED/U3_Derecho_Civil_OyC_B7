<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'8. Depósito'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La regulación de relaciones jurídicas basadas en la confianza y la custodia de bienes ajenos es fundamental en el Derecho Civil.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Depósito
            p.mb-4(data-aos="fade-right") En el PDF <b>Depósito</b>, se estudia esta figura contractual que permite a una persona entregar un bien mueble a otra para su conservación y posterior restitución. A lo largo del documento, se analizan sus elementos esenciales, características jurídicas, responsabilidades de las partes y sus implicaciones prácticas, brindando al lector herramientas para comprender el alcance de esta relación fiduciaria y su importancia en contextos personales, comerciales y judiciales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Depósito.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema8/1.png', alt='')
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

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
              a(href="https://youtu.be/eZAUo_zI6hk?si=rX7wXLQ6pGKZg0EL " target="_blank" rel="noopener noreferrer")  Universidad continental (2021, 3 de mayo) Contratos traslativos de posesión y de uso.  [Video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema8',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes contratos se caracteriza por la entrega gratuita de una cosa no fungible para su uso temporal, con la obligación de restituirla?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Contrato de arrendamiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Contrato de comodato ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Contrato de mutuo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Contrato de depósito',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según el Código Civil colombiano, la permuta se diferencia de la compraventa en que:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Una parte se obliga a prestar un bien y la otra a restituirlo en especie.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ambas partes se obligan a dar una cosa por dinero.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Ambas partes se obligan mutuamente a dar una cosa por otra',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Se perfecciona exclusivamente por escritura pública.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'En el contrato de arrendamiento, según el artículo 1973 del Código Civil colombiano:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El arrendador se obliga a entregar una cosa gratuitamente para su uso.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Se perfecciona exclusivamente por escritura pública.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'El arrendatario se obliga a pagar por el goce temporal de una cosa. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Se entrega un bien fungible con obligación de restituir otro igual.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cuál es una característica esencial del contrato de obra?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La restitución de un bien recibido.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La ejecución de una obra intelectual o material con entrega de un resultado. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La custodia de un bien sin contraprestación económica.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El intercambio de bienes sin ánimo de lucro.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'El contrato de mutuo se distingue del comodato porque:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El mutuo solo puede celebrarse con bienes inmuebles.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El comodato es siempre con intereses.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'El mutuo permite la restitución de bienes fungibles equivalentes, no los mismos. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'El comodato requiere escritura pública para su validez.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
