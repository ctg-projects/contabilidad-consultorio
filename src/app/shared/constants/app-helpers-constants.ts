export const METODOS_PAGO = [
  {metodo_pago: 'Efectivo', interes:0, cuotas:0 },
  {metodo_pago: 'Transferencia', interes:0, cuotas:0 },
  {metodo_pago: 'Tarjeta Credito', interes:0, cuotas:12 },
  {metodo_pago: 'Cuotas personalizadas', interes:0.01, cuotas:4 },
];

export const PROFESIONALES = [
  {
    nombre: "Mariana",
    apellidos: "Botero Giraldo",
    edad: 33,
    correo: "marianabotero1991@gmail.com",
    profesion: "medica"
  },
  {
    nombre: "Leonor",
    apellidos: "Botero Giraldo",
    edad: 62,
    correo: "correo@gmail.com",
    profesion: "medica"
  },
  {
    nombre: "Sara",
    apellidos: "Lopes Araque",
    edad: 25,
    correo: "correo@gmail.com",
    profesion: "cosmetologa"
  },
  {
    nombre: "Alicia",
    apellidos: "Adorada",
    edad: 53,
    correo: "correo@gmail.com",
    profesion: "cosmetologa"
  },
]

export const PROCEDIMIENTOS = [
  {
    nombre: "Botox(Toxina Botulínica)",
    zona: null,
    marca: "**",
    costo_procedimiento: 0,
    costo_insumos: 0,
    //Valores de insumos dinamicos y se pueden sacar realizando un formulario de insumos
    insumos: [
      {nombre: "Toxina Botulínica", cantidad: 50, medida: "unidad", costo_undidad: 12000},
      {nombre: "Algodon", cantidad: 10, medida: "ml" , costo_undidad: 200},
      {nombre: "Jeringa de Insulina", cantidad: 1, medida: "unidad", costo_undidad: 1200},
      {nombre: "Jeringa de 5ml", cantidad: 1, medida: "unidad", costo_undidad: 800},
      {nombre: "Guantes quirurjicos", cantidad: 1, medida: "par", costo_undidad: 4500}
    ]
  },
  {
    nombre: "Relleno con Ácido Hialurónico",
    marca: "**",
    elegir_zona: ['Labios', 'Pomulos', 'Cuello', 'Nariz', 'Gluteos', 'Mandibula'],
    costo_procedimiento: 0,
    costo_insumos: 0,
    //Valores de insumos dinamicos y se pueden sacar realizando un formulario de insumos
    insumos: [
      {nombre: "Jeringa Acido Hialuronico", cantidad: 1, medida: "jeringa", costo_undidad: 400000},
      {nombre: "Algodon", cantidad: 10, medida: "gr" , costo_undidad: 200},
      {nombre: "Jeringa de Insulina", cantidad: 1, medida: "unidad", costo_undidad: 1200},
      {nombre: "Jeringa de 5ml", cantidad: 1, medida: "unidad", costo_undidad: 800},
      {nombre: "Guantes quirurjicos", cantidad: 1, medida: "par", costo_undidad: 4500}
    ]
  },
  {
    nombre: "Plasma Rico en Plaquetas (PRP)",
    marca: "**",
    elegir_zona: null,
    costo_procedimiento: 0,
    costo_insumos: 0,
    //Valores de insumos dinamicos y se pueden sacar realizando un formulario de insumos
    insumos: [
      {nombre: "Kit de PRP", cantidad: 1, medida: "uso", costo_undidad: 150000},
      {nombre: "Centrifugadora", cantidad: 10, medida: "uso" , costo_undidad: 80000},
      {nombre: "Algodon", cantidad: 10, medida: "ml" , costo_undidad: 200},
      {nombre: "Jeringa de Insulina", cantidad: 1, medida: "unidad", costo_undidad: 1200},
      {nombre: "Jeringa de 10 ml", cantidad: 1, medida: "unidad", costo_undidad: 800},
      {nombre: "Guantes quirurjicos", cantidad: 1, medida: "par", costo_undidad: 4500}
    ]
  },
]
