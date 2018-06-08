
   
    
    var tipprov = document.getElementById("sltipo");
    
    btnguardar = document.getElementById("btn-guardar");
    btnbuscar = document.getElementById("btn-list");
    //funciones
    var aux = new Array();

    var agregarTarea = function(){
       

        var idtipo = document.getElementById("sltipo");
        var tip = idtipo.options[idtipo.selectedIndex].value;
        
        var idprovincia = document.getElementById("slprov");
        var pro = idprovincia.options[idprovincia.selectedIndex].value;

        var idzona = document.getElementById("slzona");
        var zona = idzona.options[idzona.selectedIndex].value;
        
        var precio = document.getElementById("txtprice").value
       
        var tb = document.getElementById("tabla");

        var array = new Array(tip,pro,zona,precio);
        
        var cantarray= aux.length;
        for(var i=0; i< array.length ;i++)
        {
            
            if(cantarray==0)
            {
                aux[i]=array[i];                
                
            }
            else{
                aux[cantarray]=array[i];
                cantarray++;                
               
            }            
        }     
        
        
        
        for(var i=1;i<(cantarray/4);i++)
        {
            if((cantarray/4)==2){
            document.getElementById("tabla").deleteRow(1);
            }

            if((cantarray/4)>=3){
                
            document.getElementById("tabla").deleteRow(1);
            }
        }
        
        var fila = document.createElement("tr");        

        for(var i =0;i<aux.length;i++)
        {
            var columna= document.createElement("td");
            var contenido = document.createTextNode(aux[i]);

            columna.appendChild(contenido);
            fila.appendChild(columna);
            tb.appendChild(fila);
            if((i+1)%4==0)
            {
                var fila = document.createElement("tr");
                
            }
        }      
        
    };

    var mostrarTodo=function(){
        var idtipo = document.getElementById("sltipo");
        var tip = idtipo.options[idtipo.selectedIndex].value;
        
        var idprovincia = document.getElementById("slprov");
        var pro = idprovincia.options[idprovincia.selectedIndex].value;

        var idzona = document.getElementById("slzona");
        var zona = idzona.options[idzona.selectedIndex].value;
        
        var precio = document.getElementById("txtprice").value
       
        var tb = document.getElementById("tabla");

        var array = new Array(tip,pro,zona,precio);
        
        var cantarray= aux.length;
        for(var i=0; i< array.length ;i++)
        {
            
            if(cantarray==0)
            {
                aux[i]=array[i];                
                
            }
            else{
                aux[cantarray]=array[i];
                cantarray++;                
               
            }            
        }     
        
        
        
        for(var i=1;i<(cantarray/4);i++)
        {
            if((cantarray/4)==2){
            document.getElementById("tabla").deleteRow(1);
            }

            if((cantarray/4)>=3){
                
            document.getElementById("tabla").deleteRow(1);
            }
        }
        
        var fila = document.createElement("tr");        

        for(var i =0;i<aux.length;i++)
        {
            var columna= document.createElement("td");
            var contenido = document.createTextNode(aux[i]);

            columna.appendChild(contenido);
            fila.appendChild(columna);
            tb.appendChild(fila);
            if((i+1)%4==0)
            {
                var fila = document.createElement("tr");
                
            }
        }  
        document.getElementById("tabla").deleteRow((aux.length/4));
    };
    

    var buscartarea=function(){       
      
        
       		var tableReg = document.getElementById('tabla');

			var idtipo = document.getElementById('sltipo');
            var tip = idtipo.options[idtipo.selectedIndex].value.toLowerCase();
            
            var idprovincia=document.getElementById('slprov');
            var pro = idprovincia.options[idprovincia.selectedIndex].value.toLowerCase();
            
            var idzona=document.getElementById('slzona');
            var zona = idzona.options[idzona.selectedIndex].value.toLowerCase();
            
            var precio=document.getElementById('txtprice').value.toLowerCase();
                        
			var cellsOfRow="";

			var found=false;

			var compareWith="";

            

			// Recorremos todas las filas con contenido de la tabla

			for (var i = 1; i < tableReg.rows.length; i++)

			{

				cellsOfRow = tableReg.rows[i].getElementsByTagName('td');

				found = false;

				// Recorremos todas las celdas

				for (var j = 0; j < cellsOfRow.length && !found; j++)

				{

					compareWith = cellsOfRow[j].innerHTML.toLowerCase();

					// Buscamos el texto en el contenido de la celda

					if (tip.length == 0 || (compareWith.indexOf(tip) > -1) || pro.length == 0 || (compareWith.indexOf(pro) > -1)|| zona.length == 0 || (compareWith.indexOf(zona) > -1)|| precio.length == 0 || (compareWith.indexOf(precio) > -1))

					{

						found = true;

					}

				}

				if(found)

				{

					tableReg.rows[i].style.display = '';

				} else {

					// si no ha encontrado ninguna coincidencia, esconde la

					// fila de la tabla

					tableReg.rows[i].style.display = 'none';

				}

			}
    };
    //eventos        
    
    
   


