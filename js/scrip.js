//Menu Hamburguesa
function llamar(){
    var botonera=document.querySelector('.botonera');
        botonera.classList.toggle('click');
    var btnmenu=document.querySelector('.btn-menu');
        btnmenu.querySelector('.btn-menu .close').classList;
    }
        //Header cambio hacia abajo
        window.addEventListener('scroll', Scroll);
        function Scroll(){
            var header=document.getElementById('header');
            var ypos=window.pageYOffset;
            if (ypos>300){
                header.style.background="#091350";
                header.style.height="60px";
                header.style.transition="0.5s";
            }
            else{
                header.style.background="none";
                header.style.height="70px";
                header.style.transition="0.5s";
            }
        }
    //Preloader con Javascript
    var preloader=document.getElementById('preloader');
    setTimeout(function(){
        preloader.style.transition="0.76s";
        preloader.style.visibility="hidden";
        
    },1000);
    //Script de Preloader
    /*var contenido=document.getElementById('contenido');
    setTimeout(function(){
        contenido.classList.add('cerrar');
        document.body.style.overflowY="visible";
    },9000);*/