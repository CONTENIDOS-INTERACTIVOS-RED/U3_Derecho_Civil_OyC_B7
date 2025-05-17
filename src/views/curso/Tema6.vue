<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'6. Comodato'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema6/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El contrato de comodato, también llamado préstamo de uso, es una figura clásica del Derecho Civil que, aunque no tan frecuente en el tráfico mercantil moderno como la compraventa o el arrendamiento, conserva una gran importancia por su utilidad en contextos familiares, comunitarios y de confianza personal.
        p(data-aos="fade-left") En su esencia, el comodato refleja el principio de solidaridad y colaboración entre particulares, permitiendo el uso temporal de un bien ajeno sin que medie contraprestación económica. Para usted como estudiante de Derecho, comprender a fondo el comodato no solo le permitirá distinguirlo con claridad de otras figuras contractuales, sino también analizar las consecuencias jurídicas que se derivan de un préstamo gratuito, sus efectos, su ejecución, y las responsabilidades que impone a las partes.
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 De acuerdo con el Artículo 2200 del Código Civil colombiano, el comodato es definido como “un contrato en que una de las partes entrega a la otra gratuitamente, una cosa no fungible, para que haga uso de ella y la restituya” (Código Civil colombiano, 1974, Artículo 2200). 

    p.mb-4 Esta definición contiene los elementos esenciales de la figura: 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema6/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 (i)
              p.mb-0 La entrega de la cosa.

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema6/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 (ii)
              p.mb-0 Su uso temporal. 
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema6/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 (iii)
              p.mb-0  El carácter gratuito del contrato.

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema6/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 (iv)
              p.mb-0 La obligación de restituirla en el estado en que fue prestada.
    
    p Es importante destacar que el comodato se diferencia del mutuo (o préstamo de consumo) en que la cosa prestada en el comodato no puede ser consumida ni sustituida: se trata de cosas no fungibles, es decir, individualizadas, que deben ser devueltas en especie, como un vehículo, un libro, una finca o una herramienta.
    p.mb-4 Desde un punto de vista jurídico, el contrato de comodato tiene varias características distintivas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Es un contrato real
              p Porque se perfecciona no solo con el acuerdo de voluntades, sino con la entrega efectiva del bien. Mientras no se entregue la cosa, el contrato no se entiende celebrado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Es un contrato gratuito
              p Pues el comodatario (quien recibe el bien) no paga nada por el uso. Este aspecto es central y lo diferencia radicalmente del arrendamiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Es un contrato unilateral
              p Debido a que en principio, solo genera obligaciones para el comodatario. El comodante (quien entrega el bien) no asume obligación alguna distinta de permitir el uso del bien, salvo que se haya pactado lo contrario, o haya dolo o culpa grave de su parte.
    
    .bg-full-width.bg-color-14
      .p-4.p-md-5
        p El comodato tiene como finalidad permitir que una persona utilice un bien ajeno sin adquirir su propiedad ni pagar por su uso. No puede extenderse a bienes consumibles ni a sumas de dinero. En cuanto al objeto del contrato, debe tratarse de una cosa determinada, corporal, no fungible, lícita y susceptible de uso sin deterioro. Si el bien no puede ser devuelto en el mismo estado o especie, no es comodato. Por ejemplo, prestar un automóvil es comodato; prestar dinero es mutuo. Esta distinción tiene implicaciones jurídicas importantes, especialmente en materia de obligaciones y responsabilidad.
        p.mb-4 El <b>comodatario tiene varias obligaciones esenciales</b> que debe cumplir estrictamente: 

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/10.svg" alt="" style="width: 90px")
              h5.text-center Usar la cosa
              p.mb-0.text-center Conforme al destino convenido o, en su defecto, al uso ordinario.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/11.svg" alt="" style="width: 90px")
              h5.text-center Conservar la cosa
              p.mb-0.text-center Con diligencia.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/12.svg" alt="" style="width: 90px")
              h5.text-center No ceder la cosa ni prestarla
              p.mb-0.text-center A terceros, sin autorización.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema6/13.svg" alt="" style="width: 90px")
              h5.text-center Devolver la cosa en el plazo acordado
              p.mb-0.text-center O cuando el comodante la solicite, salvo que exista un término perentorio que debe respetarse.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white Además, responde por el deterioro o pérdida de la cosa, incluso por caso fortuito, si ha excedido los límites del uso, si ha demorado la restitución, o si la ha entregado a un tercero sin consentimiento del comodante. Esta responsabilidad agravada se justifica por el hecho de que el comodatario se beneficia gratuitamente del bien ajeno.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/14.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Por su parte, el comodante no está obligado a realizar reparaciones, ni a garantizar el estado del bien, salvo que haya ocultado dolosamente defectos que puedan causar perjuicio. Tampoco responde por los daños que sufra el comodatario por el uso del bien, salvo dolo o culpa grave. No obstante, el comodante tiene la facultad de solicitar la restitución del bien en cualquier momento, si no se pactó un plazo fijo, o una vez vencido dicho plazo. La doctrina ha subrayado que, en el comodato, prevalece la confianza entre las partes, y que el comodatario actúa como mero tenedor, no como poseedor, lo que implica que no puede alegar derechos reales sobre la cosa prestada.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Un ejemplo práctico puede ayudarle a visualizar la dinámica del contrato. Imagine que un amigo le presta su bicicleta durante un mes para que usted pueda movilizarse, mientras arregla la suya. Usted no paga nada por ese uso, y se compromete a cuidarla y devolverla en buen estado. Si la bicicleta se daña por uso indebido, o si usted la presta a un tercero sin permiso y esta se pierde, deberá asumir los costos de reparación o reposición. Ahora bien, si la bicicleta se daña por una falla interna que usted no pudo prever ni evitar, no sería responsable. Si el contrato fue verbal y sin plazo, el comodante puede solicitar su devolución en cualquier momento. Este ejemplo muestra cómo el comodato, aunque gratuito, genera deberes exigibles y responsabilidad legal clara.
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema6/15.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") En la práctica jurídica, el comodato es frecuente en contextos familiares o de cercanía personal, pero también puede tener importancia en relaciones entre instituciones, fundaciones, iglesias, entidades sin ánimo de lucro o entre particulares que prestan bienes para actividades educativas, culturales o comunitarias. También se utiliza como figura auxiliar para otorgar el uso de inmuebles sin generar vínculos contractuales onerosos, aunque esto puede prestarse a simulación contractual o generar confusión con el arrendamiento, lo cual ha sido objeto de múltiples pronunciamientos por parte de la jurisprudencia civil y laboral.

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/16.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") Desde la perspectiva jurisprudencial, los tribunales han señalado que el comodato debe interpretarse de forma restrictiva, especialmente cuando hay dudas sobre si se trata de un contrato gratuito o si, en realidad, se está encubriendo una relación de arrendamiento o prestación de servicios. También han aclarado que el abuso del comodato, como el uso de la cosa para fines distintos a los pactados o su negativa a restituirla, puede dar lugar a procesos de restitución, indemnización por daños y perjuicios incluyendo acciones penales por abuso de confianza.
        
            .bg-color-11.p-4(data-aos="fade-left")
              p.mb-0 En conclusión, el contrato de comodato es una figura que materializa jurídicamente la confianza entre particulares, basada en la entrega gratuita de un bien para su uso temporal. Aunque es un contrato sencillo en su estructura, encierra múltiples implicaciones legales que exigen del jurista un conocimiento riguroso de sus elementos, efectos y límites. 
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema6/17.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Para usted como estudiante de Derecho, comprender esta figura le permitirá asesorar con claridad en casos de préstamos de bienes, prevenir confusiones con otras figuras, redactar contratos adecuados, y actuar con seguridad en procesos relacionados con la devolución, conservación y uso indebido de bienes prestados. 

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
export default {
  name: 'Tema6',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
