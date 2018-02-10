$(document).ready(function(){

  $('#age').submit(function(event){
    event.preventDefault();
    var age = $('input.age').val();
    $('#age').text(age);

  });
});
