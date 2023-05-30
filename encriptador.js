let textoSinEncriptar = document.querySelector("#ingreseTexto");
let botonEncriptar = document.querySelector("#botonEncriptar");
let botonDesencriptar = document.querySelector("#botonDesencriptar");

    function detectarMinuscula(){

        const regexMinusculas = /^[a-z\s\n]*$/;

        if (regexMinusculas.test(textoSinEncriptar.value)){

            document.getElementById("mensajeError").style.display = "none";
            botonEncriptar.disabled = false;
            botonDesencriptar.disabled = false;

        } else {

            document.getElementById("mensajeError").style.display = "block";
            botonEncriptar.disabled = true;
            botonDesencriptar.disabled = true;

        }

    }

    function encriptar () {

        let textoCorregido = textoSinEncriptar.value
            .replaceAll(/e/g, "enter")
            .replaceAll(/i/g, "imes")
            .replaceAll(/a/g, "ai")
            .replaceAll(/o/g, "ober")
            .replaceAll(/u/g, "ufat");

        let parrafo = document.getElementById("parrafo-cambiante");
        parrafo.textContent = textoCorregido;

        ocultarElementos();

    }

    function desencriptar () {

        let textoCorregido = textoSinEncriptar.value
            .replaceAll(/enter/g, "e")
            .replaceAll(/imes/g, "i")
            .replaceAll(/ai/g, "a")
            .replaceAll(/ober/g, "o")
            .replaceAll(/ufat/g, "u");

        let parrafo = document.getElementById("parrafo-cambiante");
        parrafo.textContent = textoCorregido;

        ocultarElementos();

    }

    function copiarTexto() {

        let textoCopiado = document.getElementById("parrafo-cambiante").value;
        navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            let cambioBoton = document.getElementById("botonCopiar");
            cambioBoton.innerText = "¡Copiado!";
        setTimeout(() => {
              cambioBoton.innerText = "Copiar";
            }, 1000);
        })
        .catch((error) => {
            console.error("Error al copiar al portapapeles:", error);
        });
    }
           
    function ocultarElementos(){

        const regexBlanco = /^\s*$/;
        let muestraParrafo = document.getElementById("parrafo-cambiante");
        let ocultarImagen = document.getElementById("imagen-munieco");
        let ocultarH2 = document.getElementById("titulo-mensaje");
        let ocultarParrafo = document.getElementById("parrafo");
        let botonCopiar = document.getElementById("botonCopiar");

        if(!regexBlanco.test(muestraParrafo.value)){

            ocultarImagen.style.visibility = "hidden";
            ocultarH2.style.visibility = "hidden";
            ocultarParrafo.style.visibility = "hidden";
            botonCopiar.style.visibility = "visible";

        }
        
    }

    function reloadPage() {
        location.reload();
    }
     
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);






  
  

  


  

  
  













































  
    
  
  
  
  