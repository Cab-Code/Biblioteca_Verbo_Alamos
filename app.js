
// Estuardo Cabrera

function guatemala(){

  var titulo_l1 = "";
  var autor_l1 = "";
  var anio_l1 = "";
  var link_l1 = "";
  var imagen_l1 = "";

  var titulo_l2 = "";
  var autor_l2 = "";
  var anio_l2 = "";
  var link_l2 = "";
  var imagen_l2 = "";

  var titulo_l3 = "K'atun: Nuestra Guatemala 2032";
  var autor_l3 = "MINEDUC, DIGECADE, UNESCO";
  var anio_l3 = "2019";
  var link_l3 = "https://www.google.com/search?q=organizacion+de+las+naciones+unidas+para+la+educacion+ciencia+y+cultura&oq=Organizacion+de+las+na&aqs=chrome.2.69i57j46i512j0i512j46i199i465i512j0i512l5.6665j0j7&sourceid=chrome&ie=UTF-8";
  var imagen_l3 = "./image.png";

  var titulo_l4 = "";
  var autor_l4 = "";
  var anio_l4 = "";
  var link_l4 = "";
  var imagen_l4 = "";


  var titulo_l5 = "";
  var autor_l5 = "";
  var anio_l5 = "";
  var link_l5 = "";
  var imagen_l5 = "";

  var extra = null;

  asignarResultados(titulo_l1,autor_l1,anio_l1,link_l1,imagen_l1,titulo_l2,autor_l2,anio_l2,link_l2,imagen_l2,titulo_l3,autor_l3,anio_l3,link_l3,imagen_l3,titulo_l4,autor_l4,anio_l4,link_l4,imagen_l4,titulo_l5,autor_l5,anio_l5,link_l5,imagen_l5)

}


var iniciarSecion = document.getElementById('IniciarSesion');
var buscar = document.getElementById('buscar');

var libro1 = document.getElementById('resultado1');
var libro2 = document.getElementById('resultado2');
var libro3 = document.getElementById('resultado3');
var libro4 = document.getElementById('resultado4');
var btnbuscar = document.getElementById('buscar');
var buscador = document.getElementById('buscador').value;

iniciarSecion.onclick = function(e){

  prompt("Introduce tu numero de carnet");
 

}
btnbuscar.onclick = function(e){

  var buscador = document.getElementById('buscador').value;
  busqueda = buscador.toLowerCase();
  desglosarBusquedas()


}


function desglosarBusquedas(){

buscSplit = busqueda.split(' ',12);
console.log(buscSplit);

var longitud = buscSplit.length
console.log(longitud)
buscarResultados(longitud,buscSplit)

}

function buscarResultados(longitud,buscSplit){

  
 
   
   
   for(var i = 0;i <= longitud; i++){
  console.log(i)

  
  if(buscSplit[i]=="guatemala"){

    guatemala();
    break

  }else if(buscSplit[i]=="ods"|| buscSplit[i]=="objetivos"){

    guatemala();
  }else if(buscSplit[i]=="pobreza"|| buscSplit[i]=="desarrollo"|| buscSplit[i]=="sostenible"){

    guatemala();
    break
    

  }else if(buscSplit[i]=="salud "|| buscSplit[i]=="bienestar"){

    
  }else if(buscSplit[i]=="educacion"|| buscSplit[i]=="alfabetismo"|| buscSplit[i]=="analfabetismo"){

    
  }else if(buscSplit[i]=="genero"|| buscSplit[i]=="igualdad"){
    
    
  }else if(buscSplit[i]=="agua"|| buscSplit[i]=="saniamiento"|| buscSplit[i]=="saneamiento"){
    
    
  }else if(buscSplit[i]=="energia"|| buscSplit[i]=="renovables"){
    
    
  }else if(buscSplit[i]=="trabajo"|| buscSplit[i]=="desempleo"|| buscSplit[i]=="economico"){
    
    
  }else if(buscSplit[i]=="industria"|| buscSplit[i]=="inovacion"|| buscSplit[i]=="innovacion"){
    
    guatemala();

  }else if(buscSplit[i]=="desigualdad"|| buscSplit[i]=="racismo"){
    
    
  }else if(buscSplit[i]=="ciudades"|| buscSplit[i]=="comunidades"){
    
    
  }else if(buscSplit[i]=="produccion"|| buscSplit[i]=="consumo"|| buscSplit[i]=="responsable"){
    
    
  }else if(buscSplit[i]=="accion"|| buscSplit[i]=="clima"|| buscSplit[i]=="calentamiento"|| buscSplit[i]=="contaminacion"){
    
    
  }else if(buscSplit[i]=="submarina"|| buscSplit[i]=="acuatica"){
    
    
  }else if(buscSplit[i]=="terrestres"||  buscSplit[i]=="ecosistemas"){
    
    
  }else if(buscSplit[i]=="paz"|| buscSplit[i]=="justicia"|| buscSplit[i]=="instituciones"){
    
    
  }else if(buscSplit[i]=="alianzas"){
    guatemala();
    
  }else if(buscSplit[i]=="tecnologia"){
    guatemala();
    
  }else {}
  }
}


function asignarResultados(t1,a1,no1,l1,i1,t2,a2,no2,l2,i2,t3,a3,no3,l3,i3,t4,a4,no4,l4,i4,t5,a5,no5,l5,i5){
 
  
  var titulo_l = document.getElementById("titulo_l");
  var autor_l = document.getElementById('autor_l');
  var anio_l = document.getElementById('anio_l');
  var linkl = document.getElementById('linkl');
  var imagen_l = document.getElementById('imagen_l');


  titulo_l.innerText  = t1;
  autor_l.innerText  = a1;
  anio_l.innerText = no1;
  linkl.href ="https://www.youtube.com/watch?v=E8DoBdUUSNo"

  alert(no3)
  //libro3.innerHTML =

  



  mostrarResultados();


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
}

