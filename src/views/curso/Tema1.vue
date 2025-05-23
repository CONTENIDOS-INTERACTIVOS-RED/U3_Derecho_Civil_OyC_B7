<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Compraventa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el estudio del Derecho Civil, pocos contratos tienen tanta relevancia práctica como la compraventa. Se trata, sin duda, de uno de los mecanismos jurídicos más utilizados para la circulación de bienes entre particulares y, por ello, su conocimiento resulta esencial para cualquier estudiante de derecho que aspire a comprender cómo se estructuran, nacen y se ejecutan las relaciones patrimoniales. La normatividad lo define con claridad: 
    
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 “La compraventa es un contrato en que una de las partes se obliga a dar una cosa y la otra a pagarla en dinero. Aquella se dice vender y esta, comprar. El dinero que el comprador da por la cosa vendida se llama precio” (Código Civil colombiano, 1974, Artículo 1849).
        p Esta sencilla fórmula encierra una compleja red de derechos y obligaciones que usted, como futuro jurista, debe ser capaz de identificar y aplicar correctamente.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El primer elemento clave es el precio cierto en dinero. Esto quiere decir que el valor de la cosa vendida debe estar determinado, o al menos ser objetivamente determinable, y expresado en dinero. No basta con una referencia vaga o con dejar el precio a criterio de una sola parte..
        p(data-aos="fade-left") Debe existir un acuerdo claro sobre cuánto se pagará, puesto que sin precio cierto, no hay compraventa. Tampoco es válido sustituir el dinero por otro bien: en ese caso, estaríamos frente a una permuta que, aunque es parecida, tiene una naturaleza distinta.
        p La compraventa, además, reúne una serie de características jurídicas, a saber:
    
    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/5.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="13.5%" y="77.5%" numero="+")
                p <b>1.</b> Es un contrato bilateral, porque ambas partes se obligan recíprocamente desde que nace el acuerdo: el vendedor debe entregar la cosa y el comprador debe pagar el precio. Esta reciprocidad implica que, si una de las partes no cumple, la otra puede negarse a ejecutar su obligación.
    
              .bg-color-white.box-shadow.p-3(x="32%" y="77.5%" numero="+")
                p <b>2.</b> Es oneroso, porque las dos partes asumen una carga a cambio de un beneficio. A diferencia de la donación, en la compraventa nadie da sin recibir algo a cambio. Esta onerosidad implica, además, que existe una expectativa de equivalencia en las prestaciones, aunque no necesariamente de simetría perfecta.
    
              .bg-color-white.box-shadow.p-3(x="50%" y="77.5%" numero="+")
                p <b>3.</b> También es consensual, lo que significa que el contrato se perfecciona por el solo acuerdo de las partes, sin que sea necesario entregar la cosa ni cumplir una formalidad especial, salvo en los casos que la Ley expresamente exige solemnidad, como ocurre con los bienes inmuebles.
    
              .bg-color-white.box-shadow.p-3(x="68.5%" y="77.5%" numero="+")
                p <b>4.</b> Se trata de un contrato principal, porque existe por sí solo, sin necesidad de estar vinculado a otro contrato. Puede ir acompañado de acuerdos accesorios, como una garantía, pero no depende de ellos para su existencia.
    
              .bg-color-white.box-shadow.p-3(x="87%" y="77.5%" numero="+")
                p <b>5.</b> Es un contrato traslaticio de dominio. Esto quiere decir que tiene como fin transmitir la propiedad del bien vendido. Ahora bien, en el ordenamiento jurídico colombiano, la propiedad no se transfiere con el solo contrato, sino que se requiere la tradición: es decir, la entrega material del bien acompañada de la intención de transferir el dominio. Por eso, aunque se haya firmado una compraventa, si no se ha realizado la entrega o no se ha hecho la inscripción respectiva (en caso de inmuebles, por ejemplo), el comprador aún no es propietario legal del bien.
    
    p.mb-5 Ampliemos la información sobre este contrato:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Obligaciones de las partes
              p El vendedor debe entregar la cosa en las condiciones pactadas, garantizar la posesión pacífica y responder por vicios ocultos o por evicción si aparece un tercero con mejor derecho. El comprador, por su parte, está obligado a pagar el precio en el tiempo y lugar acordados, y a recibir la cosa.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              h5 Forma del contrato
              p Se puede celebrar de forma verbal, escrita o incluso tácita, como ocurre, por ejemplo, cuando se adquiere un producto en un establecimiento, paga su valor y recibe el bien sin necesidad de un documento formal. No obstante, la Ley exige solemnidades especiales para ciertos bienes, debido a su naturaleza o a la necesidad de garantizar seguridad jurídica. En el caso de los bienes inmuebles, la compraventa debe celebrarse mediante escritura pública y, posteriormente, inscribirse en la Oficina de Registro de Instrumentos Públicos. Solo con la inscripción se perfecciona la transferencia del dominio y se consolida el derecho real del comprador, frente a terceros.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Del mismo modo, la compraventa de bienes muebles sujetos a registro, como vehículos, embarcaciones, aeronaves o acciones en sociedades, requiere su inscripción en el respectivo registro administrativo o mercantil, para producir efectos jurídicos oponibles a terceros. 
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Cumplir con estas formalidades no es un simple requisito burocrático, es lo que le garantiza al comprador que su derecho de propiedad será reconocido legalmente, que no será despojado arbitrariamente del bien adquirido y que podrá hacer valer su posición jurídica, ante cualquier conflicto. Además, proporciona un medio probatorio sólido en caso de disputa judicial, evitando incertidumbres sobre la existencia, validez o alcance del contrato celebrado.
    
        .bg-color-20.p-4(data-aos="fade-left")
          p.mb-0 Piense, por ejemplo, en una situación cotidiana: usted compra un lote por $120 millones de pesos.
        .bg-color-11.p-4(data-aos="fade-left")
          p.mb-0 El contrato se celebra mediante escritura pública, y luego se inscribe en la oficina de registro correspondiente. Si el vendedor no le entrega el lote, usted puede exigir su cumplimiento o resolver el contrato. Si resulta que el lote tenía una hipoteca no revelada, puede exigir el saneamiento. Si el terreno es inestable y eso no se advirtió, puede demandar, por vicios ocultos.
    
    p Ahora bien, en cuanto a las obligaciones de las partes en el contrato de compraventa, hay que señalar que comprender estas obligaciones es fundamental, no solo para identificar posibles incumplimientos, sino también para ejercer con propiedad los mecanismos de protección previstos en la Ley. Veámoslas a continuación. 

    p.mb-4  Las obligaciones del vendedor, son:

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Entregar la cosa vendida en las condiciones pactadas") El vendedor debe cumplir con la entrega del bien objeto del contrato, en el lugar, tiempo y estado convenidos. Esta entrega puede ser material o jurídica y, en algunos casos, puede implicar el traspaso de documentos que acrediten la propiedad. La cosa debe ser entregada tal como se describió en el contrato, sin alteraciones ni defectos que modifiquen su naturaleza o disminuyan su valor.
          p(numero="2" titulo="Garantizar la posesión pacífica del bien (saneamiento por evicción)") El vendedor debe asegurar que el comprador no será privado del bien adquirido por la acción de un tercero que tenga mejor derecho. Si un juez declara que el comprador debe restituir el bien por no haber recibido una verdadera titularidad, el vendedor está obligado a indemnizar. Esta garantía se conoce como saneamiento por evicción y protege al comprador contra la pérdida del dominio o el uso pacífico del bien, por causa de litigios.
          p(numero="3" titulo="Responder por los vicios ocultos del bien") Si el bien presenta defectos no visibles o no conocidos por el comprador al momento de la venta, y que afectan su uso, funcionamiento o valor, el vendedor debe responder por ellos. Esta obligación persiste, incluso, cuando el vendedor no conocía los defectos, siempre que estos no hubieran sido advertidos por el comprador actuando con diligencia normal. Se trata de una garantía legal que protege al comprador ante un bien que, en apariencia, cumple con lo pactado, pero que en la práctica no lo hace.
    
    p.mb-4 Y las obligaciones del comprador:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pagar el precio en el tiempo, lugar y forma acordados
              p El comprador está obligado a cumplir con el pago del precio establecido, respetando los términos pactados contractualmente. Esto incluye la puntualidad en el pago, el cumplimiento de cuotas si se acordó un pago a plazos, y la utilización del medio de pago convenido. El incumplimiento de esta obligación puede dar lugar a la resolución del contrato, intereses moratorios o, incluso, acciones judiciales de cobro, por parte del vendedor.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Recibir la cosa comprada
              p Aunque suele darse por sentado, el comprador también tiene la obligación de recibir el bien conforme al contrato. Esto implica aceptar la entrega, revisar y, en su caso, dejar constancia de las observaciones. Negarse injustificadamente a recibir el bien, puede interpretarse como incumplimiento contractual, y dar lugar a la resolución del contrato o a la exigencia de daños y perjuicios.
    
  
    .row.justify-content-center.align-items-center.bg-color-4
      .col-lg-7(data-aos="fade-left").order-2
        p Estas obligaciones no solo estructuran la dinámica del contrato, sino que además sirven como punto de referencia para determinar la responsabilidad contractual, la procedencia de acciones judiciales, y la activación de mecanismos de defensa frente a incumplimientos. 
        p.mb-0 Como se observa, la compraventa no es un simple acuerdo de intercambio, es una figura que implica responsabilidad, deberes legales, garantías frente a terceros y, sobre todo, consecuencias jurídicas que se deben manejar con precisión. 

      .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
        img.img-fluid(src='@/assets/curso/tema1/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/46365 " target="_blank" rel="noopener noreferrer") Gutiérrez Jerez, L. J. (2009). Transmisión de la propiedad y contrato de compraventa: ( ed.). Editorial Reus. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=28729 " target="_blank" rel="noopener noreferrer") Congreso de Colombia. (1974). Código Civil colombiano (Edición actualizada). Recuperado de 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.docusign.com/es-mx/blog/desarrolladores/contratos-civiles" target="_blank" rel="noopener noreferrer") Docusign. (s.f.). Contratos civiles: qué son y cuáles son los tipos. Docusign Blog. Recuperado el 27 de marzo de 2025, de  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rodenasabogados.es/tipos-de-contratos-civiles " target="_blank" rel="noopener noreferrer")  Rodenas Abogados. (2023). Tipos de contratos civiles: guía completa. Rodenas Abogados. Recuperado el 27 de marzo de 2025, de 
 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/efANJMt20lk?si=wqIzJPRS6g-GbrVQ " target="_blank" rel="noopener noreferrer") Universidad continental.  (2021, 18 de marzo). Definición de contrato y clasificación. [Video] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
