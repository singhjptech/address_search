
$(document).ready(function(){
    //this is btnRun click event
    $('#btnRun').click(function () {
        var  str = "";
        var i = 0;
        var postcode = $('#postcode').val();
        $.ajax({
            url: "libs/php/php.php",
            dataType: 'json',
            method:"post",
            data: {zipcode:postcode},
            success: function(result) {
                console.log (result);
                if (result) {


                    for(i in result){

                        str += "<tr><td>"+result[i]['placeName']+"</td><td>"+result[i]['postalcode']+"</td><td>"+result[i]['countryCode']+"</td><td>"+result[i]['adminName1']+"</td><td>"+result[i]['adminName2']+"</td><td>"+result[i]['adminName3']+"</td></tr>";
                   
                    }

                    $("#data").html(str);
                }
            }
        });


    });


    //this is refresh click event
    $('#refresh').click(function(){
        location.reload();
    });
});





