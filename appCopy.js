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


  titulo_l2.innerText  = "GUATEMALA: an??lisis de la situaci??n del pa??s";
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
  

  titulo_l5.innerText  = "UN ESTADO OTRA NACI??N : culturas pol??ticas, ciudadan??a e intermediaci??n en Guatemala";
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

  titulo_l4.innerText  = "??Dejemos ya de manosear los ODS!";
  autor_l4.innerText  = "Alberto A.Pinillos";
  anio_l4.innerText = "2021";
  linkl4.href ="https://diarioresponsable.com/opinion/31778-dejemos-ya-de-manosear-los-ods"

  titulo_l5.innerText  = "METAS DE LOS OBJETIVOS DE DESARROLLO SOSTENIBLE";
  autor_l5.innerText  = "GOBIERNO DE ESPA??A";
  anio_l5.innerText = "2019";
  linkl5.href ="https://www.agenda2030.gob.es/recursos/docs/METAS_DE_LOS_ODS.pdf"


  imagen_l.src="./imagenes/ods1.png"
  imagen_l2.src="./imagenes/ods2.png"
  imagen_l3.src="./imagenes/guaof3.png"
  imagen_l4.src="https://diarioresponsable.com/images/2020/logo_dr.png"
  imagen_l5.src="./imagenes/ods3.png"


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

  titulo_l2.innerText  = "LA VIVIENDA PRODUCTIVA COMO UN MECANISMO ID??NEO PARA ROMPER CON LA POBREZA Y EXTREMA POBREZA EN GUATEMALA";
  autor_l2.innerText  = "Sandra G.Leyt??n";
  anio_l2.innerText = "2006";
  linkl2.href ="http://biblioteca.usac.edu.gt/tesis/04/04_6487.pdf"

  titulo_l3.innerText  = "CERRANDO BRECHAS PARA GENERAR UN CRECIMIENTO M??S INCLUSIVO";
  autor_l3.innerText  = "Susana M.Sanchez, J Humberto Lopez, Kinnon Scott";
  anio_l3.innerText = "2016";
  linkl3.href ="https://www.mineco.gob.gt/sites/default/files/guatemala_diagnostico_sistematico_del_pais.pdf";

  titulo_l4.innerText  = "GUATEMALA Evaluaci??n de la Pobreza ";
  autor_l4.innerText  = "Banco Mundial";
  anio_l4.innerText = "2009";
  linkl4.href ="http://www.segeplan.gob.gt/downloads/GuatemalaPovertyAssessmentSpanish.pdf"

  titulo_l5.innerText  = "Programas sociales, superaci??n de la pobreza e inclusi??n laboral";
  autor_l5.innerText  = "La??s Abramo, Simone Cecchini, Beatriz Morales";
  anio_l5.innerText = "2019";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/44602/1/S1900005_es.pdf"

  imagen_l.src="./imagenes/pobreza1.png"
  imagen_l2.src="./imagenes/usac.png"
  imagen_l3.src="./imagenes/guaof3.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/pobreza2.png"


  



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
  titulo_l.innerText  = "PRIMER A??O DE GOBIERNO: memoria de labores 2020-2021";
  autor_l.innerText  = "MINISTERIO DE SALUD PUBLICA Y ASISTENCIA SOCIAL";
  anio_l.innerText = "2020";
  linkl.href ="https://www.mspas.gob.gt/images/files/acercadelmspas/memoria-labores-mspas-2020-2021.pdf"

  titulo_l2.innerText  = "AN??LISIS DEL FINANACIAMIENTO DE LA SALUD EN GUATEMALA: periodo 1994-2014";
  autor_l2.innerText  = "MINISTERIO DE SALUD PUBLICA Y ASISTENCIA SOCIAL";
  anio_l2.innerText = "2015";
  linkl2.href ="https://www.mspas.gob.gt/images/files/cuentasnacionales/publicaciones/AnalisisdelfinanciamientodelasaludenGTM1995-2014.pdf"

  titulo_l3.innerText  = "PROGRAMAS PARA LA ATENCI??N INTEGRAL EN EL PRIMER NIVEL DE ATENCI??N EN SALUD: an??lisis y propuestas  ";
  autor_l3.innerText  = "Lucrecia M.Hern??ndez";
  anio_l3.innerText = "2003";
  linkl3.href ="http://biblioteca.usac.edu.gt/tesis/05/05_3119.pdf";

  titulo_l4.innerText  = "LA CONSTRUCCION DEL CONCEPTO DE SALUD";
  autor_l4.innerText  = "Irma Arriagada, Veronica Aranda, Francisca Miranda";
  anio_l4.innerText = "2005";
  linkl4.href ="http://www.segeplan.gob.gt/downloads/GuatemalaPovertyAssessmentSpanish.pdf"

  titulo_l5.innerText  = "POLITICAS Y PROGRAMAS DE SALUD EN AMERICA LATINA: problemas y respuestas";
  autor_l5.innerText  = "La??s Abramo, Simone Cecchini, Beatriz Morales";
  anio_l5.innerText = "2019";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/6119/1/S051049_es.pdf"


  
  imagen_l.src="./imagenes/salud1.png"
  imagen_l2.src="./imagenes/salud2.png"
  imagen_l3.src="./imagenes/usac.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/ElPdf.png"




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
  autor_l.innerText  = "Mario A.Calder??n";
  anio_l.innerText = "2005";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/07/07_1489.pdf"

  titulo_l2.innerText  = "EL SISTEMA EDUCATIVO EN GUATEMALA";
  autor_l2.innerText  = "Maria Ace??a, Walter Mench??";
  anio_l2.innerText = "2019";
  linkl2.href ="https://cien.org.gt/wp-content/uploads/2019/05/Educacio%CC%81n-y-Tecnologi%CC%81a-documento-final.pdf"

  titulo_l3.innerText  = "PLAN ESTRATEGICO DE EDUCACI??N: 2016-2020";
  autor_l3.innerText  = "Ministerio de Educaci??n";
  anio_l3.innerText = "2016";
  linkl3.href ="https://www.mineduc.gob.gt/portal/contenido/menu_lateral/quienes_somos/politicas_educativas/pdf/PLAN-EDUCACION.pdf";

  titulo_l4.innerText  = "CAMPA??A PUBLICITARIA PARA SENSIBILIZAR A LOS JOVENES DE LA CIUDAD DE GUATEMALA SOBRE LA IMPORTANCIA DE LA ALFABETIZACION COMO EXPRESION DE SOLIDARIDAD";
  autor_l4.innerText  = "Irvin E.Figueroa";
  anio_l4.innerText = "2006";
  linkl4.href ="http://glifos.unis.edu.gt/digital/tesis/2006/15436.pdf"

  titulo_l5.innerText  = "LA EDUCACI??N EN TIEMPOS DE LA PANDEMIA DE COVID-19";
  autor_l5.innerText  = "CEPAL";
  anio_l5.innerText = "2020";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/45904/1/S2000510_es.pdf"


  
  imagen_l.src="./imagenes/usac.png"
  imagen_l2.src="./imagenes/educacion1.png"
  imagen_l3.src="./imagenes/educacion2.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/educacion3.png"




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
  autor_l.innerText  = "Dina Valdez, Rodolfo Valenzuela, Hilda Rodr??guez, Blanca Ochoa, Mar??a Moreno";
  anio_l.innerText = "2014";
  linkl.href ="https://www.itson.mx/publicaciones/Documents/ciencias-economico/equidaddegenero.pdf"

  titulo_l2.innerText  = "IGUALDAD DE G??NERO Y NO DISCRIMINACI??N EN LA GESTI??N DEL EMPLEO";
  autor_l2.innerText  = "Organizaci??n Internacional del Trabajo";
  anio_l2.innerText = "2014";
  linkl2.href ="http://fundacionjyg.org/wp-content/uploads/2018/09/Igualdad-de-ge%CC%81nero-y-no-discriminacio%CC%81n-en-la-gestio%CC%81n-del-empleo.pdf"

  titulo_l3.innerText  = "OBJETIVOS DE DESARROLLO SOSTENIBLE";
  autor_l3.innerText  = "Programa de las Naciones Unidas para el Desarrollo";
  anio_l3.innerText = "2019";
  linkl3.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals.html"

  titulo_l4.innerText  = "IGUALDAD DE G??NERO Y EMPODERAMIENTO DE LAS MUJERES EN EL MARCO DEL CUMPLIMIENTO DE LOS OBJETIVOS DE DESARROLLO DEL MILENIO";
  autor_l4.innerText  = "Secretaria de Planifiaccion y programacion SEGEPLAN";
  anio_l4.innerText = "2010";
  linkl4.href ="http://www.segeplan.gob.gt/2.0/images/pdf/igualdad.pdf"

  titulo_l5.innerText  = "LA DESIGUALDAD DE G??NERO UN FACTOR LIMITANTE EN LA FORMACI??N PROFESIONAL DE LA ESTUDIANTE DE TRABAJO SOCIAL ";
  autor_l5.innerText  = "Dora A.Garc??a";
  anio_l5.innerText = "2000";
  var megalink = "http://www.repositorio.usac.edu.gt/10448/1/15_1146.pdf";
  linkl5.href = megalink;


  
  imagen_l.src="./imagenes/genero1.png"
  imagen_l2.src="./imagenes/genero2.png"
  imagen_l3.src="./imagenes/ods2.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/usac.png"




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

  titulo_l2.innerText  = "ALCANCES DE LA APLICACI??N DE LA POTABILIZACI??N DEL AGUA EN GUATEMALA: caso municipio de Sansare, El Progreso, Guatemala";
  autor_l2.innerText  = "Laura Aguilar";
  anio_l2.innerText = "2014";
  linkl2.href ="http://www.repositorio.usac.edu.gt/1345/1/03_4742.pdf"

  titulo_l3.innerText  = "AGUA LIMPIA Y SANEAMIENTO";
  autor_l3.innerText  = "Programa de las Naciones Unidas para el Desarrollo";
  anio_l3.innerText = "2019";
  linkl3.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals/goal-6-clean-water-and-sanitation.html"

  titulo_l4.innerText  = "Estrategia para la Gesti??n Integrada de Los Recursos H??dricos de Guatemala";
  autor_l4.innerText  = "SEGEPLAN, BANCO INTERAMERICANO DE DESARROLLO";
  anio_l4.innerText = "2006";
  linkl4.href ="http://www.infom.gob.gt/archivos/Docs-Pdf/Documentos-Tecnicos/Diagnostico_del_Agua_Guatemala.pdf"

  titulo_l5.innerText  = "ESTUDIO DE PREFACTIBILIDAD PARA EL MONTAJE DE UNA PLANTA DE ENVASADO DE AGUA PURA Y SU COMERCIALIZACI??N PARA CONSUMO FAMILIAR EN EL MUNICIPIO DE MAZATENANGO";
  autor_l5.innerText  = "Otto Archilla";
  anio_l5.innerText = "2008";
  linkl5.href ="http://biblioteca.usac.edu.gt/tesis/03/03_3195.pdf"

  imagen_l.src="./imagenes/ElPdf.png"
  imagen_l2.src="./imagenes/usac.png"
  imagen_l3.src="https://cepaz.org/wp-content/uploads/2019/09/6-e1569356185240.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/usac.png"

 


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
  titulo_l.innerText  = "LAS ENERG??AS RENOVABLES EN LA GENERACI??N EL??CTRICA EN GUATEMALA";
  autor_l.innerText  = "Ministerio de Energia y Minas";
  anio_l.innerText = "2018";
  linkl.href ="https://www.mem.gob.gt/wp-content/uploads/2018/07/Energ%C3%ADas-Renovables-en-Guatemala.pdf"

  titulo_l2.innerText  = "LA ENERG??A RENOVABLE EN GUATEMALA: Presente y futuro";
  autor_l2.innerText  = "Nelson Amaro";
  anio_l2.innerText = "2014";
  linkl2.href ="https://www.galileo.edu/ids/files/2015/05/CACIF-Energia-Renovable-en-Guatemala-Presente-y-Futuro-NELSON-AMARO.pdf"

  titulo_l3.innerText  = "MODELO DE GESTI??N DE CALIDAD PARA LA MEJORA CONTINUA EN LA SOSTENIBILIDAD DE COMUNIDADES LIBRES DE CONFLICTO, PARA UNA EMPRESA DE DISTRIBUCI??N EL??CTRICA EN SALAM??, BAJA VERAPAZ ";
  autor_l3.innerText  = "Felipe N.Galvez";
  anio_l3.innerText = "2019";
  linkl3.href ="http://www.repositorio.usac.edu.gt/14109/1/Felipe%20Nery%20Galvez%20Estrada.pdf"

  titulo_l4.innerText  = "DISE??O DE INVESTIGACI??N DE LA EVALUACI??N T??CNICA-ECON??MICA DE LOS EFECTOS DE LA INTRODUCCI??N DE ENERG??AS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josu?? Ram??rez";
  anio_l4.innerText = "2016";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/08/08_0917_EA.pdf"

  titulo_l5.innerText  = "LEY DE INCENTIVOS PARA EL DESARROLLO DE PROYECTOS DE ENERG??A RENOVABLE ";
  autor_l5.innerText  = "EL CONGRESO DELA REP??BLICA DE GUATEMALA";
  anio_l5.innerText = "2003";
  linkl5.href ="https://www.cnee.gob.gt/pdf/marco-legal/LeydeIncentivosEnerg%C3%ADaRenovable2014.pdf"

  imagen_l.src="./imagenes/ener1.png"
  imagen_l2.src="./imagenes/ener2.png"
  imagen_l3.src="./imagenes/usac.png"
  imagen_l4.src="./imagenes/usac.png"
  imagen_l5.src="./imagenes/ener3.png"

 


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
  titulo_l.innerText  = "LA VENTA DIRECTA COMO PALIATIVO A LOS ALTOS ??NDICES DE DESEMPLEO Y SUBEMPLEO DE GUATEMALA";
  autor_l.innerText  = "Carlos E. Herrera";
  anio_l.innerText = "2006";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/08/08_1561_IN.pdf"

  titulo_l2.innerText  = "???EFECTOS PSICOSOCIALES DE LA DESVINCULACI??N LABORAL, SIN ACOMPA??AMIENTO PSICOLOGICO";
  autor_l2.innerText  = "Rony Barillas";
  anio_l2.innerText = "2015";
  linkl2.href ="http://www.repositorio.usac.edu.gt/3828/"

  titulo_l3.innerText  = "COVID ??? 19 Y EL MUNDO DEL TRABAJO: Punto de partida, respuesta y desaf??os en Guatemala";
  autor_l3.innerText  = "Organizacion internacional del trabajo";
  anio_l3.innerText = "2015";
  linkl3.href ="http://www.repositorio.usac.edu.gt/3828/1/T%2013%282914%29.pdf"

  titulo_l4.innerText  = "DISE??O DE INVESTIGACI??N DE LA EVALUACI??N T??CNICA-ECON??MICA DE LOS EFECTOS DE LA INTRODUCCI??N DE ENERG??AS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josu?? Ram??rez";
  anio_l4.innerText = "2020";
  linkl4.href ="https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/---sro-san_jose/documents/publication/wcms_755522.pdf"

  titulo_l5.innerText  = "ENCUESTA NACIONAL DE EMPLEOS E INGRESOS";
  autor_l5.innerText  = "Instituto Nacional de Estadistica";
  anio_l5.innerText = "2019";
  linkl5.href ="https://www.ine.gob.gt/sistema/uploads/2020/01/15/20200115173246FCRG98JyTWVAtsV4Lmtyn43QFgTufmZg.pdf"

  imagen_l.src="./imagenes/usac.png"
  imagen_l2.src="./imagenes/usac.png"
  imagen_l3.src="./imagenes/usac.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


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
  autor_l.innerText  = "Ynzunza Cort??s, Carmen Berenice; Izar Landeta, Juan Manuel; Bocarando Chac??n, Jacqueline Guadalupe; Aguilar Pereyra, Felipe; Larios Osorio, Mart??n";
  anio_l.innerText = "2017";
  linkl.href ="https://www.redalyc.org/jatsRepo/944/94454631006/94454631006.pdf"

  titulo_l2.innerText  = "FOMENTEMOS LA INNOVACI??N EN GUATEMALA";
  autor_l2.innerText  = "Juan C. Zapata";
  anio_l2.innerText = "2021";
  linkl2.href ="https://www.prensalibre.com/opinion/columnasdiarias/fomentemos-la-innovacion-en-guatemala/"

  titulo_l3.innerText  = "PLAN NACIONAL DE INNOVACI??N Y DESARROLLO";
  autor_l3.innerText  = "Alejandro Giammattei";
  anio_l3.innerText = "2020";
  linkl3.href ="https://vamosguatemala.com/wp-content/uploads/2019/03/Alejandro_Giammattei_Plan_Nacional_de_Innovacion_y_Desarrollo.pdf"

  titulo_l4.innerText  = "DISE??O DE INVESTIGACI??N DE LA EVALUACI??N T??CNICA-ECON??MICA DE LOS EFECTOS DE LA INTRODUCCI??N DE ENERG??AS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josu?? Ram??rez";
  anio_l4.innerText = "2016";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/08/08_0917_EA.pdf"

  titulo_l5.innerText  = "SISTEMAS DE INNOVACION EN CENTROAMERICA";
  autor_l5.innerText  = "Naciones Unidas ";
  anio_l5.innerText = "2013";
  linkl5.href ="https://repositorio.cepal.org/bitstream/handle/11362/2622/1/S2012963_es.pdf"

  imagen_l.src="./imagenes/ElPdf.png"
  imagen_l2.src="https://www.prensalibre.com/wp-content/uploads/2019/01/cropped-PLico.png?quality=52"
  imagen_l3.src="./imagenes/prod2.png"
  imagen_l4.src="./imagenes/usac.png"
  imagen_l5.src="./imagenes/indus1.png"

 


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

  titulo_l3.innerText  = "ODS 10: Reducir la desigualdad en los pa??ses y entre ellos en Am??rica Latina y el Caribe";
  autor_l3.innerText  = "Programa de las Naciones Unidas Para el Desarrollo";
  anio_l3.innerText = "2020";
  linkl3.href ="https://www.cepal.org/sites/default/files/static/files/ods10_c1900797_web.pdf"

  titulo_l4.innerText  = "DESIGUALDADES EN SALUD GUATEMALA";
  autor_l4.innerText  = "OMS, Ministerio de Salud Publica y Asistencia Social, Organizacion Panamericana de la Salud ";
  anio_l4.innerText = "2016";
  linkl4.href ="https://www.paho.org/gut/dmdocuments/Desigualdades%20en%20Salud%20en%20Guatemala.pdf"

  titulo_l5.innerText  = "RENTA BASICA UNIVERSAL: M??s libertad, m??s igualdad, m??s empleo, m??s bienestar. Una propuesta para Guatemala (2019-2030)";
  autor_l5.innerText  = "ICEFI";
  anio_l5.innerText = "2017";
  linkl5.href ="https://www.icefi.org/sites/default/files/rbu_-_guatemala.pdf"

  imagen_l.src="./imagenes/ElPdf.png"
  imagen_l2.src="./imagenes/ElPdf.png"
  imagen_l3.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sustainable_Development_Goal-es-08.jpg/1200px-Sustainable_Development_Goal-es-08.jpg"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


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
  autor_l.innerText  = "Karla Dessire?? Santizo";
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

  titulo_l4.innerText  = "DISE??O DE INVESTIGACI??N DE LA EVALUACI??N T??CNICA-ECON??MICA DE LOS EFECTOS DE LA INTRODUCCI??N DE ENERG??AS RENOVABLES NO CONVENCIONALES AL SISTEMA NACIONAL INTERCONECTADO DE GUATEMALA ";
  autor_l4.innerText  = "Josu?? Ram??rez";
  anio_l4.innerText = "2016";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/08/08_0917_EA.pdf"

  titulo_l5.innerText  = "SINGAPUR: politica y comercial y politica de desarrollo. Contraste de teorias. ";
  autor_l5.innerText  = "Andr??s Carri??n Jara, Viviana S??ez Ruiz ";
  anio_l5.innerText = "2019";
  linkl5.href ="http://www.tesis.uchile.cl/tesis/uchile/2007/carrion_a/sources/carrion_a.pdf"

  imagen_l.src="./imagenes/usac.png"
  imagen_l2.src="./imagenes/ciudades1.png"
  imagen_l3.src="./imagenes/ciudades2.png"
  imagen_l4.src="./imagenes/usac.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


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
  
  titulo_l.innerText  = "CRECIMIENTO ECON??MICO CON BASE AL INCREMENTO DE LAS EXPORTACIONES PARA GUATEMALA, EN EL PERIODO 2002 AL 2012???";
  autor_l.innerText  = "Jos?? Mart??nez ";
  anio_l.innerText = "2015";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/03/03_5191.pdf"

  titulo_l2.innerText  = "EL CAF?? GUATEMALTECO: Un enfoque en el mercado mundial y su productividad";
  autor_l2.innerText  = "Francisco Fabian Ju??rez";
  anio_l2.innerText = "2018";
  linkl2.href ="https://camcig.org/userfiles/2019/01/2018.-DICE-El-caf%C3%A9-guatemalteco-un-enfonque-en-el-mercado-mundial-y-su-productividad-1.pdf"

  titulo_l3.innerText  = "PLAN NACIONAL DE INNOVACI??N Y DESARROLLO";
  autor_l3.innerText  = "Alejandro Giammattei";
  anio_l3.innerText = "2020";
  linkl3.href ="https://vamosguatemala.com/wp-content/uploads/2019/03/Alejandro_Giammattei_Plan_Nacional_de_Innovacion_y_Desarrollo.pdf"

  titulo_l4.innerText  = "GUATEMALA EN CIFRAS";
  autor_l4.innerText  = "Banco De Guatemala";
  anio_l4.innerText = "2020";
  linkl4.href ="https://www.banguat.gob.gt/sites/default/files/banguat/Publica/guatemala_en_cifras_2020.pdf"

  titulo_l5.innerText  = "ADN ECONOMICO DE GUATEMALA";
  autor_l5.innerText  = "Banco Mundial";
  anio_l5.innerText = "2014";
  linkl5.href ="http://onu.org.gt/wp-content/uploads/2016/04/adn-guatemala-BM.pdf"

  imagen_l.src="./imagenes/usac.png"
  imagen_l2.src="./imagenes/prod1.png"
  imagen_l3.src="./imagenes/prod2.png"
  imagen_l4.src="./imagenes/cifrasg.png"
  imagen_l5.src="./imagenes/prod3.png"

 


  mostrarResultados();

  

}
function clima(){

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
  
  titulo_l.innerText  = "ANTECEDENTES Y CONTEXTO DEL CAMBIO CLIM??TICO EN GUATEMALA";
  autor_l.innerText  = "Gabriela Alfaro Marroqu??n y Rosario G??mez";
  anio_l.innerText = "2019";
  linkl.href ="https://sgccc.org.gt/wp-content/uploads/2019/07/1RepCCGuaCap1.pdf"

  titulo_l2.innerText  = "POL??TICA NACIONAL DE CAMBIO CLIM??TICO";
  autor_l2.innerText  = "Ministerio de Ambiente y Recursos Naturales";
  anio_l2.innerText = "2009";
  linkl2.href ="https://www.marn.gob.gt/Multimedios/18647.pdf"

  titulo_l3.innerText  = "LA ENERG??A RENOVABLE EN GUATEMALA: Presente y futuro";
  autor_l3.innerText  = "Nelson Amaro";
  anio_l3.innerText = "2014";
  linkl3.href ="https://www.galileo.edu/ids/files/2015/05/CACIF-Energia-Renovable-en-Guatemala-Presente-y-Futuro-NELSON-AMARO.pdf"

  titulo_l4.innerText  = "GUATEMALA EN CIFRAS";
  autor_l4.innerText  = "Banco De Guatemala";
  anio_l4.innerText = "2020";
  linkl4.href ="https://www.banguat.gob.gt/sites/default/files/banguat/Publica/guatemala_en_cifras_2020.pdf"

  titulo_l5.innerText  = "COMUNICADO DE PRENSA IPCC";
  autor_l5.innerText  = "IPCC";
  anio_l5.innerText = "2021";
  linkl5.href ="https://www.ipcc.ch/site/assets/uploads/2021/08/IPCC_WGI-AR6-Press-Release-Final_es.pdf"

  imagen_l.src="./imagenes/clima1.png"
  imagen_l2.src="./imagenes/ElPdf.png"
  imagen_l3.src="./imagenes/ener2.png"
  imagen_l4.src="./imagenes/cifrasg.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


  mostrarResultados();

  

}
function submarina(){

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
  
  titulo_l.innerText  = "LA PREVENCION Y CONTROL DE LA CONTAMINACI??N DEL RECURSO H??DRICO DE GUATEMALA, NECECIDAD DE UNA REGLAMENTACI??N EFECTIVA";
  autor_l.innerText  = "Diana Fern??ndez";
  anio_l.innerText = "2008";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/04/04_7553.pdf"

  titulo_l2.innerText  = "AGUA Y ALIMENTO";
  autor_l2.innerText  = "Peru Ministerio Del Ambiente";
  anio_l2.innerText = "2016";
  linkl2.href ="https://www.minam.gob.pe/educacion/wp-content/uploads/sites/20/2017/02/Publicaciones-3.-Texto-de-consulta-M%c3%b3dulo-3.pdf"

  titulo_l3.innerText  = "PANEL CIENT??FICO-T??CNICO DE SEGUIMIENTO DE LA POL??TICA DE AGUAS";
  autor_l3.innerText  = "Nelson Amaro";
  anio_l3.innerText = "2014";
  linkl3.href ="https://fnca.eu/phocadownload/P.CIENTIFICO/inf_contaminacion.pdf"

  titulo_l4.innerText  = "LA CONTAMINACI??N DEL AGUA DE LOS R??OS POR LOS INGENIOS AZUCAREROS Y SU IMPACTO EN EL MEDIO AMBIENTE, DURANTE EL TIEMPO DE ZAFRA O PRODUCCI??N DE AZ??CAR EN EL MUNICIPIO DE ESCUINTLA DEPARTAMENTO DE ESCUINTlA";
  autor_l4.innerText  = "Hoffman Romeo Castillo";
  anio_l4.innerText = "2006";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/04/04_5985.pdf"

  titulo_l5.innerText  = "OC??ANOS Y ECOSISTEMAS MARINO-COSTEROS";
  autor_l5.innerText  = "Silja Ram??rez y Jos?? Roberto";
  anio_l5.innerText = "2019";
  linkl5.href ="https://sgccc.org.gt/wp-content/uploads/2019/07/1RepCCGuaCap8.pdf"

  imagen_l.src="./imagenes/usac.png"
  imagen_l2.src="./imagenes/agua1.png"
  imagen_l3.src="./imagenes/ElPdf.png"
  imagen_l4.src="./imagenes/usac.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


  mostrarResultados();

  

}
function terrestres(){

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
  
  titulo_l.innerText  = "CENTRO DE PROTECCI??N DE FAUNA EN PELIGRO DE EXTINCI??N, REGI??N ORIENTE";
  autor_l.innerText  = "Maria Jos?? Valdez";
  anio_l.innerText = "2013";
  linkl.href ="http://biblioteca.usac.edu.gt/tesis/02/02_3647.pdf"

  titulo_l2.innerText  = "LA CONTAMINACION DEL SUELO: una realidad oculta";
  autor_l2.innerText  = "Natalia Rodr??guez Eugenio, Michael McLaughlin, Daniel Pennock";
  anio_l2.innerText = "2019";
  linkl2.href ="http://www.fao.org/3/I9183ES/i9183es.pdf"

  titulo_l3.innerText  = "OBJETIVO 15: VIDA DE ECOSISTEMAS TERRESTRES";
  autor_l3.innerText  = "Programa de las Naciones Unidas Para el Desarrollo";
  anio_l3.innerText = "2018";
  linkl3.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals/goal-15-life-on-land.html"

  titulo_l4.innerText  = "EL ESTADO DE LOS BOSQUES DEL MUNDO";
  autor_l4.innerText  = "ONU programa para el medio ambiente";
  anio_l4.innerText = "2020";
  linkl4.href ="http://www.fao.org/3/ca8642es/CA8642ES.pdf"

  titulo_l5.innerText  = "EVALUACION DEL SISTEMA DE CLASIFICACION DE TIPOS DE BOSQUE DEL INVENTARIO FORESTAL NACIONAL 2002-2003 ";
  autor_l5.innerText  = "Karen Denisse Aguilar";
  anio_l5.innerText = "2005";
  linkl5.href ="http://biblioteca.usac.edu.gt/tesis/01/01_2164.pdf"

  imagen_l.src="./imagenes/usac.png"
  imagen_l2.src="./imagenes/terra1.png"
  imagen_l3.src="https://desarrollohumano.org.gt/wp-content/uploads/2016/04/15-VidadeEcosistemas.jpg"
  imagen_l4.src="./imagenes/terra2.png"
  imagen_l5.src="./imagenes/usac.png"

 


  mostrarResultados();

  

}
function paz(){

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
  
  titulo_l.innerText  = "LOS ACUERDOS DE PAZ EN GUATEMALA";
  autor_l.innerText  = "Secretar??a de la Paz Presidencia de la Rep??blica";
  anio_l.innerText = "2006";
  linkl.href ="http://www.muniguate.com/images/2011/user01/fuentes_monumentos/manitas_paz/acuerdosdepazenguatemala.pdf"

  titulo_l2.innerText  = "ESTUDIO CR??TICO DEL AVANCE O ESTANCAMIENTO EN EL CUMPLIMIENTO DEL ACUERDO GLOBAL DE DERECHOS HUMANOS EN GUATEMALA ENFOCADO AL DERECHO A LA VIDA";
  autor_l2.innerText  = "William Mazariegos";
  anio_l2.innerText = "2009";
  linkl2.href ="http://biblioteca.usac.edu.gt/tesis/04/04_8089.pdf"

  titulo_l3.innerText  = "OBJETIVO 16: PAZ, JUSTICIA E INSTITUCIONES SOLIDAS";
  autor_l3.innerText  = "Programa de las Naciones Unidas Para el Desarrollo";
  anio_l3.innerText = "2018";
  linkl3.href ="https://www1.undp.org/content/undp/es/home/sustainable-development-goals/goal-16-peace-justice-and-strong-institutions.html"

  titulo_l4.innerText  = "La PAZ COMIENZA POR UNO MISMO";
  autor_l4.innerText  = "Bouch?? Peris, J. Henri";
  anio_l4.innerText = "2003";
  linkl4.href ="https://www.redalyc.org/pdf/706/70600602.pdf"

  titulo_l5.innerText  = "PAZ SOCIAL Y CULTURA DE PAZ";
  autor_l5.innerText  = "Virginia Arango";
  anio_l5.innerText = "2007";
  linkl5.href ="https://www.corteidh.or.cr/tablas/30445.pdf"

  imagen_l.src="./imagenes/paz1.png"
  imagen_l2.src="./imagenes/usac.png"
  imagen_l3.src="https://www1.undp.org/content/dam/undp/sdg/tiles/sdg-es-16.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


  mostrarResultados();

  

}
function alianzas(){

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
  
  titulo_l.innerText  = "LOS ACUERDOS DE PAZ EN GUATEMALA";
  autor_l.innerText  = "Secretar??a de la Paz Presidencia de la Rep??blica";
  anio_l.innerText = "2006";
  linkl.href ="http://www.muniguate.com/images/2011/user01/fuentes_monumentos/manitas_paz/acuerdosdepazenguatemala.pdf"

  titulo_l2.innerText  = "DIAGN??STICO DEL FUNCIONAMIENTO DE LA DIRECCI??N DE COMUNICACI??N DEL MINISTERIO DE RELACIONES EXTERIORES";
  autor_l2.innerText  = "LESBIA MAGALY BOLVITO ARD??N DE POLO";
  anio_l2.innerText = "2015";
  linkl2.href ="http://www.repositorio.usac.edu.gt/600/1/16_1188.pdf"

  titulo_l3.innerText  = "CONFLICTOS ARMADOS Y CONSTRUCCI??N DE PAZ. DE LA TEOR??A A LAS POL??TICAS INTERNACIONALES DE PAZ EN LA POSGUERRA FR??A";
  autor_l3.innerText  = "Oscar Mauricio Casta??o";
  anio_l3.innerText = "2015";
  linkl3.href ="https://www.redalyc.org/pdf/461/46127565004.pdf"

  titulo_l4.innerText  = "PLAN ESTRAT??GICO 2013 - 2015 ACTUALIZADO A ENERO DEL 2013 ";
  autor_l4.innerText  = "Ministerio de Relaciones Exteriores";
  anio_l4.innerText = "2013";
  linkl4.href ="https://www.minex.gob.gt/MDAA/DATA/MDAA/20130326163200728Plan%20Estrategico%20MINEX%202013-2015%20actualizado%20a%20enero%202013.pdf"

  titulo_l5.innerText  = "ALIANZAS PARA EL DESARROLLO DE INFRAESTRUCTURA ECON??MICA";
  autor_l5.innerText  = "ANADIE";
  anio_l5.innerText = "2018";
  linkl5.href ="http://ceur.usac.edu.gt/eventos/Gobernanza-Publica/17-04-Alianzas-para-el-desarrollo-de-infraestructura-economica-Enrique-Godoy.pdf"

  imagen_l.src="./imagenes/paz1.png"
  imagen_l2.src="./imagenes/usac.png"
  imagen_l3.src="./imagenes/ElPdf.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


  mostrarResultados();

  

}
function desnutricion(){

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
  
  titulo_l.innerText  = "DESNUTRICI??N EN GUATEMALA  2009";
  autor_l.innerText  = "Organizacion Panamericana de la Salud";
  anio_l.innerText = "2009";
  linkl.href ="https://www.paho.org/gut/dmdocuments/DESNUTRICION_EN_GUATEMALA-2009.pdf"

  titulo_l2.innerText  = "ANALISIS DE SITUACION, NUTRICIONAL DE GUATEMALA";
  autor_l2.innerText  = "SESAN";
  anio_l2.innerText = "2017";
  linkl2.href ="http://www.sesan.gob.gt/wordpress/wp-content/uploads/2018/05/Situacion-SAN-Guatemala-dia-1.pdf"

  titulo_l3.innerText  = "??QUE ES LA DESNUTRICION?";
  autor_l3.innerText  = "UNICEF";
  anio_l3.innerText = "2020";
  linkl3.href ="https://www.unicef.es/noticia/que-es-la-desnutricion"

  titulo_l4.innerText  = "NI??OS, ALIMENTOS Y NUTRICI??N";
  autor_l4.innerText  = "UNICEF";
  anio_l4.innerText = "2019";
  linkl4.href ="https://www.unicef.org/media/62486/file/Estado-mundial-de-la-infancia-2019.pdf"

  titulo_l5.innerText  = "DESNUTRICI??N INFANTIL EN AMERICALATINA Y EL CARIBE";
  autor_l5.innerText  = "CEPAL";
  anio_l5.innerText = "2006";
  linkl5.href ="http://www.oda-alc.org/documentos/1367000434.pdf"

  imagen_l.src="./imagenes/ElPdf.png"
  imagen_l2.src="./imagenes/nutri1.png"
  imagen_l3.src="https://static.guiaongs.org/wp-content/uploads/2015/09/unicef_destacada.png"
  imagen_l4.src="./imagenes/nutri2.png"
  imagen_l5.src="./imagenes/nutri3.png"

 


  mostrarResultados();

  

}
function tecnologia(){

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
  
  titulo_l.innerText  = "CIENCIA, TECNOLOG??A Y SOCIEDAD EN AM??RICA LATINA: ";
  autor_l.innerText  = "Rosalba Casas, Tania Perez";
  anio_l.innerText = "2019";
  linkl.href ="http://biblioteca.clacso.edu.ar/clacso/gt/20190905052402/Ciencia_tecnologia_sociedad.pdf"

  titulo_l2.innerText  = "INTRODUCCI??N A LA BIOTECNOLOGIA";
  autor_l2.innerText  = "William J. Thieman, Michael A. Palladino";
  anio_l2.innerText = "2010";
  linkl2.href ="http://siar.minam.gob.pe/puno/sites/default/files/archivos/public/docs/copia_de_thiebiot.pdf"

  titulo_l3.innerText  = "LAS TIC, LAS TAC Y LAS TEP: Innovacion educativa en la era conceptual";
  autor_l3.innerText  = "Edimer Latorre, Katherine Castro, Iv??n Potes";
  anio_l3.innerText = "2018";
  linkl3.href ="https://repository.usergioarboleda.edu.co/bitstream/handle/11232/1219/TIC%20TAC%20TEP.pdf?sequence=1"

  titulo_l4.innerText  = "INTRODUCCI??N A LA INGENIERIA";
  autor_l4.innerText  = "Oscar Gonz??lez, Mart??n Villamil";
  anio_l4.innerText = "2015";
  linkl4.href ="https://www.ecoeediciones.com/wp-content/uploads/2015/08/Introduccion-a-la-ingenieria.pdf"

  titulo_l5.innerText  = "DESARROLLO DE APLICACIONES TECNOL??GICAS: un desaf??o interdisciplinario en aulas de ciencias y tecnolog??as b??sicas";
  autor_l5.innerText  = "Alberto, Malva; Frausin, Adriana; Castellaro, Marta";
  anio_l5.innerText = "2013";
  linkl5.href ="http://conaiisi.unsl.edu.ar/2013/213-432-1-DR.pdf"

  imagen_l.src="./imagenes/tecno1.png"
  imagen_l2.src="./imagenes/tecno2.png"
  imagen_l3.src="./imagenes/tecno3.png"
  imagen_l4.src="./imagenes/tecno4.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


  mostrarResultados();

  

}
function dise??o(){

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
  
  titulo_l.innerText  = "LAS LEYES DE LA SIMPLICIDAD";
  autor_l.innerText  = "Jhon Maeda";
  anio_l.innerText = "2006";
  linkl.href ="https://mediostamayo.files.wordpress.com/20123/08/librochic.pdf"

  titulo_l2.innerText  = "GUIA PRACTICA: dise??o industrial";
  autor_l2.innerText  = "Juan Manuel Ubiergo";
  anio_l2.innerText = "2003";
  linkl2.href ="https://www.aragon.es/documents/20127/674325/10_Guia_practica_diseno_industrial_Juan_Manuel_Ubiergo_Castillo_2003.pdf/391990b7-0bce-261e-ea0a-56c97d964dca"

  titulo_l3.innerText  = "EL DISE??ADOR INDUSTRIAL Y LAS PR??CTICAS DE DISE??O";
  autor_l3.innerText  = "Natalia A. Abad";
  anio_l3.innerText = "2011";
  linkl3.href ="https://repository.javeriana.edu.co/bitstream/handle/10554/4150/tesis392.pdf?sequenc"

  titulo_l4.innerText  = "EL DISE??O GR??FICO EN LA CREACI??N DE PERSONAJES PARA LA PUBLICIDAD";
  autor_l4.innerText  = "Irene M??ndez";
  anio_l4.innerText = "2010";
  linkl4.href ="http://biblioteca.usac.edu.gt/tesis/02/02_2567.pdf"

  titulo_l5.innerText  = "DESARROLLO DE APLICACIONES TECNOL??GICAS: un desaf??o interdisciplinario en aulas de ciencias y tecnolog??as b??sicas";
  autor_l5.innerText  = "Alberto, Malva; Frausin, Adriana; Castellaro, Marta";
  anio_l5.innerText = "2013";
  linkl5.href ="http://conaiisi.unsl.edu.ar/2013/213-432-1-DR.pdf"

  imagen_l.src="./imagenes/dise??o1.png"
  imagen_l2.src="./imagenes/dise??o2.png"
  imagen_l3.src="./imagenes/ElPdf.png"
  imagen_l4.src="./imagenes/ElPdf.png"
  imagen_l5.src="./imagenes/ElPdf.png"

 


  mostrarResultados();

  

}
function valores(){

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
  
  titulo_l.innerText  = "INTRODUCCION A LOS VALORES";
  autor_l.innerText  = "Antonio Armosino";
  anio_l.innerText = "2006";
  linkl.href ="http://biblio3.url.edu.gt/Libros/2011/in_val.pdf"

  titulo_l2.innerText  = "FILOSOF??A, VALORES, ??TICA, MORAL E  IDENTIDAD";
  autor_l2.innerText  = "Luis Mart??nez, Hilda Murillo, Diana Mart??nez";
  anio_l2.innerText = "2003";
  linkl2.href ="https://redie.mx/librosyrevistas/libros/eticayvalores.pdf"

  titulo_l3.innerText  = "FORTALECEMOS VALORES, PRINCIPIOS Y VIRTUDES";
  autor_l3.innerText  = "UNEFCO, UNODC, Ministerio de Justicia y Transparencia Institucional";
  anio_l3.innerText = "2020";
  linkl3.href ="https://www.unodc.org/documents/bolivia/Cuaderno_de_Formacion_Continua_1.pdf"

  titulo_l4.innerText  = "Biblia";
  autor_l4.innerText  = "Reina valera 1960";
  anio_l4.innerText = "----";
  linkl4.href ="https://www.biblegateway.com/versions/Reina-Valera-1960-RVR1960-Biblia/#booklist"

  titulo_l5.innerText  = "La moral: ??innata o adquirida?";
  autor_l5.innerText  = "Nelson Molina Ram??rez";
  anio_l5.innerText = "2013";
  linkl5.href ="https://www.redalyc.org/pdf/1892/189228429007.pdf"

  imagen_l.src="./imagenes/valores1.png"
  imagen_l2.src="./imagenes/ElPdf.png"
  imagen_l3.src="./imagenes/ElPdf.png"
  imagen_l4.src="https://img2.freepng.es/20180926/iqg/kisspng-bible-app-community-shatters-records-during-2-12-5bab6946ac3ac2.3390196915379602627055.jpg"
  imagen_l5.src="./imagenes/ElPdf.png"

 


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
var btnabrir = document.getElementById('menuDespegable');
var btncerrar = document.getElementById('cerrar');
var buscador = document.getElementById('buscador').value;

function presion_enter(){
  enter = event.keyCode;
  if(enter == 13){

    var buscador = document.getElementById('buscador').value;
    buscador = buscador.toLowerCase();
  
  
    busquedas = removeAccents(buscador);

  desglosarBusquedas();

  }
}




/*iniciarSecion.onclick = function(e){

  prompt("Introduce tu numero de carnet");
 

}*/
btnabrir.onclick = function(e){
  var autor = "autor: Estuardo Cabrera B-)"
  console.log(autor)
  abrir()
}
btncerrar.onclick = function(e){

  console.log("1 de octubre de 2021")
  cerrar()
}

btnbuscar.onclick = function(e){
  var buscador = document.getElementById('buscador').value;
  buscador = buscador.toLowerCase();


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

     var encotrado = 0;
  
  if(buscSplit[i]=="_cls"){
  encotrado = 1;
    limpiarResultados();
    break

  }else if(longitud == 0){
    encotrado = 1;
    error404();
    break

  } if(buscSplit[i]=="ods"|| buscSplit[i]=="objetivos"|| buscSplit[i]=="oobjetivos"){
    encotrado = 1;
    ODS();
    break
  }else if(buscSplit[i]=="pobreza"|| buscSplit[i]=="desarrollo"|| buscSplit[i]=="sostenible"){
    encotrado = 1;
    pobreza();
    break
    

  }else if(buscSplit[i]=="salud"|| buscSplit[i]=="bienestar"){
    encotrado = 1;
    salud();
    break
    
  }else if(buscSplit[i]=="educacion"|| buscSplit[i]=="alfabetismo"|| buscSplit[i]=="analfabetismo"){
    encotrado = 1;
    educacion();
    break

  }else if(buscSplit[i]=="genero"|| buscSplit[i]=="igualdad"){
    encotrado = 1;
    genero();
    break
    
  }else if(buscSplit[i]=="agua"|| buscSplit[i]=="saniamiento"|| buscSplit[i]=="saneamiento" || buscSplit[i]=="agualimpia"){
    encotrado = 1;
    agua();
    break
    
  }else if(buscSplit[i]=="energia"|| buscSplit[i]=="renovables"|| buscSplit[i]=="energias"|| buscSplit[i]=="energias"){
    encotrado = 1;
    energia();
    break
    
  }else if(buscSplit[i]=="trabajo"|| buscSplit[i]=="desempleo"|| buscSplit[i]=="economico"){
    encotrado = 1;
    trabajo();
    break
    
  }else if(buscSplit[i]=="industria"|| buscSplit[i]=="inovacion"|| buscSplit[i]=="innovacion"|| buscSplit[i]=="industrializacion"){
    encotrado = 1;
    industria();
    break

  }else if(buscSplit[i]=="desigualdad"|| buscSplit[i]=="racismo"){
    encotrado = 1;
    desigualdad();
    break
    
  }else if(buscSplit[i]=="ciudades"|| buscSplit[i]=="comunidades"|| buscSplit[i]=="asentamientos"|| buscSplit[i]=="ciudad"){
    encotrado = 1;
    ciudades();
    break

  }else if(buscSplit[i]=="produccion"|| buscSplit[i]=="consumo"|| buscSplit[i]=="responsable"){
    produccion();
    encotrado = 1;
    break
    
    
  }else if(buscSplit[i]=="accion"|| buscSplit[i]=="clima"|| buscSplit[i]=="calentamiento"|| buscSplit[i]=="contaminacion"|| buscSplit[i]=="climatico"){
    clima();
    encotrado = 1;
    break
    
  }else if(buscSplit[i]=="submarina"|| buscSplit[i]=="acuatica"|| buscSplit[i]=="contaminacion del agua"){
    submarina();
    encotrado = 1;
    break
    
  }else if(buscSplit[i]=="terrestres"||  buscSplit[i]=="ecosistemas"||  buscSplit[i]=="terrestre"){
    terrestres();
    encotrado = 1;
    break
    
  }else if(buscSplit[i]=="paz"|| buscSplit[i]=="justicia"|| buscSplit[i]=="instituciones"){
    paz();
    encotrado = 1;
    break
    
  }else if(buscSplit[i]=="alianzas"){
    alianzas();
    encotrado = 1;
    break
  }else if(buscSplit[i]=="desnutricion" || buscSplit[i]=="desnuticion"){
    desnutricion();
    encotrado = 1;
    break
  }else if(buscSplit[i]=="guatemala"){

    guatemala();
    encotrado = 1;
    break

  }else if(buscSplit[i]=="tecnologia"){

    tecnologia();
    encotrado = 1;
    break

  }else if(buscSplit[i]=="diseno"){

    dise??o();
    encotrado = 1;
    break

  }else if(buscSplit[i]=="valores"){

    valores();
    encotrado = 1;
    break

  }
  }
  if(encotrado == 0){error404();}
  
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
  
}

function error404(){

  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen1 = document.getElementById('imagen_l');

  titulo_l.innerText  = "404: NO ENCONTRADO";
  autor_l.innerText  = "mejora tu ortografia o prueba buscar en google academico";
  anio_l.innerHTML = '<u><br>"Has click aqu??"</u>';
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
function abrir(){

  var categorias = document.getElementById('categorias');
 // categorias.style.height = '100px';
  categorias.style.visibility = 'visible';

  
}
function cerrar(){

  var categorias = document.getElementById('categorias');
 // categorias.style.height = '100px';
  categorias.style.visibility = 'hidden';
  console.log("FELIZ DIA DEL NI??O!")

  
}

window.onkeydown = presion_enter;
