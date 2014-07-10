$(document).ready(function(){

  $('div' ).hover(
    function(){
        $('div').addClass('active');
    },
    function(){
        $('div').removeClass('active');
    }
  );

});