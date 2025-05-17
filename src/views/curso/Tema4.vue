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

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/3.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") En este contrato, la persona que confiere el encargo se denomina <b>mandante</b>, y quien lo acepta, <b>mandatario</b>. La esencia de esta figura está en la representación y la confianza: el mandante encomienda a otro la realización de actos jurídicos en su nombre y por su cuenta, confiando en su lealtad, diligencia y fidelidad. Aunque puede parecer una relación simple, el mandato implica una alta carga ética y jurídica, pues el mandatario tiene la capacidad de generar efectos jurídicos directos, sobre el patrimonio del mandante.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") El mandato puede ser <b>general o especial</b>, dependiendo del tipo de actos autorizados. Es general cuando abarca todos los negocios del mandante y, en especial, cuando se limita a uno o varios asuntos específicos (por ejemplo, la venta de un inmueble, el cobro de una deuda, o la representación en juicio). 
    
        .bg-color-11.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Además, puede celebrarse de forma gratuita u onerosa, aunque en la práctica suele pactarse una remuneración al mandatario, especialmente si se trata de un profesional (como un abogado o un administrador). El mandato también puede otorgarse de manera verbal, escrita o incluso tácita, pero en ciertos casos, como los que impliquen transferencia de dominio sobre bienes inmuebles, representación judicial o actos que exijan solemnidad, deberá conferirse por escritura pública o documento autenticado, conforme a lo dispuesto en el Artículo 2158 del Código Civil y normas especiales.
        p Para que el <b>contrato de mandato sea válido</b>, deben cumplirse sus elementos esenciales: 
    
    .bg-full-width.bg-color-14
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 El consentimiento libre de las partes.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Un objeto lícito y determinado (los actos que el mandatario ejecutará). 
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema4/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0  Una causa legítima.
        
        p.mb-4 La capacidad jurídica también es relevante: 

        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Primer tema
                p.mb-0 El mandante debe tener capacidad para contratar y para ejecutar directamente el acto que delega.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Segundo tema
                p.mb-0 El mandatario debe tener capacidad para obligarse y comprender la responsabilidad que asume.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Aunque el mandatario actúa por cuenta del mandante, puede obrar con o sin representación expresa. Cuando actúa con representación, los actos celebrados por él vinculan directamente al mandante frente a terceros; cuando actúa sin ella, puede incurrir en responsabilidad personal, salvo que el mandante ratifique posteriormente los actos ejecutados.
        

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/11.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") Entre las obligaciones del mandatario, se destacan actuar con diligencia y buena fe, ceñirse a las instrucciones del mandante, rendir cuentas detalladas de su gestión, no excederse en el encargo y no delegar el mandato sin autorización expresa. Si incumple sus deberes o actúa con negligencia, responde por los perjuicios causados. Por su parte, el mandante debe suministrarle al mandatario, los medios necesarios para ejecutar el mandato, pagarle la remuneración si se pactó, y reembolsarle los gastos y perjuicios razonables derivados del encargo, incluso si este no se ejecutó por causas ajenas al mandatario. En términos prácticos, esto implica que el mandatario no debe asumir riesgos desproporcionados, por haber prestado un servicio para otro.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4(data-aos="fade-left") Uno de los aspectos más importantes de esta figura, es su naturaleza revocable, porque, al fundarse en la confianza, el mandante puede revocar el mandato en cualquier momento, salvo en ciertos casos donde la irrevocabilidad haya sido pactada como una condición necesaria para el beneficio del mandatario o de un tercero. De igual forma, el mandatario puede renunciar al encargo, aunque debe hacerlo sin causar perjuicio al mandante.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El mandato también se extingue por cumplimiento, vencimiento del plazo, muerte de alguna de las partes, quiebra, interdicción o por la imposibilidad sobreviniente de ejecutar el encargo.
    
    .bg-full-width.bg-color-9
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            p.mb-0 Para entender mejor esta figura, imagine que una persona viaja al extranjero y otorga a su hermana un mandato especial mediante escritura pública para que, durante su ausencia, venda su vehículo, pague unas deudas pendientes y administre su cuenta bancaria. Este poder le permite a la mandataria actuar directamente ante notarios, bancos y compradores, y los actos que realice dentro de los límites del mandato, serán plenamente válidos y oponibles al mandante.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema4/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Sin embargo, si la mandataria decide vender el vehículo por debajo del precio pactado o usar el dinero para fines personales, estaría incurriendo en abuso del mandato, y podría ser civil o penalmente responsable por los daños ocasionados.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En la práctica, el mandato es una herramienta común en escenarios como la representación judicial (abogado apoderado), la administración de bienes ajenos (mandatario comercial), la gestión de negocios inmobiliarios, o incluso en relaciones familiares y laborales, donde alguien necesita delegar formalmente, un acto específico. También existen formas atípicas o especiales del mandato, como el mandato irrevocable con efectos en garantía, utilizado en algunos contratos comerciales y financieros, o el mandato judicial en representación de incapaces o ausentes, regulado por el Código General del Proceso.
    
        .bg-color-11.p-4(data-aos="fade-left")
          p.mb-0 Desde la doctrina, el mandato ha sido estudiado como una figura híbrida que combina aspectos del contrato, la representación y la gestión de negocios ajenos. Se lo ha vinculado también con principios como la autonomía de la voluntad, la buena fe contractual, y la protección del patrimonio ajeno. La jurisprudencia colombiana ha precisado, por ejemplo, que el mandato debe interpretarse de forma restrictiva, especialmente cuando el acto que se va a ejecutar compromete la titularidad de bienes o la voluntad del mandante. Asimismo, ha establecido que el mandatario debe actuar siempre con transparencia y que cualquier exceso en el encargo, lo hace personalmente responsable frente al mandante y frente a terceros.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-8.p-4.h-100(data-aos="fade-left")
          p.mb-0 En conclusión, el <b>contrato de mandato</b> es una institución de gran riqueza jurídica, que exige del profesional del Derecho no solo conocimiento técnico de sus elementos y efectos, sino también criterio ético, capacidad de interpretación normativa y atención a las particularidades del caso concreto. Para usted como estudiante, dominar esta figura implica entender cómo se delega válidamente un acto jurídico, cómo se protege el interés del mandante, y cómo se resuelve jurídicamente un abuso de confianza. Le permite intervenir con claridad en la redacción de poderes, la gestión de negocios ajenos, la representación judicial o extrajudicial y, en general, en toda situación donde una persona actúa en nombre de otra. 
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/17.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white En una sociedad compleja y dinámica, el mandato sigue siendo una herramienta actual, eficaz y profundamente humana en su raíz: basada en la confianza y en la responsabilidad mutua.



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
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
