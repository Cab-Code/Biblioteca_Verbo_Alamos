
// Estuardo Cabrera
//<img src="image.png" class="imagen" id="imagen_l">

// iniciacion de funciones como resultados
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
function guatemala(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');


    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');

  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');

  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');

  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');

  //parte extra
  var MasResultados = document.getElementById('resultLink');
  var imagen1 = document.getElementById('imagen_l');
  var imagen2 = document.getElementById('imagen_l2');
  var imagen3 = document.getElementById('imagen_l3');
  var imagen4 = document.getElementById('imagen_l4');
  var imagen5 = document.getElementById('imagen_l5');
  
  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "GUATEMALA: republica de guatemala";
  autor_l.innerText  = "MINISTERIO DE ASUNTOS EXTERIORES, UNION EUROPEA Y COOPERACION";
  anio_l.innerText = "2019";
  linkl.href ="http://www.exteriores.gob.es/documents/fichaspais/guatemala_ficha%20pais.pdf"
  imagen1.src="./imagenes/guaof1.png"


  titulo_l2.innerText  = "GUATEMALA: análisis de la situación del país";
  autor_l2.innerText  = "ORGANIZACION DE LAS NACIONES UNIDAS";
  anio_l2.innerText = "2014";
  linkl2.href ="https://onu.org.gt/wp-content/uploads/2016/04/Estudio-de-Situacion-Guatemala.compressed.pdf"
  imagen2.src="./imagenes/guaof2.png"

  titulo_l3.innerText  = "GUATEMALA: cerrando brechas para un generar un crecimiento mas inclusivo";
  autor_l3.innerText  = "Susana M.Sanchez, J Humberto Lopez, Kinnon Scott";
  anio_l3.innerText = "2016";
  linkl3.href ="https://www.mineco.gob.gt/sites/default/files/guatemala_diagnostico_sistematico_del_pais.pdf";
  imagen3.src="./imagenes/guaof3.png"

  titulo_l4.innerText  = "CODIGO DE TRABAJO DE GUATEMALA";
  autor_l4.innerText  = "MINISTERIO DE TRABAJO Y BIENESTAR SOCIAL";
  anio_l4.innerText = "2019";
  linkl4.href ="http://biblio3.url.edu.gt/Libros/2011/codigo-de-trabajo.pdf"
  imagen4.src="./imagenes/guaof5.png"
  

  titulo_l5.innerText  = "UN ESTADO OTRA NACIÓN : culturas políticas, ciudadanía e intermediación en Guatemala";
  autor_l5.innerText  = "Belinda Ramos, Mario Sosa";
  anio_l5.innerText = "2008";
  linkl5.href ="http://biblioteca.clacso.edu.ar/Guatemala/ise/20120727013641/unestado.pdf"
  imagen5.src="./imagenes/guaof4.png"



  



  mostrarResultados();

  

}
function ODS(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "OBJETIVOS DE DESARROLLO SOSTENIBLE";
  autor_l.innerText  = "Programa de las Naciones Unidas para el Desarrollo";
  anio_l.innerText = "2019";
  linkl.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals.html"

  titulo_l2.innerText  = "OBJETIVOS DE DESARROLLO SOSTENIBLE: antecedentes";
  autor_l2.innerText  = "Programa de las Naciones Unidas para el Desarrollo";
  anio_l2.innerText = "2019";
  linkl2.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals/background.html"

  titulo_l3.innerText  = "GUATEMALA: cerrando brechas para un generar un crecimiento mas inclusivo";
  autor_l3.innerText  = "Susana M.Sanchez, J Humberto Lopez, Kinnon Scott";
  anio_l3.innerText = "2016";
  linkl3.href ="https://www.mineco.gob.gt/sites/default/files/guatemala_diagnostico_sistematico_del_pais.pdf";

  titulo_l4.innerText  = "¡Dejemos ya de manosear los ODS!";
  autor_l4.innerText  = "Alberto A.Pinillos";
  anio_l4.innerText = "2021";
  linkl4.href ="http://biblio3.url.edu.gt/Libros/2011/codigo-de-trabajo.pdf"

  titulo_l5.innerText  = "METAS DE LOS OBJETIVOS DE DESARROLLO SOSTENIBLE";
  autor_l5.innerText  = "GOBIERNO DE ESPAÑA";
  anio_l5.innerText = "2019";
  linkl5.href ="https://www.agenda2030.gob.es/recursos/docs/METAS_DE_LOS_ODS.pdf"


  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"


  mostrarResultados();

  

}
function pobreza(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');
  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "Pobreza MULTIDIMENSIONAL INFANTIL Y ADOLECENTES EN GUATEMALA: privaciones a superar";
  autor_l.innerText  = "ICEFI, UNICEF";
  anio_l.innerText = "2019";
  linkl.href ="https://icefi.org/sites/default/files/muestra_pobreza_multidimensional_en_guatemala.pdf"

  titulo_l2.innerText  = "LA VIVIENDA PRODUCTIVA COMO UN MECANISMO IDÓNEO PARA ROMPER CON LA POBREZA Y EXTREMA POBREZA EN GUATEMALA";
  autor_l2.innerText  = "Sandra G.Leytán";
  anio_l2.innerText = "2006";
  linkl2.href ="http://biblioteca.usac.edu.gt/tesis/04/04_6487.pdf"

  titulo_l3.innerText  = "CERRANDO BRECAHAS PARA GENERAR UN CRECIMIENTO MÁS INCLUSIVO";
  autor_l3.innerText  = "Susana M.Sanchez, J Humberto Lopez, Kinnon Scott";
  anio_l3.innerText = "2016";
  linkl3.href ="https://www.mineco.gob.gt/sites/default/files/guatemala_diagnostico_sistematico_del_pais.pdf";

  titulo_l4.innerText  = "GUATEMALA Evaluación de la Pobreza ";
  autor_l4.innerText  = "Banco Mundial";
  anio_l4.innerText = "2009";
  linkl4.href ="http://www.segeplan.gob.gt/downloads/GuatemalaPovertyAssessmentSpanish.pdf"

  titulo_l5.innerText  = "Programas sociales, superación de la pobreza e inclusión laboral";
  autor_l5.innerText  = "Laís Abramo, Simone Cecchini, Beatriz Morales";
  anio_l5.innerText = "2019";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/44602/1/S1900005_es.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"


  



  mostrarResultados();

  

}
function salud(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "PRIMER AÑO DE GOBIERNO: memoria de labores 2020-2021";
  autor_l.innerText  = "MINISTERIO DE SALUD PUBLICA Y ASISTENCIA SOCIAL";
  anio_l.innerText = "2020";
  linkl.href ="https://www.mspas.gob.gt/images/files/acercadelmspas/memoria-labores-mspas-2020-2021.pdf"

  titulo_l2.innerText  = "ANÁLISIS DEL FINANACIAMIENTO DE LA SALUD EN GUATEMALA: periodo 1994-2014";
  autor_l2.innerText  = "MINISTERIO DE SALUD PUBLICA Y ASISTENCIA SOCIAL";
  anio_l2.innerText = "2015";
  linkl2.href ="https://www.mspas.gob.gt/images/files/cuentasnacionales/publicaciones/AnalisisdelfinanciamientodelasaludenGTM1995-2014.pdf"

  titulo_l3.innerText  = "PROGRAMAS PARA LA ATENCIÓN INTEGRAL EN EL PRIMER NIVEL DE ATENCIÓN EN SALUD: análisis y propuestas  ";
  autor_l3.innerText  = "Lucrecia M.Hernández";
  anio_l3.innerText = "2003";
  linkl3.href ="http://biblioteca.usac.edu.gt/tesis/05/05_3119.pdf";

  titulo_l4.innerText  = "LA CONSTRUCCION DEL CONCEPTO DE SALUD";
  autor_l4.innerText  = "Irma Arriagada, Veronica Aranda, Francisca Miranda";
  anio_l4.innerText = "2005";
  linkl4.href ="http://www.segeplan.gob.gt/downloads/GuatemalaPovertyAssessmentSpanish.pdf"

  titulo_l5.innerText  = "POLITICAS Y PROGRAMAS DE SALUD EN AMERICA LATINA: problemas y respuestas";
  autor_l5.innerText  = "Laís Abramo, Simone Cecchini, Beatriz Morales";
  anio_l5.innerText = "2019";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/6119/1/S051049_es.pdf"


  
  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"




  mostrarResultados();

  

}
function educacion(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');
  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "EL ANALFABETISMO EN EL DEPARTAMENTO DE RETALHULEU ";
  autor_l.innerText  = "Mario A.Calderón";
  anio_l.innerText = "2005";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/07/07_1489.pdf"

  titulo_l2.innerText  = "EL SISTEMA EDUCATIVO EN GUATEMALA";
  autor_l2.innerText  = "Maria Aceña, Walter Menchú";
  anio_l2.innerText = "2019";
  linkl2.href ="https://cien.org.gt/wp-content/uploads/2019/05/Educacio%CC%81n-y-Tecnologi%CC%81a-documento-final.pdf"

  titulo_l3.innerText  = "PLAN ESTRATEGICO DE EDUCACIÓN: 2016-2020";
  autor_l3.innerText  = "Ministerio de Educación";
  anio_l3.innerText = "2016";
  linkl3.href ="https://www.mineduc.gob.gt/portal/contenido/menu_lateral/quienes_somos/politicas_educativas/pdf/PLAN-EDUCACION.pdf";

  titulo_l4.innerText  = "CAMPAÑA PUBLICITARIA PARA SENSIBILIZAR A LOS JOVENES DE LA CIUDAD DE GUATEMALA SOBRE LA IMPORTANCIA DE LA ALFABETIZACION COMO EXPRESION DE SOLIDARIDAD";
  autor_l4.innerText  = "Irvin E.Figueroa";
  anio_l4.innerText = "2006";
  linkl4.href ="http://glifos.unis.edu.gt/digital/tesis/2006/15436.pdf"

  titulo_l5.innerText  = "LA EDUCACIÓN EN TIEMPOS DE LA PANDEMIA DE COVID-19";
  autor_l5.innerText  = "CEPAL";
  anio_l5.innerText = "2020";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/45904/1/S2000510_es.pdf"


  
  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"




  mostrarResultados();

  

}
function genero(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "EQUIDAD DE GENERO: Experiencias e investigaciones";
  autor_l.innerText  = "Dina Valdez, Rodolfo Valenzuela, Hilda Rodríguez, Blanca Ochoa, María Moreno";
  anio_l.innerText = "2014";
  linkl.href ="https://www.itson.mx/publicaciones/Documents/ciencias-economico/equidaddegenero.pdf"

  titulo_l2.innerText  = "IGUALDAD DE GÉNERO Y NO DISCRIMINACIÓN EN LA GESTIÓN DEL EMPLEO";
  autor_l2.innerText  = "Organización Internacional del Trabajo";
  anio_l2.innerText = "2014";
  linkl2.href ="http://fundacionjyg.org/wp-content/uploads/2018/09/Igualdad-de-ge%CC%81nero-y-no-discriminacio%CC%81n-en-la-gestio%CC%81n-del-empleo.pdf"

  titulo_l3.innerText  = "OBJETIVOS DE DESARROLLO SOSTENIBLE";
  autor_l3.innerText  = "Programa de las Naciones Unidas para el Desarrollo";
  anio_l3.innerText = "2019";
  linkl3.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals.html"

  titulo_l4.innerText  = "IGUALDAD DE GÉNERO Y EMPODERAMIENTO DE LAS MUJERES EN EL MARCO DEL CUMPLIMIENTO DE LOS OBJETIVOS DE DESARROLLO DEL MILENIO";
  autor_l4.innerText  = "Secretaria de Planifiaccion y programacion SEGEPLAN";
  anio_l4.innerText = "2010";
  linkl4.href ="http://www.segeplan.gob.gt/2.0/images/pdf/igualdad.pdf"

  titulo_l5.innerText  = "LA DESIGUALDAD DE GÉNERO UN FACTOR LIMITANTE EN LA FORMACIÓN PROFESIONAL DE LA ESTUDIANTE DE TRABAJO SOCIAL ";
  autor_l5.innerText  = "Dora A.García";
  anio_l5.innerText = "2000";
  linkl5.href ="http://www.repositorio.usac.edu.gt/10448/1/15_1146.pdf"


  
  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"




  mostrarResultados();

  

}
function agua(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "SERVICIOS DE AGUA POTABLE Y SANEAMIENTO EN GUATEMALA: Beneficios potenciales y determinantes de exito";
  autor_l.innerText  = "Emilio Lentini";
  anio_l.innerText = "2010";
  linkl.href ="https://repositorio.cepal.org/bitstream/handle/11362/3787/LCW335_es.pdf?sequence=1"

  titulo_l2.innerText  = "ALCANCES DE LA APLICACIÓN DE LA POTABILIZACIÓN DEL AGUA EN GUATEMALA: caso municipio de Sansare, El Progreso, Guatemala";
  autor_l2.innerText  = "Laura Aguilar";
  anio_l2.innerText = "2014";
  linkl2.href ="http://www.repositorio.usac.edu.gt/1345/1/03_4742.pdf"

  titulo_l3.innerText  = "AGUA LIMPIA Y SANEAMIENTO";
  autor_l3.innerText  = "Programa de las Naciones Unidas para el Desarrollo";
  anio_l3.innerText = "2019";
  linkl3.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals/goal-6-clean-water-and-sanitation.html"

  titulo_l4.innerText  = "Estrategia para la Gestión Integrada de Los Recursos Hídricos de Guatemala";
  autor_l4.innerText  = "SEGEPLAN, BANCO INTERAMERICANO DE DESARROLLO";
  anio_l4.innerText = "2006";
  linkl4.href ="http://www.infom.gob.gt/archivos/Docs-Pdf/Documentos-Tecnicos/Diagnostico_del_Agua_Guatemala.pdf"

  titulo_l5.innerText  = "ESTUDIO DE PREFACTIBILIDAD PARA EL MONTAJE DE UNA PLANTA DE ENVASADO DE AGUA PURA Y SU COMERCIALIZACIÓN PARA CONSUMO FAMILIAR EN EL MUNICIPIO DE MAZATENANGO";
  autor_l5.innerText  = "Otto Archilla";
  anio_l5.innerText = "2008";
  linkl5.href ="http://biblioteca.usac.edu.gt/tesis/03/03_3195.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"

 


  mostrarResultados();

  

}
function energia(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "LAS ENERGÍAS RENOVABLES EN LA GENERACIÓN ELÉCTRICA EN GUATEMALA";
  autor_l.innerText  = "Ministerio de Energia y Minas";
  anio_l.innerText = "2018";
  linkl.href ="https://www.mem.gob.gt/wp-content/uploads/2018/07/Energ%C3%ADas-Renovables-en-Guatemala.pdf"

  titulo_l2.innerText  = "LA ENERGÍA RENOVABLE EN GUATEMALA: Presente y futuro";
  autor_l2.innerText  = "Nelson Amaro";
  anio_l2.innerText = "2014";
  linkl2.href ="https://www.galileo.edu/ids/files/2015/05/CACIF-Energia-Renovable-en-Guatemala-Presente-y-Futuro-NELSON-AMARO.pdf"

  titulo_l3.innerText  = "MODELO DE GESTIÓN DE CALIDAD PARA LA MEJORA CONTINUA EN LA SOSTENIBILIDAD DE COMUNIDADES LIBRES DE CONFLICTO, PARA UNA EMPRESA DE DISTRIBUCIÓN ELÉCTRICA EN SALAMÁ, BAJA VERAPAZ ";
  autor_l3.innerText  = "Felipe N.Galvez";
  anio_l3.innerText = "2019";
  linkl3.href ="http://www.repositorio.usac.edu.gt/14109/1/Felipe%20Nery%20Galvez%20Estrada.pdf"

  titulo_l4.innerText  = "DISEÑO DE INVESTIGACIÓN DE LA EVALUACIÓN TÉCNICA-ECONÓMICA DE LOS EFECTOS DE LA INTRODUCCIÓN DE ENERGÍAS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josué Ramírez";
  anio_l4.innerText = "2016";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/08/08_0917_EA.pdf"

  titulo_l5.innerText  = "LEY DE INCENTIVOS PARA EL DESARROLLO DE PROYECTOS DE ENERGÍA RENOVABLE ";
  autor_l5.innerText  = "ELCONGRESO DELA REP⁄BLICA DE GUATEMALA";
  anio_l5.innerText = "2003";
  linkl5.href ="https://www.cnee.gob.gt/pdf/marco-legal/LeydeIncentivosEnerg%C3%ADaRenovable2014.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"

 


  mostrarResultados();

  

}
function trabajo(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "LA VENTA DIRECTA COMO PALIATIVO A LOS ALTOS ÍNDICES DE DESEMPLEO Y SUBEMPLEO DE GUATEMALA";
  autor_l.innerText  = "Carlos E. Herrera";
  anio_l.innerText = "2006";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/08/08_1561_IN.pdf"

  titulo_l2.innerText  = "“EFECTOS PSICOSOCIALES DE LA DESVINCULACIÓN LABORAL, SIN ACOMPAÑAMIENTO PSICOLOGICO";
  autor_l2.innerText  = "Rony Barillas";
  anio_l2.innerText = "2014";
  linkl2.href ="https://www.galileo.edu/ids/files/2015/05/CACIF-Energia-Renovable-en-Guatemala-Presente-y-Futuro-NELSON-AMARO.pdf"

  titulo_l3.innerText  = "COVID – 19 Y EL MUNDO DEL TRABAJO: Punto de partida, respuesta y desafíos en Guatemala";
  autor_l3.innerText  = "Organizacion internacional del trabajo";
  anio_l3.innerText = "2015";
  linkl3.href ="http://www.repositorio.usac.edu.gt/3828/1/T%2013%282914%29.pdf"

  titulo_l4.innerText  = "DISEÑO DE INVESTIGACIÓN DE LA EVALUACIÓN TÉCNICA-ECONÓMICA DE LOS EFECTOS DE LA INTRODUCCIÓN DE ENERGÍAS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josué Ramírez";
  anio_l4.innerText = "2020";
  linkl4.href ="https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/---sro-san_jose/documents/publication/wcms_755522.pdf"

  titulo_l5.innerText  = "ENCUESTA NACIONAL DE EMPLEOS E INGRESOS";
  autor_l5.innerText  = "Instituto Nacional de Estadistica";
  anio_l5.innerText = "2019";
  linkl5.href ="https://www.ine.gob.gt/sistema/uploads/2020/01/15/20200115173246FCRG98JyTWVAtsV4Lmtyn43QFgTufmZg.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"

 


  mostrarResultados();

  

}
function industria(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "El Entorno de la Industria 4.0: Implicaciones y Perspectivas Futuras";
  autor_l.innerText  = "Ynzunza Cortés, Carmen Berenice; Izar Landeta, Juan Manuel; Bocarando Chacón, Jacqueline Guadalupe; Aguilar Pereyra, Felipe; Larios Osorio, Martín";
  anio_l.innerText = "2017";
  linkl.href ="https://www.redalyc.org/jatsRepo/944/94454631006/94454631006.pdf"

  titulo_l2.innerText  = "FOMENTEMOS LA INNOVACIÓN EN GUATEMALA";
  autor_l2.innerText  = "Juan C. Zapata";
  anio_l2.innerText = "2021";
  linkl2.href ="https://www.prensalibre.com/opinion/columnasdiarias/fomentemos-la-innovacion-en-guatemala/"

  titulo_l3.innerText  = "PLAN NACIONAL DE INNOVACIÓN Y DESARROLLO";
  autor_l3.innerText  = "Alejandro Giammattei";
  anio_l3.innerText = "2020";
  linkl3.href ="https://vamosguatemala.com/wp-content/uploads/2019/03/Alejandro_Giammattei_Plan_Nacional_de_Innovacion_y_Desarrollo.pdf"

  titulo_l4.innerText  = "DISEÑO DE INVESTIGACIÓN DE LA EVALUACIÓN TÉCNICA-ECONÓMICA DE LOS EFECTOS DE LA INTRODUCCIÓN DE ENERGÍAS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josué Ramírez";
  anio_l4.innerText = "2016";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/08/08_0917_EA.pdf"

  titulo_l5.innerText  = "SISTEMAS DE INNOVACION EN CENTROAMERICA";
  autor_l5.innerText  = "Naciones Unidas ";
  anio_l5.innerText = "2013";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/2622/1/S2012963_es.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"

 


  mostrarResultados();

  

}
function desigualdad(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "ESTUDIO SOBRE RACISMO, DISCRIMINACION Y BRECHAS DE DESIGUALDAD EN GUATEMALA";
  autor_l.innerText  = "Wilson Romero, Ana Patricia Orantes, Samuel Zapil";
  anio_l.innerText = "2018";
  linkl.href ="https://repositorio.cepal.org/bitstream/handle/11362/44244/1/S1801101_es.pdf"

  titulo_l2.innerText  = "REVISTA ANDINA DE ESTUDIOS POLITICOS";
  autor_l2.innerText  = "Judith Jaschick";
  anio_l2.innerText = "2013";
  linkl2.href ="https://core.ac.uk/download/pdf/328163793.pdf"

  titulo_l3.innerText  = "ODS 10: Reducir la desigualdad en los países y entre ellosen América Latina y el Caribe1";
  autor_l3.innerText  = "Programa de las Naciones Unidas Para el Desarrollo";
  anio_l3.innerText = "2020";
  linkl3.href ="https://www.cepal.org/sites/default/files/static/files/ods10_c1900797_web.pdf"

  titulo_l4.innerText  = "DESIGUALDADES EN SALUD GUATEMALA";
  autor_l4.innerText  = "OMS, Ministerio de Salud Publica y Asistencia Social, Organizacion Panamericana de la Salud ";
  anio_l4.innerText = "2016";
  linkl4.href ="https://www.paho.org/gut/dmdocuments/Desigualdades%20en%20Salud%20en%20Guatemala.pdf"

  titulo_l5.innerText  = "RENTA BASICA UNIVERSAL: Más libertad, más igualdad, más empleo, más bienestar. Una propuesta para Guatemala (2019-2030)";
  autor_l5.innerText  = "ICEFI";
  anio_l5.innerText = "2017";
  linkl5.href ="https://www.icefi.org/sites/default/files/rbu_-_guatemala.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"

 


  mostrarResultados();

  

}
function ciudades(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  titulo_l.innerText  = "LOS ACUERDOS DE PAZ, ASENTAMIENTOS HUMANOS. LIMITACIONES Y AVANCES ";
  autor_l.innerText  = "Karla Dessireé Santizo";
  anio_l.innerText = "2006";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/04/04_5916.pdf"

  titulo_l2.innerText  = "CONSULTA DE CIUDADES SOSTENIBLES";
  autor_l2.innerText  = "Programa de las Naciones unidas Para el Desarrollo";
  anio_l2.innerText = "2020";
  linkl2.href ="https://unhabitat.org/sites/default/files/2020/07/reporte_onu-v2_compressed.pdf"

  titulo_l3.innerText  = "ASENTAMIENTOS HUMANOS E INFRAESTRUCTURA";
  autor_l3.innerText  = "Omar G, Flores B, Isabel Cifuentes Soberanis";
  anio_l3.innerText = "2019";
  linkl3.href ="https://sgccc.org.gt/wp-content/uploads/2019/06/1erRepCCGuaCap9.pdf"

  titulo_l4.innerText  = "DISEÑO DE INVESTIGACIÓN DE LA EVALUACIÓN TÉCNICA-ECONÓMICA DE LOS EFECTOS DE LA INTRODUCCIÓN DE ENERGÍAS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josué Ramírez";
  anio_l4.innerText = "2016";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/08/08_0917_EA.pdf"

  titulo_l5.innerText  = "SINGAPUR: politica y comercial y politica de desarrollo. Contraste de teorias. ";
  autor_l5.innerText  = "Andrés Carrión Jara, Viviana Sáez Ruiz ";
  anio_l5.innerText = "2019";
  linkl5.href ="http://www.exteriores.gob.es/documents/fichaspais/guatemala_ficha%20pais.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"

 


  mostrarResultados();

  

}
function produccion(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');

    //parte 2
  var titulo_l2 = document.getElementById("titulo_l2");
  var autor_l2 = document.getElementById('autor_l2');
  var anio_l2 = document.getElementById('anio_l2');
  var linkl2 = document.getElementById('linkl2');
  var imagen_l2 = document.getElementById('imagen_l2');
  //parte 3
  var titulo_l3 = document.getElementById("titulo_l3");
  var autor_l3 = document.getElementById('autor_l3');
  var anio_l3 = document.getElementById('anio_l3');
  var linkl3 = document.getElementById('linkl3');
  var imagen_l3 = document.getElementById('imagen_l3');
  //parte 4
  var titulo_l4 = document.getElementById("titulo_l4");
  var autor_l4 = document.getElementById('autor_l4');
  var anio_l4 = document.getElementById('anio_l4');
  var linkl4 = document.getElementById('linkl4');
  var imagen_l4 = document.getElementById('imagen_l4');
  //parte 5
  var titulo_l5 = document.getElementById("titulo_l5");
  var autor_l5 = document.getElementById('autor_l5');
  var anio_l5 = document.getElementById('anio_l5');
  var linkl5 = document.getElementById('linkl5');
  var imagen_l5 = document.getElementById('imagen_l5');
  //parte extra
  var MasResultados = document.getElementById('resultLink');

  // -----------------------------------asignacion de resultados---------------------------------------------
  
  titulo_l.innerText  = "CRECIMIENTO ECONÓMICO CON BASE AL INCREMENTO DE LAS EXPORTACIONES PARA GUATEMALA, EN EL PERIODO 2002 AL 2012”";
  autor_l.innerText  = "José Martínez ";
  anio_l.innerText = "2015";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/03/03_5191.pdf"

  titulo_l2.innerText  = "FOMENTEMOS LA INNOVACIÓN EN GUATEMALA";
  autor_l2.innerText  = "Juan C. Zapata";
  anio_l2.innerText = "2021";
  linkl2.href ="https://www.prensalibre.com/opinion/columnasdiarias/fomentemos-la-innovacion-en-guatemala/"

  titulo_l3.innerText  = "PLAN NACIONAL DE INNOVACIÓN Y DESARROLLO";
  autor_l3.innerText  = "Alejandro Giammattei";
  anio_l3.innerText = "2020";
  linkl3.href ="https://vamosguatemala.com/wp-content/uploads/2019/03/Alejandro_Giammattei_Plan_Nacional_de_Innovacion_y_Desarrollo.pdf"

  titulo_l4.innerText  = "DISEÑO DE INVESTIGACIÓN DE LA EVALUACIÓN TÉCNICA-ECONÓMICA DE LOS EFECTOS DE LA INTRODUCCIÓN DE ENERGÍAS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josué Ramírez";
  anio_l4.innerText = "2016";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/08/08_0917_EA.pdf"

  titulo_l5.innerText  = "SISTEMAS DE INNOVACION EN CENTROAMERICA";
  autor_l5.innerText  = "Naciones Unidas ";
  anio_l5.innerText = "2013";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/2622/1/S2012963_es.pdf"

  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/guaof4.png"
  imagen_l3.src="./imagenes/guaof4.png"
  imagen_l4.src="./imagenes/guaof4.png"
  imagen_l5.src="./imagenes/guaof4.png"

 


  mostrarResultados();

  

}

