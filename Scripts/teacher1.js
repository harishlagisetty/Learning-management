function Tmenu(){
    $("#menu1id").html(' <div class=\"Menutech\" id=\"TechId\" style=\"display:block\"><a href=\"#\" id=\"createID\" onclick=\"form()\">Create Teacher</a>');
    $("#menu3id").html('');
	$("#myDIV").css("display", 'none');
	$("#mytext").css("display", 'none');
	$("#table1").css("display", 'none');
	$("#table2").css("display", 'none');
	$("#table3").css("display", 'none');
	$("#button").css("display", 'none');
	$("#menu2id").css("display", 'none');
    $("#menu3id").css("width",'95.9%');
    $("#menu3id").css("padding-right",22);
}
function form(){
	$("#menu2id").css("display", 'none');
    $("#menu3id").css("width",'95.9%');
    $("#menu3id").css("padding-right",22);
    $("#teachername").trigger("reset");
    //document.getElementById("formId").reset();
    $("#menu3id").html(' <div id=\"formId\" style=\display:none\"> <table style=\"margin-left:auto; margin-right:auto;\"> <tr><td><label style=\"font-size:20px\"> Teacher Name<span class=\"required\">*</span></label></td><td><input type=\"text\" id=\"teachername\" name=\fname\" maxlength=\"50\" onfocusout=\"Tval()\"/></td></tr> <tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"teid\"></label></td></tr> <tr><td><label style=\"font-size:20px\">Class<span class=\"required\">*</span></label></td><td>  <input type=\"number\" min=\"1\" max=\"12\" style=\"width:162px\" id=\"cls\" name=\"cls\" onfocusout=\"Cval()\" /></td></tr>  <tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"clid\"></label></td></tr><tr><td><label style=\"font-size:20px\">Subject</label> </td><td><input type=\"text\" id=\"sub\" name=\"sub\" maxlength=\"20\" /></td></tr> <tr><td><label style=\"font-size:20px\">Phone number </label></td><td><input type=\"tel\" id=\"phn\" name=\"phn\" maxlength=\"10\" onfocusout=\"Pval()\" /></td></tr><tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"phid\"></label></td></tr> <tr><td><label style=\"font-size:20px\"> Gender </label></td><td><select  id=\"gen\" name=\"gen\" style=\"width:170px;" ><option value=\"Male\">Male</option><option value=\"Female\">Female</option></select></td></tr><tr><td></td> <td><label style=\"font-size:15px\" color =\"red\" id=\"geid\"></label></td></tr><tr><td colspan=\"2\"><input type=\"submit\" id=\"submitid\" name=\"gen\" class=\"Setbut\" onclick=\"CreateSubmit()\" /></td></tr></table>');
}
var teacherName = "";
var classval = "";
var subject = "";
var phonenumber = "";
var Gender = "";
function CreateSubmit() {
    teacherName = document.getElementById('teachername').value;
    classval = document.getElementById('cls').value;
    subject = document.getElementById('sub').value;
    phonenumber = document.getElementById('phn').value;
    Gender = document.getElementById('gen').value;

    //var submitid = document.getElementById('submitid');


    //$("#submitid").css({"display":'block'});
    if (teacherName != "" && classval != "" ){     
    document.getElementById("teachername").readOnly = true;
    document.getElementById("cls").readOnly = true;
    document.getElementById("sub").readOnly = true;
    document.getElementById("phn").readOnly = true;
    document.getElementById("gen").readOnly = true;
    }
    printteacher();
    }
    function Tval(){
        teacherName = document.getElementById('teachername').value;
        if (teacherName == "" ) {
            teid.textContent = "Teacher name is mandatory";
            teid.style.color = "red";
           // document.getElementById("teachername").focus();
        }
        else if(!isNaN(teacherName)){
            teid.textContent = "Enter Alphabets only";
            teid.style.color = "red";
        }
        else{
            teid.textContent = "";
        }
    }
    function Cval(){
        classval = document.getElementById('cls').value;
        if (classval == "") {
            clid.textContent = "class is mandatory ";
            clid.style.color = "red";
            //document.getElementById("cls").focus();
        }
        else{
            clid.textContent = "";
        }
    }
    function Pval(){
        phonenumber = document.getElementById('phn').value;
        if ((isNaN(phonenumber))) {
            phid.textContent = "enter numbers only ";
            phid.style.color = "red";
            //document.getElementById("phn").focus();
        }
        else{
            phid.textContent = "";
        }
    }
function printteacher() {
    if (teacherName != "" && classval != ""){
	$("#teacherval").text(teacherName);
	$("#classval").text(classval);
	$("#subjectval").text(subject);
	$("#phoneval").text(phonenumber);
	$("#generval").text(Gender);
    // var specialElementHandler = {
    //     "editor": function (element, renderer) {
    //         return true;
    //     }
    // };

    //var doc = new jsPDF('p', 'mm', [800, 900]);
    var doc = new jsPDF('p', 'mm', [800, 900]);
    doc.fromHTML($("#divprint").html(), 30, 30, {
        "width": 170
        //, "elementHandlers": specialElementHandler
    });
    doc.save(teacherName +  ".pdf");
    }

}