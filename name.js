  this.getCountries = function() {
    var url = rootUrl+'?type=getCountries';
    var method = "post";
    var data = {};
    $('.countries').find("option:eq(0)").html("Procesando..");
    call.send(data, url, method, function(data) {
        $('.countries').find("option:eq(0)").html("Selecciona un pais");
        console.log(data);
        if(data.tp == 1){
            $.each(data['result'], function(key, val) {
                var option = $('<option />');
                option.attr('value', key).text(val);
                $('.countries').append(option);
            });
            $(".countries").prop("disabled",false);
        }
        else{
            alert(data.msg);
        }
    }); 
};