
   
    
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
        
        alert(cantarray/4);
        
        for(var i=1;i<(cantarray/4);i++)
        {
            if((cantarray/4)==2){
            document.getElementById("tabla").deleteRow(1);
            }

            if((cantarray/4)>=3){
                alert(i);
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
       // document.getElementById("tabla").deleteRow(1);
        /*var fila = document.createElement("tr");
        var columnatipo= document.createElement("td");
        var columnapro= document.createElement("td");
        var columnazona= document.createElement("td");
        var columnaprice= document.createElement("td");


        var contenidotipo = document.createTextNode(tip);
        var contenidoprov = document.createTextNode(pro);
        var contenidozona = document.createTextNode(zona);
        var contenidoprice = document.createTextNode(precio+"$");
        //agregamos una columna
        columnatipo.appendChild(contenidotipo);
        columnapro.appendChild(contenidoprov);
        columnazona.appendChild(contenidozona);
        columnaprice.appendChild(contenidoprice);
        //agregamos la columna a una fila
        fila.appendChild(columnatipo);
        fila.appendChild(columnapro);
        fila.appendChild(columnazona);
        fila.appendChild(columnaprice);
        

        //agregamos la fila a la tabla        
        tb.appendChild(fila);  */     
        
    };

    

    var buscartarea=function(){        
        var idtipo = document.getElementById("sltipo");
        var tip = idtipo.options[idtipo.selectedIndex].value;
        
        var idprovincia = document.getElementById("slprov");
        var pro = idprovincia.options[idprovincia.selectedIndex].value;

        var idzona = document.getElementById("slzona");
        var zona = idzona.options[idzona.selectedIndex].value;
        
        var precio = document.getElementById("txtprice").value
       
        var tb = document.getElementById("tabla");        

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
    //eventos        
    
    
   


