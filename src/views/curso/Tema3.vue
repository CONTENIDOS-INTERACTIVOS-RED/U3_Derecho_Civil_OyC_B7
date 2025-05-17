<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Arrendamiento'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-8.p-4(data-aos="fade-left").h-100
          p.mb-0 El <b>contrato de arrendamiento</b> ocupa un lugar central dentro del Derecho Civil colombiano. Su frecuencia en la vida cotidiana, la variedad de bienes a los que puede aplicarse y la diversidad de relaciones jurídicas que regula, hacen de esta figura una herramienta indispensable para el tráfico patrimonial y la convivencia social. Desde una vivienda familiar. hasta un local comercial, desde el arriendo de una finca, hasta la cesión temporal de un vehículo, el arrendamiento permite a las personas disponer de bienes que no poseen, garantizando, a su vez, una utilidad económica para quien los entrega. Para un estudiante de Derecho, entender a profundidad esta figura no es una opción, sino una necesidad, pues su regulación y aplicación práctica abren la puerta a múltiples escenarios jurídicos reales, litigiosos o contractuales, donde el conocimiento técnico marca la diferencia entre un buen y un mal ejercicio profesional.
    
    .bg-full-width.bg-color-21
      .p-4.p-md-5
        .row
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              .row.align-items-end
                .col-lg-auto
                  img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Según el Artículo 1973 del Código Civil colombiano, el arrendamiento es un contrato por el cual “dos partes se obligan recíprocamente; una, a conceder el goce de una cosa por cierto tiempo y, la otra, a pagar por este goce un precio determinado” (Código Civil colombiano, 1974, Artículo 1973). 
            p(data-aos="fade-left") Esta definición es clara al establecer los tres elementos esenciales del contrato: el consentimiento de las partes, el objeto (el goce de una cosa determinada), y la causa, que es la contraprestación económica que el arrendatario se compromete a pagar. Esta estructura clásica, propia del derecho romano, ha sido desarrollada en la legislación colombiana, tanto por normas generales contenidas en el Código Civil, como por disposiciones especiales del Código de Comercio, que regula, entre otros, el arrendamiento de locales comerciales.
            p Desde el punto de vista de su naturaleza jurídica, el arrendamiento es un contrato:
        
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7
              h5 Bilateral
              p Porque ambas partes asumen obligaciones recíprocas desde el perfeccionamiento del acuerdo. El arrendador debe entregar el bien en condiciones aptas para su uso y garantizar el disfrute pacífico del mismo, mientras que el arrendatario debe pagar el canon y restituir el bien, al finalizar el contrato.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h5 Oneroso
              p Dado que ambas partes se benefician a cambio de asumir una carga: una, entrega el uso del bien y la otra, paga por ello.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Conmutativo
              p Dado que desde el inicio las partes conocen la equivalencia de sus prestaciones, y no dependen del azar, como en los contratos aleatorios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 De tracto sucesivo
              p Lo cual implica que sus efectos se extienden en el tiempo. Esta prolongación temporal tiene implicaciones importantes; por ejemplo, en la posibilidad de terminación anticipada, la mora en el pago de cánones, o el deterioro progresivo del bien.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 Nominado y principal
              p Es decir, está expresamente regulado por la ley y puede existir por sí solo, sin depender de otros contratos. Aunque en principio es un contrato consensual, lo que significa que se perfecciona por el solo acuerdo de voluntades sin necesidad de forma solemne, en la práctica es recomendable, e incluso necesario, que se celebre por escrito, especialmente en contratos que involucran bienes de alto valor o que están sujetos a regulación especial, como ocurre en los arrendamientos de inmuebles urbanos o comerciales. Además, en ciertos casos, la ley exige registro, como sucede con el arrendamiento de predios rurales, contratos de leasing o cuando se trata de arrendamientos de largo plazo, que afectan el dominio.
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En cuanto a los derechos y obligaciones de las partes, el arrendador está obligado a entregar el bien en estado apto para el uso pactado, mantenerlo en ese estado durante la vigencia del contrato, garantizar la posesión pacífica y respetar los términos establecidos. 

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") También debe realizar las reparaciones necesarias para conservar el bien, salvo aquellas que por Ley o pacto expreso, corresponden al arrendatario. Este último, por su parte, debe pagar el canon en la forma y plazos acordados, usar el bien conforme a su destino, conservarlo diligentemente y devolverlo al finalizar el contrato, en condiciones similares a las que lo recibió, salvo el deterioro natural, derivado del uso normal. 
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-end
            .col-lg-auto.order-2
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-0 El incumplimiento de estas obligaciones puede dar lugar a la terminación anticipada del contrato y al inicio de procesos judiciales como la restitución de inmueble arrendado, que actualmente se tramita por el procedimiento verbal sumario, regulado en el Código General del Proceso. 
    
    p.mb-4 Uno de los aspectos más importantes que debe tener presente el estudiante de Derecho, es la diversidad de modalidades del contrato de arrendamiento, puesto que no todas se rigen por las mismas reglas:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Arrendamiento de vivienda urbana" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Arrendamiento de vivienda urbana
            p Regulado por la ley 820 del 2003, contiene disposiciones especiales sobre duración mínima del contrato, incrementos del canon, prohibición de cobros indebidos, uso de garantías y mecanismos de terminación.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/12.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Arrendamiento de locales comerciales" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Arrendamiento de locales comerciales
            p Está sujeto a las normas del código de comercio, e introduce figuras como la indemnización por clientela, que protege al arrendatario cuando el arrendador decide no renovar el contrato sin una causa justificada, pese a que el primero ha contribuido al posicionamiento del negocio en ese lugar.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Arrendamiento de bienes muebles" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Arrendamiento de bienes muebles
            p Aunque menos frecuente, es perfectamente válido y se aplica a vehículos, maquinaria o equipos tecnológicos, con particularidades técnicas y contractuales que exigen atención y precisión.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='', style="width: 100%;")
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/15.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") Desde la perspectiva doctrinal y jurisprudencial, el arrendamiento plantea múltiples debates sobre el equilibrio entre las partes, la función social de la propiedad, la protección de la vivienda como derecho fundamental, y los límites a la autonomía de la voluntad. Por ejemplo, la Corte Constitucional ha señalado en distintas sentencias, la importancia de garantizar el derecho a una vivienda digna frente a medidas de desalojo, especialmente cuando están en juego derechos de personas vulnerables. También ha reconocido la validez de pactos especiales sobre incrementos, cláusulas penales o prohibiciones de subarriendo, siempre que no vulneren el marco legal ni los derechos mínimos del arrendatario. 
    
    .row.mb-5.justify-content-center
      .col-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-left") En este sentido, el contrato de arrendamiento <b>no es una figura cerrada ni mecánica</b>, sino un instrumento jurídico vivo, que debe interpretarse a la luz del contexto social, económico y normativo en que se aplica.
        p Para ilustrar su aplicación práctica, imagine que usted como abogado representa a una persona que arrienda un apartamento a una familia, por un término de un año, con un canon mensual de $1.500.000. El contrato fue firmado por escrito e incluyó una cláusula de incremento anual conforme al IPC. A los seis meses, el arrendatario deja de pagar. En este escenario, su obligación será primero verificar si se cumplieron todos los requisitos legales, enviar una notificación formal por mora, intentar una conciliación extrajudicial si corresponde y, en caso de persistir el incumplimiento, iniciar el proceso judicial de restitución. Ahora bien, si el arrendador no cumplió con las reparaciones prometidas y el apartamento presenta condiciones que afectan su habitabilidad, podría ser el arrendatario quien solicite la terminación del contrato por justa causa. Ambos casos demuestran cómo el conocimiento preciso del arrendamiento, permite actuar con criterio y defender los derechos de sus clientes.
    
    .bg-full-width.bg-color-1
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            p.mb-0 En conclusión, <b>el contrato de arrendamiento</b> es mucho más que un acuerdo para el uso de un bien: es una construcción jurídica compleja que regula el equilibrio entre el acceso a bienes ajenos y la protección de la propiedad privada. Dominar sus elementos esenciales, su régimen normativo, sus características y consecuencias prácticas, es indispensable para el ejercicio profesional del Derecho, tanto en la asesoría como en la prevención y resolución de conflictos. Un abogado o abogada con sólidos conocimientos en esta materia, no solo redacta contratos claros y eficaces, sino que también identifica riesgos, propone soluciones, y representa con seguridad los intereses de sus clientes, ante tribunales o autoridades administrativas. El arrendamiento, en suma, es una puerta de entrada al ejercicio jurídico con impacto real en la vida de las personas y en el desarrollo económico del país.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/17.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
     

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
              a(href="https://youtu.be/efANJMt20lk?si=wqIzJPRS6g-GbrVQ " target="_blank" rel="noopener noreferrer") Universidad continental.  (2021, 18 de marzo). Definición de contrato y clasificación. [Video] YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/KnRuSaSBn60?si=31S7kSUWY4_aMFXc " target="_blank" rel="noopener noreferrer") Empresa y Administración GA. (2020, 4 de noviembre). Unidad 6 Vídeo 4 Los contratos administrativos. [Video] YouTube. 



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