// inicio del sistema
var iniciarSecion = document.getElementById('IniciarSesion');
var buscar = document.getElementById('buscar');

var libro1 = document.getElementById('resultado1');
var libro2 = document.getElementById('resultado2');
var libro3 = document.getElementById('resultado3');
var libro4 = document.getElementById('resultado4');
var libro5 = document.getElementById('resultado5');
var btnbuscar = document.getElementById('buscar');
var buscador = document.getElementById('buscador').value;

/*iniciarSecion.onclick = function(e){

  prompt("Introduce tu numero de carnet");
 

}*/
btnbuscar.onclick = function(e){

  var buscador = document.getElementById('buscador').value;
  busqueda = buscador.toLowerCase();


  busquedas = removeAccents(buscador);
  console.log(busquedas)
  desglosarBusquedas()
}


function desglosarBusquedas(){

buscSplit = busquedas.split(' ',12);
console.log(buscSplit);

var longitud = buscSplit.length
console.log(longitud)
buscarResultados(longitud,buscSplit)

}


function buscarResultados(longitud,buscSplit){

  
 
   
   
   for(var i = 0;i <= longitud; i++){
  console.log(i)

  
  if(buscSplit[i]=="_cls"){

    limpiarResultados();
    break

  }else if(longitud == 0){

    error404();
    break

  } if(buscSplit[i]=="ods"|| buscSplit[i]=="objetivos"|| buscSplit[i]=="oobjetivos"){

    ODS();
    break
  }else if(buscSplit[i]=="pobreza"|| buscSplit[i]=="desarrollo"|| buscSplit[i]=="sostenible"){

    pobreza();
    break
    

  }else if(buscSplit[i]=="salud"|| buscSplit[i]=="bienestar"){

    salud();
    break
    
  }else if(buscSplit[i]=="educacion"|| buscSplit[i]=="alfabetismo"|| buscSplit[i]=="analfabetismo"){

    educacion();
    break

  }else if(buscSplit[i]=="genero"|| buscSplit[i]=="igualdad"){
    
    genero();
    break
    
  }else if(buscSplit[i]=="agua"|| buscSplit[i]=="saniamiento"|| buscSplit[i]=="saneamiento" || buscSplit[i]=="agualimpia"){
    
    agua();
    break
    
  }else if(buscSplit[i]=="energia"|| buscSplit[i]=="renovables"|| buscSplit[i]=="energias"|| buscSplit[i]=="energias"){
    
    energia();
    break
    
  }else if(buscSplit[i]=="trabajo"|| buscSplit[i]=="desempleo"|| buscSplit[i]=="economico"){
    
    trabajo();
    break
    
  }else if(buscSplit[i]=="industria"|| buscSplit[i]=="inovacion"|| buscSplit[i]=="innovacion"|| buscSplit[i]=="industrializacion"){
    
    industria();
    break

  }else if(buscSplit[i]=="desigualdad"|| buscSplit[i]=="racismo"){
    
    desigualdad();
    break
    
  }else if(buscSplit[i]=="ciudades"|| buscSplit[i]=="comunidades"|| buscSplit[i]=="asentamientos"|| buscSplit[i]=="ciudad"){
    
    ciudades();
    break

  }else if(buscSplit[i]=="produccion"|| buscSplit[i]=="consumo"|| buscSplit[i]=="responsable"){
    produccion();
    break
    
    
  }else if(buscSplit[i]=="accion"|| buscSplit[i]=="clima"|| buscSplit[i]=="calentamiento"|| buscSplit[i]=="contaminacion"){
    
    
  }else if(buscSplit[i]=="submarina"|| buscSplit[i]=="acuatica"){
    
    
  }else if(buscSplit[i]=="terrestres"||  buscSplit[i]=="ecosistemas"){
    
    
  }else if(buscSplit[i]=="paz"|| buscSplit[i]=="justicia"|| buscSplit[i]=="instituciones"){
    
    
  }else if(buscSplit[i]=="alianzas"){
    guatemala();
    
  }else if(buscSplit[i]=="desnutricion" || buscSplit[i]=="desnuticion"){
    guatemala();
    
  }else if(buscSplit[i]=="guatemala"){

    guatemala();
    break

  }else {error404()}
  }
}





