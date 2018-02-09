$(document).ready(function(){

  $('#age').submit(function(event){
    var age = $('input.age').val();
    $('#results').text(age);
    event.preventDefault();
  });
});
