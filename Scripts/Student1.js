
function studentMenu1(evt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    //for (i = 0; i < tabcontent.length; i++) {
    //    tabcontent[i].style.display = "none";
    //}
    //tablinks = document.getElementsByClassName("tablinks");
    //for (i = 0; i < tablinks.length; i++) {
    //    tablinks[i].className = tablinks[i].className.replace(" active", "");
    //}
    //document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    //alert("Hi");
	//this line is for top menu(ALPHABETS, COLORS, SYMBOLS, TABLES).
    $("#menu1id").html('<div class=\"Menustu\" id=\"myDIV\" style=\"display:block\"> <a href=\"#\" id=\"alphabetMenuID\" onclick=\"alphabetMenu()\">Alphabets</a><a href=\"#\" id=\"ColorsID\" style=\"display:block\" onclick=\"Color()\">Colors</a><a href=\"#\" id=\"symbolsID\" onclick=\"LoadSymbolsMenu()\">Symbols</a><a href=\"#\" id=\"tableID\" onclick=\"printTable()\">Tables</a>');
	//it is to hide the "menu2" section in the layout
	//$("#menu2id").css("display", 'none');
	////it is to make width of "menu3" section to the value which we required.
 //   $("#menu3id").css("width",'95.9%');
	////it is also for "menu3" section to display properly making right padding to value 22.
 //   $("#menu3id").css("padding-right",22);
	////it is not to display anything in "menu3" section and to replace the previous stff with blank if any.
 //   $("#menu3id").html('');
}
function studentMenu() {
    $("#menu1id").html('<div class=\"Menustu\" id=\"myDIV\" style=\"display:block\"> <a href=\"#\" id=\"alphabetMenuID\" onclick=\"alphabetMenu()\">Alphabets</a><a href=\"#\" id=\"ColorsID\" style=\"display:block\" onclick=\"Color()\">Colors</a><a href=\"#\" id=\"symbolsID\" onclick=\"LoadSymbolsMenu()\">Symbols</a><a href=\"#\" id=\"tableID\" onclick=\"printTable()\">Tables</a>');
	$("#TechId").css("display", 'none');
	$("#menu2id").css("display", 'none');
    $("#menu3id").css("width",'95.9%');
    $("#menu3id").css("padding-right",22);
    $("#formId").css("display", 'none');
    $("#menu3id").html('');
}
function LoadSymbolsMenu() {
    var cars = ["Triangle", "Rectangle", "circle", "Line", "Polygon", "Rhombus"];
    $("#menu2id").css("display", 'block');  //menu2.style.display = "block";
    $("#menu3id").css("width",'79.9%');  //menu3.style.width = "79.9%";
    $("#menu3id").css("padding-right",22);  //menu3.style.paddingLeft = "22px";
    $("#ColorId").css("display", 'none');  //colrid.style.display = "none";
    $("#Image").css("display", 'none');  //image.style.display = "none";
    $("#ColorsID").css("background-color", 'white');
    $("#symbolsID").css("color", 'orange');
    $("#tableID").css("color", 'black');
    $("#menu3id").html('');
      var menuTemp = "";
      for (var i = 0; i < cars.length; i++) {
          menuTemp += '<a href=\"#\"  onclick=\"ShowSymbol(' + i + ')\">' + cars[i] + '</a>';
      }
     $("#menu2id").html( '<div class=\"vertical-menu-Inner\">' + menuTemp + '</div>');;
  }
  function ShowSymbol(s) {
    var cars = ["Triangle", "Rectangle", "circle", "Line", "Polygon", "Rhombus"];
    //var menu3 = document.getElementById('menu3id');
   $("#menu3id").html('<img id=\"Image\" alt=\"no image found in path\" src=\"Images/' + cars[s] + '.png"/>');
}