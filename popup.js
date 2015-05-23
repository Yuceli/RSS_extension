function getRss(event){
    /*var resultado = "";
    $.ajax({ 
            url: "http://brentheftye.mx/rss/index.php",
            type:'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success:function(data){
                 if(data != ""){
                    resultado = JSON.parse(data);
                    console.log(resultado);
                    document.getElementById('elemento').innerHTML = resultado;
                }
            }
        });
    */
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("elemento").innerHTML= JSON.parse(xmlhttp.responseText);
        }
      }
    xmlhttp.open("GET","http://brentheftye.mx/rss/index.php",true);
    xmlhttp.send();
}

$(document).ready(function($) {
    $('#rss-button').click(getRss);
});