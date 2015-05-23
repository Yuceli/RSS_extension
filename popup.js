function getRss(){
    var resultado = "";
    $.ajax({ 
            url: mypath+"http://brentheftye.mx/rss/index.php",
            type:'GET',
            contentType:false,
            data:data,
            processData:false,
            cache:false,
            async:false,
            success:function(data){
                 if(data != ""){
                    resultado = JSON.parse(data);
                    console.log(resultado);
                }
            }
        });
}


	
