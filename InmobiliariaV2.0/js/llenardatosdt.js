
    var lista = document.getElementById("sltipo");
    
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
        
        var idzona = document.getElementById("txtprice").value
       
        var array = new Array(tip,pro,zona,idzona);

        var tb = document.getElementById("tabla");
        
        
        var cantarray= aux.length;
        for(var i=0; i< array.length ;i++)
        {
            alert(cantarray);
            if(cantarray==0)
            {
                aux[i]=array[i];                
                
            }
            else{
                aux[cantarray]=array[i];
                cantarray++;                
               
            }            
        }
        
        aux
    };
    var buscartarea=function(){        
        alert(lista);
    };
    //eventos        
    
    
   


