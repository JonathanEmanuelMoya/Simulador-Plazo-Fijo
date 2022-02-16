$(()=>{
    //Aplicando evento clíck al botón "calcular"

    $('#boton').on('click', function resultado(e) {
        e.preventDefault();


        //Llamando al archivo json con ajax

        $.get("api.json", function(datos){
            $.each(datos, function(index, objeto){
                var objeto = $("#tipoBanco").val();
                $('#banco').html(`${objeto}`);


                $.get("api.json", function(data){
                    $.each(data, function(index,plazo){
                        var plazo = $("#tipoPlazo").val();
                        $('#tipoPf').html(`${plazo}`);
                    });
                });
                
        

        
        //Variables de "Capital", "Duración" y "Tasa Nominal Anual"

        var capital = $('#capital').val();
        var duracion = $('#duracion').val();
        var TNA = 29;
        
        
        //Calculos a realizar tomando las variables (Capital, Duración y Tasa Nominal Anual)

        var deposito = Number(capital);
        var interesesGanados = parseInt(deposito * ((TNA * duracion / 100) / 365));
        var montoTotal = Number(deposito + interesesGanados);

        
        
        //Mostrando los datos obtenidos en el HTML (Sección Resultado)

        $('#mostrarCapital').html("$" + capital + ".-");
        $('#mostrarPlazo').html(duracion + " dias.");
        $('#mostrarInteresesGanados').html("$" + interesesGanados + ".-");
        $('#mostrarMontoTotal').html("$" + montoTotal + ".-");
        $('#mostrarTna').html("% " + TNA);
        
            });
        });
    });
});