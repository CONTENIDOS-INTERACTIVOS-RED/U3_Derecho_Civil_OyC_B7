export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Clases de contratos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Compraventa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Permuta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Arrendamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mandato',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Contrato de obra',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Comodato',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Mutuo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Depósito',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Chavarro Cadena, J. E. (2018). Código Civil: (2 ed.). Grupo Editorial Nueva Legislación SAS. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68942',
    },
    {
      referencia:
        'Ayala Escorza, M. D. C. (2017). Contratos civiles: ( ed.). IURE Editores. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40214',
    },
    {
      referencia:
        'González de la Aleja, J. R. (2018). La compraventa y los contratos preparatorios: (2 ed.). LA LEY Soluciones Legales S.A. ',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/58389',
    },
    {
      referencia:
        ' Rogel Vide, C. (2008). Estudios de Derecho Civil: obligaciones y contratos: ( ed.). Editorial Reus.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46321',
    },
  ],
  glosario: [
    {
      termino: 'Arrendamiento',
      significado:
        'Contrato por el cual una parte concede a otra el goce o uso temporal de un bien a cambio del pago de un precio. Puede aplicarse a bienes muebles, inmuebles o servicios, y genera obligaciones recíprocas.',
    },
    {
      termino: 'Bilateralidad',
      significado:
        'Característica de los contratos en los que ambas partes adquieren obligaciones mutuas. Está presente, por ejemplo, en la compraventa, permuta y arrendamiento.',
    },
    {
      termino: 'Comodato',
      significado:
        'Contrato gratuito mediante el cual una persona entrega a otra un bien no fungible para su uso temporal, con la obligación de restituirlo en especie. Se perfecciona con la entrega del bien.',
    },
    {
      termino: 'Consentimiento',
      significado:
        'Elemento esencial de todo contrato. Implica la manifestación libre, consciente y sin vicios de la voluntad de las partes para obligarse. Su invalidez puede anular el contrato.',
    },
    {
      termino: 'Consensualidad',
      significado:
        'Régimen de perfeccionamiento de ciertos contratos que se configuran con el solo acuerdo de voluntades, sin necesidad de forma especial, salvo disposición legal expresa.',
    },
    {
      termino: 'Contrato',
      significado:
        'Acuerdo de voluntades entre dos o más partes destinado a crear, modificar o extinguir obligaciones jurídicas. Es la fuente más común de las obligaciones en el Derecho Civil.',
    },
    {
      termino: 'Depósito',
      significado:
        'Contrato por el cual una persona entrega a otra una cosa mueble para que la guarde y la restituya cuando se le solicite. Generalmente gratuito y de carácter real.',
    },
    {
      termino: 'Dominio (traslaticio de)',
      significado:
        'Propiedad sobre un bien que se transfiere de una parte a otra mediante contratos como la compraventa y la permuta, a través del mecanismo de la tradición',
    },
    {
      termino: 'Evicción',
      significado:
        'Situación jurídica en la que el comprador es privado total o parcialmente del bien adquirido por sentencia judicial que reconoce mejor derecho a un tercero. El vendedor debe responder por ello.',
    },
    {
      termino: 'Fungibilidad',
      significado:
        'Propiedad de ciertos bienes que pueden sustituirse por otros de la misma especie, calidad y cantidad. Es condición indispensable en contratos como el mutuo.',
    },
    {
      termino: 'Mandato',
      significado:
        'Contrato por el cual una persona encarga a otra la gestión de uno o más asuntos, actuando en su nombre y por su cuenta. Puede ser gratuito u oneroso, general o especial.',
    },
    {
      termino: 'Mutuo',
      significado:
        'Contrato por el cual una parte entrega a otra bienes fungibles, con la obligación de devolver otros equivalentes. Es un contrato real y puede generar intereses si así se pacta.',
    },
    {
      termino: 'Objeto contractual',
      significado:
        'Bien, hecho o abstención sobre el cual recae la obligación principal de un contrato. Debe ser lícito, posible y determinado o determinable.',
    },
    {
      termino: 'Onerosidad',
      significado:
        'Característica de los contratos donde ambas partes asumen cargas económicas a cambio de beneficios. Se contrapone a los contratos gratuitos.',
    },
    {
      termino: 'Permuta',
      significado:
        'Contrato mediante el cual dos partes se obligan recíprocamente a dar un bien por otro. No hay dinero como contraprestación principal, y ambas partes actúan como proveedor y adquirente.',
    },
    {
      termino: 'Precio cierto en dinero',
      significado:
        'Elemento esencial de la compraventa. El valor de la cosa debe estar determinado o ser objetivamente determinable, y expresado en dinero para que el contrato sea válido.',
    },
    {
      termino: 'Principio de autonomía de la voluntad',
      significado:
        'Fundamento del Derecho Contractual que reconoce la facultad de las partes para regular libremente sus relaciones jurídicas, dentro del marco legal y del orden público.',
    },
    {
      termino: 'Realidad contractual',
      significado:
        'Doctrina y principio que indica que el contrato produce efectos reales cuando se entrega el bien (tradición), especialmente en contratos traslaticios de dominio.',
    },
    {
      termino: 'Responsabilidad contractual',
      significado:
        'Obligación de resarcir los daños causados por el incumplimiento de las obligaciones derivadas de un contrato válido. Puede derivar en acciones judiciales.',
    },
    {
      termino: 'Vicios ocultos',
      significado:
        'Defectos graves en un bien vendido o permutado, que no son evidentes y que afectan su uso o valor. El vendedor o permutante debe responder por ellos.',
    },
  ],
}
