//esta funcion permite que las opcciones se escondan al momento de utiliza algun movil 
function esconder(){
    let siteNav =document.getElementById('site-nav')
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle')
        menuOpen.classList.toggle('menu-open');
}
//pagina de registro
//funcion para validar los campos

function registro(){
    var nombre, apellido, correo, clave, exprecion;
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    correo = document.getElementById("Correo").value;
    clave = document.getElementById("Clave").value;
    //verificar el correo si esta bien estructurado
    exprecion = /\w+@\w+\.+[a-z]/;
 
    if(nombre =="" || apellido =="" || correo == "" || Clave ==""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>15){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellido.length>30){
        alert("Los apellidos son muy largos");
        return false;
    }
    else if(correo.length>15){
        alert("El correo es muy largo");
        return false;
    }
    else if(!exprecion.test(correo)){
        alert("El correo no es válido");
        return false;
    }
 
 }

 // Accerder como usuario
 //validacion de los campos

 function ingresar(){
    var  correoAcces, claveAcces,exprecion;
    
    correoAcces = document.getElementById("correoAcces").value;
    claveAcces = document.getElementById("claveAcces").value;
    //verificar el correo si esta bien estructurado
    exprecion = /\w+@\w+\.+[a-z]/;
    
 
    if( correoAcces == "" || claveAcces ==""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(correoAcces.length>15){
        alert("El correo es muy largo");
        return false;
    }
    else if(!exprecion.test(correoAcces)){
        alert("El correo  no es válido");
        return false;
    }
 
 }
 function Aprobar(){
    var btn_1,btn_2,btn_3,btn_4;
    btn_1 = document.getElementById('btn-1');
    btn_2 = document.getElementById('btn-2');
    btn_3 = document.getElementById('btn-3');
    btn_4 = document.getElementById('btn-4');
            
            
    btn_1.style.display = 'none';
    btn_2.style.display = 'inline';
    btn_3.style.display = 'none';
    btn_4.style.display = 'none';


 }
 