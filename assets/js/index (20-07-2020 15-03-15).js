var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var setCampos = function(){
	var htmlTabla = "";

	var customdata1 = getUrlParameter("customdata1").split('--');
	var customdata2 = getUrlParameter("customdata2").split('--');
	var customdata3 = getUrlParameter("customdata3").split('--');
	var telefonocontesto = getUrlParameter("telefonocontesto");

	console.log(customdata1);
	console.log(customdata2);
	console.log(customdata3);

	// Validacion
	var cliente = customdata1[0];
	var nombrecompleto = customdata1[1];
	var sexo = customdata1[2];
	var edocivil = customdata1[3];
	var fechaalta = customdata1[4];
	var grupotrabajo = customdata1[5];

	// Total cuentas
	var totalsaldacon = customdata1[6];
	var totalminimo = customdata1[7];
	var totalvencido = customdata1[8];
	var totalabonosvencidos = customdata1[9];

	//Cuenta 1
	var producto_cuenta1 = customdata2[0];
	var saldacon_cuenta1 = customdata2[1];
	var minimo_cuenta1 = customdata2[2];
	var vencido_cuenta1 = customdata2[3];
	var abonosvencidos_cuenta1 = customdata2[4];

	//Cuenta 2
	var producto_cuenta2 = customdata2[5];
	var saldacon_cuenta2 = customdata2[6];
	var minimo_cuenta2 = customdata2[7];
	var vencido_cuenta2 = customdata2[8];
	var abonosvencidos_cuenta2 = customdata2[9];

	//Cuenta 3
	var producto_cuenta3 = customdata3[0];
	var saldacon_cuenta3 = customdata3[1];
	var minimo_cuenta3 = customdata3[2];
	var vencido_cuenta3 = customdata3[3];
	var abonosvencidos_cuenta3 = customdata3[4];

	//Cuenta 4
	var producto_cuenta4 = customdata3[5];
	var saldacon_cuenta4 = customdata3[6];
	var minimo_cuenta4 = customdata3[7];
	var vencido_cuenta4 = customdata3[8];
	var abonosvencidos_cuenta4 = customdata3[9];

	// Validacion
	$("#cliente").val(cliente);
	$("#nombre").val(nombrecompleto);
	$("#telefono").val(telefonocontesto);
	$("#edo_civil").val(edocivil);
	$("#sexo").val(sexo);
	$("#fecha_alta").val(fechaalta);

	if(producto_cuenta1 === undefined || producto_cuenta1 === null)
	{
		// Nada
	}
	else
	{
		htmlTabla += "<tr><td>" + producto_cuenta1 + "</td>"; 
		htmlTabla += "<td>$" + saldacon_cuenta1 + "</td>"; 
		htmlTabla += "<td>$" + minimo_cuenta1 + "</td>"; 
		htmlTabla += "<td>$" + vencido_cuenta1 + "</td>"; 
		htmlTabla += "<td>" + abonosvencidos_cuenta1 + "</td></tr>"; 

	}

	if(producto_cuenta2 === undefined || producto_cuenta2 === null)
	{
		// Nada
	}
	else
	{
		htmlTabla += "<tr><td>" + producto_cuenta2 + "</td>"; 
		htmlTabla += "<td>$" + saldacon_cuenta2 + "</td>"; 
		htmlTabla += "<td>$" + minimo_cuenta2 + "</td>"; 
		htmlTabla += "<td>$" + vencido_cuenta2 + "</td>"; 
		htmlTabla += "<td>" + abonosvencidos_cuenta2 + "</td></tr>"; 

	}

	if(producto_cuenta3 === undefined || producto_cuenta3 === null)
	{
		// Nada
	}
	else
	{
		htmlTabla += "<tr><td>" + producto_cuenta3 + "</td>"; 
		htmlTabla += "<td>$" + saldacon_cuenta3 + "</td>"; 
		htmlTabla += "<td>$" + minimo_cuenta3 + "</td>"; 
		htmlTabla += "<td>$" + vencido_cuenta3 + "</td>"; 
		htmlTabla += "<td>" + abonosvencidos_cuenta3 + "</td></tr>"; 

	}

	if(producto_cuenta4 === undefined || producto_cuenta4 === null)
	{
		// Nada
	}
	else
	{
		htmlTabla += "<tr><td>" + producto_cuenta4 + "</td>"; 
		htmlTabla += "<td>$" + saldacon_cuenta4 + "</td>"; 
		htmlTabla += "<td>$" + minimo_cuenta4 + "</td>"; 
		htmlTabla += "<td>$" + vencido_cuenta4 + "</td>"; 
		htmlTabla += "<td>" + abonosvencidos_cuenta4 + "</td></tr>"; 

	}

	htmlTabla += "<tr style=\"color: red;\"><td></td>"; 
	htmlTabla += "<td>$" + totalsaldacon + "</td>"; 
	htmlTabla += "<td>$" + totalminimo + "</td>"; 
	htmlTabla += "<td>$" + totalvencido + "</td>"; 
	htmlTabla += "<td>" + totalabonosvencidos + "</td></tr>"; 

	$("#tablaCuentas"). html(htmlTabla);

	// Cobranza
	$("#totalsaldacon").html(totalsaldacon);
	$("#totalminimo").html(totalminimo);
	$("#totalvencido").html(totalvencido);
	$("#totalabonosvencidos").html(totalabonosvencidos);


}

var gestionaComboValidacion = function(){
	if($("#quien_contesto").val() !== "0")
	{
		$("#btnValidacion").removeClass("disabled");
	}
	else
	{
		$("#btnValidacion").addClass("disabled");
	}
}

var gestionaBotonValidacion = function(){
	if($("#btnValidacion").hasClass("disabled") == false)
	{
		if($("#quien_contesto").val() == "Cliente")
		{
			$("#tabCobranza").removeClass("disabled");
			$('ul.tabs').tabs("select", "cobranza");
			$("#quien_contesto").attr("disabled", true);
			$("#btnValidacion").addClass("disabled");
			M.AutoInit();
		}
	}
}

var gestionaComboCobranza = function(){
	$("#importe_convenio").val("");
	$("#fecha_convenio").val("");

	if($("#fin_gestion").val() == "1")
	{
		fechaActual = new Date();
		fechaMax = new Date();

		fechaMax.setDate(fechaMax.getDate() + 14);

		console.log(fechaActual);
		console.log(fechaMax);

		$('.datepicker').datepicker({
			format: 'yyyy-mm-dd',
			minDate: fechaActual,
			maxDate: fechaMax,
		});

		$("#datosConvenio").css("display", "");
	}
	else
	{
		$("#datosConvenio").css("display", "none");
	}
}

$('#quien_contesto').on('change', function(){
	gestionaComboValidacion();
});

$('#btnValidacion').on('click', function(){

	gestionaBotonValidacion();
});

$('#fin_gestion').on('change', function(){
	gestionaComboCobranza();
});

$(document).ready(function(){
	M.AutoInit();
	setCampos();

	$("nav").css("background-color", "#fff");
});