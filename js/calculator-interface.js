$(document).ready(function(){

  $('#age').submit(function(event){
    var age = $('input.age').val();
    $('#age').text(age);
    event.preventDefault();
  });
});
