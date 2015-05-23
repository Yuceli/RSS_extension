function getRss(event){
    var resultado = "";
    $.ajax({ 
            url: "http://brentheftye.mx/rss/index.php",
            type:'GET',
            contentType:false,
            processData:false,
            cache:false,
            async:false,
            success:function(data){
                 if(data != ""){
                    resultado = JSON.parse(data);
                }
                console.log(resultado);
                document.getElementById('elemento').innerHTML = resultado;
            }
        });
}

$(document).ready(function($) {
    $('#rss-button').click(getRss);
});