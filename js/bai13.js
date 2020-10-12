$(document).ready(function () {
	$("#btn_accept").click( function( event ) {
        event.preventDefault();

        //validate fields
        var fail = false;
        var fail_log = '';
        var name;
        $( "#dangKyForm" ).find( 'select, textarea, input' ).each(function(){
            
            if ( ! $( this ).val() )
            {
                fail = true;
                name = $( this ).attr( 'name' );
                fail_log += name + " bị trống \n";
            }

            
        });

        //submit if fail never got set to true
        if ( ! fail ) 
        {
            $("#message").text("Ban da dang ky thanh cong!!!");
        } 
        else 
        {
            alert( fail_log );
        }

});
});