function mostrarResultados(){

  libro1.style.height = '200px';
  libro1.style.visibility = 'visible';

  libro2.style.height = '200px';
  libro2.style.visibility = 'visible';

  libro3.style.height = '200px';
  libro3.style.visibility = 'visible';

  libro4.style.height = '200px';
  libro4.style.visibility = 'visible';

  libro5.style.height = '200px';
  libro5.style.visibility = 'visible';

  var prefinal = document.getElementById('result');
  prefinal.style.height = '50px';
  prefinal.style.visibility = 'visible';
  
}

function error404(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen1 = document.getElementById('imagen_l');

  titulo_l.innerText  = "404: NO ENCONTRADO";
  autor_l.innerText  = "mejora tu ortografia o prueba buscar en google academico";
  anio_l.innerHTML = '<u><br>"Has click aquí"</u>';
  linkl.href ="https://scholar.google.es/schhp?hl=es"
  imagen1.src="./imagenes/404img.png"



  libro1.style.height = '200px';
  libro1.style.visibility = 'visible';
  libro2.style.visibility = 'hidden';
  libro3.style.visibility = 'hidden';
  libro5.style.visibility = 'hidden';
  libro4.style.visibility = 'hidden';

  var prefinal = document.getElementById('result');
  prefinal.style.visibility = 'hidden';

}


function limpiarResultados(){

  libro1.style.height = '0px';
  libro1.style.visibility = 'hidden';

  libro2.style.height = '0px';
  libro2.style.visibility = 'hidden';

  libro3.style.height = '0px';
  libro3.style.visibility = 'hidden';

  libro4.style.height = '0px';
  libro4.style.visibility = 'hidden';

  libro5.style.height = '0px';
  libro5.style.visibility = 'hidden';

  var prefinal = document.getElementById('result');
  prefinal.style.height = '0px';
  prefinal.style.visibility = 'hidden';
}