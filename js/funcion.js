function nombre(){
    var resultado1= document.getElementById("nom-1").value;
    var resultado2= document.getElementById("nom-2").value;
    var resultado3= document.getElementById("nom-3").value;
    var resultado4= document.getElementById("nom-4").value;
if (resultado1== ""){
    alert("Debes digitar tu nombre");
    document.getElementById("nom-1").focus();
}
if (resultado2== ""){
        alert("Debes digitar tu correo");
        document.getElementById("nom-2").focus();
}if (resultado3== ""){
    alert("Debes digitar tu institucion");
    document.getElementById("nom-3").focus();
}if (resultado4== ""){
    alert("Debes digitar tu celular");
    document.getElementById("nom-4").focus();
}else{
    console.log(resultado1+", " +resultado2+", "+ resultado3+" ,"+resultado4+", ");
    document.getElementById("nom-1").value="";
    document.getElementById("nom-2").value="";
    document.getElementById("nom-3").value="";
    document.getElementById("nom-4").value="";
    }

}