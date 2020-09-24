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
        "Fecha de nacimiento: "+ convertDate(document.getElementById('fecha').value) +"\n"+
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

    else if (document.getElementById('fecha').value === "" ) {
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

      else if (validateEmail(document.getElementById('email').value) != true ) {
        // Si no se cumple la condicion...
        alert('[ERROR] Ingresar correctamente el email');
        return false;
      }
  
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
  }


//Validacion solo letras en campos Nombre y Apellido

function soloText(string) {//solo letras 
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';//Caracteres validos

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);
    return out;
}



// FECHA EN FORMATO DD-MM-YYYY

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
}


//validacion email

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }




function consumirJson(){


  $.ajax({
    url: 'http://www.json-generator.com/api/json/get/bVSuwvWvTm?indent=2',
    success: function(respuesta) {


      for (var variable in respuesta) {		



        if (respuesta[variable].id === 1){

          document.getElementById('categoriaMenu1').innerHTML=  "<li id='categoriaMenu1'><a href='pasteles.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria1').innerHTML= "<div id='categoria1' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion1').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 2){

          document.getElementById('categoriaMenu1').innerHTML=  "<li id='categoriaMenu1'><a href='pasteles.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria1').innerHTML= "<div id='categoria1' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion2').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 3){

          document.getElementById('categoriaMenu1').innerHTML=  "<li id='categoriaMenu1'><a href='pasteles.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria1').innerHTML= "<div id='categoria1' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion3').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 4){

          document.getElementById('categoriaMenu2').innerHTML=  "<li id='categoriaMenu2'><a href='tartas.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria2').innerHTML= "<div id='categoria2' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion4').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 5){

          document.getElementById('categoriaMenu2').innerHTML=  "<li id='categoriaMenu2'><a href='tartas.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria2').innerHTML= "<div id='categoria2' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion5').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 6){

          document.getElementById('categoriaMenu2').innerHTML=  "<li id='categoriaMenu2'><a href='tartas.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria2').innerHTML= "<div id='categoria2' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion6').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 7){

          document.getElementById('categoriaMenu3').innerHTML=  "<li id='categoriaMenu3'><a href='cupcakes.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria3').innerHTML= "<div id='categoria3' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion7').innerHTML = respuesta[variable].descripcion;
          
        }

        if (respuesta[variable].id === 8){

          document.getElementById('categoriaMenu3').innerHTML=  "<li id='categoriaMenu3'><a href='cupcakes.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria3').innerHTML= "<div id='categoria3' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion8').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 9){

          document.getElementById('categoriaMenu3').innerHTML=  "<li id='categoriaMenu3'><a href='cupcakes.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria3').innerHTML= "<div id='categoria3' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion9').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 10){

          document.getElementById('categoriaMenu4').innerHTML=  "<li id='categoriaMenu4'><a href='postres.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria4').innerHTML= "<div id='categoria4' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion10').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 11){

          document.getElementById('categoriaMenu4').innerHTML=  "<li id='categoriaMenu4'><a href='postres.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria4').innerHTML= "<div id='categoria4' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion11').innerHTML = respuesta[variable].descripcion;

        }

        if (respuesta[variable].id === 12){

          document.getElementById('categoriaMenu4').innerHTML=  "<li id='categoriaMenu4'><a href='postres.html'>"+respuesta[variable].categoria +"</a></li>"
          document.getElementById('categoria4').innerHTML= "<div id='categoria4' class='titulo'><h2>"+respuesta[variable].categoria +"</h2></div>"
          document.getElementById('descripcion12').innerHTML = respuesta[variable].descripcion;

        }


        
						  
  
        

  }

    },
    error: function() {
          console.log("No se ha podido obtener la información");
      }
  });  
    
    /*
    
    
    type: "GET",
				url: "http://www.json-generator.com/api/json/get/bVlyIDJSmq?indent=2",
				dataType: "text",
				data:mensaje,
				contentType: "application/json",
				cache: false,
				success: function(data) {			

          alert(data);
          
					let datosMensaje = JSON.parse(data);	
                
          alert(datosMensaje);
			
					  for (var variable in datosMensaje) {		
						  
              alert(variable);
						  
						 
						
				}
    }
    
  });
*/
