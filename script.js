let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

function limpiarYMostrarMensaje() {

    var nombre = document.getElementById("nombre");
    var numero = document.getElementById("numero");
    var email = document.getElementById("email");
    var tema = document.getElementById("tema");
    var mensaje = document.getElementById("mensaje");
    
    nombre.value = "";
    numero.value = "";
    email.value = "";
    tema.value = "";
    mensaje.value = "";

    alert("Mensaje enviado");
  }
window.onscroll = function(){
    efectoHabilidades();
} 