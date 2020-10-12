$(document).ready(function () {
	$("#Add").click( function( event ) {
        event.preventDefault();
        $("#message").empty();
        //validate fields
        var fail = false;
        var fail_log = '';
        var name;
        $( "#dangKyForm" ).find( 'select, textarea, input' ).each(function(){
            /*if( ! $( this ).prop( 'required' ))
            {

            } 
            else
             {*/
            if ( ! $( this ).val() )
            {
                fail = true;
                name = $( this ).attr( 'name' );
                fail_log += name + " bị trống \n";
            }
            /*}*/
        });

        //submit if fail never got set to true
        if ( ! fail ) {
            //process form here.
            $("#message").text("Ban da dang ky thanh cong!!!");
        } else {
            alert( fail_log );
        }

});
});

