function restablecer(){
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('fecha').value = "";
    document.getElementById('sexo').value = "elegir";
    document.getElementById('valoracion').value === "elegir"
    document.getElementById('email').value = "";
    document.getElementById('comentario').value = "";
}

function cancelar() {
    var r = confirm("Desea volver a la página anterior?");
    if (r == true) {
        window.location.href = "index3.html";
    
  }
}


function encuesta(){
    if (validacion() == true){    
        alert("Nombre: "+document.getElementById('nombre').value +"\n"+
        "Apellido: "+document.getElementById('apellido').value +"\n"+
        "Fecha de nacimiento: "+ document.getElementById('fecha').value +"\n"+
        "Sexo: "+document.getElementById('sexo').value +"\n"+
        "Valoración: "+document.getElementById('valoracion').value +"\n"+
        "Email: "+document.getElementById('email').value +"\n"+
        "Comentario: "+document.getElementById('comentario').value)
        }
    
}


function validacion() {
    if (document.getElementById('nombre').value === "") {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo nombre debe tener un valor');
      return false;
    }

    else if (document.getElementById('apellido').value === "") {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo apellido debe tener un valor');
      return false;
    }

    else if (document.getElementById('fecha').value === "") {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo fecha debe tener un valor');
      return false;
    }

    else if (document.getElementById('sexo').value === "elegir") {
        // Si no se cumple la condicion...     
        alert('[ERROR] El campo sexo debe tener un valor');
        return false;
      }
     
      else if (document.getElementById('valoracion').value === "elegir") {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo valoracion debe tener un valor');
        return false;
      }

      else if (document.getElementById('email').value === "") {
        // Si no se cumple la condicion...
        alert('[ERROR] El campo email debe tener un valor');
        return false;
      }
  
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
  }

