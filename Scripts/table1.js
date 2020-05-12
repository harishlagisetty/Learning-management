function printTable(){
    $("#menu2id").html(' <p id=\"table1\" style=\"display:block\" onmouseover=\"formTable(1)\">Table1</p> <p id=\"table2\" style=\"display:block\" onmouseover=\"formTable(2)\">Table2</p><p id=\"table3\" style=\"display:block\" onmouseover=\"formTable(3)\">Table3</p> <p><input type=\"text\" size=\"6\" id=\"mytext\" class=\"marleft\" style=\"display: block\" onfocusout=\"result()\"></p>');
  $("#menu2id").css("display", 'block'); 
  $("#menu3id").css("width",'79.9%');  
  $("#menu3id").css("padding-right",22);  
  $("#ColorId").css("display", 'none');  
  $("#Image").css("display", 'none'); 
  $("#ColorsID").css("background-color", 'white');
  $("#symbolsID").css("color", 'black');
  $("#tableID").css("color", 'orange');
  $("#menu3id").html('');	
}

function result(){
    var num = Number(document.getElementById('mytext').value);
    formTable(num);
}
function formTable(num) {
    var T = document.getElementById('menu3id');
    T.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        T.innerHTML += num + "*" + i + "=" + num * i + "<br/>"
    }
}
